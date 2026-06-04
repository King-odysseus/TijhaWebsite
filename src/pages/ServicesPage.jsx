import { Link } from 'react-router-dom';
import { useState } from 'react';

const deliverables = [
  'Clear strategy and actionable plans',
  'Digital solutions supporting growth and innovation',
  'Improved operational efficiency and process optimisation',
  'Strengthened team capability and leadership',
  'Measurable impact aligned with business goals',
];

const approach = [
  { step: '01', title: 'Discover & Assess', desc: 'We start by understanding your organisational goals, challenges, and market context.' },
  { step: '02', title: 'Design & Plan', desc: 'We develop tailored strategies and solutions mapped to clear priorities and outcomes.' },
  { step: '03', title: 'Deliver & Implement', desc: 'We execute with discipline, using proven tools and frameworks alongside your team.' },
  { step: '04', title: 'Monitor & Optimise', desc: 'We track progress, measure results, and adapt to keep improvements on course.' },
  { step: '05', title: 'Build Capability', desc: 'We equip your teams to sustain the improvements independently, long after delivery.' },
];

const serviceAreas = [
  {
    title: 'Management Consulting',
    intro: 'We turn scattered ideas into clear strategy, sharp execution, and sustainable growth.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    subs: [
      { name: 'Business Strategy Development', desc: 'We design growth roadmaps, business models, and go-to-market plans aligned to your market realities and organisational strengths.' },
      { name: 'Market Research & Intelligence', desc: 'We uncover customer needs, size market opportunities, and benchmark your position against competitors with data-driven rigour.' },
      { name: 'Sales & Revenue Growth', desc: 'We build sales strategies, customer acquisition systems, and lead generation engines that drive consistent, measurable revenue.' },
      { name: 'Business Development', desc: 'From investor pitch decks to grant proposals and stakeholder engagement, we unlock new funding and partnership opportunities.' },
      { name: 'Operations & Process Optimisation', desc: 'We diagnose inefficiencies, redesign workflows, and implement automation so your operations run leaner and faster.' },
    ],
  },
  {
    title: 'Digital Solutions',
    intro: 'We create tailored digital products that streamline operations, elevate your brand, and modernise your organisation.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    subs: [
      { name: 'Website & Web App Development', desc: 'Custom, responsive websites and web applications built to modern standards for performance, accessibility, and scale.' },
      { name: 'Mobile App Development', desc: 'Native and cross-platform mobile applications that extend your reach and keep your users engaged wherever they are.' },
      { name: 'E-commerce & Payment Integration', desc: 'Online stores with seamless payment gateways, inventory management, and order fulfilment systems that convert browsers into buyers.' },
      { name: 'Cloud Migration & System Integration', desc: 'We move your infrastructure to the cloud and connect your tools so data flows without friction across your organisation.' },
      { name: 'Data Dashboards & Internal Tools', desc: 'Real-time dashboards and custom internal applications that give your team visibility and control over key metrics.' },
    ],
  },
  {
    title: 'Project Management',
    intro: 'End-to-end delivery with disciplined planning. Our certified PMP and PRINCE2 consultants bring best-practice standards to every engagement.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    subs: [
      { name: 'Project Planning & Scheduling', desc: 'Detailed work breakdown structures, timelines, and milestone maps built with PMP and PRINCE2 rigour.' },
      { name: 'Risk Management & Issue Resolution', desc: 'We identify threats early, plan mitigations, and resolve roadblocks before they derail delivery.' },
      { name: 'Budgeting & Cost Control', desc: 'Transparent cost tracking, variance analysis, and financial oversight to keep your project on budget from start to finish.' },
      { name: 'Stakeholder Communication & Reporting', desc: 'Structured reporting cadences and communication plans that keep everyone aligned and informed throughout the project lifecycle.' },
      { name: 'Project Closure & Evaluation', desc: 'Formal close-out with lessons learned, benefits realisation review, and handover documentation for sustained success.' },
    ],
  },
  {
    title: 'Training & Capacity',
    intro: 'We develop your people through leadership programmes, coaching, and capability building that sticks.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    subs: [
      { name: 'Leadership & Management Training', desc: 'Programmes that build decision-making, emotional intelligence, and people management skills at every level of your organisation.' },
      { name: 'Executive Coaching', desc: 'One-on-one coaching for senior leaders focused on strategic thinking, influence, and sustained personal effectiveness.' },
      { name: 'Custom Training & Corporate Workshops', desc: 'Tailored workshops and strategic planning sessions designed around your specific team needs and business context.' },
      { name: 'Capability Assessment & Skills Audits', desc: 'We assess your team\'s strengths and gaps, then build targeted learning pathways and mentoring programmes to close them.' },
      { name: 'E-learning & Certification Pathways', desc: 'Digital learning platforms and structured certification tracks that enable continuous development at scale.' },
    ],
  },
  {
    title: 'Sustainability & ESG Advisory',
    intro: 'We help organisations measure impact, report transparently, and embed responsible growth practices.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 21c0-3 1.85-5.36 5.08-6" />
      </svg>
    ),
    subs: [
      { name: 'ESG Strategy & Roadmapping', desc: 'We design sustainability frameworks aligned with global standards — GRI, SASB — and your specific business goals.' },
      { name: 'Impact Measurement & Reporting', desc: 'We quantify environmental and social impact, prepare sustainability reports, and track metrics over time with rigour.' },
      { name: 'Stakeholder Engagement for ESG', desc: 'We help you communicate your sustainability story clearly to investors, customers, regulators, and communities.' },
      { name: 'Responsible Supply Chain Advisory', desc: 'Assess and improve supplier practices for ethics, environmental footprint, and social compliance across your value chain.' },
    ],
  },
];

const whyChoose = [
  'Blended expertise in management and technology',
  'Hands-on, practical delivery with measurable results',
  'A focus on building your internal capability',
  'Proven frameworks aligned with global standards',
  'A transparent, accountable, client-focused approach',
];

function Check({ className = '' }) {
  return (
    <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ServicesPage() {
  const [openArea, setOpenArea] = useState(null);

  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-20 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-bronze mb-4">
                Our Services
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-brand-dark leading-tight mb-6">
                Intelligence, Innovation, and Execution, <span className="text-bronze">Delivered Together.</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-brand-body leading-relaxed mb-8">
                We unite management expertise with modern technology to deliver immediate impact and sustainable growth, helping your organisation operate smarter, faster, and more sustainably.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3.5 bg-bronze hover:bg-[#b8895c] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Book a Consultation
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1644088379091-d574269d422f?w=1000&q=80&auto=format&fit=crop"
                alt="Abstract network representing intelligence and execution"
                className="w-full h-72 md:h-[420px] object-cover rounded-3xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-2xl bg-bronze/15 -z-0 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Why our services matter + What we deliver */}
      <section className="section-padding bg-[#F5F5F7]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-2">
              <img
                src="/images/business-development.jpg"
                alt="Partnership handshake"
                className="w-full h-[420px] md:h-[520px] object-cover rounded-3xl shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark mb-6">Why Our Services Matter</h2>
              <p className="text-brand-body leading-relaxed mb-4">
                Organisations face scattered priorities, unclear processes, and stretched resources, leading to inefficiencies and frustrated teams.
              </p>
              <p className="text-brand-body leading-relaxed mb-8">
                Tijha closes these gaps with tailored solutions that bring focus, structure, and momentum, so your people and your strategy move in the same direction.
              </p>
              <h3 className="text-sm font-bold uppercase tracking-wider text-indigo mb-4">What We Deliver</h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="neo-circle w-7 h-7 flex-shrink-0 text-bronze mt-0.5"><Check /></span>
                    <span className="text-sm text-brand-body leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Five-stage approach */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-[#F0EDF7] via-[#F8F7FC] to-[#F0EDF5]">
        {/* Decorative blurred blobs behind glass cards */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo/8 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-bronze/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo/4 rounded-full blur-3xl" />
        <div className="container-main relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-bronze mb-4">How We Work</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark">Our Approach</h2>
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {/* Connecting line running through the numbered circles (desktop only) */}
            <div className="pointer-events-none absolute top-7 left-[10%] right-[10%] h-px bg-indigo/20 hidden lg:block" />
            {approach.map((s) => (
              <div key={s.step} className="flex h-full flex-col items-center text-center">
                <div className="glass-circle relative z-10 w-14 h-14 mb-5 text-indigo font-bold">{s.step}</div>
                <div className="glass-card w-full flex-1 p-6">
                  <h3 className="text-base font-bold text-indigo mb-2">{s.title}</h3>
                  <p className="text-sm text-brand-body leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="section-padding bg-[#F5F5F7]">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-bronze mb-4">What We Offer</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark">Service Areas</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Accordion column */}
            <div className="space-y-4 order-2 lg:order-1">
              {serviceAreas.map((area) => {
                const isOpen = openArea === area.title;
                return (
                  <div key={area.title} className={`neo-card overflow-hidden transition-all duration-300 ${isOpen ? 'ring-2 ring-bronze/30' : ''}`}>
                    <button
                      onClick={() => setOpenArea(isOpen ? null : area.title)}
                      className="w-full flex items-center gap-4 px-6 py-5 text-left transition-colors"
                    >
                      <span className={`neo-circle w-11 h-11 flex-shrink-0 transition-colors ${isOpen ? 'text-bronze bg-white' : 'text-indigo bg-white'}`}>
                        {area.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-lg font-bold transition-colors ${isOpen ? 'text-bronze' : 'text-brand-dark'}`}>{area.title}</h3>
                        <p className="text-sm text-brand-body leading-relaxed mt-0.5 line-clamp-1">{area.intro}</p>
                      </div>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-bronze' : 'text-brand-body'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-t border-silver pt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {area.subs.map((sub) => (
                            <div key={sub.name} className="flex items-start gap-3">
                              <span className="neo-circle w-7 h-7 flex-shrink-0 text-bronze mt-0.5"><Check /></span>
                              <div>
                                <h4 className="text-sm font-semibold text-brand-dark mb-1">{sub.name}</h4>
                                <p className="text-xs text-brand-body leading-relaxed">{sub.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Image column */}
            <div className="order-1 lg:order-2">
              <img
                src="/images/business-meeting.jpg"
                alt="African business professionals in a meeting"
                className="w-full h-[420px] md:h-[560px] object-cover rounded-3xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose Tijha */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image column */}
            <div className="order-1 lg:order-2">
              <img
                src="/images/business-team-discussion.jpg"
                alt="Business team standing together discussing over a laptop"
                className="w-full h-[420px] md:h-[560px] object-cover rounded-2xl shadow-md"
                loading="lazy"
              />
            </div>

            {/* Content column */}
            <div className="order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark mb-8">
                Why Choose Tijha
              </h2>
              <div className="space-y-4">
                {whyChoose.map((item) => (
                  <div key={item} className="neo-card-sm p-5 flex items-start gap-3">
                    <span className="neo-circle w-8 h-8 flex-shrink-0 text-bronze"><Check /></span>
                    <span className="text-brand-body leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section
        className="relative py-24 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/images/cta-team-working.jpg')` }}
      >
        <div className="absolute inset-0 bg-indigo/85" />
        <div className="container-main relative z-10 text-center max-w-3xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to move from ideas to impact?
          </h2>
          <p className="text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Your goals deserve more than ideas, they require structured solutions, disciplined execution, and teams empowered to succeed.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 bg-bronze hover:bg-[#b8895c] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
