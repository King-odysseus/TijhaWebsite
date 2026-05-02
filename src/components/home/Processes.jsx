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
    <section className="section-padding bg-[#F5F5F7]">
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-indigo mb-4">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Our Processes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processes.map((p) => (
            <div key={p.step} className="neo-card p-8 hover:-translate-y-1 transition-transform duration-300">
              <span className="block text-5xl font-extrabold text-indigo/10 mb-4">{p.step}</span>
              <h3 className="text-lg font-bold text-brand-dark mb-3">{p.title}</h3>
              <p className="text-sm text-brand-body leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Processes;
