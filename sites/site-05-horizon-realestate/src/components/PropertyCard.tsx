import Link  from 'next/link';
import Image from 'next/image';
import type { Property } from '@/lib/properties';

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.id}`} className="group block bg-white border border-horizon-border hover:border-horizon-gold transition-all duration-300 hover:shadow-md">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        {/* Type badge */}
        <div className="absolute top-4 left-4 bg-horizon-navy text-white font-sans-jp text-[10px] px-2.5 py-1 tracking-wider">
          {property.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <p className="font-sans-jp text-[10px] tracking-wider text-horizon-muted mb-2">{property.station}</p>

        {/* Title */}
        <h3 className="font-serif-jp text-base font-normal text-horizon-navy group-hover:text-horizon-gold transition-colors duration-200 leading-snug mb-3">
          {property.title}
        </h3>

        {/* Gold divider */}
        <div className="w-8 h-px bg-horizon-gold mb-3" />

        {/* Meta row */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-sans-jp text-[11px] text-horizon-muted border border-horizon-border px-2 py-0.5">
            {property.layout}
          </span>
          <span className="font-sans-jp text-[11px] text-horizon-muted border border-horizon-border px-2 py-0.5">
            {property.size}m²
          </span>
          <span className="font-sans-jp text-[11px] text-horizon-muted border border-horizon-border px-2 py-0.5">
            {property.builtYear}年築
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline justify-between">
          <p className="font-cormorant text-2xl font-light text-horizon-gold">
            {property.price.toLocaleString()}
            <span className="font-sans-jp text-sm ml-1 font-normal">万円</span>
          </p>
          <span className="font-sans-jp text-[10px] tracking-widest text-horizon-muted group-hover:text-horizon-gold transition-colors duration-200 flex items-center gap-1">
            詳細
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
