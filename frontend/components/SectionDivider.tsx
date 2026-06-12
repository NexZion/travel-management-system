export default function SectionDivider({ fill }: { fill: string }) {
  return (
    <div className="smooth-divider top-0 left-0 right-0 transform -translate-y-[99%]" aria-hidden>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C300,110 600,20 850,90 C1050,140 1150,60 1200,40 L1200,120 L0,120 Z"
          fill={fill}
          opacity="0.4"
        />
        <path
          d="M0,20 C200,85 450,10 700,75 C950,135 1100,45 1200,30 L1200,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
