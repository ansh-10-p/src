import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";
import { ArrowUpRightIcon, CheckCircleIcon, CodeIcon, ExternalLinkIcon, GitHubIcon, TechIcon } from "./Icons";

interface Project {
  id: number;
  title: string;
  shortName: string;
  description: string;
  image: string;
  link?: string;
  demoLink?: string;
  status?: string;
  techStack?: string[];
  features?: string[];
  accent: string;
  glow: string;
  icon: React.ReactNode;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "TalentLink — Brand Influencer Platform",
    shortName: "TalentLink",
    description:
      "A Next.js platform that streamlines collaboration between brand managers and influencers. Features NLP-powered influencer matching, campaign management, real-time performance analytics, automated invoicing, and customizable workflows.",
    link: "https://github.com/ansh-10-p/talentlink",
    demoLink: "https://talentlink-hk.vercel.app",
    image: "/projects/talentlink.svg",
    status: "Completed",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Clerk", "NLP", "Shadcn UI"],
    features: ["Influencer Matching", "Campaign Management", "Performance Analytics", "Automated Workflows"],
    accent: "from-purple-500 to-violet-600",
    glow: "group-hover:shadow-purple-500/30",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "SmartSplit — Expense Splitting App",
    shortName: "SmartSplit",
    description:
      "An AI-assisted group expense and bill-splitting web app built with React 19 and Vite. Features AI categorization, meme-based payment reminders, a mock UPI PayNow system, dark mode, and a galactic-themed UI.",
    link: "https://github.com/ansh-10-p/smartsplit",
    demoLink: "https://smartsplit-zgm8-2hve8nghu-ansh-10-ps-projects.vercel.app",
    image: "/projects/smartsplit.svg",
    status: "Completed",
    techStack: ["React 19", "Vite", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    features: ["Group Expense Tracking", "AI Categorization", "UPI PayNow Mock", "Meme Reminders"],
    accent: "from-violet-500 to-purple-600",
    glow: "group-hover:shadow-purple-500/30",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Arise — Educational Platform",
    shortName: "Arise",
    description:
      "An educational learning platform built with Next.js to help students access courses, track progress, submit assignments, and attend live classes. Features interactive dashboards, course management, progress analytics, and a modern student-centric learning experience.",
    link: "https://github.com/ansh-10-p/travelai",
    image: "/projects/arise.svg",
    status: "Completed",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts"],
    features: ["Course Management", "Progress Tracking", "Live Classes", "Assignment System"],
    accent: "from-purple-600 to-violet-600",
    glow: "group-hover:shadow-purple-500/30",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824 2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Festo",
    shortName: "Festo",
    description:
      "A comprehensive campus and resource management platform (ARC) built for the CODEKNIGHT hackathon. Features AI mentorship with voice integration, canteen and parking management, event booking, and Razorpay payments.",
    link: "https://github.com/ansh-10-p/CODEKNIGHT_Ansh_pandey",
    image: "/projects/festo.svg",
    status: "Completed",
    techStack: ["Next.js 15", "TypeScript", "MongoDB", "NextAuth", "OpenAI", "Razorpay"],
    features: ["AI Mentor", "Canteen & Parking", "Event Management", "Role-Based Dashboards"],
    accent: "from-violet-600 to-purple-600",
    glow: "group-hover:shadow-purple-500/30",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-24 px-6 relative overflow-hidden section-surface">

      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeader
          badge="Featured Work"
          title="Featured Projects"
          description="Full-stack applications built with modern tools — from influencer platforms to campus management systems"
          icon={<CodeIcon className="w-4 h-4" />}
        />

        {/* Project count strip */}
        <div className="flex justify-center gap-3 mb-20 flex-wrap animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
          {featuredProjects.map((p, i) => (
            <div
              key={p.id}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-white/5 text-sm text-white/70 hover:border-purple-400/50 hover:text-white transition-all duration-300 hover-lift"
            >
              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${p.accent} animate-pulse-soft`} />
              <span className="font-medium">{p.shortName}</span>
              <span className="text-white/30 text-xs">0{i + 1}</span>
            </div>
          ))}
        </div>

        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          const projectNum = String(index + 1).padStart(2, "0");

          return (
            <div key={project.id} className="mb-32 last:mb-0 relative">
              {/* Large background number */}
              <span
                className={`absolute -top-8 font-black text-[8rem] lg:text-[12rem] leading-none text-white/[0.03] select-none pointer-events-none animate-scrollFadeDelay ${isEven ? "right-0" : "left-0"}`}
                style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
                aria-hidden
              >
                {projectNum}
              </span>

              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? "lg:grid-flow-dense" : ""}`}>
                {/* Text */}
                <div className={`${isEven ? "lg:col-start-2" : ""} space-y-6`}>
                  <div className="flex items-center gap-3 animate-scrollFadeDelay" style={{ "--delay": "0s" } as React.CSSProperties}>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.accent} flex items-center justify-center text-white shadow-lg animate-icon-bounce`}>
                      {project.icon}
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/15 border border-purple-500/35 rounded-full text-xs font-bold text-purple-300 uppercase tracking-wider">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                      {project.status}
                    </span>
                    <span className="text-purple-400/60 text-xs font-mono">{projectNum}</span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight animate-scrollFadeDelay" style={{ "--delay": "0.1s" } as React.CSSProperties}>
                    {project.title}
                  </h3>

                  {project.techStack && (
                    <div className="flex flex-wrap gap-2 animate-scrollFadeDelay" style={{ "--delay": "0.2s" } as React.CSSProperties}>
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-purple-500/30 hover:border-purple-400/60 rounded-lg text-xs font-medium text-white/80 hover:text-white transition-all duration-300 hover:scale-105 hover-lift group/tech"
                        >
                          <TechIcon name={tech} className="w-3.5 h-3.5 group-hover/tech:scale-110 transition-transform" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="animate-scrollFadeDelay" style={{ "--delay": "0.3s" } as React.CSSProperties}>
                    <div className="relative bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 overflow-hidden group/desc">
                      <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${project.accent} opacity-60`} />
                      <div className="absolute inset-0 animate-shimmer-slow opacity-0 group-hover/desc:opacity-100 transition-opacity pointer-events-none" />
                      <p className="text-white/85 text-base lg:text-lg leading-relaxed relative z-10">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {project.features && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-scrollFadeDelay" style={{ "--delay": "0.4s" } as React.CSSProperties}>
                      {project.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-white/3 border border-white/5 hover:border-purple-500/30 hover:bg-white/5 transition-all duration-300 group/feature"
                        >
                          <CheckCircleIcon className="w-4 h-4 text-purple-400 flex-shrink-0 group-hover/feature:scale-110 transition-transform" />
                          <span className="text-sm text-white/75 group-hover/feature:text-white transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4 animate-scrollFadeDelay" style={{ "--delay": "0.5s" } as React.CSSProperties}>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3 relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 group/link transform hover:scale-105 border border-purple-400/30"
                        aria-label="Visit project on GitHub"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/link:translate-x-full transition-transform duration-700" />
                        <GitHubIcon className="w-5 h-5 relative" />
                        <span className="relative">GitHub</span>
                        <ArrowUpRightIcon className="w-4 h-4 relative group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-white/8 hover:bg-white/15 backdrop-blur border border-white/15 hover:border-white/35 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105 group/demo"
                        aria-label="View live demo"
                      >
                        <ExternalLinkIcon className="w-5 h-5 group-hover/demo:rotate-12 transition-transform" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Image card */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block relative animate-scrollFadeDelay ${project.glow}`}
                    style={{ "--delay": `${index * 0.15}s` } as React.CSSProperties}
                    aria-label={`View ${project.shortName} project`}
                  >
                    {/* Animated border ring */}
                    <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-spin blur-sm" />

                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#1a0a2e] border border-purple-500/25 group-hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                      {/* Corner badge */}
                      <div className={`absolute top-4 left-4 z-30 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/10`}>
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.accent} animate-pulse-soft`} />
                        <span className="text-xs font-semibold text-white/90">{project.shortName}</span>
                      </div>

                      {/* Project number */}
                      <div className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-purple-300">{projectNum}</span>
                      </div>

                      <div className="relative w-full h-full overflow-hidden p-3">
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/50 via-transparent to-transparent opacity-30 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none" />
                      </div>

                      {/* Floating tech pills on image */}
                      <div className="absolute bottom-4 left-4 right-4 z-30 flex gap-2 flex-wrap opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        {project.techStack?.slice(0, 3).map((tech, i) => (
                          <span key={i} className="flex items-center gap-1 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/10 text-xs text-white/80">
                            <TechIcon name={tech} className="w-3 h-3" />
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 z-20">
                        <div className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${project.accent} text-white font-semibold shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300`}>
                          <ExternalLinkIcon className="w-5 h-5" />
                          View Project
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Divider between projects */}
              {index < featuredProjects.length - 1 && (
                <div className="mt-32 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
              )}
            </div>
          );
        })}

        <div className="mt-32 text-center animate-fadeInUp">
          <div className="relative inline-block p-8 rounded-2xl border border-purple-500/25 bg-purple-900/15 backdrop-blur-lg hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 group hover-lift overflow-hidden">
            <div className="absolute inset-0 animate-shimmer-slow opacity-30 pointer-events-none" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-violet-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <GitHubIcon className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-white/80 mb-4 text-lg font-medium">Want to see more of my work?</p>
              <a
                href="https://github.com/ansh-10-p"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/50 transform hover:scale-105 border border-purple-400/30"
              >
                <GitHubIcon className="w-5 h-5" />
                <span>View All Projects</span>
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
