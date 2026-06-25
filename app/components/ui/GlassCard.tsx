interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  accent?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  accent = "from-purple-600/15 to-violet-600/15",
  hover = true,
  delay = 0,
}: GlassCardProps): React.JSX.Element {
  return (
    <div
      className={`group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden transition-all duration-500 ${hover ? "hover-lift hover:border-purple-400/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-purple-500/10" : ""} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 animate-shimmer-slow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
