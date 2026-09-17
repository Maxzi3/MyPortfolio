"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard blocked — fail silently, link still visible
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      className="border-b border-line pb-0.5 text-[15px] text-fg transition-colors hover:border-accent hover:text-accent"
    >
      {copied ? "Copied!" : "Email"}
    </button>
  );
}
