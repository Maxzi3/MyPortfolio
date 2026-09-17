export const profile = {
  name: "Maxwell",
  initials: "MX",
  username: "dev_maxzi",
  role: "Full-Stack Developer",
  bio: "Full-Stack Developer building and shipping production-grade web applications with Next.js, React, TypeScript, Node.js, PHP, Laravel, PostgreSQL, MySQL, and MongoDB. I build complete products end to end, from clean interfaces to solid APIs and databases.",
  available: true,
  availableLabel: "Open to new opportunities",
  resumeUrl: "/maxwell-resume.pdf",
  links: [
    { label: "X", href: "https://x.com/dev_maxzi" },
    { label: "GitHub", href: "https://github.com/maxzi3" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/devmaxzi" },
    { label: "Email", href: "mailto:obisikemaxwell@gmail.com" },
  ],
  about:
    "I'm Maxwell, a Full-Stack Developer focused on building clean interfaces, reliable APIs, and complete digital products. I work across frontend and backend systems with a strong focus on usability, performance, and practical problem-solving.",
  logo: "/logo.png",
  avatar: "/avatar.png",
};

export type Project = {
  name: string;
  tag: string;
  description: string;
  href: string;
};

export const projects: Project[] = [
  {
    name: "Medify",
    tag: "AI healthcare assistant",
    description:
      "Symptom analyzer that lets users describe symptoms in plain language and get possible conditions, doctor recommendations, and support.",
    href: "https://medify-devmaxzi.vercel.app/",
  },
  {
    name: "Scanly",
    tag: "Security scanner",
    description:
      "Automated security analysis tool that scans GitHub repos and live websites for vulnerabilities, secrets, and misconfigurations.",
    href: "https://scanly-devmaxzi.vercel.app/",
  },
  {
    name: "Universal Loyalty Rewards",
    tag: "Vendor + Admin platforms",
    description:
      "Full loyalty rewards system with Vendor dashboard and admin panel for managing rewards, users, and campaigns.",
    href: "https://ulr-merchant.vercel.app/",
  },
  {
    name: "Kronix",
    tag: "Stock trading portal",
    description:
      "Modern stock trading web portal with real-time portfolio tracking, watchlists, and trading features.",
    href: "https://kronix-webportal.vercel.app/",
  },
  {
    name: "$Max Presale",
    tag: "Web3 token presale landing page",
    description:
      "Landing page for a Web3 token presale with countdown timer, tokenomics, and wallet integration for purchasing tokens.",
    href: "https://maxpresale.vercel.app/",
  },
];

export type Job = {
  company: string;
  role: string;
  time: string;
};

export const experience: Job[] = [
  {
    company: "Karevault",
    role: "Full-Stack Developer — Telehealth platform built with React and Laravel, including APIs, payments, appointments, and video consultations",
    time: "Jan 2026 — Present",
  },
  {
    company: "Keyrium Consulting",
    role: "Full-Stack Developer — Built Universal Loyalty Rewards and Kronix trading platforms with React/Next.js, APIs, dashboards, and real-time features",
    time: "Nov 2025 — Present",
  },
];
