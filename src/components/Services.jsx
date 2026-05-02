import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'We Provide',
    content: 'Comprehensive business strategy, operational optimisation, digital transformation, and leadership development tailored to your organisation.',
  },
  {
    id: 2,
    title: 'Top notch service warranty',
    content: 'We stand behind every solution with measurable KPIs, ongoing support, and a commitment to sustainable results.',
  },
  {
    id: 3,
    title: 'Recent tips for startups',
    content: 'From business model design to investor pitch decks, we equip emerging ventures with the tools to scale confidently.',
  },
  {
    id: 4,
    title: 'Ways to transform your site',
    content: 'Modern web and app development, SEO, and digital branding that turns your online presence into a growth engine.',
  },
];

function Services() {
  const [open, setOpen] = useState(1);

  return (
    <section className="section-padding bg-[#F5F5F7]">
      <div className="container-main">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">Amazing Offers</h2>

          <div className="space-y-4">
            {services.map((s) => {
              const isOpen = open === s.id;
              return (
                <div key={s.id} className={`neo-card overflow-hidden transition-all duration-300 ${isOpen ? 'ring-2 ring-brand-blue/20' : ''}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : s.id)}
                    className={`w-full flex items-center justify-between px-6 py-5 text-left font-semibold transition-colors ${
                      isOpen ? 'text-indigo bg-brand-blue/5' : 'text-brand-dark hover:text-indigo'
                    }`}
                  >
                    <span>{s.title}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5 text-brand-body leading-relaxed">
                      {s.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
