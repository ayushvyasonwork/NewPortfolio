"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C/C++", "JavaScript", "Golang", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Node.js", "Next.js", "React.js", "Express.js", "FastAPI", "LangChain"],
  },
  {
    title: "Real-Time & Communication",
    skills: ["WebRTC", "Socket.IO", "Mediasoup"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "Redis", "Neo4j"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "AWS (EC2 & S3)", "CI/CD Pipelines", "Git/GitHub", "Nginx", "Linux"],
  },
  {
    title: "CS Fundamentals",
    skills: ["DSA", "OOP", "Computer Networks", "DBMS", "OS"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-5 rounded-2xl border border-card-border bg-card/30 hover:border-accent/30 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-full bg-accent/10 text-foreground border border-accent/20 hover:bg-accent/20 hover:border-accent/40 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
