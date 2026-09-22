import { profile } from "@/lib/data";
import Image from "next/image";
import LocalTime from "./LocalTime";
import CopyEmail from "./CopyEmail";

export default function Hero() {
  return (
    <section className="pt-24 pb-22">
      <Image
        src={profile.avatar}
        alt={`Portrait of ${profile.name}`}
        width={88}
        height={88}
        priority
        className="animate-fade-up mb-6 rounded-full border border-line object-cover"
        style={{ animationDelay: "0ms" }}
      />

      <h1
        className="animate-fade-up mb-2.5 font-serif text-[clamp(38px,6vw,52px)] leading-[1.1] font-normal tracking-[-0.02em]"
        style={{
          animationDelay: "60ms",
          fontFamily: "Georgia, serif",
        }}
      >
        {profile.name}
      </h1>

      <p
        className="animate-fade-up mb-7 text-[17px] text-muted"
        style={{ animationDelay: "120ms" }}
      >
        {profile.role}
      </p>

      <p
        className="animate-fade-up mb-8 max-w-[46ch] text-[17px] text-[#cfcfcf]"
        style={{ animationDelay: "180ms" }}
      >
        {profile.bio}
      </p>

      {profile.available && (
        <div
          className="animate-fade-up mb-8 flex flex-wrap items-center gap-2 text-sm text-muted"
          style={{ animationDelay: "240ms" }}
        >
          <span className="relative flex h-1.75 w-1.75">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent/20 ring-4 ring-accent/10" />
            <span className="relative inline-flex h-1.75 w-1.75 rounded-full bg-accent" />
          </span>

          {profile.availableLabel}

          <span className="text-faint">·</span>

          <LocalTime />
        </div>
      )}

      <div
        className="animate-fade-up flex flex-wrap gap-5"
        style={{ animationDelay: "300ms" }}
      >
        {profile.links.map((link) =>
          link.label === "Email" ? (
            <CopyEmail
              key={link.label}
              email={link.href.replace("mailto:", "")}
            />
          ) : (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener" : undefined}
              className="border-b border-line pb-0.5 text-[15px] text-fg transition-colors hover:border-accent hover:text-accent"
            >
              {link.label}
            </a>
          ),
        )}
      </div>
    </section>
  );
}
