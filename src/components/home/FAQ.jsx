import { useState } from 'react';

const faqs = [
  {
    q: 'What industries do you specialize in?',
    a: 'We work across a wide range of sectors including SMEs, NGOs, corporates, and government bodies. Our expertise spans business strategy, operations, digital transformation, and capacity building.',
  },
  {
    q: 'How do you work with new clients?',
    a: 'We begin with a Discovery & Consultation phase to understand your current state, identify key needs, and define success metrics. From there, we develop a tailored proposal with clear deliverables and agreed terms.',
  },
  {
    q: 'How is your consulting service priced?',
    a: 'Our services are priced based on scope, complexity, and duration. We offer both project-based engagements and monthly retainer packages. Contact us for a customised quote tailored to your needs.',
  },
  {
    q: 'How to find us?',
    a: 'You can reach us via phone/WhatsApp at 07070703935, email at info@tijha.com, or through our social media channels. Visit our Contact page for more details.',
  },
];

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-padding bg-[#F5F5F7]">
      <div className="container-main max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`neo-card overflow-hidden transition-all duration-300 ${isOpen ? 'ring-2 ring-brand-blue/20' : ''}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold transition-colors"
                >
                  <span className={isOpen ? 'text-brand-blue' : 'text-brand-dark'}>{f.q}</span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-blue' : 'text-brand-body'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-5 text-brand-body leading-relaxed text-sm">
                    {f.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
