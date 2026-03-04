import { useEffect, useRef, useState } from "react";

const clients = [
  { name: "Trinity", logo: "/images/trinity-white.png" },
  { name: "Garnet", logo: "/images/garnet-logo-bold.png" },
  { name: "Cambridge Press", logo: "/placeholder-logo.svg" },
  { name: "Collins", logo: "/images/collins.svg" },
  { name: "Khan Academy", logo: "/placeholder-logo.svg" },
  { name: "T&F", logo: "/images/tandflogo.svg" },
  { name: "EdX Platform", logo: "/placeholder-logo.svg" },
  { name: "UTC", logo: "/images/utc.svg" },
];

export function ClientsSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-secondary/30 border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p
          className={`text-center text-sm text-muted-foreground mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Trusted by leading organisations worldwide
        </p>

        {/* Client logos */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`flex items-center justify-center transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="group cursor-pointer">
                <div className="w-24 h-24 rounded-lg border border-border bg-card/50 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10 p-2">
                  <img
                    src={client.logo}
                    alt={client.name}
                    width={70}
                    height={70}
                    className="opacity-60 group-hover:opacity-100 transition-opacity object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
