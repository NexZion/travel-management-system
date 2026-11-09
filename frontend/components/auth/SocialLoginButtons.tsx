
"use client";

import { FiChrome } from "react-icons/fi";
import { FaApple, FaGoogle } from "react-icons/fa";

type SocialLoginButtonsProps = {
  onGoogleClick?: () => void;
  onAppleClick?: () => void;
  disabled?: boolean;
};

export default function SocialLoginButtons({
  onGoogleClick,
  onAppleClick,
  disabled = false,
}: SocialLoginButtonsProps) {
  return (
    <div className="w-full space-y-3">
      <button
        type="button"
        onClick={onGoogleClick}
        disabled={disabled}
        className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <FaGoogle size={17} aria-hidden="true" />
        <span>Continue with Google</span>
      </button>

      <button
        type="button"
        onClick={onAppleClick}
        disabled={disabled}
        className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <FaApple size={19} aria-hidden="true" />
        <span>Continue with Apple</span>
      </button>
    </div>
  );
}
