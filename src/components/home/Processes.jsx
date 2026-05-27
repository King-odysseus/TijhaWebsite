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
      <div className="max-w-6xl mx-auto px-6">
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
          {/* Vertical line — draws from bottom up */}
          <div
            data-id="line"
            className={`absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-[#C49A6C]/25 md:-translate-x-px transition-transform duration-[1500ms] ease-out origin-bottom ${
              animated['line'] ? 'scale-y-100' : 'scale-y-0'
            }`}
          />

          <div className="space-y-12 md:space-y-16">
            {processes.map((p, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={p.step}
                  data-id={p.step}
                  className="relative md:flex md:items-start md:justify-center"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Step circle */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 top-0">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#C49A6C] flex items-center justify-center shadow-lg">
                      <span className="text-[#262262] font-bold text-base md:text-lg">
                        {p.step}
                      </span>
                    </div>
                  </div>

                  {/* Card — left on even, right on odd */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[46%] ${
                      isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <div className="group bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border-t-4 border-[#C49A6C]">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C49A6C] mb-2 block">
                        Step {p.step}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-[#262262] mb-3 group-hover:text-[#C49A6C] transition-colors duration-300">
                        {p.title}
                      </h3>
                      <p className="text-sm md:text-base text-[#6b7280] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Processes;
