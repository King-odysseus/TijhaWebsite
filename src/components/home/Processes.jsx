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
  return (
    <section className="bg-[#F5F5F7] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
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
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#C49A6C]/30 md:-translate-x-px" />

          {processes.map((p, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={p.step}
                className={`relative flex items-start gap-8 md:gap-0 mb-12 last:mb-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <div
                  className={`flex-1 md:w-[45%] ${
                    isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] text-[#C49A6C] mb-2">
                      Step {p.step}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-[#262262] mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#6b7280] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>

                {/* Center node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#262262] to-[#1e1a4e] flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {p.step}
                    </span>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Processes;
