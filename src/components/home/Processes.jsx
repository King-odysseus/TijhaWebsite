import { useEffect, useRef, useState } from 'react';

const processes = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    desc: 'We begin with an in-depth consultation to assess your current state, identify key needs, and define clear success metrics and priorities.',
  },
  {
    step: '02',
    title: 'Proposal & Agreement',
    desc: 'We formalise the partnership through a tailored proposal, clear deliverables, and agreed terms to initiate the project.',
  },
  {
    step: '03',
    title: 'Diagnostic & Strategy Design',
    desc: 'We perform a detailed analysis of your operations mapping processes, reviewing data, and engaging stakeholders to design actionable strategies.',
  },
  {
    step: '04',
    title: 'Implementation & Support',
    desc: 'We execute the strategy through structured project delivery, technology optimisation, and change management to implement solutions.',
  },
  {
    step: '05',
    title: 'Evaluation & Optimization',
    desc: 'We assess performance through KPI tracking and continuous improvement, providing results reports and sustainable long-term support.',
  },
  {
    step: '06',
    title: 'Partnership Growth',
    desc: 'We build lasting partnerships through ongoing strategy reviews, expansion into new improvement areas, and co-creation of innovative solutions.',
  },
];

function Processes() {
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
    <section className="bg-[#F5F5F7] py-20 md:py-28" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div
          data-id="header"
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            animated['header'] ? 'opacity-100 translate-y-0' : ''
          }`}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C49A6C] mb-4">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#262262]">
            Our Processes
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            data-id="line"
            className={`absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-[#C49A6C]/25 md:-translate-x-px transition-transform duration-[1500ms] ease-out origin-top ${
              animated['line'] ? 'scale-y-100' : 'scale-y-0'
            }`}
          />

          <div className="space-y-10">
            {processes.map((p, i) => (
              <div
                key={p.step}
                data-id={p.step}
                className={`relative flex items-start gap-6 md:gap-0 transition-all duration-700 ease-out ${
                  animated[p.step] ? 'opacity-100 translate-x-0' : 'opacity-100'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Step circle */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#C49A6C] flex items-center justify-center shadow-lg transition-transform duration-500 ${
                      animated[p.step] ? 'scale-100' : 'scale-100'
                    }`}
                    style={{
                      transitionDelay: `${i * 150 + 100}ms`,
                      transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    <span className="text-[#262262] font-bold text-base md:text-lg">
                      {p.step}
                    </span>
                  </div>
                </div>

                {/* Spacer for left side on desktop */}
                <div className="hidden md:block md:w-1/2 md:pr-12" />

                {/* Card */}
                <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12">
                  <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border-t-4 border-[#C49A6C]">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C49A6C] mb-1 block">
                      Step {p.step}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-[#262262] mb-2 group-hover:text-[#C49A6C] transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#6b7280] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Processes;
