"use client";

import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-card-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()}{" "}
          <span className="text-foreground font-medium">Ayush Kumar Vyas</span>
          . Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ayushvyasonwork"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-accent transition-colors"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-vyas-a7b5b5257/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-accent transition-colors"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="mailto:work.ayushvyas17@gmail.com"
            aria-label="Email"
            className="text-muted hover:text-accent transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
