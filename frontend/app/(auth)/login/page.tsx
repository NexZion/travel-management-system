
import AuthBrandPanel from "@/components/auth/AuthBrandPanel";
import AuthBrandHeader from "@/components/auth/AuthBrandHeader";
import AuthTabs from "@/components/auth/AuthTabs";
import AuthFormPanel from "@/components/auth/AuthFormPanel";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen w-full bg-white">
      <AuthBrandPanel />

      <AuthFormPanel>
        <div className="space-y-7">
          <AuthBrandHeader
            title="Welcome back!"
            subtitle="Sign in to continue your journey with Xplore."
          />

          <AuthTabs />

          <LoginForm />

          <p className="text-center text-xs leading-5 text-slate-400">
            By continuing, you agree to Xplore's Terms of Service and
            Privacy Policy.
          </p>
        </div>
      </AuthFormPanel>
    </main>
  );
}
