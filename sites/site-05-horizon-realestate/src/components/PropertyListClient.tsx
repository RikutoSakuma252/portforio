'use client';
import { useState } from 'react';
import type { Property } from '@/lib/properties';
import PropertyCard from './PropertyCard';

const areas  = ['すべて', '目黒区', '渋谷区', '世田谷区', '武蔵野市', '三鷹市', '川崎市'];
const types  = ['すべて', '一戸建て', 'マンション', '土地'];
const prices = ['すべて', '〜3,000万円', '3,000〜5,000万円', '5,000〜8,000万円', '8,000万円〜'];

function getPriceRange(label: string): [number, number] {
  if (label === '〜3,000万円')        return [0, 3000];
  if (label === '3,000〜5,000万円')   return [3000, 5000];
  if (label === '5,000〜8,000万円')   return [5000, 8000];
  if (label === '8,000万円〜')        return [8000, Infinity];
  return [0, Infinity];
}

export default function PropertyListClient({ properties }: { properties: Property[] }) {
  const [area,  setArea]  = useState('すべて');
  const [type,  setType]  = useState('すべて');
  const [price, setPrice] = useState('すべて');

  const filtered = properties.filter((p) => {
    if (area  !== 'すべて' && p.area !== area)   return false;
    if (type  !== 'すべて' && p.type !== type)   return false;
    if (price !== 'すべて') {
      const [min, max] = getPriceRange(price);
      if (p.price < min || p.price > max) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      {/* Filter bar */}
      <div className="bg-white border border-horizon-border p-5 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Area */}
          <div>
            <label className="block font-sans-jp text-[10px] tracking-widest text-horizon-muted mb-2">エリア</label>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full border border-horizon-border px-3 py-2.5 font-sans-jp text-sm text-horizon-text focus:outline-none focus:border-horizon-gold transition-colors bg-white"
            >
              {areas.map((a) => <option key={a}>{a}</option>)}
            </select>
          </div>

          {/* Type */}
          <div>
            <label className="block font-sans-jp text-[10px] tracking-widest text-horizon-muted mb-2">物件タイプ</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border border-horizon-border px-3 py-2.5 font-sans-jp text-sm text-horizon-text focus:outline-none focus:border-horizon-gold transition-colors bg-white"
            >
              {types.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block font-sans-jp text-[10px] tracking-widest text-horizon-muted mb-2">価格帯</label>
            <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-horizon-border px-3 py-2.5 font-sans-jp text-sm text-horizon-text focus:outline-none focus:border-horizon-gold transition-colors bg-white"
            >
              {prices.map((pr) => <option key={pr}>{pr}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Count */}
      <p className="font-sans-jp text-sm text-horizon-muted mb-6">
        <span className="font-cormorant text-2xl font-light text-horizon-navy mr-1">{filtered.length}</span>
        件の物件が見つかりました
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="font-serif-jp text-xl text-horizon-muted">条件に合う物件が見つかりませんでした</p>
          <button
            onClick={() => { setArea('すべて'); setType('すべて'); setPrice('すべて'); }}
            className="mt-4 font-sans-jp text-sm text-horizon-gold underline"
          >
            フィルターをリセット
          </button>
        </div>
      )}
    </div>
  );
}
