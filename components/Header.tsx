import Image from "next/image";
import { profile } from "@/lib/data";

export default function Header() {
  return (
    <header className="flex items-center justify-between pt-10">
      <a href="/" aria-label={`${profile.name} — home`} className="block">
        <Image
          src={profile.logo}
          alt={`${profile.name} logo`}
          width={124}
          height={32}
          className="h-7 w-auto"
        />
      </a>
      <a
        href={profile.resumeUrl}
        download
        className="whitespace-nowrap rounded-full border border-line px-3.5 py-1.5 font-mono text-[13px] text-fg transition-colors hover:border-accent hover:text-accent"
      >
        Resume ↓
      </a>
    </header>
  );
}
