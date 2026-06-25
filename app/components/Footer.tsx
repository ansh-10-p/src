import Link from "next/link";
import SectionHeader from "./ui/SectionHeader";
import GlassCard from "./ui/GlassCard";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon, NavIcon } from "./Icons";

const quickLinks = [
  { href: "#about", label: "About", icon: "about" },
  { href: "#experience", label: "Experience", icon: "experience" },
  { href: "#achievements", label: "Achievements", icon: "achievements" },
  { href: "#lab", label: "Projects", icon: "projects" },
];

const socialLinks = [
  { href: "https://github.com/ansh-10-p", label: "GitHub", icon: <GitHubIcon className="w-5 h-5" />, accent: "hover:shadow-purple-500/30" },
  { href: "https://www.linkedin.com/in/anshuap/", label: "LinkedIn", icon: <LinkedInIcon className="w-5 h-5" />, accent: "hover:shadow-blue-500/30" },
  { href: "mailto:anshuap12345@gmail.com", label: "Email", icon: <MailIcon className="w-5 h-5" />, accent: "hover:shadow-rose-500/30" },
];

export default function Footer(): React.JSX.Element {
  return (
    <footer id="contact" className="py-24 px-6 relative overflow-hidden section-surface border-t border-purple-500/10">

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeader
          badge="Let's Connect"
          title="Get In Touch"
          description="Open to new projects, internships, and collaborations. Reach out anytime!"
          icon={<MailIcon className="w-4 h-4" />}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <GlassCard className="p-6 lg:col-span-2" accent="from-purple-600/15 to-violet-600/15">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/30 to-purple-800/40 border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0">
                <MailIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Email Me</h3>
                <p className="text-white/60 text-sm mb-4">Best way to reach me for opportunities and collaborations.</p>
                <a
                  href="mailto:anshuap12345@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/40 border border-purple-400/30 group"
                >
                  <MailIcon className="w-5 h-5" />
                  anshuap12345@gmail.com
                  <ArrowUpRightIcon className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6" accent="from-violet-600/15 to-purple-600/15">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all text-sm group">
                    <span className="text-purple-400/70 group-hover:text-purple-300"><NavIcon name={link.icon} /></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        <div className="flex justify-center gap-4 mb-16">
          {socialLinks.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/40 hover:bg-white/10 hover-lift transition-all duration-300 hover:shadow-lg ${social.accent}`}
              aria-label={social.label}
            >
              <span className="text-white/80 group-hover:text-purple-200 group-hover:scale-110 transition-all duration-300 relative z-10">
                {social.icon}
              </span>
            </Link>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center border border-purple-400/40">
              <span className="text-white font-bold text-xs">AP</span>
            </div>
            <div>
              <p className="text-white/80 text-sm font-semibold">Ansh Vinay Pandey</p>
              <p className="text-white/40 text-xs">Full-Stack Web Developer</p>
            </div>
          </div>
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} All rights reserved.
            <span className="text-purple-400/80 ml-1">Crafted with passion & code</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
