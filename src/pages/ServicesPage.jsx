import { Link } from 'react-router-dom';

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
    desc: 'We turn scattered ideas into clear strategy, sharp execution, and sustainable growth through market insights, sales enablement, and operational improvement.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Digital Solutions',
    desc: 'We create tailored digital and management solutions for operational streamlining, brand presence, and organisational modernisation.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80&auto=format&fit=crop',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Project Management',
    desc: 'End-to-end delivery with disciplined planning. Our certified PMP and PRINCE2 consultants bring best-practice standards to every engagement.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80&auto=format&fit=crop',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Training & Capacity',
    desc: 'Leadership, project, and HR solutions that drive performance, engagement, and sustainable workforce development.',
    image: 'https://images.unsplash.com/photo-1550592704-6c76defa9985?w=800&q=80&auto=format&fit=crop',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Sustainability & ESG Advisory',
    desc: 'We help organisations measure impact, report transparently, and embed responsible growth practices aligned with ESG standards.',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80&auto=format&fit=crop',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 21c0-3 1.85-5.36 5.08-6" />
      </svg>
    ),
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
            <div className="order-2 lg:order-1">
              <img
                src="/images/business-development.jpg"
                alt="Partnership handshake"
                className="w-full h-72 md:h-[400px] object-cover rounded-3xl shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
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
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-bronze mb-4">How We Work</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark">Our Approach</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {approach.map((s) => (
              <div key={s.step} className="neo-card p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="neo-circle w-14 h-14 mx-auto mb-4 text-indigo font-bold">{s.step}</div>
                <h3 className="text-base font-bold text-indigo mb-2">{s.title}</h3>
                <p className="text-sm text-brand-body leading-relaxed">{s.desc}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area) => (
              <div key={area.title} className="group neo-card overflow-hidden flex flex-col">
                {/* Image header with overlapping icon badge */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-indigo/45" />
                  <div className="absolute -bottom-6 left-6 neo-circle w-12 h-12 text-indigo bg-white">
                    {area.icon}
                  </div>
                </div>
                <div className="p-6 pt-9 flex-1">
                  <h3 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-bronze transition-colors">{area.title}</h3>
                  <p className="text-sm text-brand-body leading-relaxed">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose Tijha */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark">Why Choose Tijha</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyChoose.map((item) => (
              <div key={item} className="neo-card-sm p-5 flex items-start gap-3">
                <span className="neo-circle w-8 h-8 flex-shrink-0 text-bronze"><Check /></span>
                <span className="text-brand-body leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section
        className="relative py-24 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/images/Best Team.png')` }}
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
