import { useEffect, useRef, useState } from "react";

interface CaseStudyOverviewProps {
  client: string;
  industry: string;
  services: string[];
  description: string;
  technologies: string[];
}

export function CaseStudyOverview({
  client,
  industry,
  services,
  description,
  technologies,
}: CaseStudyOverviewProps) {
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
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-secondary/30 border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-sm text-muted-foreground mb-2">Client</p>
            <p className="text-foreground font-medium">{client}</p>
          </div>

          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-sm text-muted-foreground mb-2">Industry</p>
            <p className="text-foreground font-medium">{industry}</p>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-sm text-muted-foreground mb-2">Services</p>
            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <span
                  key={service}
                  className="text-xs px-2 py-1 rounded bg-card border border-border text-foreground"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-sm text-muted-foreground mb-2">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded bg-primary/10 border border-primary/20 text-primary"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 4 && (
                <span className="text-xs px-2 py-1 text-muted-foreground">
                  +{technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>

        <div
          className={`max-w-3xl transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
