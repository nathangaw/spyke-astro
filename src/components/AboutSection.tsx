import { useEffect, useRef, useState } from "react";

const values = [
  {
    number: "01",
    title: "Education First",
    description:
      "Technology should amplify teaching, not complicate it. Every decision starts with the learner.",
  },
  {
    number: "02",
    title: "Innovation Driven",
    description:
      "We stay at the cutting edge of AI and web technology to deliver transformative solutions.",
  },
  {
    number: "03",
    title: "Partnership Focused",
    description:
      "We're not just vendors—we're collaborators. Your mission becomes ours.",
  },
];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column - About text */}
          <div>
            <p
              className={`text-sm text-primary font-medium uppercase tracking-wider mb-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              About Spyke
            </p>
            <h2
              className={`text-3xl md:text-4xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Pioneering the future of
              <br />
              <span className="text-primary">education technology</span>
            </h2>
            <div
              className={`space-y-4 text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p>
                Spyke was founded with a singular vision: to transform how
                educational institutions engage with technology. We believe that
                AI and modern web development can make learning more accessible,
                engaging, and effective.
              </p>
              <p>
                Our team combines deep technical expertise with genuine passion
                for education. Many of us have backgrounds in teaching and
                instructional design, giving us unique insight into the
                challenges educators face.
              </p>
              <p>
                Today, we partner with institutions across three continents,
                from K-12 schools to major universities, helping them build
                digital experiences that truly serve their communities.
              </p>
            </div>
          </div>

          {/* Right column - Values */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Animated graphic */}
              <div className="relative w-full aspect-square max-w-md mx-auto mb-12">
                <div className="absolute inset-0 rounded-full border border-border" />
                <div className="absolute inset-4 rounded-full border border-primary/30" />
                <div className="absolute inset-8 rounded-full border border-primary/50" />
                <div className="absolute inset-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary">S</div>
                    <div className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">
                      Spyke
                    </div>
                  </div>
                </div>
                {/* Orbiting dots */}
                <div className="absolute inset-0 animate-slow-spin">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="absolute inset-4 animate-slow-spin-reverse">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/50" />
                </div>
              </div>

              {/* Values carousel */}
              <div className="relative h-32">
                {values.map((value, index) => (
                  <div
                    key={value.number}
                    className={`absolute inset-0 transition-all duration-500 ${
                      activeValue === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <div className="text-center">
                      <span className="text-xs text-primary font-mono">
                        {value.number}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground max-w-sm mx-auto">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Value indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {values.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveValue(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeValue === index
                        ? "w-6 bg-primary"
                        : "w-1.5 bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`View value ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
