const clients = [
  {
    name: 'Zenith Holdings',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none">
        <polygon points="24,4 46,44 2,44" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="24" cy="28" r="6" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'Dangote Group',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="6" width="32" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="2" />
        <line x1="8" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'First Atlantic',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none">
        <path d="M4 36 Q12 28, 24 36 Q36 44, 44 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M4 24 Q12 16, 24 24 Q36 32, 44 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M4 12 Q12 4, 24 12 Q36 20, 44 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: 'Sahara Energy',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
        <line x1="24" y1="6" x2="24" y2="18" stroke="currentColor" strokeWidth="2" />
        <line x1="24" y1="30" x2="24" y2="42" stroke="currentColor" strokeWidth="2" />
        <line x1="6" y1="24" x2="18" y2="24" stroke="currentColor" strokeWidth="2" />
        <line x1="30" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'Globacom',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
        <ellipse cx="24" cy="24" rx="18" ry="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="1.5" />
        <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'UBA Group',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none">
        <polygon points="24,2 38,38 10,38" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <line x1="24" y1="14" x2="24" y2="38" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Access Corp',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none">
        <circle cx="16" cy="32" r="12" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="16" r="12" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    name: 'Bua Industries',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <rect x="26" y="22" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
];

function LogoItem({ name, icon }) {
  return (
    <div className="flex items-center justify-center gap-3 px-8 md:px-12 flex-shrink-0 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
      <span className="text-brand-dark">{icon}</span>
      <span className="text-sm md:text-base font-semibold text-brand-dark whitespace-nowrap">{name}</span>
    </div>
  );
}

function ClientMarquee() {
  const duplicated = [...clients, ...clients, ...clients];

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="w-full px-8 md:px-16 lg:px-28">
        <h2 className="text-center text-base md:text-lg font-semibold text-brand-dark mb-10 md:mb-14">
          Trusted by industry leaders across sectors
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {duplicated.map((client, i) => (
            <LogoItem key={`${client.name}-${i}`} name={client.name} icon={client.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientMarquee;
