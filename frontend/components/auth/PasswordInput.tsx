
"use client";

import { useState } from "react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";

type PasswordInputProps = {
  label?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
  value: string;
  onChange: (value: string) => void;
};

export default function PasswordInput({
  label = "Password",
  name = "password",
  placeholder = "Enter your password",
  required = true,
  autoComplete = "current-password",
  error,
  value,
  onChange,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700"
      >
        {label}
      </label>

      <div
        className={[
          "flex min-h-12 items-center gap-3 rounded-xl border bg-white px-4",
          "transition-colors focus-within:border-sky-500",
          "focus-within:ring-2 focus-within:ring-sky-100",
          error ? "border-red-400" : "border-slate-200",
        ].join(" ")}
      >
        <FiLock
          aria-hidden="true"
          className="shrink-0 text-slate-400"
          size={18}
        />

        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          className="min-w-0 w-full bg-transparent py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
        />

        <button
          type="button"
          onClick={() => setShowPassword((current) => !current)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="shrink-0 rounded-md p-1 text-slate-400 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
        </button>
      </div>

      {error && (
        <p id={`${name}-error`} role="alert" className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
