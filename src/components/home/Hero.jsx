import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section
      className="w-full pt-20 pb-0 relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/Globe.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* White overlay so text is readable */}
      <div className="absolute inset-0 bg-white/85" />

      <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="pl-8 md:pl-16">
            <h1 className="animate-fade-in-up text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-extrabold text-indigo leading-tight mb-6">
              Your Partner In <span className="text-bronze">Digital And Operational</span> Excellence
            </h1>
            <p className="animate-fade-in-up-delay-1 text-brand-body leading-relaxed mb-8 text-sm sm:text-base md:text-lg">
              At Tijha, we bridge strategy with execution to transform how organizations operate and grow. Through data-driven insight and digital innovation, we deliver measurable impact and sustainable performance.
            </p>

            {/* Tagline */}
            <div className="animate-fade-in-up-delay-2 flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
                <span className="text-base md:text-lg font-bold text-indigo">Powering growth for SMEs, NGOs, enterprises, government, and startups</span>
              </div>
            </div>

            <Link
              to="/services"
              className="animate-fade-in-up-delay-2 inline-block px-8 py-4 neo-btn text-brand-dark font-semibold text-sm hover:text-bronze transition-colors"
            >
              See Services
            </Link>
          </div>
          <div className="flex items-end justify-center pl-8 md:pl-16">
            <img
              src="/images/Friendly%20ally.png"
              alt="Friendly ally illustration"
              className="w-4/5 h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
