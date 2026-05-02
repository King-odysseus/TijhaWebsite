import { Link } from 'react-router-dom';

function HeroBanner() {
  return (
    <section
      className="w-full py-20 md:py-32 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/Team.png')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-indigo/75" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo/40 via-transparent to-indigo/60" />

      <div className="container-main relative z-10 flex flex-col items-center text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center max-w-3xl mx-auto text-white leading-[1.2] font-bold tracking-tight mt-[40px] mb-[20px]">
          Your partner in digital and operational excellence
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-white/70 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          At Tijha, we bridge strategy with execution to transform how organizations operate and grow. Through data-driven insight and digital innovation, we deliver measurable impact and sustainable performance.
        </p>

        {/* CTA Button */}
        <Link
          to="/services"
          className="bg-bronze hover:bg-[#b8895c] text-indigo text-sm md:text-base px-8 py-3.5 rounded-full transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold"
        >
          See Services
        </Link>

        {/* Client Bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mx-auto mt-16">
          <span className="text-sm font-bold text-white uppercase tracking-wider">SMEs</span>
          <span className="text-sm font-bold text-white uppercase tracking-wider">NGOs</span>
          <span className="text-sm font-bold text-white uppercase tracking-wider">Corporates</span>
          <span className="text-sm font-bold text-white uppercase tracking-wider">Government</span>
          <span className="text-sm font-bold text-white uppercase tracking-wider">Startups</span>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
