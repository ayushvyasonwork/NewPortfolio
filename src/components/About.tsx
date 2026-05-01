"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Code2, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack",
    desc: "Node.js, Next.js, React, Golang, Python",
  },
  {
    icon: Zap,
    title: "Real-Time Systems",
    desc: "WebRTC, Socket.IO, Mediasoup, Redis",
  },
  {
    icon: GraduationCap,
    title: "B.Tech ECE",
    desc: "IIIT Una, H.P. (2022–2026)",
  },
  {
    icon: MapPin,
    title: "Based In",
    desc: "Ajmer, Rajasthan, India",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-muted leading-relaxed"
          >
            <p>
              I&apos;m a software developer with a passion for building
              high-performance, scalable systems. Currently working as an{" "}
              <span className="text-foreground font-medium">
                SDE Intern at Delhivery
              </span>
              , where I&apos;m building AI coding agents, MCP servers, and
              real-time analytics platforms.
            </p>
            <p>
              I love working across the stack — from designing microservices
              architectures with Golang and Node.js to crafting polished UIs
              with Next.js and React. I&apos;m particularly drawn to real-time
              communication systems, having built video conferencing apps with
              WebRTC and social platforms with Socket.IO.
            </p>
            <p>
              With{" "}
              <span className="text-foreground font-medium">
                500+ problems solved on LeetCode
              </span>{" "}
              and an 1800 rating, I bring strong algorithmic thinking to every
              project I work on.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="p-5 rounded-2xl border border-card-border bg-card/50 hover:border-accent/50 transition-all duration-300 glow-hover group"
              >
                <h.icon
                  size={24}
                  className="text-accent mb-3 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {h.title}
                </h3>
                <p className="text-xs text-muted">{h.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
