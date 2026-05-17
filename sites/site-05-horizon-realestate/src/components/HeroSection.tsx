'use client';
import Image from 'next/image';
import Link  from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HeroSection() {
  const router = useRouter();
  const [area, setArea]   = useState('');
  const [type, setType]   = useState('');
  const [price, setPrice] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/properties');
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920&q=90&fit=crop"
          alt="HORIZON不動産"
          fill
          priority
          className="object-cover"
          unoptimized
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(26,39,68,0.94) 38%, rgba(26,39,68,0.55) 65%, rgba(26,39,68,0.15) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pb-0">
        <div className="max-w-xl pb-16 md:pb-24">
          {/* Label */}
          <div className="hero-1 flex items-center gap-4 mb-8">
            <div className="w-10 h-px bg-horizon-gold" />
            <span className="font-cormorant text-horizon-gold text-sm italic tracking-[0.3em]">
              Real Estate · Since 2004
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-2 font-serif-jp font-light text-white leading-[1.6] mb-6"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            あなたの「理想」を、<br />
            「<span className="text-horizon-gold">現実</span>」に。
          </h1>

          {/* Sub copy */}
          <p className="hero-3 font-sans-jp text-sm text-white/70 leading-[2] mb-10 max-w-sm">
            地域に根ざして20年。あなたの大切な住まい探しを、丁寧にサポートします。
          </p>

          {/* Search box */}
          <form
            onSubmit={handleSearch}
            className="hero-4 bg-white p-4 md:p-5 shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="border border-horizon-border px-4 py-3 font-sans-jp text-sm text-horizon-text bg-white focus:outline-none focus:border-horizon-gold transition-colors"
              >
                <option value="">エリアを選択</option>
                <option>目黒区</option>
                <option>渋谷区</option>
                <option>世田谷区</option>
                <option>武蔵野市</option>
                <option>三鷹市</option>
                <option>川崎市</option>
              </select>

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="border border-horizon-border px-4 py-3 font-sans-jp text-sm text-horizon-text bg-white focus:outline-none focus:border-horizon-gold transition-colors"
              >
                <option value="">物件タイプ</option>
                <option>一戸建て</option>
                <option>マンション</option>
                <option>土地</option>
              </select>

              <select
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border border-horizon-border px-4 py-3 font-sans-jp text-sm text-horizon-text bg-white focus:outline-none focus:border-horizon-gold transition-colors"
              >
                <option value="">価格帯</option>
                <option>〜3,000万円</option>
                <option>3,000〜5,000万円</option>
                <option>5,000〜8,000万円</option>
                <option>8,000万円〜</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-horizon-navy hover:bg-horizon-navy-light transition-colors py-3 font-sans-jp text-sm text-white tracking-widest flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              検索する
            </button>
          </form>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 md:right-16 hidden md:flex flex-col items-center gap-3 opacity-50">
        <div className="w-px h-14 bg-white/40" />
        <span className="font-cormorant text-white text-[10px] tracking-[0.3em] -rotate-90 origin-center translate-y-6">
          Scroll
        </span>
      </div>
    </section>
  );
}
