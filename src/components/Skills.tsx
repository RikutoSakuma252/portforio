"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST API", "GraphQL"],
  },
  {
    title: "Design",
    skills: ["Figma", "UI/UX Design", "Responsive Design", "Design System", "Prototyping", "Typography"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "Vercel", "AWS", "CI/CD", "Agile"],
  },
];

function SkillBar({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group flex items-center gap-4 py-3 border-b border-border/50 last:border-none hover:border-accent/30 transition-colors duration-300"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-text-muted group-hover:bg-accent transition-colors duration-300" />
      <span className="font-body text-sm tracking-wide text-text-secondary group-hover:text-text-primary transition-colors duration-300">
        {skill}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-20 bg-bg-secondary/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">03</span>
            <span className="block w-12 h-px bg-accent" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-text-muted">
              Skills
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-text-primary">
              Technical <span className="italic text-gradient">Expertise</span>
            </h2>
            <p className="font-body text-sm text-text-secondary max-w-sm">
              フロントエンドを中心に、幅広い技術スタックで最適なソリューションを提供します。
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="divider mb-16" />
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.title} delay={catIndex * 0.15}>
              <div>
                <h3 className="font-display text-xl font-light text-accent mb-6 pb-3 border-b border-accent/20">
                  {category.title}
                </h3>
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skill} skill={skill} index={skillIndex} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Experience highlights */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "3+", label: "Years Experience" },
            { number: "30+", label: "Happy Clients" },
            { number: "100%", label: "Dedication" },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <div className="font-display text-4xl md:text-5xl font-light text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="font-body text-xs tracking-widest uppercase text-text-muted">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
