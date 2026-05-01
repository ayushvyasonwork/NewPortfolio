"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "work.ayushvyas17@gmail.com",
    href: "mailto:work.ayushvyas17@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9024324581",
    href: "tel:+919024324581",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/ayush-vyas",
    href: "https://www.linkedin.com/in/ayush-vyas-a7b5b5257/",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "github.com/ayushvyasonwork",
    href: "https://github.com/ayushvyasonwork",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ajmer, Rajasthan, India",
    href: "#",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
          <p className="text-muted max-w-lg mx-auto">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about tech. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-2xl border border-card-border bg-card/30 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                <link.icon size={18} className="text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted">{link.label}</p>
                <p className="text-sm text-foreground truncate">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="mailto:work.ayushvyas17@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-light transition-all duration-300 glow-hover"
          >
            <Send size={18} />
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
