"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  color: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 0,
    title: "KOKU Coffee",
    category: "Café Landing Page",
    description:
      "スペシャルティコーヒーショップのランディングページ。Wabi-Sabi Luxuryをテーマに、Playfair Displayと温かみのある配色でブランドの誠実さと品質感を表現。IntersectionObserverによるスクロールアニメーションを実装。",
    tags: ["HTML", "CSS", "JavaScript"],
    year: "2025",
    color: "#8b5e3c",
    // Production: replace with actual screenshot at /works/koku-coffee-preview.jpg
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80&fit=crop",
    link: "/works/koku-coffee/index.html",
  },
  {
    id: 1,
    title: "atelier BLANC",
    category: "Hair Salon Landing Page",
    description:
      "プライベートヘアサロンのランディングページ。静かな日本的ミニマリズムをテーマに Cormorant Garamond のエレガントなタイポグラフィと余白で上品さを表現。Nuxt.js (Vue 3) + Tailwind CSS で SSG 構成。",
    tags: ["Nuxt.js", "Vue 3", "Tailwind CSS"],
    year: "2025",
    color: "#b8a99a",
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/works/atelier-blanc/index.html",
  },
  {
    id: 2,
    title: "APEX GYM",
    category: "Personal Gym Landing Page",
    description:
      "パーソナルトレーニングジムのランディングページ。Military-Grade Editorialをテーマにマットブラック×レッドで力強さと高級感を表現。React + Tailwind CSS で数字カウントアップ・マーキーテープ・セクション別スクロールアニメーションを実装。",
    tags: ["React", "Tailwind CSS", "Vite"],
    year: "2025",
    color: "#e63329",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80&fit=crop",
    link: "/works/apex-gym/index.html",
  },
  {
    id: 3,
    title: "OSTERIA NODO",
    category: "Restaurant Landing Page",
    description:
      "イタリアンレストランのランディングページ。Cinematic Fine Diningをテーマにダークエメラルド×ゴールドで高級感を演出。React + Tailwind CSS でコンポーネント設計し、インタラクティブなメニュータブやギャラリーを実装。",
    tags: ["React", "Tailwind CSS", "Vite"],
    year: "2025",
    color: "#c9a84c",
    image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/works/osteria-nodo/index.html",
  },
  {
    id: 4,
    title: "HORIZON不動産",
    category: "Real Estate Corporate Site",
    description:
      "地域密着型不動産会社のコーポレートサイト。Next.js App Router で5ページ構成（トップ・物件一覧・物件詳細・会社概要・お問い合わせ）を SSG で実装。物件フィルター・画像スライダー・ScrollReveal アニメーションを搭載。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2025",
    color: "#c5a55a",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80&fit=crop",
    link: "/works/horizon-realestate/index.html",
  },
  {
    id: 5,
    title: "Flowly",
    category: "SaaS Landing Page",
    description:
      "業務フロー管理SaaS のランディングページ。Next.js + TypeScript + Framer Motion で実装。タブ切り替え機能紹介・月払い/年払いトグル付き料金プラン・FAQアコーディオン・ダッシュボードモックアップUIを搭載。",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    year: "2025",
    color: "#4f46e5",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop",
    link: "/works/flowly/index.html",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <ScrollReveal delay={index * 0.1} className="group">
      <motion.article
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden rounded-sm border border-border bg-bg-secondary cursor-pointer"
      >
        {/* Image area */}
        <div className="relative aspect-[16/10] overflow-hidden bg-bg-tertiary">
          {project.image && !imageError ? (
            /* Actual preview image */
            <>
              <img
                src={project.image}
                alt={`${project.title} プレビュー`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={() => setImageError(true)}
              />
              <div
                className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-60"
                style={{
                  background: `linear-gradient(135deg, ${project.color}99 0%, transparent 60%)`,
                  opacity: 0.3,
                }}
              />
            </>
          ) : (
            /* Gradient placeholder for projects without images */
            <>
              <div
                className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                style={{
                  background: `radial-gradient(ellipse at 30% 50%, ${project.color}40 0%, transparent 70%)`,
                }}
              />
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" className="text-text-muted">
                  <defs>
                    <pattern id={`grid-${project.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={isHovered ? { scale: 1.1, rotate: 45 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 border border-border-light flex items-center justify-center"
                  style={{ borderColor: isHovered ? project.color : undefined }}
                >
                  <div
                    className="w-2 h-2 rounded-full transition-colors duration-300"
                    style={{ backgroundColor: isHovered ? project.color : "var(--text-muted)" }}
                  />
                </motion.div>
              </div>
            </>
          )}

          {/* Project number */}
          <div className="absolute top-6 left-6 font-display text-7xl font-light text-white/10 select-none">
            {String(project.id).padStart(2, "0")}
          </div>

          {/* Year badge */}
          <div className="absolute top-6 right-6">
            <span className="font-body text-xs tracking-wider text-white/60 drop-shadow">{project.year}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <span className="font-body text-xs tracking-widest uppercase text-text-muted block mb-2">
                {project.category}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-light text-text-primary group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
            </div>
            <motion.div
              animate={isHovered ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-accent"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </motion.div>
          </div>

          <p className="font-body text-sm leading-relaxed text-text-secondary mb-5">
            {project.description}
          </p>

          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 font-body text-xs tracking-wider text-text-muted border border-border rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-shrink-0 flex items-center gap-1.5 font-body text-xs tracking-widest uppercase transition-colors duration-200 hover:opacity-80"
                style={{ color: project.color }}
              >
                View
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Bottom accent line */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-0 left-0 right-0 h-px origin-left"
              style={{ backgroundColor: project.color }}
            />
          )}
        </AnimatePresence>
      </motion.article>
    </ScrollReveal>
  );
}

export default function Works() {
  return (
    <section id="works" className="relative py-32 md:py-44">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">02</span>
            <span className="block w-12 h-px bg-accent" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-text-muted">
              Works
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-text-primary">
              Selected <span className="italic text-gradient">Projects</span>
            </h2>
            <p className="font-body text-sm text-text-secondary max-w-sm">
              クライアントワークから個人プロジェクトまで、厳選した制作物をご紹介します。
            </p>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <ScrollReveal>
          <div className="divider mb-16" />
        </ScrollReveal>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
