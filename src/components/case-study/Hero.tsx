import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  category: string;
  year: string;
  duration: string;
  team: string;
}

export function CaseStudyHero({
  title,
  subtitle,
  category,
  year,
  duration,
  team,
}: CaseStudyHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Back link */}
        <a
          href="/#work"
          className={`inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-700 mb-12 group ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to all work
        </a>

        {/* Category badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground">{category}</span>
        </div>

        {/* Title */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {subtitle}
        </p>

        {/* Meta info */}
        <div
          className={`flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-border transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="text-sm text-muted-foreground mb-1">Year</p>
            <p className="text-foreground font-medium">{year}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Duration</p>
            <p className="text-foreground font-medium">{duration}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Team</p>
            <p className="text-foreground font-medium">{team}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
