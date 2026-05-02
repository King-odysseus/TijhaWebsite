import { Link } from 'react-router-dom';

function HeroBanner() {
  return (
    <section
      className="w-full py-20 md:py-32 py-[50px] relative overflow-hidden bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url('/images/Best Team.png')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-indigo/75" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo/40 via-transparent to-indigo/60" />

      <div className="container-main relative z-10 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze mb-4">
          <span className="inline-block w-8 h-0.5 bg-bronze rounded-full" />
          Who We Are
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center max-w-3xl mx-auto text-white leading-[1.2] font-bold tracking-tight mt-[40px] mb-[20px]">
          Your Partner In <span className="text-bronze">Digital And Operational</span> Excellence
        </h2>

        <p className="text-base md:text-lg text-white/70 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          We believe that true growth comes from aligning innovation with operational excellence, ensuring that every decision creates lasting value. By combining strategic insight with practical solutions, we help organizations not only achieve their immediate goals but also build resilient systems that thrive in the long term.
        </p>

        <Link
          to="/about"
          className="bg-bronze hover:bg-[#b8895c] text-indigo text-sm md:text-base px-8 py-3.5 rounded-full transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold"
        >
          Learn more
        </Link>

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
