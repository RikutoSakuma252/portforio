"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, connect to a backend API or service like Resend/SendGrid
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-32 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">04</span>
            <span className="block w-12 h-px bg-accent" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-text-muted">
              Contact
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left side */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-text-primary mb-8">
                Let&apos;s <span className="italic text-gradient">Create</span>
                <br />
                Together
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="font-body text-base leading-relaxed text-text-secondary mb-12 max-w-md">
                プロジェクトのご相談やお見積もりなど、お気軽にお問い合わせください。
                新しいアイデアを形にするお手伝いをいたします。
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 4L12 13L2 4" />
                    </svg>
                  </div>
                  <span className="font-body text-sm text-text-secondary">hello@example.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                      <path d="M2 12h20M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z" />
                    </svg>
                  </div>
                  <span className="font-body text-sm text-text-secondary">Tokyo, Japan</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-body text-xs tracking-widest uppercase text-text-muted mb-3"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      maxLength={100}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-transparent border-b border-border pb-3 font-body text-base text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-body text-xs tracking-widest uppercase text-text-muted mb-3"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      maxLength={254}
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-transparent border-b border-border pb-3 font-body text-base text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-xs tracking-widest uppercase text-text-muted mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={2000}
                    rows={6}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b border-border pb-3 font-body text-base text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-4 px-8 py-4 border border-accent text-accent font-body text-sm tracking-widest uppercase hover:bg-accent hover:text-bg-primary transition-all duration-400 rounded-sm"
                  >
                    <span>Send Message</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.button>

                  {isSubmitted && (
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="font-body text-sm text-accent"
                    >
                      Thank you! Message sent.
                    </motion.span>
                  )}
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
