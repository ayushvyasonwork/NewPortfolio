"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import Image from "next/image";

const socials = [
  {
    icon: GitHubIcon,
    href: "https://github.com/ayushvyasonwork",
    label: "GitHub",
  },
  {
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/ayush-vyas-a7b5b5257/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:work.ayushvyas17@gmail.com",
    label: "Email",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 md:pt-28 flex items-center justify-center bg-grid overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="relative mx-auto mb-8 w-32 h-32 sm:w-40 sm:h-40"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-purple-500 p-[3px]">
            <div className="w-full h-full rounded-full overflow-hidden bg-background">
              <Image
                src="/ayush.jpg"
                alt="Ayush Kumar Vyas"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          {/* Pulse ring behind photo */}
          <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-ping" style={{ animationDuration: "3s" }} />
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-sm text-muted">
            Currently SDE Intern @ Delhivery
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-5xl sm:text-7xl font-bold tracking-tight mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Ayush</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-xl sm:text-2xl text-muted max-w-2xl mx-auto mb-4"
        >
          Software Developer &bull; Full Stack &bull; Real-Time Systems
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-base text-muted/70 max-w-xl mx-auto mb-10"
        >
          Building scalable microservices, AI-powered tools, and real-time
          applications. B.Tech ECE @ IIIT Una.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-light transition-all duration-300 glow-hover"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-card-border text-foreground hover:border-accent hover:text-accent transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex items-center justify-center gap-5"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-3 rounded-full border border-card-border text-muted hover:text-accent hover:border-accent transition-all duration-300"
            >
              <s.icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" aria-label="Scroll down">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown size={20} className="text-muted" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
