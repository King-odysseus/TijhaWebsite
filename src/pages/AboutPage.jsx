import { Link } from 'react-router-dom';

const values = [
  {
    title: 'Integrity',
    desc: 'We do what is right, stay transparent, and earn trust through every interaction.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />,
  },
  {
    title: 'Innovation',
    desc: 'We pair fresh thinking with modern technology to solve problems in better ways.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 18h6m-5 3h4M10 3a6 6 0 016 6c0 2.2-1.2 3.6-2 4.5-.6.7-1 1.2-1 2.5H9c0-1.3-.4-1.8-1-2.5-.8-.9-2-2.3-2-4.5a6 6 0 014-5.8z" />,
  },
  {
    title: 'Collaboration',
    desc: 'We work alongside your team, sharing knowledge so progress sticks.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
  },
  {
    title: 'Excellence',
    desc: 'We hold our work to high standards and deliver results we are proud of.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.5l2.4 4.87 5.37.78-3.89 3.79.92 5.35-4.8-2.52-4.8 2.52.92-5.35L3.1 9.15l5.37-.78 2.4-4.87z" />,
  },
  {
    title: 'Impact',
    desc: 'We measure success by the real, lasting change we create for clients.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17l6-6 4 4 8-8M21 7v6m0-6h-6" />,
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Teams Trained' },
  { value: '120+', label: 'Processes Optimised' },
  { value: '98%', label: 'Client Success Rate' },
];

const approach = [
  { step: '01', title: 'Discover & Assess' },
  { step: '02', title: 'Design & Plan' },
  { step: '03', title: 'Deliver & Implement' },
  { step: '04', title: 'Monitor & Optimise' },
  { step: '05', title: 'Build Capability' },
];

const people = [
  {
    title: 'Board of Consultants',
    desc: 'Seasoned industry professionals with over a decade of experience in management consulting, sustainability, digital transformation, and public sector reform.',
    expertise: 'Large-scale organisational transformations, market expansion strategies, ESG compliance, and policy implementation.',
    quals: 'MBAs, MSc in Development Studies, PMP and PRINCE2 certifications, CCMP, and other sector-specific accreditations.',
  },
  {
    title: 'Core Team',
    desc: 'Drives day-to-day delivery, combining analytical insight, operational efficiency, and technical innovation.',
    expertise: 'Business development, market access facilitation, project delivery, process optimisation, and digital solution deployment.',
    quals: "Bachelor's and master's degrees in Business Administration, Economics, or IT, alongside agile and project management certifications.",
  },
  {
    title: 'Collaborators',
    desc: 'External subject matter experts and partner organisations engaged when specific expertise is required.',
    expertise: 'Sustainability reporting (GRI, SASB), sector-focused process design, NGO fundraising, leadership development, and regional trade facilitation.',
    quals: 'Postgraduate degrees, certified trainers, and consultants with over 10 years of proven industry impact.',
  },
];

function AboutPage() {
  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-20 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-bronze mb-4">
                About Us
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-brand-dark leading-tight mb-6">
                A Team That Stands <span className="text-bronze">Beside You</span>, Not Just Behind You.
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-brand-body leading-relaxed">
                Tijha is a forward-looking consulting and IT solutions firm dedicated to helping businesses unlock growth, efficiency, and digital transformation, from startups to established organisations.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/Team.png"
                alt="The Tijha team"
                className="w-full h-72 md:h-[420px] object-cover rounded-3xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-2xl bg-bronze/15 -z-0 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="section-padding bg-[#F5F5F7]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/business-development.jpg"
                alt="A partnership in action"
                className="w-full h-72 md:h-[400px] object-cover rounded-3xl shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark mb-6">Our Purpose</h2>
              <p className="text-brand-body leading-relaxed mb-4">
                We exist to close the gap between planning and doing for African organisations, converting strategic plans into actionable solutions that work in practice, not just on paper.
              </p>
              <p className="text-brand-body leading-relaxed">
                Our decisions are guided by industry experts from diverse backgrounds, with a relentless focus on collaboration and client-centred problem solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
            <div className="neo-card p-8">
              <div className="neo-circle w-12 h-12 mb-5 text-indigo">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-indigo mb-3">Our Mission</h3>
              <p className="text-brand-body leading-relaxed">
                To help organisations reach their goals through tailored strategies, efficient processes, and smart technology.
              </p>
            </div>
            <div className="neo-card p-8">
              <div className="neo-circle w-12 h-12 mb-5 text-indigo">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-indigo mb-3">Our Vision</h3>
              <p className="text-brand-body leading-relaxed">
                To become a trusted transformation partner for sustainable growth across Africa.
              </p>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-bronze mb-4">What Drives Us</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v) => (
              <div key={v.title} className="neo-card p-6 text-center">
                <div className="neo-circle w-12 h-12 mx-auto mb-4 text-bronze">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{v.icon}</svg>
                </div>
                <h3 className="text-base font-bold text-indigo mb-2">{v.title}</h3>
                <p className="text-xs text-brand-body leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section
        className="relative py-20 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/images/Best Team.png')` }}
      >
        <div className="absolute inset-0 bg-indigo/85" />
        <div className="container-main relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-bronze mb-2">{s.value}</div>
                <div className="text-sm md:text-base text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding bg-[#F5F5F7]">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-bronze mb-4">How We Work</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark">Our Methodology</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {approach.map((s) => (
              <div key={s.step} className="neo-card p-6 text-center">
                <div className="neo-circle w-14 h-14 mx-auto mb-4 text-indigo font-bold">{s.step}</div>
                <h3 className="text-sm font-bold text-indigo">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our People */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark mb-4">Our People</h2>
            <p className="text-brand-body leading-relaxed">
              At Tijha, our strength lies in the calibre, diversity, and dedication of the people behind our work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {people.map((group) => (
              <div key={group.title} className="neo-card p-8">
                <h3 className="text-xl font-bold text-brand-dark mb-3">{group.title}</h3>
                <p className="text-sm text-brand-body leading-relaxed mb-4">{group.desc}</p>
                <div className="mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo">Expertise</span>
                  <p className="text-sm text-brand-body mt-1">{group.expertise}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo">Qualifications</span>
                  <p className="text-sm text-brand-body mt-1">{group.quals}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="container-main text-center max-w-3xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
            Let's build something that lasts.
          </h2>
          <p className="text-brand-body leading-relaxed mb-10 max-w-2xl mx-auto">
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

export default AboutPage;
