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
      <div className="w-10 h-10 rounded-full bg-indigo/10 flex items-center justify-center text-indigo font-bold text-sm border border-indigo/20">
        {initial}
      </div>
      <span className="text-brand-body font-medium text-sm whitespace-nowrap">{name}</span>
    </div>
  );
}

function ClientMarquee() {
  const duplicated = [...clients, ...clients, ...clients];

  return (
    <section className="py-8 overflow-hidden">
      <div className="w-full px-8 md:px-16 lg:px-28">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {duplicated.map((client, i) => (
              <LogoItem key={`${client.name}-${i}`} name={client.name} initial={client.initial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientMarquee;
