import { Link } from 'react-router-dom';

const solutions = [
  {
    title: 'Website & Web App Development',
    desc: 'Fast, responsive websites and web applications that look sharp, convert visitors, and scale with your business.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Digital Transformation & Tools',
    desc: 'We modernise how you work, introducing the right digital tools to streamline operations and unlock new efficiency.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'HR & Talent Management Systems',
    desc: 'Systems that simplify hiring, onboarding, payroll, and performance, so your people stay productive and engaged.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Inventory & Asset Management',
    desc: 'Track stock, assets, and resources in real time with tools that cut waste and keep operations running smoothly.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Accounting & Financial Tools',
    desc: 'Clear, automated financial systems for invoicing, reporting, and cash-flow visibility you can act on.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m-6 4h6m-6 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: 'Custom Software & Integrations',
    desc: 'Bespoke software and integrations that connect your tools and fit the exact way your organisation works.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

const benefits = [
  'Built around your workflow, not a rigid template',
  'Secure, reliable, and ready to scale',
  'Trained teams who can run it confidently',
  'Ongoing support and continuous improvement',
];

function SolutionsPage() {
  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-20 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-bronze mb-4">
                Our Solutions
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-brand-dark leading-tight mb-6">
                Digital Solutions Built Around <span className="text-bronze">Your Business.</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-brand-body leading-relaxed mb-8">
                From websites and internal systems to full digital transformation, we design and build practical technology that streamlines operations, strengthens your brand, and powers sustainable growth.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3.5 bg-bronze hover:bg-[#b8895c] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Start a Project
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1000&q=80&auto=format&fit=crop"
                alt="Abstract network of connected nodes"
                className="w-full h-72 md:h-[420px] object-cover rounded-3xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-2xl bg-bronze/15 -z-0 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="section-padding bg-[#F5F5F7]">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-bronze mb-4">What We Build</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark">Solutions for Every Stage of Growth</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s) => (
              <div key={s.title} className="group neo-card p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="neo-circle w-14 h-14 mb-5 text-indigo">{s.icon}</div>
                <h3 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-bronze transition-colors">{s.title}</h3>
                <p className="text-sm text-brand-body leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature band */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark mb-6">Technology That Works The Way You Do</h2>
              <p className="text-brand-body leading-relaxed mb-8">
                We don't just hand over software, we build solutions that fit your processes and equip your team to own them. Every tool is designed for clarity, reliability, and real-world use.
              </p>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="neo-circle w-7 h-7 flex-shrink-0 text-bronze mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-brand-body leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=1000&q=80&auto=format&fit=crop"
                alt="Hands collaborating over a laptop and notes"
                className="w-full h-72 md:h-[400px] object-cover rounded-3xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section
        className="relative py-24 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/images/Team.png')` }}
      >
        <div className="absolute inset-0 bg-indigo/85" />
        <div className="container-main relative z-10 text-center max-w-3xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Have a solution in mind?
          </h2>
          <p className="text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us what you're trying to achieve, and we'll design the right digital solution to get you there.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 bg-bronze hover:bg-[#b8895c] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SolutionsPage;
