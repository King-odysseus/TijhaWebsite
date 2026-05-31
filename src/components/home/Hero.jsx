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
                <svg className="w-9 h-9 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172m-.981 3.172a2.25 2.25 0 01-2.41-2.923 2.237 2.237 0 011.857-1.667 2.248 2.248 0 012.249 1.418 7.507 7.507 0 013.585 0 2.248 2.248 0 012.249-1.418c.903.13 1.636.85 1.857 1.667a2.25 2.25 0 01-2.41 2.923m-4.996 0c-.276.868-.706 2.05-1.499 2.828m0 0c-.793-.779-1.223-1.96-1.499-2.828" />
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
