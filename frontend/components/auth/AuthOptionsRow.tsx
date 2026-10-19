
"use client";

import Link from "next/link";
import Checkbox from "@/components/ui/Checkbox";

type AuthOptionsRowProps = {
  rememberMe?: boolean;
  onRememberMeChange?: (checked: boolean) => void;
  showRememberMe?: boolean;
};

export default function AuthOptionsRow({
  rememberMe = false,
  onRememberMeChange,
  showRememberMe = true,
}: AuthOptionsRowProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      {showRememberMe ? (
        <Checkbox
          name="rememberMe"
          label="Remember me"
          checked={rememberMe}
          onChange={(event) =>
            onRememberMeChange?.(event.target.checked)
          }
        />
      ) : (
        <span />
      )}

      <Link
        href="/forgot-password"
        className="text-sm font-medium text-sky-600 transition-colors hover:text-sky-700"
      >
        Forgot password?
      </Link>
    </div>
  );
}
