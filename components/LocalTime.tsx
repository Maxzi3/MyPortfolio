"use client";

import { useEffect, useState } from "react";

const TIMEZONE = "Africa/Lagos";
const CITY = "Lagos";

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

export default function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(formatTime(new Date()));
    const id = setInterval(() => setTime(formatTime(new Date())), 30_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <span>
      {time} in {CITY}
    </span>
  );
}
