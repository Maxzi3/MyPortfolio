import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-14">
      <h2 className="mb-7 text-sm font-medium text-muted">Experience</h2>

      {experience.map((job) => (
        <div
          key={job.company}
          className="flex flex-col justify-between gap-1 border-b border-line py-4 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-4"
        >
          <div className="flex flex-col gap-0.5">
            <span className="text-base font-semibold">{job.company}</span>
            <span className="text-sm text-muted">{job.role}</span>
          </div>
          <span className="whitespace-nowrap font-mono text-xs text-faint">
            {job.time}
          </span>
        </div>
      ))}
    </section>
  );
}
