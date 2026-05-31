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
            <h1 className="animate-fade-in-up text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-extrabold text-indigo leading-tight mb-6">
              Your Partner In <span className="text-bronze">Digital And Operational</span> Excellence
            </h1>
            <p className="animate-fade-in-up-delay-1 text-brand-body leading-relaxed mb-8 text-sm sm:text-base md:text-lg">
              At Tijha, we bridge strategy with execution to transform how organizations operate and grow. Through data-driven insight and digital innovation, we deliver measurable impact and sustainable performance.
            </p>

            {/* Trusted by */}
            <div className="animate-fade-in-up-delay-2 flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-brand-body text-sm font-medium">
                <svg className="w-7 h-7 text-indigo" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.746 3.746 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <span>Trusted by</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="text-base md:text-lg font-bold text-indigo">SME, NGO, Company, Government, Startup</span>
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
