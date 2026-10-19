"use client";

import { useState, type FormEvent } from "react";
import { FiMail } from "react-icons/fi";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Checkbox from "@/components/ui/Checkbox";
import PasswordInput from "@/components/auth/PasswordInput";
import AuthOptionsRow from "@/components/auth/AuthOptionsRow";
import SocialLoginButtons from "@/components/auth/SocialLoginButtons";

export default function LoginForm() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // TODO: Connect this form to the backend authentication API.
    setError("Login API is not connected yet.");
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5">
      <Input
        label="Email address"
        name="email"
        inputMode="email"
        type="email"
        autoComplete="email"
        placeholder="Enter your email address"
        leftIcon={<FiMail size={18} />}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <div className="space-y-2">
        <PasswordInput
          name="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          value={password}
          onChange={setPassword}
          required
        />

        <p className="hidden">Password field integration placeholder</p>
      </div>

      <AuthOptionsRow
        rememberMe={rememberMe}
        onRememberMeChange={setRememberMe}
      />

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <Button type="submit" fullWidth size="lg">
        Sign In
      </Button>

      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-xs text-slate-400">OR CONTINUE WITH</span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <SocialLoginButtons
        onGoogleClick={() => setError("Google sign-in is not connected yet.")}
        onAppleClick={() => setError("Apple sign-in is not connected yet.")}
      />
    </form>
  );
}
