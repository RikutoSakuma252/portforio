'use client';
import { useState } from 'react';

export default function InquiryForm({ propertyTitle }: { propertyTitle: string }) {
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [tel,     setTel]     = useState('');
  const [message, setMessage] = useState(`「${propertyTitle}」について問い合わせます。`);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="w-10 h-10 border border-horizon-gold flex items-center justify-center mx-auto mb-3">
          <svg className="w-5 h-5 text-horizon-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <p className="font-serif-jp text-sm text-horizon-navy">送信しました</p>
        <p className="font-sans-jp text-xs text-horizon-muted mt-2">担当者より48時間以内にご連絡します。</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-sans-jp text-[10px] tracking-widest text-horizon-muted mb-1">
          お名前 <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="山田 太郎"
          className="w-full border border-horizon-border px-4 py-3 font-sans-jp text-sm text-horizon-text focus:outline-none focus:border-horizon-gold transition-colors bg-white placeholder:text-horizon-border"
        />
      </div>

      <div>
        <label className="block font-sans-jp text-[10px] tracking-widest text-horizon-muted mb-1">
          メールアドレス <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@mail.com"
          className="w-full border border-horizon-border px-4 py-3 font-sans-jp text-sm text-horizon-text focus:outline-none focus:border-horizon-gold transition-colors bg-white placeholder:text-horizon-border"
        />
      </div>

      <div>
        <label className="block font-sans-jp text-[10px] tracking-widest text-horizon-muted mb-1">
          電話番号
        </label>
        <input
          type="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          placeholder="090-0000-0000"
          className="w-full border border-horizon-border px-4 py-3 font-sans-jp text-sm text-horizon-text focus:outline-none focus:border-horizon-gold transition-colors bg-white placeholder:text-horizon-border"
        />
      </div>

      <div>
        <label className="block font-sans-jp text-[10px] tracking-widest text-horizon-muted mb-1">
          お問い合わせ内容
        </label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-horizon-border px-4 py-3 font-sans-jp text-sm text-horizon-text focus:outline-none focus:border-horizon-gold transition-colors bg-white resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-horizon-gold hover:bg-horizon-gold-light transition-colors text-white py-3.5 font-sans-jp text-sm tracking-widest"
      >
        送信する
      </button>
    </form>
  );
}
