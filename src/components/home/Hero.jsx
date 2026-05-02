import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="w-full bg-white pt-12 pb-0">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6">
              Your partner in digital and operational excellence
            </h1>
            <p className="text-brand-body leading-relaxed mb-8 text-base md:text-lg">
              At Tijha, we bridge strategy with execution to transform how organizations operate and grow. Through data-driven insight and digital innovation, we deliver measurable impact and sustainable performance.
            </p>

            {/* Trusted by */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-brand-body text-sm font-medium">
                <svg className="w-5 h-5 text-bronze" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4.9c1.67 0 3.07 1.13 3.55 2.67l-1.16.39c-.33-.99-1.26-1.71-2.39-1.71s-2.06.72-2.39 1.71l-1.16-.39C8.93 7.03 10.33 5.9 12 5.9zM12 19c-3.86-1.14-6.83-4.58-7.15-8.9h1.52c.29 3.22 2.53 5.93 5.63 6.78V19zm0-2.23V10h1.5v3.41l2.33 2.33-1.06 1.06L12 14.65z" />
                </svg>
                <span>Trusted by</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="text-sm font-semibold text-indigo">SMEs</span>
                <span className="text-sm font-semibold text-indigo">NGOs</span>
                <span className="text-sm font-semibold text-indigo">Corporates</span>
                <span className="text-sm font-semibold text-indigo">Government</span>
                <span className="text-sm font-semibold text-indigo">Startups</span>
              </div>
            </div>

            <Link
              to="/services"
              className="inline-block px-8 py-4 neo-btn text-brand-dark font-semibold text-sm hover:text-bronze transition-colors"
            >
              See Services
            </Link>
          </div>
          <div className="flex items-center justify-center pl-8 md:pl-16">
            <img
              src="/images/Friendly%20ally.png"
              alt="Friendly ally illustration"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
