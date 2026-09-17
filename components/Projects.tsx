import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="work" className="border-t border-line py-14">
      <h2 className="mb-7 text-sm font-medium text-muted">Selected work</h2>

      {projects.map((project) => (
        <a
          key={project.name}
          href={project.href}
          target="_blank"
          rel="noopener"
          className="group block border-b border-line py-5.5 last:border-b-0"
        >
          <div className="mb-2 flex flex-col items-baseline justify-between gap-1 sm:flex-row sm:gap-3">
            <span className="text-lg font-semibold transition-colors group-hover:text-accent">
              {project.name}
            </span>
            <span className="whitespace-nowrap font-mono text-xs text-faint">
              {project.tag}
            </span>
          </div>
          <p className="max-w-[50ch] text-[15px] text-muted">
            {project.description}
          </p>
          <span className="mt-2.5 inline-block text-[13px] text-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent">
            View project ↗
          </span>
        </a>
      ))}
    </section>
  );
}
