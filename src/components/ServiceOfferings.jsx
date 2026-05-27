import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    id: 'strategy',
    title: 'Strategy & Growth',
    tagline: 'From vision to market leadership',
    services: [
      'Business Strategy Development',
      'Market Research & Intelligence',
      'Go-to-Market Strategy',
      'Sales Strategy & Revenue Growth',
      'Pricing & Competitor Analysis',
    ],
  },
  {
    id: 'development',
    title: 'Business Development',
    tagline: 'Partnerships, funding & expansion',
    services: [
      'Stakeholder Engagement Strategy',
      'Business Plan Development',
      'Investor Pitch Decks',
      'Grant Identification & Writing',
      'Change Management & Rollout',
    ],
  },
  {
    id: 'operations',
    title: 'Operations & Delivery',
    tagline: 'Efficiency, control & execution',
    services: [
      'Operational Diagnostics & Mapping',
      'Workflow Optimization & Automation',
      'Cost & Resource Optimization',
      'Project Planning & Scheduling',
      'Risk Management & Reporting',
    ],
  },
  {
    id: 'people',
    title: 'People & Technology',
    tagline: 'Capability, systems & scale',
    services: [
      'Leadership & Management Training',
      'Executive Coaching & Workshops',
      'Website & App Development',
      'E-commerce & System Integration',
      'Cloud Migration & Dashboards',
    ],
  },
];

function ServiceOfferings() {
  const [animated, setAnimated] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setAnimated((prev) => ({ ...prev, [id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-id]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          data-id="header"
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ease-out ${
            animated['header'] ? 'opacity-100 translate-y-0' : ''
          }`}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C49A6C] mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#262262] mb-6">
            Our Service Offerings
          </h2>
          <p className="text-base md:text-lg text-[#6b7280] leading-relaxed">
            Four integrated pillars that cover every stage of your organisation's growth journey.
          </p>
        </div>

        {/* Cards Grid — 2 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.id}
              data-id={pillar.id}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl border border-[#D9D9D9]/50 transition-all duration-700 ease-out ${
                animated[pillar.id]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-100'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Bronze left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#C49A6C]/20" />
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#C49A6C] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />

              <div className="p-5 md:p-6 pl-7 md:pl-8">
                {/* Tagline */}
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C49A6C] mb-1 block">
                  {pillar.tagline}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#262262] mb-3 group-hover:text-[#C49A6C] transition-colors duration-300">
                  {pillar.title}
                </h3>

                {/* Service bullets — 2 columns for compactness */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 mb-5">
                  {pillar.services.map((svc) => (
                    <li
                      key={svc}
                      className="flex items-start gap-2 text-xs text-[#1f2937]"
                    >
                      <svg
                        className="w-3 h-3 text-[#C49A6C] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="leading-tight">{svc}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold bg-[#C49A6C] text-[#262262] hover:bg-[#b8895c] hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  View Services
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceOfferings;
