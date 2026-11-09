
import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
};

export default function Input({
  label,
  error,
  leftIcon,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="w-full space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      )}

      <div
        className={[
          "flex min-h-12 items-center gap-3 rounded-xl border bg-white px-4",
          "transition-colors focus-within:border-sky-500",
          "focus-within:ring-2 focus-within:ring-sky-100",
          error ? "border-red-400" : "border-slate-200",
        ].join(" ")}
      >
        {leftIcon && (
          <span className="shrink-0 text-slate-400">{leftIcon}</span>
        )}

        <input
          id={inputId}
          className={[
            "min-w-0 w-full bg-transparent py-3 text-sm text-slate-800",
            "outline-none placeholder:text-slate-400",
            className,
          ].join(" ")}
          aria-invalid={Boolean(error)}
          {...props}
        />
      </div>

      {error && (
        <p className="text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

