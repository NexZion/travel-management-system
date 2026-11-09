
import type { InputHTMLAttributes } from "react";

type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label: string;
  description?: string;
};

export default function Checkbox({
  label,
  description,
  id,
  className = "",
  ...props
}: CheckboxProps) {
  const checkboxId = id ?? props.name;

  return (
    <div className="flex items-start gap-2.5">
      <input
        {...props}
        id={checkboxId}
        type="checkbox"
        className={[
          "mt-0.5 h-4 w-4 shrink-0 cursor-pointer",
          "accent-sky-500 focus-visible:ring-2",
          "focus-visible:ring-sky-500 focus-visible:ring-offset-2",
          className,
        ].join(" ")}
      />

      <div className="min-w-0">
        <label
          htmlFor={checkboxId}
          className="cursor-pointer text-sm text-slate-600"
        >
          {label}
        </label>

        {description && (
          <p className="mt-1 text-xs text-slate-500">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
