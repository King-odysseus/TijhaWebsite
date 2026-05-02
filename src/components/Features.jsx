const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    title: 'Layouts',
    desc: 'We design structured business frameworks that align teams, processes, and goals for seamless execution.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Awards',
    desc: 'Recognised for excellence in management consulting, digital transformation, and business development across sectors.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Cups of Coffee',
    desc: 'Countless hours of collaboration, workshops, and strategy sessions fuel every solution we deliver.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8M3 21h18M5 21v-8a2 2 0 012-2h14a2 2 0 012 2v8m-2-8h-2m-2 0h-2m-2 0H9m-2 0H5" />
      </svg>
    ),
    title: 'Projects',
    desc: 'A growing portfolio of successful engagements spanning SMEs, NGOs, corporates, and government bodies.',
  },
];

function Features() {
  return (
    <section id="features" className="section-padding bg-[#F5F5F7]">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="neo-card p-6">
                <div className="neo-circle w-12 h-12 text-indigo mb-4">
                  {f.icon}
                </div>
                <h3 className="text-base font-bold text-brand-dark mb-2">{f.title}</h3>
                <p className="text-sm text-brand-body leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Right: Video Placeholder */}
          <div className="relative">
            <div className="neo-card aspect-video flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e0e0e5] to-[#f0f0f3]" />
              <button className="relative z-10 neo-circle w-16 h-16 text-indigo hover:scale-105 transition-transform">
                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <p className="text-center text-sm text-brand-body mt-4">Watch our story</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
