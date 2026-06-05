type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  mark: "禅" | "道" | "静" | "和";
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  mark,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`relative ${align === "center" ? "text-center mx-auto" : ""} ${className}`}>
      <span
        className={`font-jp text-7xl md:text-8xl text-ink/[0.055] absolute -top-12 ${
          align === "center" ? "left-1/2 -translate-x-1/2" : "-left-8"
        }`}
        aria-hidden="true"
      >
        {mark}
      </span>
      <div
        className={`flex items-center gap-4 mb-5 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-12 bg-ink/30" />
        <span className="font-jp text-[0.7rem] uppercase tracking-[0.42em] text-seal">
          {eyebrow}
        </span>
      </div>
      <h2 className="ink-shadow text-4xl md:text-6xl leading-[1.08] text-ink">
        {title}
      </h2>
    </div>
  );
}
