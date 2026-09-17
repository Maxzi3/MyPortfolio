import { profile } from "@/lib/data";

export default function About() {
  return (
    <section className="border-t border-line py-14">
      <h2 className="mb-7 text-sm font-medium text-muted">About</h2>
      <p className="max-w-[52ch] text-[15px] text-muted">{profile.about}</p>
    </section>
  );
}
