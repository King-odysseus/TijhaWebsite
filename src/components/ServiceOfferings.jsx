import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    id: 'strategy',
    title: 'Strategy & Growth',
    tagline: 'From vision to market leadership',
    gradient: 'from-indigo/10 via-indigo/5 to-[#C49A6C]/10',
    iconColor: '#262262',
    accentColor: '#C49A6C',
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
    gradient: 'from-[#C49A6C]/15 via-[#C49A6C]/8 to-indigo/10',
    iconColor: '#C49A6C',
    accentColor: '#262262',
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
    gradient: 'from-indigo/10 via-[#C49A6C]/10 to-indigo/5',
    iconColor: '#262262',
    accentColor: '#C49A6C',
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
    gradient: 'from-[#C49A6C]/15 via-indigo/10 to-[#C49A6C]/8',
    iconColor: '#C49A6C',
    accentColor: '#262262',
    services: [
      'Leadership & Management Training',
      'Executive Coaching & Workshops',
      'Website & App Development',
      'E-commerce & System Integration',
      'Cloud Migration & Dashboards',
    ],
  },
];

function PillarIcon({ id, color, accent }) {
  const size = 56;
  switch (id) {
    case 'strategy':
      // Rising chart/growth arrow
      return (
        <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
          <rect x="4" y="4" width="48" height="48" rx="12" stroke={color} strokeWidth="1.5" opacity="0.15" />
          <path d="M16 36L26 24L32 30L42 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M36 18H42V24" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="42" cy="16" r="3" fill={accent} />
        </svg>
      );
    case 'development':
      // Handshake / partnership
      return (
        <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
          <rect x="4" y="4" width="48" height="48" rx="12" stroke={color} strokeWidth="1.5" opacity="0.15" />
          <path d="M18 22V32C18 34.2091 19.7909 36 22 36H24L28 30L32 36H34C36.2091 36 38 34.2091 38 32V28" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 22C16.8954 22 16 22.8954 16 24V28C16 29.1046 16.8954 30 18 30" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M38 28C39.1046 28 40 27.1046 40 26V22C40 20.8954 39.1046 20 38 20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="22" cy="20" r="3" fill={accent} />
        </svg>
      );
    case 'operations':
      // Gear / operations
      return (
        <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
          <rect x="4" y="4" width="48" height="48" rx="12" stroke={color} strokeWidth="1.5" opacity="0.15" />
          <circle cx="28" cy="28" r="8" stroke={color} strokeWidth="2" />
          <path d="M28 16V12M28 44V40M16 28H12M44 28H40M19.51 19.51L16.69 16.69M39.31 39.31L36.49 36.49M19.51 36.49L16.69 39.31M39.31 16.69L36.49 19.51" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <circle cx="28" cy="28" r="3" fill={accent} />
        </svg>
      );
    case 'people':
      // People / team
      return (
        <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
          <rect x="4" y="4" width="48" height="48" rx="12" stroke={color} strokeWidth="1.5" opacity="0.15" />
          <circle cx="20" cy="22" r="5" stroke={color} strokeWidth="2" />
          <path d="M10 36C10 30.477 14.477 26 20 26C25.523 26 30 30.477 30 36" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M26 22C29.314 22 32 19.314 32 16C32 12.686 29.314 10 26 10C25.176 10 24.392 10.153 23.667 10.437" stroke={accent} strokeWidth="2" strokeLinecap="round" />
          <circle cx="36" cy="24" r="4" stroke={accent} strokeWidth="2" />
          <path d="M28 34H44C44 29.582 40.418 26 36 26C31.582 26 28 29.582 28 34Z" stroke={accent} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

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
              {/* Image area — gradient with icon */}
              <div className={`relative h-44 bg-gradient-to-br ${pillar.gradient} flex items-center justify-center`}>
                {/* Pillar icon */}
                <PillarIcon id={pillar.id} color={pillar.iconColor} accent={pillar.accentColor} />
              </div>

              {/* Text content */}
              <div className="p-5 md:p-6">
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
