import type { Metadata } from 'next';
import { notFound }       from 'next/navigation';
import Image              from 'next/image';
import Link               from 'next/link';
import { properties, getPropertyById } from '@/lib/properties';
import ImageSlider  from '@/components/ImageSlider';
import InquiryForm  from '@/components/InquiryForm';

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const property = getPropertyById(params.id);
  return {
    title: property ? `${property.title} | HORIZON不動産` : '物件詳細 | HORIZON不動産',
  };
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = getPropertyById(params.id);
  if (!property) notFound();

  return (
    <main className="min-h-screen bg-horizon-bg pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-horizon-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <nav className="flex items-center gap-2 font-sans-jp text-xs text-horizon-muted">
            <Link href="/" className="hover:text-horizon-gold transition-colors">HOME</Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-horizon-gold transition-colors">物件一覧</Link>
            <span>/</span>
            <span className="text-horizon-text">{property.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Image slider */}
            <ImageSlider images={property.images} title={property.title} />

            {/* Title & price */}
            <div className="mt-8 pb-6 border-b border-horizon-border">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="inline-block bg-horizon-navy text-white font-sans-jp text-xs px-3 py-1 mb-3">
                    {property.type}
                  </span>
                  <h1 className="font-serif-jp text-2xl md:text-3xl font-normal text-horizon-navy">
                    {property.title}
                  </h1>
                  <p className="font-sans-jp text-sm text-horizon-muted mt-2">{property.location}</p>
                </div>
                <div className="text-right">
                  <p className="font-cormorant text-4xl font-light text-horizon-gold">
                    {property.price.toLocaleString()}<span className="text-xl ml-1">万円</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Basic info table */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-0 border border-horizon-border">
              {[
                { label: '所在地', value: property.location },
                { label: '交通', value: property.station },
                { label: '間取り', value: property.layout },
                { label: '専有面積', value: `${property.size}m²` },
                { label: '築年数', value: `${property.builtYear}年築` },
                { label: '物件種別', value: property.type },
              ].map((item) => (
                <div key={item.label} className="border-b border-r border-horizon-border p-4">
                  <p className="font-sans-jp text-[10px] tracking-widest text-horizon-muted mb-1">{item.label}</p>
                  <p className="font-sans-jp text-sm text-horizon-text">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="font-serif-jp text-lg font-normal text-horizon-navy mb-4 flex items-center gap-3">
                <span className="block w-6 h-px bg-horizon-gold" />
                物件概要
              </h2>
              <p className="font-sans-jp text-sm text-horizon-text leading-[2]">{property.description}</p>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h2 className="font-serif-jp text-lg font-normal text-horizon-navy mb-4 flex items-center gap-3">
                <span className="block w-6 h-px bg-horizon-gold" />
                設備・特徴
              </h2>
              <div className="flex flex-wrap gap-2">
                {property.features.map((f) => (
                  <span
                    key={f}
                    className="border border-horizon-gold/40 text-horizon-gold font-sans-jp text-xs px-4 py-1.5"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white border border-horizon-border p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-horizon-gold" />
                <span className="font-cormorant text-sm italic text-horizon-gold tracking-widest">Inquiry</span>
              </div>
              <h3 className="font-serif-jp text-lg font-normal text-horizon-navy mb-1">この物件に問い合わせる</h3>
              <p className="font-sans-jp text-xs text-horizon-muted mb-6">担当者より48時間以内にご連絡します。</p>
              <InquiryForm propertyTitle={property.title} />

              <div className="mt-6 pt-6 border-t border-horizon-border text-center">
                <p className="font-sans-jp text-xs text-horizon-muted mb-2">お電話でのお問い合わせ</p>
                <p className="font-cormorant text-2xl font-light text-horizon-navy tracking-widest">
                  03-1234-5678
                </p>
                <p className="font-sans-jp text-[10px] text-horizon-muted mt-1">
                  営業時間 9:00〜18:00（水・祝休）
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-horizon-border">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 font-sans-jp text-sm text-horizon-muted hover:text-horizon-gold transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            物件一覧に戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
