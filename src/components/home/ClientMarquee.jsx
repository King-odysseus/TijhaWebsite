const clients = [
  { name: 'Acme Corp', initial: 'A' },
  { name: 'Globex', initial: 'G' },
  { name: 'Initech', initial: 'I' },
  { name: 'Umbrella', initial: 'U' },
  { name: 'Massive', initial: 'M' },
  { name: 'Stark Ind', initial: 'S' },
  { name: 'Wayne Ent', initial: 'W' },
  { name: 'Oscorp', initial: 'O' },
];

function LogoItem({ name, initial }) {
  return (
    <div className="flex items-center gap-3 px-6 flex-shrink-0">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-sm border border-white/20">
        {initial}
      </div>
      <span className="text-white/70 font-medium text-sm whitespace-nowrap">{name}</span>
    </div>
  );
}

function ClientMarquee() {
  // Duplicate the list for seamless infinite scroll
  const duplicated = [...clients, ...clients, ...clients];

  return (
    <section className="bg-indigo py-8 overflow-hidden">
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-indigo to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-indigo to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-marquee">
          {duplicated.map((client, i) => (
            <LogoItem key={`${client.name}-${i}`} name={client.name} initial={client.initial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientMarquee;
