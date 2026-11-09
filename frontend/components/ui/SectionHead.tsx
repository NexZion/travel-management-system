export default function SectionHead({ label, title, text }: { label: string; title: string; text?: string }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-xs font-semibold text-primary">{label}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-sm text-muted md:text-base">{text}</p>}
    </div>
  );
}
