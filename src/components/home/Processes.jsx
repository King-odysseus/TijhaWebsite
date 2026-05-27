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
      <div className="max-w-7xl mx-auto px-6">
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

        {/* Desktop: 3x2 grid with horizontal line at bottom */}
        <div className="hidden md:block relative">
          {/* Horizontal line at bottom — draws left to right */}
          <div
            data-id="line"
            className={`absolute left-0 right-0 bottom-6 h-0.5 bg-[#C49A6C]/25 transition-transform duration-[1500ms] ease-out origin-left ${
              animated['line'] ? 'scale-x-100' : 'scale-x-0'
            }`}
          />

          <div className="grid grid-cols-3 gap-x-8 gap-y-12 pb-16">
            {processes.map((p, i) => (
              <div
                key={p.step}
                data-id={p.step}
                className={`relative flex flex-col items-center text-center transition-all duration-700 ease-out ${
                  animated[p.step] ? 'opacity-100 translate-y-0' : 'opacity-100'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Card */}
                <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border-t-4 border-[#C49A6C] w-full">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C49A6C] mb-2 block">
                    Step {p.step}
                  </span>
                  <h3 className="text-lg font-bold text-[#262262] mb-3 group-hover:text-[#C49A6C] transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                {/* Step circle on the bottom line */}
                <div className="mt-8 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#C49A6C] flex items-center justify-center shadow-lg">
                    <span className="text-[#262262] font-bold text-sm">
                      {p.step}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden space-y-8">
          {processes.map((p, i) => (
            <div
              key={p.step}
              data-id={`m-${p.step}`}
              className="relative"
            >
              {/* Connector line */}
              {i < processes.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-0.5 h-[calc(100%-2rem)] bg-[#C49A6C]/25" />
              )}

              <div className="flex items-start gap-4">
                {/* Step circle */}
                <div className="w-12 h-12 rounded-full bg-[#C49A6C] flex items-center justify-center shadow-lg flex-shrink-0 z-10">
                  <span className="text-[#262262] font-bold text-sm">
                    {p.step}
                  </span>
                </div>

                {/* Card */}
                <div className="group flex-1 bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-all duration-500 border-t-4 border-[#C49A6C]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C49A6C] mb-1 block">
                    Step {p.step}
                  </span>
                  <h3 className="text-base font-bold text-[#262262] mb-2 group-hover:text-[#C49A6C] transition-colors duration-300">
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
    </section>
  );
}

export default Processes;
