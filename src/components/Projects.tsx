"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Layers, Video } from "lucide-react";
import { GitHubIcon } from "./icons";

const projects = [
  {
    title: "Tasveer",
    subtitle: "Microservices Social Platform",
    description:
      "A microservices-based social platform with a high-performance real-time chat service in Golang and core APIs in Node.js. Features sub-200ms latency messaging, Redis caching for 60% faster API responses, and scalable social interactions.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Golang",
      "React.js",
      "Socket.IO",
      "Multer",
    ],
    icon: Layers,
    github: "https://github.com/ayushvyasonwork",
    demo: "https://tasveer.projects.ayushvyas.me/",
    highlights: [
      "Sub-200ms chat latency",
      "60% faster API responses with Redis",
      "Microservices architecture",
    ],
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Vtalks",
    subtitle: "SFU Video Conferencing App",
    description:
      "A real-time video conferencing platform supporting multi-user rooms with efficient media transport, producer-consumer management, and low-latency audio/video streaming. Features an AI-powered group chatbot synchronized across all participants.",
    tech: [
      "Node.js",
      "Express.js",
      "Mediasoup",
      "WebRTC",
      "Socket.IO",
      "Next.js",
    ],
    icon: Video,
    github: "https://github.com/ayushvyasonwork/vtalk",
    highlights: [
      "WebRTC + Mediasoup SFU",
      "AI-powered group chatbot",
      "Real-time synchronized rooms",
    ],
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group relative rounded-2xl border border-card-border bg-card/30 overflow-hidden hover:border-accent/40 transition-all duration-500 glow-hover"
            >
              {/* Gradient header */}
              <div
                className={`h-2 bg-gradient-to-r ${project.gradient}`}
              />

              <div className="p-6">
                {/* Title row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
                      <project.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted">{project.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent/10 transition-all"
                      >
                        <GitHubIcon size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Demo`}
                        className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent/10 transition-all"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-muted">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-card border border-card-border text-muted group-hover:border-accent/20 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
