"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, RocketIcon, StarIcon, TechIcon, TrophyIcon } from "./Icons";

export default function Banner(): React.JSX.Element {
  const texts = ["Web Developer", "MERN Stack Developer", "UI/UX Designer", "Hackathon Winner"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster deletion
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTypingSpeed(100); // Reset typing speed
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden section-surface"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 section-grid-bg opacity-30 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Right side - Character image */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto order-1 lg:order-2">
            <div className="relative animate-float">
              {/* Mobile: Hello text positioned on top of image */}
              <div className="lg:hidden z-10 mb-6 animate-fadeInUp">
                <div className="relative inline-block group">
                  <Image
                    src="/assets/arrow.png"
                    alt="Arrow pointer"
                    width={80}
                    height={80}
                    className="absolute top-5 rotate-z-280 group-hover:rotate-0 transition-transform duration-300"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <div className="relative bg-gradient-to-r from-purple-600/20 to-purple-700/20 backdrop-blur px-4 py-2 rounded-lg border border-purple-500/30">
                    <p className="text-white text-lg whitespace-nowrap font-semibold">
                      Hello! I Am{" "}
                      <span className="text-transparent bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text">Ansh Vinay Pandey</span>
                    </p>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
                </div>
              </div>

              {/* Profile image with glow effect */}
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-purple-900/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src="/assets/me.png"
                  alt="Ansh Vinay Pandey - Web Developer and MERN Stack Developer"
                  width={300}
                  height={300}
                  className="max-w-md relative z-10 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                  style={{ width: "auto", height: "auto" }}
                  priority
                />
                <Image
                  src="/assets/me-glow.png"
                  alt="Glow effect"
                  width={300}
                  height={300}
                  className="max-w-md relative"
                  style={{ width: "auto", height: "auto" }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Left side - Text content */}
          <div className="flex-1 space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Desktop: Hello text in original position */}
            <div className="hidden lg:inline-block relative group animate-fadeInLeft">
              <Image
                src="/assets/arrow.png"
                alt="Arrow pointer"
                width={100}
                height={100}
                className="absolute group-hover:rotate-12 transition-transform duration-300"
                style={{ left: "-100px", top: "-50px", width: "auto", height: "auto" }}
              />
              <div style={{ position: "relative" }} className="bg-gradient-to-r from-purple-600/20 to-purple-700/20 backdrop-blur px-6 py-3 rounded-xl border border-purple-500/30">
                <p className="text-white text-lg font-semibold">
                  Hello! I Am{" "}
                  <span className="text-transparent bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text">Ansh Vinay Pandey</span>
                </p>
              </div>
            </div>

            {/* Hero heading */}
            <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              <p className="text-xl text-white/80 font-medium"> A developer who </p>
              <h1 className="text-5xl tracking-tight lg:text-7xl font-bold text-white leading-tight">
                Builds scalable
                <br /> with{" "}
                <span className="relative inline-block">
                  <Image 
                    src="/assets/circle.png" 
                    alt="Circle" 
                    width={200} 
                    height={200} 
                    className="absolute mt-2 opacity-60 hover:opacity-100 transition-opacity" 
                  />
                  <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 bg-clip-text text-transparent animate-gradientShift">
                    passion
                  </span>
                </span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                Clean code, innovative solutions, and user-centric design
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 animate-fadeInUp" style={{ animationDelay: "0.35s" }}>
              {[
                { value: "8.5", label: "CGPA", icon: <StarIcon className="w-4 h-4" /> },
                { value: "4+", label: "Hackathons", icon: <TrophyIcon className="w-4 h-4" /> },
                { value: "22+", label: "Projects", icon: <RocketIcon className="w-4 h-4" /> },
              ].map((s, i) => (
                <div key={i} className="text-center p-3 rounded-xl glass-badge hover-lift transition-all">
                  <div className="flex justify-center text-purple-400 mb-1">{s.icon}</div>
                  <div className="text-lg font-bold text-white">{s.value}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack and Bio */}
            <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {["Next.js", "React.js", "TypeScript", "MongoDB", "Node.js"].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 glass-badge text-sm text-white/85 hover:border-purple-400/50 transition-all duration-300 hover-lift"
                  >
                    <TechIcon name={tech} className="w-3.5 h-3.5" />
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                Full-stack web developer from Mumbai with a Diploma in Computer Engineering (First Class Distinction), CGPA 8.5, and multiple hackathon wins. Building products like TalentLink and SmartSplit with a focus on UI/UX and scalable architecture.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start animate-fadeInUp gap-3" style={{ animationDelay: "0.6s" }}>
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover-lift border border-purple-400/30"
              >
                <RocketIcon className="w-5 h-5" />
                Explore My Work
                <ArrowUpRightIcon className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#about"
                className="group inline-flex items-center gap-2 px-7 py-3.5 glass-badge text-white font-semibold rounded-xl hover-lift transition-all"
              >
                Learn More
              </a>
              <a
                href="https://github.com/ansh-10-p"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-3.5 glass-badge text-white/80 hover:text-white rounded-xl hover-lift transition-all"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/anshuap/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-3.5 glass-badge text-white/80 hover:text-white rounded-xl hover-lift transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Typing animation section */}
        <div className="space-y-4 pt-16 lg:pt-20 text-center lg:text-left animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
          <p className="text-4xl lg:text-5xl text-white font-bold">
            I&apos;m a{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text">
              {displayedText}
            </span>
            <span className="animate-pulse text-purple-400 ml-1">_</span>
          </p>
        </div>
      </div>
    </section>
  );
}
