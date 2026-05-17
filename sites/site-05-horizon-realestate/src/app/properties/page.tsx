import type { Metadata } from 'next';
import { properties } from '@/lib/properties';
import PropertyListClient from '@/components/PropertyListClient';

export const metadata: Metadata = {
  title: '物件一覧 | HORIZON不動産',
  description: '東京・神奈川エリアの売買・賃貸物件一覧。一戸建て・マンションなど豊富な物件をご紹介します。',
};

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-horizon-bg pt-20">
      {/* Page header */}
      <div className="bg-horizon-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-cormorant text-horizon-gold text-sm italic tracking-[0.3em] mb-3">Properties</p>
          <h1 className="font-serif-jp text-3xl md:text-4xl font-light text-white">物件一覧</h1>
        </div>
      </div>

      <PropertyListClient properties={properties} />
    </main>
  );
}
