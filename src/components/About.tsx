"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-20">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">01</span>
            <span className="block w-12 h-px bg-accent" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-text-muted">
              About
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left: Large statement */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] text-text-primary mb-8">
                デザインと技術で、
                <br />
                <span className="italic text-gradient">価値ある体験</span>を
                <br />
                つくり出す。
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-body text-base md:text-lg leading-relaxed text-text-secondary max-w-xl">
                フロントエンド開発とUI/UXデザインを軸に、ユーザーの心に響くデジタルプロダクトを制作しています。
                シンプルでありながら細部にこだわった設計を大切にし、ビジュアルの美しさと機能性を両立させることを目指しています。
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <ScrollReveal delay={0.3}>
              <div className="border-l border-border-light pl-6">
                <h3 className="font-display text-xl font-light text-accent mb-3">Philosophy</h3>
                <p className="font-body text-sm leading-relaxed text-text-secondary">
                  テクノロジーは目的ではなく手段。ユーザーが直感的に操作でき、使うたびに心地よさを感じるプロダクトを追求しています。美しいインターフェースの裏側にある堅牢なコードベースが、優れた体験を支えます。
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="border-l border-border-light pl-6">
                <h3 className="font-display text-xl font-light text-accent mb-3">Approach</h3>
                <p className="font-body text-sm leading-relaxed text-text-secondary">
                  要件定義からデザイン、実装、テストまで一貫して対応。クライアントとの対話を重視し、本質的な課題解決に向けた提案を行います。最新技術のキャッチアップを欠かさず、最適なソリューションを選定します。
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="border-l border-border-light pl-6">
                <h3 className="font-display text-xl font-light text-accent mb-3">Background</h3>
                <p className="font-body text-sm leading-relaxed text-text-secondary">
                  Webフロントエンド開発をメインに、バックエンドからインフラまで幅広い技術領域をカバー。個人・チーム開発の双方で、多くのプロジェクトを成功に導いてきました。
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
