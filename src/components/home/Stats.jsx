const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '2,000+', label: 'Teams Trained' },
  { value: '300+', label: 'Processes Optimised' },
  { value: '98%', label: 'Client Success Rate' },
];

function Stats() {
  return (
    <section className="py-20 bg-[#F5F5F7]">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Reach So Far</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="neo-card p-8 text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-2">{s.value}</div>
              <div className="text-sm text-brand-body font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
