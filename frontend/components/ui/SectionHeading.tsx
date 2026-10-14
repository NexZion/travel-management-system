
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  titleId?: string;
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeading({
  titleId,
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center")}>
      <span className="eyebrow">{eyebrow}</span>

      <h2 id={titleId} className="section-title">
        {title}
      </h2>

      {description && (
        <p className={cn("section-description", centered && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
