import { ArrowLeft, ArrowRight } from "lucide-react";

interface CaseStudyNavigationProps {
  prevSlug: string | null;
  nextSlug: string | null;
  prevTitle: string | null;
  nextTitle: string | null;
}

export function CaseStudyNavigation({
  prevSlug,
  nextSlug,
  prevTitle,
  nextTitle,
}: CaseStudyNavigationProps) {
  return (
    <section className="py-16 md:py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-stretch gap-4">
          {prevSlug && prevTitle ? (
            <a
              href={`/work/${prevSlug}`}
              className="group flex-1 p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Previous Project
              </div>
              <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                {prevTitle}
              </p>
            </a>
          ) : (
            <div className="flex-1" />
          )}

          <a
            href="/#work"
            className="flex items-center justify-center px-8 py-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all text-muted-foreground hover:text-foreground"
          >
            View All Work
          </a>

          {nextSlug && nextTitle ? (
            <a
              href={`/work/${nextSlug}`}
              className="group flex-1 p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all text-right"
            >
              <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                Next Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
              <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                {nextTitle}
              </p>
            </a>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </section>
  );
}
