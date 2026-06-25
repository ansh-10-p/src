import Link from "next/link";
import SectionHeader from "./ui/SectionHeader";
import GlassCard from "./ui/GlassCard";
import { ArrowUpRightIcon, BriefcaseIcon, CodeIcon, GitHubIcon, LayersIcon, LinkedInIcon, PaletteIcon, UsersIcon } from "./Icons";

interface ExperienceCard {
  id: number;
  title: string;
  subtitle?: string;
  period?: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  linkIcon?: React.ReactNode;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Web Developer Intern",
    subtitle: "TechStudios",
    period: "Jan 2026 – Apr 2026",
    description:
      "3-month web development internship at TechStudios. Built responsive web applications, implemented modern UI components, and collaborated on full-stack features using React, Node.js, and industry best practices.",
    icon: <BriefcaseIcon className="w-7 h-7" />,
    accent: "from-purple-600/15 to-violet-600/15",
    tags: ["React", "Node.js", "UI/UX", "Internship"],
    link: "https://github.com/ansh-10-p",
    linkLabel: "View Work",
    linkIcon: <GitHubIcon className="w-4 h-4" />,
  },
  {
    id: 2,
    title: "Brand Influencer Platform",
    subtitle: "TalentLink",
    period: "2024 – Present",
    description:
      "Co-developed TalentLink — a Next.js platform connecting brands with influencers. Built NLP-powered campaign management, influencer matching, performance analytics, and automated workflows.",
    icon: <UsersIcon className="w-7 h-7" />,
    accent: "from-violet-600/15 to-purple-600/15",
    tags: ["Next.js", "NLP", "MongoDB", "Platform"],
    link: "https://github.com/ansh-10-p/talentlink",
    linkLabel: "View Project",
    linkIcon: <GitHubIcon className="w-4 h-4" />,
  },
  {
    id: 3,
    title: "MERN Stack Development",
    subtitle: "Full-Stack Projects",
    description:
      "Full-stack expertise with MongoDB, Express, React, and Node.js. Delivered scalable applications including expense splitting, AI chat interfaces, and campus management platforms.",
    icon: <CodeIcon className="w-7 h-7" />,
    accent: "from-purple-700/15 to-violet-700/15",
    tags: ["MERN", "MongoDB", "APIs", "Scalable"],
    link: "https://github.com/ansh-10-p",
    linkLabel: "GitHub",
    linkIcon: <GitHubIcon className="w-4 h-4" />,
  },
  {
    id: 4,
    title: "UI/UX & Hackathon Experience",
    subtitle: "EDBA · College · Zephyr",
    description:
      "Winner of the EDBA Company UI/UX hackathon and college hackathon for Project Zephyr. Combines design thinking with rapid prototyping and user-centered product development.",
    icon: <PaletteIcon className="w-7 h-7" />,
    accent: "from-purple-500/15 to-violet-500/15",
    tags: ["UI/UX", "Hackathon", "Figma", "Design"],
    link: "https://www.linkedin.com/in/anshuap/",
    linkLabel: "LinkedIn",
    linkIcon: <LinkedInIcon className="w-4 h-4" />,
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden section-surface">

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeader
          badge="Professional Journey"
          title="Work Experience"
          description="Internships, projects, and hands-on experience building real-world applications"
          icon={<BriefcaseIcon className="w-4 h-4" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card, index) => (
            <GlassCard
              key={card.id}
              accent={card.accent}
              delay={index * 0.1}
              className="p-7 h-full animate-scrollFadeDelay"
            >
              <div style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}>
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/30 to-purple-900/40 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30">
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    {card.period && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2">
                        <LayersIcon className="w-3 h-3" />
                        {card.period}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">{card.title}</h3>
                    {card.subtitle && <p className="text-sm text-purple-400/80 font-medium mt-0.5">{card.subtitle}</p>}
                  </div>
                </div>

                <p className="text-white/65 text-sm leading-relaxed mb-5 group-hover:text-white/80 transition-colors">
                  {card.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {card.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-white/60 group-hover:border-purple-500/30 group-hover:text-white/80 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>

                {card.link && (
                  <Link
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-purple-600/80 to-purple-700/80 hover:from-purple-500 hover:to-purple-600 text-white font-semibold text-sm rounded-xl transition-all duration-300 group/btn hover:shadow-lg hover:shadow-purple-500/30 border border-purple-400/20"
                  >
                    {card.linkIcon}
                    <span>{card.linkLabel}</span>
                    <ArrowUpRightIcon className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
