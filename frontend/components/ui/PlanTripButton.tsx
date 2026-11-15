import { Sparkles } from "lucide-react";

interface PlanTripButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export default function PlanTripButton({
  label = "Plan new trip",
  onClick,
  className = "",
}: PlanTripButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`h-10 px-4.5 bg-sky-500 hover:bg-sky-600 active:scale-[0.98] rounded-2xl shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap ${className}`}
    >
      <Sparkles className="w-3.5 h-3.5 stroke-[2.2] text-white shrink-0" />
      <span className="text-xs font-bold text-white tracking-wide">
        {label}
      </span>
    </button>
  );
}
