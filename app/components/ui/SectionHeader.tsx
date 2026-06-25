interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export default function SectionHeader({ badge, title, description, icon }: SectionHeaderProps): React.JSX.Element {
  return (
    <div className="text-center mb-16 lg:mb-20 animate-fadeInUp">
      <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full glass-badge">
        {icon && <span className="text-purple-400">{icon}</span>}
        <span className="text-sm font-semibold text-purple-300 tracking-wide">{badge}</span>
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-5">
        {title}
      </h2>
      <div className="h-1 w-28 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 mx-auto rounded-full mb-6 animate-lineGrowIn" />
      {description && (
        <p className="text-base lg:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">{description}</p>
      )}
    </div>
  );
}
