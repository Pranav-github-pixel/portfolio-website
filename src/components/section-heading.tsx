import ScrollReveal from "./scroll-reveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  number?: string;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  number,
  className = "",
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={className}>
      <div className="mb-16 md:mb-20">
        {label && (
          <div className="flex items-center gap-4 mb-4">
            {number && (
              <span className="section-label" style={{ opacity: 0.4 }}>{number}</span>
            )}
            <span className="section-label">{label}</span>
          </div>
        )}
        <h2 className="section-title">{title}</h2>
      </div>
    </ScrollReveal>
  );
}
