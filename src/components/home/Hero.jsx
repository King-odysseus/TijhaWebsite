import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section
      className="w-full pt-36 pb-12 md:pt-40 lg:pb-0 relative overflow-hidden"
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
          <div className="order-2 lg:order-1 pl-8 md:pl-16">
            <h1 className="animate-fade-in-up text-3xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-5xl font-extrabold text-indigo leading-tight mb-6">
              Your Partner In <span className="text-bronze text-shadow-bronze">Digital And Operational</span> Excellence
            </h1>
            <p className="animate-fade-in-up-delay-1 text-brand-body leading-relaxed mb-8 text-sm sm:text-base md:text-lg">
              At Tijha, we bridge strategy with execution to transform how organizations operate and grow. Through data-driven insight and digital innovation, we deliver measurable impact and sustainable performance, powering growth for SMEs, NGOs, enterprises, government, and startups.
            </p>

            <Link
              to="/services"
              className="animate-fade-in-up-delay-2 inline-block px-8 py-4 neo-btn text-indigo font-semibold text-sm hover:text-bronze transition-colors"
            >
              See Services
            </Link>
          </div>
          <div className="hidden lg:order-2 lg:flex items-end justify-center pl-8 md:pl-16">
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
