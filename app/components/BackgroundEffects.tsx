export default function BackgroundEffects(): React.JSX.Element {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 section-grid-bg opacity-30" />
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] bg-violet-700/8 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] bg-purple-600/6 rounded-full blur-[90px] animate-float" style={{ animationDelay: "5s" }} />
      <div className="absolute inset-0 noise-overlay opacity-[0.012]" />
    </div>
  );
}
