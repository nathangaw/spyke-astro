import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

interface CaseStudyResultsProps {
  title: string;
  description: string;
  stats: Stat[];
}

export function CaseStudyResults({
  title,
  description,
  stats,
}: CaseStudyResultsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p
            className={`text-sm text-primary font-medium uppercase tracking-wider mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The Results
          </p>
          <h2
            className={`text-3xl md:text-4xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {title}
          </h2>
        </div>

        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 md:p-8 rounded-xl border border-border bg-card/50"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <p
          className={`text-center text-muted-foreground leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
