"use client";

export default function CommandMenuTrigger() {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new CustomEvent("toggle-command-menu"))
      }
      className="font-mono text-xs text-faint transition-colors hover:text-accent"
    >
      Press ⌘K
    </button>
  );
}
