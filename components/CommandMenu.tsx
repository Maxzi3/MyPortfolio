"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";

type Action = { id: string; label: string; run: () => void };

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const email =
    profile.links
      .find((l) => l.label === "Email")
      ?.href.replace("mailto:", "") ?? "";
  const github = profile.links.find((l) => l.label === "GitHub")?.href;
  const linkedin = profile.links.find((l) => l.label === "LinkedIn")?.href;

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const actions: Action[] = [
    {
      id: "resume",
      label: "View résumé",
      run: () => window.open(profile.resumeUrl, "_blank", "noopener"),
    },
    {
      id: "email",
      label: copied ? "Copied email!" : "Copy email",
      run: async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {}
      },
    },
    ...(github
      ? [
          {
            id: "github",
            label: "Open GitHub",
            run: () => window.open(github, "_blank", "noopener"),
          },
        ]
      : []),
    ...(linkedin
      ? [
          {
            id: "linkedin",
            label: "Open LinkedIn",
            run: () => window.open(linkedin, "_blank", "noopener"),
          },
        ]
      : []),
    {
      id: "work",
      label: "Jump to work",
      run: () =>
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      id: "experience",
      label: "Jump to experience",
      run: () =>
        document
          .getElementById("experience")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const isMeta = e.metaKey || e.ctrlKey;
      if (isMeta && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
        return;
      }
      if (!open) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const action = filtered[activeIndex];
        if (action) {
          action.run();
          if (action.id !== "email") close();
        }
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, filtered, activeIndex, close]);

  useEffect(() => {
    function onToggle() {
      setOpen((prev) => !prev);
    }
    window.addEventListener("toggle-command-menu", onToggle);
    return () => window.removeEventListener("toggle-command-menu", onToggle);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-[15vh]"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] max-w-110 rounded-xl border border-line bg-[#111111] p-2 shadow-2xl"
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a command…"
          className="w-full border-b border-line bg-transparent px-3 py-2.5 text-[15px] text-fg outline-none placeholder:text-faint"
        />
        <ul role="listbox" className="max-h-64 overflow-y-auto py-1">
          {filtered.length === 0 && (
            <li className="px-3 py-2.5 text-sm text-muted">No matches</li>
          )}
          {filtered.map((action, i) => (
            <li
              key={action.id}
              role="option"
              aria-selected={i === activeIndex}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => {
                action.run();
                if (action.id !== "email") close();
              }}
              className={`cursor-pointer rounded-md px-3 py-2.5 text-[15px] ${i === activeIndex ? "bg-white/5 text-fg" : "text-muted"}`}
            >
              {action.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
