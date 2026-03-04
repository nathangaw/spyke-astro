import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Nexus Labs transformed our outdated portal into a modern, AI-powered platform that our students and faculty love. Their understanding of education technology is unmatched.",
    author: "Dr. Sarah Mitchell",
    role: "Director of Digital Learning",
    organization: "Westbridge University",
  },
  {
    quote:
      "The AI-powered features they built into our learning platform have genuinely improved student engagement. We've seen a 40% increase in course completion rates.",
    author: "James Chen",
    role: "CEO",
    organization: "LearnPath Technologies",
  },
  {
    quote:
      "Working with Nexus Labs felt like having an extension of our team. They truly cared about our mission and delivered beyond our expectations.",
    author: "Maria Rodriguez",
    role: "Head of Communications",
    organization: "Oakwood Academy",
  },
];

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Quote icon */}
        <div
          className={`flex justify-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Quote className="h-6 w-6 text-primary" />
          </div>
        </div>

        {/* Testimonial content */}
        <div className="relative min-h-[280px] md:min-h-[220px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ${
                activeIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <blockquote
                className={`text-center transition-all duration-700 delay-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-8 text-balance">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer>
                  <cite className="not-italic">
                    <span className="block text-foreground font-semibold">
                      {testimonial.author}
                    </span>
                    <span className="block text-sm text-muted-foreground mt-1">
                      {testimonial.role}, {testimonial.organization}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div
          className={`flex justify-center gap-3 mt-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
