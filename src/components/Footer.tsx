"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Logo and tagline */}
          <div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-display text-2xl font-light tracking-wider text-text-primary hover:text-accent transition-colors duration-300 block mb-3"
            >
              Portfolio
            </a>
            <p className="font-body text-xs tracking-wider text-text-muted">
              Crafting digital experiences with precision and passion.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="font-body text-xs tracking-widest uppercase text-text-muted hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-text-muted">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-2 font-body text-xs tracking-wider text-text-muted hover:text-accent transition-colors duration-300"
          >
            <span>Back to top</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="transition-transform duration-300 group-hover:-translate-y-1"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
