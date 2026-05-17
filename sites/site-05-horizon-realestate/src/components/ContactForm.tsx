'use client';
import { useState } from 'react';

const inquiryTypes = ['物件購入について', '物件売却について', '賃貸について', '資産運用について', 'その他'];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', tel: '', type: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key: string, value: string) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-14 h-14 border border-horizon-gold flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-horizon-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-serif-jp text-xl text-horizon-navy mb-3">送信しました</h3>
        <p className="font-sans-jp text-sm text-horizon-muted leading-loose">
          お問い合わせありがとうございます。<br />
          担当者より2営業日以内にご連絡いたします。
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full border border-horizon-border px-4 py-3 font-sans-jp text-sm text-horizon-text focus:outline-none focus:border-horizon-gold transition-colors bg-white placeholder:text-horizon-border';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-sans-jp text-[10px] tracking-widest text-horizon-muted mb-1.5">
            お名前 <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="山田 太郎"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block font-sans-jp text-[10px] tracking-widest text-horizon-muted mb-1.5">
            電話番号
          </label>
          <input
            type="tel"
            value={formData.tel}
            onChange={(e) => update('tel', e.target.value)}
            placeholder="090-0000-0000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block font-sans-jp text-[10px] tracking-widest text-horizon-muted mb-1.5">
          メールアドレス <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => update('email', e.target.value)}
          placeholder="example@mail.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block font-sans-jp text-[10px] tracking-widest text-horizon-muted mb-1.5">
          お問い合わせ種別
        </label>
        <select
          value={formData.type}
          onChange={(e) => update('type', e.target.value)}
          className={inputClass}
        >
          <option value="">選択してください</option>
          {inquiryTypes.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>

      <div>
        <label className="block font-sans-jp text-[10px] tracking-widest text-horizon-muted mb-1.5">
          お問い合わせ内容 <span className="text-red-400">*</span>
        </label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="ご相談内容をご記入ください"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-horizon-navy hover:bg-horizon-navy-light transition-colors text-white py-4 font-sans-jp text-sm tracking-widest"
      >
        送信する
      </button>

      <p className="font-sans-jp text-[10px] text-horizon-muted text-center">
        ご入力いただいた情報は、お問い合わせへの対応目的以外には使用しません。
      </p>
    </form>
  );
}
