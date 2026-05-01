import { Link } from 'react-router-dom';

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Management Consulting',
    desc: 'We help businesses turn scattered ideas into clear strategy, sharp execution, and sustainable growth by giving organisations the structure and momentum they typically lack.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Project Management',
    desc: 'We manage projects end-to-end with disciplined planning, clear communication, and expert control, ensuring timely, reliable delivery while building your team\'s long-term project capability.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Digital Solutions',
    desc: 'We build tailored digital and management solutions that streamline operations, elevate brand presence, and modernise how organisations work with clarity and confidence.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Training & Capacity',
    desc: 'We empower organisations to build skilled, adaptable teams through leadership, project, and HR solutions that drive performance, engagement, and sustainable growth.',
  },
];

function ServiceOverview() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Our Service Offerings</h2>
          <p className="text-brand-body max-w-3xl mx-auto leading-relaxed">
            At Tijha, we provide a suite of consulting and digital solutions designed to help organisations operate smarter, faster, and more sustainably. Our services span business process optimisation, project management, and digital transformation enabling clients to streamline operations, improve efficiency, and deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="neo-card p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="neo-circle w-14 h-14 text-brand-blue mb-5">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{s.title}</h3>
              <p className="text-sm text-brand-body leading-relaxed mb-5">{s.desc}</p>
              <Link to="/services" className="text-sm font-semibold text-brand-blue hover:underline">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceOverview;
