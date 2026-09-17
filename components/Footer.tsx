import { profile } from "@/lib/data";
import CommandMenuTrigger from "./CommandMenuTrigger";

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 py-16 text-[13px] text-faint">
      <span>© {new Date().getFullYear()} Maxwell</span>

      <CommandMenuTrigger />
    </footer>
  );
}
