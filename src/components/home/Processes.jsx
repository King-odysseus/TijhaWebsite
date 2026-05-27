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

function TimelineStep({ process, index, visible }) {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center w-full mb-12 md:mb-16 last:mb-0 transition-all duration-700 ease-out ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Desktop: alternating layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] w-full items-center gap-6">
        {/* Left side card (odd steps) */}
        <div className={isLeft ? 'block' : 'hidden'}>
          <TimelineCard process={process} index={index} align="right" />
        </div>
        <div className={isLeft ? 'hidden' : 'block md:invisible'}>
          {/* Placeholder to maintain grid alignment */}
          <div className="invisible">
            <TimelineCard process={process} index={index} align="left" />
          </div>
        </div>

        {/* Center circle */}
        <div className="relative flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#C49A6C] flex items-center justify-center shadow-lg z-10 transition-transform duration-300 hover:scale-110">
            <span className="text-[#262262] font-bold text-sm">{process.step}</span>
          </div>
        </div>

        {/* Right side card (even steps) */}
        <div className={!isLeft ? 'block' : 'hidden'}>
          <TimelineCard process={process} index={index} align="left" />
        </div>
        <div className={!isLeft ? 'hidden' : 'block md:invisible'}>
          <div className="invisible">
            <TimelineCard process={process} index={index} align="right" />
          </div>
        </div>
      </div>

      {/* Mobile: all left side */}
      <div className="md:hidden flex items-start gap-4 w-full">
        <div className="w-12 h-12 rounded-full bg-[#C49A6C] flex items-center justify-center shadow-lg flex-shrink-0 z-10">
          <span className="text-[#262262] font-bold text-sm">{process.step}</span>
        </div>
        <div className="flex-1">
          <div className="group bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-all duration-500 border-l-4 border-[#C49A6C]">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C49A6C] mb-1 block">
              Step {process.step}
            </span>
            <h3 className="text-base font-bold text-[#262262] mb-2 group-hover:text-[#C49A6C] transition-colors duration-300">
              {process.title}
            </h3>
            <p className="text-sm text-[#6b7280] leading-relaxed">
              {process.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineCard({ process, index, align }) {
  const slideClass =
    align === 'left'
      ? 'translate-x-8 group-hover:translate-x-6'
      : '-translate-x-8 group-hover:-translate-x-6';

  return (
    <div
      className={`group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-500 border-t-4 border-[#C49A6C] ${slideClass}`}
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C49A6C] mb-2 block">
        Step {process.step}
      </span>
      <h3 className="text-lg font-bold text-[#262262] mb-3 group-hover:text-[#C49A6C] transition-colors duration-300">
        {process.title}
      </h3>
      <p className="text-sm text-[#6b7280] leading-relaxed">
        {process.desc}
      </p>
    </div>
  );
}

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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-id]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F5F5F7] py-20 md:py-28 overflow-hidden" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          data-id="header"
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ease-out ${
            animated['header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
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
          {/* Center line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <div
              data-id="line"
              className={`w-full bg-[#C49A6C]/25 transition-all duration-[1500ms] ease-out origin-top ${
                animated['line'] ? 'scale-y-100 h-full' : 'scale-y-0 h-0'
              }`}
            />
          </div>

          {/* Mobile line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5">
            <div
              data-id="line-mobile"
              className={`w-full bg-[#C49A6C]/25 transition-all duration-[1500ms] ease-out origin-top ${
                animated['line-mobile'] ? 'scale-y-100 h-full' : 'scale-y-0 h-0'
              }`}
            />
          </div>

          {/* Steps */}
          {processes.map((p, i) => (
            <div key={p.step} data-id={`step-${p.step}`}>
              <TimelineStep
                process={p}
                index={i}
                visible={animated[`step-${p.step}`]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Processes;
