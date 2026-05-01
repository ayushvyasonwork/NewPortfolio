"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Users, Code, Target } from "lucide-react";

const achievements = [
  {
    icon: Code,
    title: "LeetCode Rating ~1800",
    description:
      "500+ coding problems solved across various platforms, showcasing proficiency in algorithmic thinking, data structures, and coding efficiency.",
    period: "Dec 2023 – Present",
    color: "#f59e0b",
  },
  {
    icon: Users,
    title: "CDC IIITU – Student Representative",
    description:
      "Coordinated 40+ campus recruitment drives, collaborating with recruiters for 400+ students, resulting in a 35% increase in successful placements compared to the previous year.",
    period: "May 2025 – Present",
    color: "#6366f1",
  },
];

const stats = [
  { value: "500+", label: "Problems Solved", icon: Target },
  { value: "~1800", label: "LeetCode Rating", icon: Trophy },
  { value: "40+", label: "Recruitment Drives", icon: Users },
  { value: "35%", label: "Placement Increase", icon: Code },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Achievements <span className="gradient-text">& Impact</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-12" />
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl border border-card-border bg-card/30 hover:border-accent/30 transition-all duration-300 group"
            >
              <stat.icon
                size={24}
                className="mx-auto mb-3 text-accent group-hover:scale-110 transition-transform"
              />
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.2 }}
              className="p-6 rounded-2xl border border-card-border bg-card/30 hover:border-accent/30 transition-all duration-300 glow-hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="p-2.5 rounded-xl"
                  style={{ backgroundColor: `${a.color}15` }}
                >
                  <a.icon size={20} style={{ color: a.color }} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{a.title}</h3>
                  <p className="text-xs text-muted font-mono">{a.period}</p>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
