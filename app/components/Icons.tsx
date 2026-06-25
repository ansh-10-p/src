interface IconProps {
  className?: string;
}

export function SketchIcon({ className = "w-6 h-6" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 14l2 2 4-4" />
    </svg>
  );
}

export function CraftIcon({ className = "w-6 h-6" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

export function FootballIcon({ className = "w-6 h-6" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" strokeWidth={1.75} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3c-2 3-2 6 0 9m0-9c2 3 2 6 0 9M3 12h18M5.6 7.5h12.8M5.6 16.5h12.8" />
    </svg>
  );
}

export function CheckCircleIcon({ className = "w-4 h-4" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function GitHubIcon({ className = "w-5 h-5" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function ExternalLinkIcon({ className = "w-5 h-5" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className = "w-5 h-5" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10M7 17L17 7" />
    </svg>
  );
}

const techIconMap: Record<string, React.JSX.Element> = {
  "Next.js": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a3.76 3.76 0 00-.292.042C6.704.267 3.477 2.731 2.114 6.331a11.45 11.45 0 00-.42 3.016v5.305c0 .89.096 1.763.28 2.6.42 2.07 1.587 3.88 3.247 5.122a11.5 11.5 0 003.016.42h5.305c.89 0 1.763-.096 2.6-.28 2.07-.42 3.88-1.587 5.122-3.247a11.5 11.5 0 00.42-3.016V9.347a11.45 11.45 0 00-.42-3.016C18.269 2.731 15.042.267 11.07.049a3.76 3.76 0 00-.292-.042C10.73.001 10.596 0 10.42 0h1.152zm-.34 1.24h.68c3.003.214 5.606 2.35 6.64 5.12.2.59.304 1.22.304 1.867v5.305c0 .647-.104 1.277-.304 1.867-1.034 2.77-3.637 4.906-6.64 5.12h-.68c-3.003-.214-5.606-2.35-6.64-5.12A7.71 7.71 0 014.288 14.5V9.195c0-.647.104-1.277.304-1.867C5.626 4.558 8.229 2.422 11.232 2.24z" />
      <path d="M13.5 6.5L8.5 17.5h1.9l1.05-2.5h4.1l1.05 2.5h1.9L13.5 6.5zm-.65 6.5l1.4-3.3 1.4 3.3h-2.8z" />
    </svg>
  ),
  "React 19": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 9.68c-.73-.32-1.22-.66-1.47-.96-.4-.48-.4-1 .05-1.56.64-.77 1.98-1.22 3.52-1.22.86 0 1.68.12 2.41.34l.07.02c.55.17 1.05.38 1.5.62.94.54 1.6 1.24 1.6 1.87 0 .63-.66 1.33-1.6 1.87-.45.24-.95.45-1.5.62l-.07.02a8.64 8.64 0 01-2.41.34c-1.54 0-2.88-.45-3.52-1.22-.45-.56-.45-1.08-.05-1.56.25-.3.74-.64 1.47-.96M16.63 9.68c.73-.32 1.22-.66 1.47-.96.4-.48.4-1-.05-1.56-.64-.77-1.98-1.22-3.52-1.22-.86 0-1.68.12-2.41.34l-.07.02c-.55.17-1.05.38-1.5.62-.94.54-1.6 1.24-1.6 1.87 0 .63.66 1.33 1.6 1.87.45.24.95.45 1.5.62l.07.02c.73.22 1.55.34 2.41.34 1.54 0 2.88-.45 3.52-1.22.45-.56.45-1.08.05-1.56-.25-.3-.74-.64-1.47-.96M12 4.43c2.35 0 4.45.48 5.77 1.23.87.5 1.35 1.13 1.35 1.77 0 .64-.48 1.27-1.35 1.77-1.32.75-3.42 1.23-5.77 1.23-2.35 0-4.45-.48-5.77-1.23C5.36 8.7 4.88 8.07 4.88 7.43c0-.64.48-1.27 1.35-1.77C7.55 4.91 9.65 4.43 12 4.43m0-2.43C8.91 2 6.26 2.67 4.5 3.98 2.74 5.29 1.75 7.15 1.75 9.25v5.5c0 2.1.99 3.96 2.75 5.27C6.26 21.33 8.91 22 12 22s5.74-.67 7.5-1.98c1.76-1.31 2.75-3.17 2.75-5.27v-5.5c0-2.1-.99-3.96-2.75-5.27C17.74 2.67 15.09 2 12 2" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.916.405 1.338.626.423.222.8.47 1.132.74.34.269.608.58.803.926.207.358.31.775.31 1.25 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.066 5.066 0 003.237 1.2c.333.105.664.157.992.157.299 0 .555-.033.768-.099a1.7 1.7 0 00.595-.291 1.27 1.27 0 00.384-.45 1.3 1.3 0 00.13-.58 1.1 1.1 0 00-.146-.552 1.9 1.9 0 00-.442-.463 4.2 4.2 0 00-.682-.436 9.5 9.5 0 00-.926-.463 11.08 11.08 0 01-1.007-.544 4.706 4.706 0 01-.803-.545 2.515 2.515 0 01-.543-.682 2.1 2.1 0 01-.198-.926 2.53 2.53 0 01.333-1.327 2.99 2.99 0 011.036-1.036 4.8 4.8 0 011.59-.596 7.914 7.914 0 011.945-.24zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.688 9.762l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 4.045-2.926 4.292-11.375zm-5.777 8.28a43.08 43.08 0 01-.63-4.762c.205-.577.445-1.147.72-1.708.23.483.445.978.64 1.486.24.67.42 1.356.54 2.052a41.5 41.5 0 01-1.27 2.932z" />
    </svg>
  ),
  Vite: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="m8.286 10.578.512-8.657a.306.306 0 01.247-.282L12 1.23l3.955.409a.306.306 0 01.247.282l.512 8.657L12 8.378z" />
      <path d="M12 8.378L8.286 10.578 12 22.77l3.714-12.192z" fillOpacity=".5" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.62C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.62C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.62 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.62C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  "Framer Motion": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z" />
    </svg>
  ),
  OpenAI: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.742 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 01.071 0l4.83 2.791a4.494 4.494 0 01-.676 8.105v-5.678a.79.79 0 00-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.066.066 0 01.028-.061l4.83-2.787a4.5 4.5 0 016.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.773l-.142.08L8.704 5.04a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
    </svg>
  ),
  NLP: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  ),
  Recharts: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  NextAuth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  Razorpay: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  Clerk: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  "Shadcn UI": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  "Next.js 15": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a3.76 3.76 0 00-.292.042C6.704.267 3.477 2.731 2.114 6.331a11.45 11.45 0 00-.42 3.016v5.305c0 .89.096 1.763.28 2.6.42 2.07 1.587 3.88 3.247 5.122a11.5 11.5 0 003.016.42h5.305c.89 0 1.763-.096 2.6-.28 2.07-.42 3.88-1.587 5.122-3.247a11.5 11.5 0 00.42-3.016V9.347a11.45 11.45 0 00-.42-3.016C18.269 2.731 15.042.267 11.07.049a3.76 3.76 0 00-.292-.042C10.73.001 10.596 0 10.42 0h1.152zm-.34 1.24h.68c3.003.214 5.606 2.35 6.64 5.12.2.59.304 1.22.304 1.867v5.305c0 .647-.104 1.277-.304 1.867-1.034 2.77-3.637 4.906-6.64 5.12h-.68c-3.003-.214-5.606-2.35-6.64-5.12A7.71 7.71 0 014.288 14.5V9.195c0-.647.104-1.277.304-1.867C5.626 4.558 8.229 2.422 11.232 2.24z" />
      <path d="M13.5 6.5L8.5 17.5h1.9l1.05-2.5h4.1l1.05 2.5h1.9L13.5 6.5zm-.65 6.5l1.4-3.3 1.4 3.3h-2.8z" />
    </svg>
  ),
};

export function TechIcon({ name, className = "w-4 h-4" }: { name: string; className?: string }): React.JSX.Element {
  const icon = techIconMap[name];
  if (icon) {
    return <span className={`inline-flex text-purple-300 ${className}`}>{icon}</span>;
  }
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

const hobbyIconMap: Record<string, React.JSX.Element> = {
  palette: <SketchIcon className="w-7 h-7" />,
  craft: <CraftIcon className="w-7 h-7" />,
  football: <FootballIcon className="w-7 h-7" />,
};

export function HobbyIcon({ type }: { type: string }): React.JSX.Element {
  return hobbyIconMap[type] ?? <SketchIcon className="w-7 h-7" />;
}

export function LinkedInIcon({ className = "w-5 h-5" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function MailIcon({ className = "w-5 h-5" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export function BriefcaseIcon({ className = "w-6 h-6" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export function TrophyIcon({ className = "w-6 h-6" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

export function CodeIcon({ className = "w-6 h-6" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

export function GraduationIcon({ className = "w-6 h-6" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824 2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  );
}

export function SparklesIcon({ className = "w-5 h-5" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

export function UsersIcon({ className = "w-6 h-6" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export function PaletteIcon({ className = "w-6 h-6" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  );
}

export function LayersIcon({ className = "w-6 h-6" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );
}

export function StarIcon({ className = "w-6 h-6" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function RocketIcon({ className = "w-6 h-6" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

export function FolderIcon({ className = "w-6 h-6" }: IconProps): React.JSX.Element {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  );
}

const navIconMap: Record<string, React.JSX.Element> = {
  home: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  about: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  experience: <BriefcaseIcon className="w-4 h-4" />,
  achievements: <TrophyIcon className="w-4 h-4" />,
  projects: <FolderIcon className="w-4 h-4" />,
  contact: <MailIcon className="w-4 h-4" />,
};

export function NavIcon({ name }: { name: string }): React.JSX.Element {
  return navIconMap[name] ?? <CodeIcon className="w-4 h-4" />;
}

techIconMap["React.js"] = techIconMap["React 19"];
techIconMap["Express.js"] = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.75l5.158-6.92-4.798-6.251a1.595 1.595 0 011.806-.75l3.31 4.421 3.31-4.421a1.586 1.586 0 011.806.75l-4.798 6.251 5.158 6.92a1.529 1.529 0 01-1.895.72zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.491 1.596-6.624 1.058-8.09-1.617z" />
  </svg>
);
techIconMap["APIs"] = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);
techIconMap["VS Code"] = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 00-1.276.057L.327 7.261A1 1 0 00.326 8.74L3.899 12 .326 15.26a1 1 0 00.001 1.479L1.65 17.94a.999.999 0 001.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 001.704.29l4.942-2.377A1.5 1.5 0 0024 20.06V3.939a1.5 1.5 0 00-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
  </svg>
);
techIconMap["Figma"] = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.264 7.51h3.588c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.588V7.51zm0 1.471H8.26c-2.476 0-4.49-2.014-4.49-4.49S5.784 0 8.26 0h3.004v8.981zm-3.004-7.51C4.865 1.471 3.51 2.824 3.51 4.49S4.865 7.51 6.26 7.51H9.26V1.471zm3.004 15.019H8.26c-1.665 0-3.019-1.355-3.019-3.019s1.355-3.019 3.019-3.019h4.004v6.038zm-4.004-4.549c-.955 0-1.729.775-1.729 1.73s.774 1.729 1.729 1.729 1.729-.775 1.729-1.729-.774-1.73-1.729-1.73zm7.078 1.729c0 2.476-2.014 4.49-4.49 4.49v-4.49h4.49v0zm0-1.471h-4.49V8.981h4.49c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49z" />
  </svg>
);
techIconMap["Firebase"] = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.918-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 19.984z" />
  </svg>
);
techIconMap["AI Integration"] = techIconMap["OpenAI"];
techIconMap["Automation"] = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);
techIconMap["LLMs"] = techIconMap["OpenAI"];
techIconMap["Prompt Eng."] = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);
techIconMap["Node.js"] = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.15-.023.218.017l2.256 1.339a.29.29 0 00.272 0l8.795-5.076a.277.277 0 00.134-.238V6.921a.272.272 0 00-.133-.235l-8.862-5.114a-.265.265 0 00-.27 0L3.075 6.686A.272.272 0 002.94 6.92v10.15a.27.27 0 00.133.235l2.409 1.391c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675A2.718 2.718 0 01.67 16.336V6.186A2.715 2.715 0 012.28 3.85l8.795-5.082a2.803 2.803 0 002.724 0l8.794 5.082a2.718 2.718 0 011.61 2.336v10.15a2.718 2.718 0 01-1.61 2.336l-8.794 5.078a2.64 2.64 0 00-.922.248z" />
  </svg>
);
techIconMap["Git"] = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 012.34 2.329 1.84 1.84 0 01-2.34 2.328 1.84 1.84 0 01-2.329-2.34l-2.479-2.48v6.52a1.846 1.846 0 001.25 1.75 1.84 1.84 0 01-1.84 1.84 1.84 1.84 0 01-1.84-1.84 1.846 1.846 0 001.25-1.75V9.13l-2.48-2.48a1.84 1.84 0 01-2.34-2.329 1.84 1.84 0 012.34-2.328 1.84 1.84 0 012.329 2.34l2.48 2.48 5.404-5.405a1.55 1.55 0 000-2.188z" />
  </svg>
);
