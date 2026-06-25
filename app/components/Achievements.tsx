import SectionHeader from "./ui/SectionHeader";
import GlassCard from "./ui/GlassCard";
import { GraduationIcon, RocketIcon, SparklesIcon, StarIcon, TrophyIcon } from "./Icons";

interface Achievement {
  id: number;
  title: string;
  description: string;
  category: "academic" | "hackathon" | "sports" | "leadership" | "project";
  year?: string;
}

const achievements: Achievement[] = [
  { id: 1, title: "UI/UX Hackathon Winner", description: "Won the UI/UX hackathon at EDBA Company with a user-centric design solution.", category: "hackathon", year: "2025" },
  { id: 2, title: "College Hackathon — Project Zephyr", description: "Secured first place at a college hackathon for Project Zephyr, a full-stack innovation built under competitive time constraints.", category: "hackathon", year: "2025" },
  { id: 3, title: "TalentLink — Brand Platform", description: "Co-created TalentLink, a brand–influencer collaboration platform with NLP-driven campaign management and performance tracking.", category: "project", year: "2024" },
  { id: 4, title: "Poster Making Competition Winner", description: "Awarded first place in a poster making competition for creative visual communication and design execution.", category: "hackathon" },
  { id: 5, title: "Diploma — First Class Distinction", description: "Completed Diploma in Computer Engineering with First Class Distinction, building a strong foundation in software and systems.", category: "academic", year: "2024" },
  { id: 6, title: "School Topper — 91%", description: "Achieved 91% in board examinations and ranked as school topper, demonstrating consistent academic excellence.", category: "academic", year: "2022" },
  { id: 7, title: "DSO Gold — 100m Race", description: "Won the District Sports Office (DSO) gold medal in the 100-metre sprint.", category: "sports" },
  { id: 8, title: "Sports Captain", description: "Served as Sports Captain in school, leading teams, organizing events, and fostering discipline and teamwork.", category: "leadership" },
];

const categoryConfig: Record<Achievement["category"], { label: string; accent: string; icon: React.ReactNode }> = {
  academic: { label: "Academic", accent: "from-purple-600/15 to-violet-600/15", icon: <GraduationIcon className="w-5 h-5" /> },
  hackathon: { label: "Competition", accent: "from-violet-600/15 to-purple-600/15", icon: <SparklesIcon className="w-5 h-5" /> },
  sports: { label: "Sports", accent: "from-purple-700/15 to-violet-700/15", icon: <RocketIcon className="w-5 h-5" /> },
  leadership: { label: "Leadership", accent: "from-purple-500/15 to-violet-500/15", icon: <StarIcon className="w-5 h-5" /> },
  project: { label: "Project", accent: "from-violet-500/15 to-purple-500/15", icon: <TrophyIcon className="w-5 h-5" /> },
};

export default function Achievements(): React.JSX.Element {
  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden section-surface">

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeader
          badge="Honors & Milestones"
          title="Achievements"
          description="Academic excellence, hackathon victories, athletic awards, and leadership roles"
          icon={<TrophyIcon className="w-4 h-4" />}
        />

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
          {[
            { value: "4+", label: "Hackathon Wins", icon: <TrophyIcon className="w-5 h-5" /> },
            { value: "91%", label: "Board Score", icon: <GraduationIcon className="w-5 h-5" /> },
            { value: "8.5", label: "CGPA", icon: <StarIcon className="w-5 h-5" /> },
            { value: "DSO", label: "100m Gold", icon: <RocketIcon className="w-5 h-5" /> },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-xl glass-badge hover-lift transition-all duration-300">
              <div className="flex justify-center text-purple-400 mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/50 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievements.map((achievement, index) => {
            const config = categoryConfig[achievement.category];
            return (
              <GlassCard key={achievement.id} accent={config.accent} delay={index * 0.08} className="p-6 animate-scrollFadeDelay">
                <div style={{ "--delay": `${index * 0.08}s` } as React.CSSProperties} className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${config.accent} border border-white/10 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform duration-300`}>
                    {config.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 text-xs font-semibold rounded-md bg-white/5 border border-white/10 text-purple-300">
                        {config.label}
                      </span>
                      {achievement.year && <span className="text-xs text-white/40 font-mono">{achievement.year}</span>}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-200 transition-colors mb-1.5">{achievement.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/75 transition-colors">{achievement.description}</p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
