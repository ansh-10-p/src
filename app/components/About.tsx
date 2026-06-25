import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";
import GlassCard from "./ui/GlassCard";
import { GraduationIcon, HobbyIcon, RocketIcon, SparklesIcon, StarIcon, TechIcon } from "./Icons";

const PURPLE_ACCENT = "from-purple-600/15 to-violet-600/15";

const skills = [
  { category: "Frontend", items: ["React.js", "TypeScript", "Tailwind CSS", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "APIs"] },
  { category: "Tools", items: ["Git", "VS Code", "Figma", "Firebase"] },
  { category: "AI/ML", items: ["AI Integration", "Automation", "LLMs", "Prompt Eng."] },
];

const education = [
  { degree: "Degree in Computer Engineering", institution: "CGPA 8.5 Pointer", year: "Present" },
  { degree: "Diploma in Computer Engineering", institution: "First Class Distinction", year: "2024" },
  { degree: "School Boards", institution: "School Topper — 91%", year: "2022" },
];

const hobbies = [
  { name: "Sketching", icon: "palette" },
  { name: "Clay Model Crafting", icon: "craft" },
  { name: "Football", icon: "football" },
];

const stats = [
  { value: "8.5", label: "CGPA Pointer", icon: <StarIcon className="w-8 h-8" /> },
  { value: "4+", label: "Hackathon Wins", icon: <RocketIcon className="w-8 h-8" /> },
  { value: "22+", label: "GitHub Projects", icon: <SparklesIcon className="w-8 h-8" /> },
];

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden section-surface">
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeader
          badge="About My Journey"
          title="About Me"
          description="A passionate developer crafting digital experiences with modern technologies and innovative solutions"
          icon={<GraduationIcon className="w-4 h-4" />}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-center">
          <div className="space-y-5 animate-fadeInLeft">
            <GlassCard className="p-6" accent={PURPLE_ACCENT}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600/25 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <SparklesIcon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Full-Stack Web Developer</h3>
              </div>
              <p className="text-white/75 leading-relaxed text-sm">
                I&apos;m a passionate <span className="text-purple-300 font-semibold">MERN stack developer</span> from Mumbai with a Diploma in Computer Engineering (First Class Distinction) and a current CGPA of <span className="text-purple-300 font-semibold">8.5</span>. I build scalable web applications, integrate AI solutions, and bring a competitive edge from hackathon wins, athletics, and leadership as school Sports Captain.
              </p>
            </GlassCard>

            <GlassCard className="p-6" accent="from-violet-600/15 to-purple-600/15">
              <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse-soft" />
                What I Specialize In
              </h4>
              <p className="text-white/65 text-sm leading-relaxed">
                Responsive web applications · Real-time data systems · AI-powered features · Performance optimization · Clean architecture · UX design · Scalable backends
              </p>
            </GlassCard>

            <GlassCard className="p-6" accent="from-purple-700/15 to-violet-700/15">
              <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse-soft" />
                My Philosophy
              </h4>
              <p className="text-white/65 text-sm leading-relaxed">
                I believe great code is a craft. Every project blends technical excellence with creative problem-solving, delivering solutions that don&apos;t just work — they inspire.
              </p>
            </GlassCard>
          </div>

          <div className="relative group animate-fadeInRight">
            <div className="absolute -inset-4 bg-purple-600/15 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <GlassCard className="p-6" hover={false}>
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image src="/assets/illustration.png" alt="Skills Illustration" fill className="object-contain group-hover:scale-105 transition-transform duration-700" />
              </div>
            </GlassCard>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
            <GraduationIcon className="w-5 h-5 text-purple-400" />
            Education & Learning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {education.map((edu, idx) => (
              <GlassCard key={idx} accent={PURPLE_ACCENT} delay={idx * 0.1} className="p-6">
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-4 group-hover:scale-110 transition-transform">
                  <GraduationIcon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-purple-200 mb-1 transition-colors">{edu.degree}</h4>
                <p className="text-white/60 text-sm mb-3">{edu.institution}</p>
                <span className="inline-flex px-2.5 py-1 bg-purple-500/15 border border-purple-500/25 rounded-lg text-xs text-purple-300 font-semibold">{edu.year}</span>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Hobbies & Interests</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {hobbies.map((hobby, idx) => (
              <GlassCard key={idx} accent={PURPLE_ACCENT} delay={idx * 0.1} className="p-6">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-purple-600/25 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-all duration-300">
                    <HobbyIcon type={hobby.icon} />
                  </div>
                  <span className="text-white/90 font-semibold group-hover:text-purple-200 transition-colors">{hobby.name}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-xl font-bold text-white mb-8 text-center">Technical Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((skillGroup, idx) => (
              <GlassCard key={idx} accent={PURPLE_ACCENT} delay={idx * 0.1} className="p-6">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-600/20 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <h4 className="text-base font-bold text-purple-300 mb-5 relative z-10">{skillGroup.category}</h4>
                <div className="space-y-2.5 relative z-10">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="flex items-center gap-2.5 group/item hover:translate-x-1 transition-transform duration-200">
                      <TechIcon name={skill} className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm font-medium text-white/75 group-hover/item:text-white transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {stats.map((stat, idx) => (
            <GlassCard key={idx} accent={PURPLE_ACCENT} delay={idx * 0.1} className="p-8 text-center">
              <div className="flex justify-center text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-purple-300 mb-1">{stat.value}</div>
              <p className="text-white/60 text-sm font-medium">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
