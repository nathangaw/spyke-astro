import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export const projects = [
  {
    slug: "textbook-chatbot",
    title: "Textbook chatbot",
    category: "Web Platform",
    description:
      "AI-powered student management system with personalized learning paths",
    tags: ["AI / ML", "React", "Education"],
    color: "from-primary/20 to-primary/5",
  },
  {
    slug: "lesson-planner",
    title: "Lesson planning tool",
    category: "AI Chatbot",
    description:
      "Intelligent tutoring assistant for K-12 students with real-time support",
    tags: ["ChatGPT", "Next.js", "K-12"],
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    slug: "writing-reviewer",
    title: "Writing reviewer",
    category: "Mobile Web App",
    description:
      "Virtual campus tour experience with AR integration and live guides",
    tags: ["AR", "WebGL", "Higher Ed"],
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    slug: "placement-test",
    title: "Conversational placement test",
    category: "UI/UX Design",
    description:
      "Complete learning management system overhaul for improved engagement",
    tags: ["Design", "UX Research", "LMS"],
    color: "from-amber-500/20 to-amber-500/5",
  },
];

export function WorkSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Featured Work
            </h2>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Projects that transform
              <br />
              educational experiences
            </p>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Projects grid */}
        <div ref={containerRef} className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={`/work/${project.slug}`}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/50"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative p-8 lg:p-10">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 ${
                      hoveredIndex === index
                        ? "bg-primary text-primary-foreground scale-110"
                        : ""
                    }`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 transition-transform duration-300 group-hover:translate-x-1">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover line animation */}
                <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
