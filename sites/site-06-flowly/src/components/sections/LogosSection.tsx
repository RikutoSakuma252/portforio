const logos = [
  { name: 'NEXUS Corp', style: 'font-bold tracking-tight' },
  { name: 'SwiftOffice', style: 'font-light tracking-wider' },
  { name: 'MERIDIAN', style: 'font-bold tracking-[0.2em]' },
  { name: 'Apex Works', style: 'font-medium italic' },
  { name: 'LYRA', style: 'font-black tracking-[0.15em]' },
  { name: 'Crestline Inc.', style: 'font-light tracking-wide' },
  { name: 'VANTAGE', style: 'font-bold tracking-[0.12em]' },
  { name: 'Aurora Tech', style: 'font-medium' },
  { name: 'ZENITH Co.', style: 'font-bold tracking-tight' },
  { name: 'Prism Digital', style: 'font-light tracking-widest' },
];

export default function LogosSection() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-16 bg-white border-y border-fl-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-8 text-center">
        <p className="text-sm font-medium text-fl-muted">
          <span className="text-fl-primary font-semibold">1,200社以上</span>が導入中
        </p>
      </div>

      <div className="marquee-wrapper overflow-hidden">
        <div className="flex items-center animate-marquee whitespace-nowrap">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className={`inline-flex items-center mx-10 text-gray-300 hover:text-gray-400 transition-colors duration-200 text-lg ${logo.style}`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
