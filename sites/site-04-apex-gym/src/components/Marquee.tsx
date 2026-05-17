interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  dark?: boolean;
}

export default function Marquee({ items, reverse = false, dark = false }: MarqueeProps) {
  const content = items.join('  ·  ') + '  ·  ';

  return (
    <div className={`overflow-hidden py-3 select-none ${dark ? 'bg-apex-surface' : 'bg-apex-accent'}`}>
      <div className={`flex whitespace-nowrap ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        <span className={`font-oswald text-[11px] tracking-[0.35em] uppercase pr-0 ${dark ? 'text-apex-secondary' : 'text-white'}`}>
          {content}{content}
        </span>
      </div>
    </div>
  );
}
