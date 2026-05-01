const values = [
  {
    num: '01',
    title: 'Easy & Robust',
    desc: 'Solutions designed for simplicity without sacrificing power or reliability.',
  },
  {
    num: '02',
    title: 'Huge Collection',
    desc: 'A comprehensive suite of services covering strategy, digital, and operations.',
  },
  {
    num: '03',
    title: 'Responsive & Retina',
    desc: 'Adaptive strategies that respond to market changes with crystal-clear focus.',
  },
  {
    num: '04',
    title: 'Customizable Options',
    desc: 'Tailored approaches shaped around your unique organisational needs.',
  },
];

function CompanyValues() {
  return (
    <section id="values" className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Company Values</h2>
          <p className="text-brand-body max-w-2xl mx-auto leading-relaxed">
            At Tijha, our values guide every engagement. We combine integrity, innovation, and impact to deliver lasting results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div key={v.num} className="neo-card p-8 text-center hover:-translate-y-1 transition-transform duration-300">
              <span className="block text-4xl font-extrabold text-brand-blue/20 mb-4">{v.num}</span>
              <h3 className="text-lg font-bold text-brand-dark mb-3">{v.title}</h3>
              <p className="text-sm text-brand-body leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanyValues;
