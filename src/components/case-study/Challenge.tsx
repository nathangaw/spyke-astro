import { useEffect, useRef, useState } from "react";
import { AlertCircle } from "lucide-react";

interface CaseStudyChallengeProps {
  title: string;
  description: string;
  points: string[];
}

export function CaseStudyChallenge({
  title,
  description,
  points,
}: CaseStudyChallengeProps) {
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <p
              className={`text-sm text-primary font-medium uppercase tracking-wider mb-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              The Challenge
            </p>
            <h2
              className={`text-3xl md:text-4xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {title}
            </h2>
            <p
              className={`text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {description}
            </p>
          </div>

          <div
            className={`space-y-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card/50"
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                  <AlertCircle className="h-4 w-4 text-destructive" />
                </div>
                <p className="text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
