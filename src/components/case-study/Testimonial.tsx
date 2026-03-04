import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

interface CaseStudyTestimonialProps {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

export function CaseStudyTestimonial({
  quote,
  author,
  role,
  organization,
}: CaseStudyTestimonialProps) {
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
      className="py-20 md:py-28 bg-primary/5 border-y border-border"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div
          className={`flex justify-center mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <Quote className="h-6 w-6 text-primary" />
          </div>
        </div>

        <blockquote
          className={`mb-8 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed text-balance">
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>

        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-foreground font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role}, {organization}
          </p>
        </div>
      </div>
    </section>
  );
}
