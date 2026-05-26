import { useState } from 'react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    id: 'strategy',
    title: 'Strategy & Growth',
    tagline: 'From vision to market leadership',
    description:
      'We help organisations build clear strategies, enter new markets, and accelerate revenue through data-driven decisions and structured execution.',
    services: [
      'Business Strategy Development',
      'Market Research & Intelligence',
      'Go-to-Market Strategy',
      'Sales Strategy & Revenue Growth',
      'Pricing & Competitor Analysis',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    stat: '8+',
    statLabel: 'Strategy Services',
    bgGradient: 'from-[#262262] to-[#1e1a4e]',
  },
  {
    id: 'development',
    title: 'Business Development',
    tagline: 'Partnerships, funding & expansion',
    description:
      'We connect businesses with the right stakeholders, prepare investment-ready materials, and support grants and operational rollouts.',
    services: [
      'Stakeholder Engagement Strategy',
      'Business Plan Development',
      'Investor Pitch Decks',
      'Grant Identification & Writing',
      'Change Management & Rollout',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    stat: '7+',
    statLabel: 'Growth Services',
    bgGradient: 'from-[#C49A6C] to-[#a87d52]',
  },
  {
    id: 'operations',
    title: 'Operations & Delivery',
    tagline: 'Efficiency, control & execution',
    description:
      'We streamline workflows, manage complex projects, and build the operational backbone that turns strategy into reliable results.',
    services: [
      'Operational Diagnostics & Mapping',
      'Workflow Optimization & Automation',
      'Cost & Resource Optimization',
      'Project Planning & Scheduling',
      'Risk Management & Reporting',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    stat: '15+',
    statLabel: 'Process Services',
    bgGradient: 'from-[#262262] to-[#1e1a4e]',
  },
  {
    id: 'people',
    title: 'People & Technology',
    tagline: 'Capability, systems & scale',
    description:
      'We build skilled teams through targeted training and deliver digital solutions — websites, apps, and cloud systems — that power modern business.',
    services: [
      'Leadership & Management Training',
      'Executive Coaching & Workshops',
      'Website & App Development',
      'E-commerce & System Integration',
      'Cloud Migration & Dashboards',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    stat: '18+',
    statLabel: 'Tech & Training',
    bgGradient: 'from-[#C49A6C] to-[#a87d52]',
  },
];

function ServiceOfferings() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C49A6C] mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#262262] mb-6">
            Our Service Offerings
          </h2>
          <p className="text-base md:text-lg text-[#6b7280] leading-relaxed">
            Four integrated pillars that cover every stage of your organisation's growth journey — from strategy to execution, from people to technology.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar) => {
            const isHovered = hovered === pillar.id;
            const isBronze = pillar.bgGradient.includes('C49A6C');

            return (
              <div
                key={pillar.id}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
                onMouseEnter={() => setHovered(pillar.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Top — Colored Banner with Centered Icon Circle */}
                <div
                  className={`relative flex flex-col items-center justify-center pt-10 pb-14 px-6 bg-gradient-to-br ${pillar.bgGradient} transition-transform duration-500 ${
                    isHovered ? 'scale-105' : 'scale-100'
                  }`}
                >
                  {/* Decorative blurred circle */}
                  <div
                    className={`absolute w-28 h-28 rounded-full opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                      isBronze ? 'bg-white' : 'bg-[#C49A6C]'
                    }`}
                  />

                  {/* Icon Circle */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                      isBronze
                        ? 'bg-[#262262] text-[#C49A6C]'
                        : 'bg-white text-[#262262]'
                    }`}
                  >
                    {pillar.icon}
                  </div>

                  {/* Stat below icon */}
                  <div className="relative z-10 mt-3 text-center">
                    <div
                      className={`text-2xl font-bold ${
                        isBronze ? 'text-[#262262]' : 'text-white'
                      }`}
                    >
                      {pillar.stat}
                    </div>
                    <div
                      className={`text-[10px] font-medium uppercase tracking-wider ${
                        isBronze ? 'text-[#262262]/70' : 'text-white/70'
                      }`}
                    >
                      {pillar.statLabel}
                    </div>
                  </div>
                </div>

                {/* Bottom — Text Content */}
                <div className="flex-1 px-6 pt-8 pb-6 flex flex-col relative">
                  {/* Bronze top border on hover */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-[#C49A6C] transition-all duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C49A6C] mb-1">
                    {pillar.tagline}
                  </span>

                  <h3 className="text-lg font-bold text-[#262262] mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#6b7280] leading-relaxed mb-4">
                    {pillar.description}
                  </p>

                  {/* Service bullets */}
                  <ul className="space-y-1.5 mb-5">
                    {pillar.services.map((svc) => (
                      <li
                        key={svc}
                        className="flex items-start gap-2 text-xs text-[#1f2937]"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-[#C49A6C] flex-shrink-0 mt-0.5"
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
                        {svc}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Link
                      to="/services"
                      className={`block w-full text-center py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                        isHovered
                          ? 'bg-[#C49A6C] text-[#262262] shadow-md'
                          : 'bg-[#262262] text-white'
                      }`}
                    >
                      <span className="inline-flex items-center justify-center gap-1">
                        View Services
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isHovered ? 'translate-x-0.5' : ''
                          }`}
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
                      </span>
                    </Link>
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

export default ServiceOfferings;
