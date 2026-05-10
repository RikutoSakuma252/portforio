"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/4 right-1/4 w-[min(500px,80vw)] h-[min(500px,80vw)] rounded-full bg-accent blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute bottom-1/4 left-1/4 w-[min(400px,70vw)] h-[min(400px,70vw)] rounded-full bg-accent blur-[100px]"
        />
      </div>

      {/* Decorative lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        className="absolute left-12 md:left-24 top-0 w-px h-full bg-gradient-to-b from-transparent via-border-light to-transparent origin-top"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        className="absolute right-12 md:right-24 top-0 w-px h-full bg-gradient-to-b from-transparent via-border-light to-transparent origin-top"
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-16">
        <div className="flex flex-col items-start gap-8">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <span className="block w-12 h-px bg-accent" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">
              Creative Developer &amp; Designer
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-display text-[clamp(3rem,10vw,9rem)] font-light leading-[0.9] tracking-tight text-text-primary"
            >
              Digital
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-display text-[clamp(3rem,10vw,9rem)] font-light leading-[0.9] tracking-tight italic text-gradient"
            >
              Experiences
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-lg font-body text-base md:text-lg leading-relaxed text-text-secondary mt-4"
          >
            コードとデザインの交差点で、
            <br className="hidden md:block" />
            記憶に残るデジタル体験を創造します。
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex items-center gap-6 mt-4"
          >
            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex items-center gap-3 font-body text-sm tracking-widest uppercase text-accent hover:text-accent-hover transition-colors duration-300"
            >
              <span>View Works</span>
              <span className="block w-8 h-px bg-accent transition-all duration-300 group-hover:w-14" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text-muted">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
