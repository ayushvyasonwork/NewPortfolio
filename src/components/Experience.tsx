"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Delhivery",
    role: "SDE Intern",
    period: "Jan 2026 – Present",
    color: "#6366f1",
    points: [
      "Built an AI coding agent using LangChain with a knowledge base of Delhivery TMS and internal coding practices; implemented a pipeline for document chunking, code generation, and validation to automate client integration workflows.",
      "Developed an internal MCP server using FastAPI and FastMCP to enable developers to query organizational knowledge and receive contextual assistance for writing integration code.",
      "Currently working on a real-time analytics platform for tracking incidents, SLA compliance, tickets, and ADO metrics at team and organization levels, with an integrated AI chatbot for generating insights.",
    ],
    tech: ["LangChain", "FastAPI", "FastMCP", "Python", "RAG", "AI Agents"],
  },
  {
    company: "Whatbytes",
    role: "Frontend Developer Intern",
    period: "Jan 2025 – Mar 2025",
    color: "#a78bfa",
    points: [
      "Led the redesign and enhancement of a client platform dashboard UI using Next.js, React.js, and Tailwind CSS, implementing SSR, optimized component architecture, and accessibility best practices.",
      "Developed and integrated dynamic cart price calculation logic on the frontend for real-time pricing updates, improving the checkout experience and contributing to a 30% increase in user engagement.",
    ],
    tech: ["Next.js", "React.js", "Tailwind CSS", "SSR"],
  },
  {
    company: "GsSoc'24 Extd.",
    role: "Open Source Contributor",
    period: "Oct 2024 – Nov 2024",
    color: "#34d399",
    points: [
      "Collaborated with a team of 50+ contributors via Git, GitHub, and code reviews, ensuring clean, maintainable code aligned with project guidelines.",
    ],
    tech: ["Git", "GitHub", "Open Source", "Code Reviews"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-card-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-2.5 top-1.5 w-4 h-4 rounded-full border-2 bg-background"
                  style={{ borderColor: exp.color }}
                />

                <div className="p-6 rounded-2xl border border-card-border bg-card/30 hover:border-accent/30 transition-all duration-300 glow-hover">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Briefcase size={16} className="text-accent" />
                    <h3 className="font-bold text-lg text-foreground">
                      {exp.company}
                    </h3>
                    <span className="text-sm text-muted">•</span>
                    <span className="text-sm text-accent">{exp.role}</span>
                  </div>
                  <p className="text-xs text-muted mb-4 font-mono">
                    {exp.period}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted leading-relaxed flex gap-2"
                      >
                        <span className="text-accent mt-1.5 shrink-0">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
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
      </div>
    </section>
  );
}
