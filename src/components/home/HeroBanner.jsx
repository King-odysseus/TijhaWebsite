import { Link } from 'react-router-dom';

function HeroBanner() {
  return (
    <section
      className="w-full py-12 md:py-20 relative overflow-hidden bg-cover bg-top bg-no-repeat"
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
          Team Work, Makes The Dream Work
        </span>

        <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl text-center max-w-3xl mx-auto text-white leading-[1.2] font-bold tracking-tight mt-[20px] mb-[12px]">
          Together, We Turn Your Vision into Reality
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-white/70 text-center max-w-2xl mx-auto mb-6 leading-relaxed">
          We believe that real progress isn't built in isolation, it is forged through collaboration, shared purpose, and mutual trust. By aligning individual strengths toward a common goal, we help teams move faster, think bigger, and achieve what none could alone. Because when we work as one, the dream doesn't just stay a vision, it becomes the plan and reality.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-white/80 text-center font-medium mb-6">
          So reach out whether you are
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mx-auto mb-6">
          <span className="text-sm font-bold text-white tracking-wider">Powering growth for SMEs, NGOs, enterprises, government, and startups</span>
        </div>

        <Link
          to="/about"
          className="bg-bronze hover:bg-[#b8895c] text-white text-sm md:text-base px-8 py-3.5 rounded-full transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold"
        >
          Learn more
        </Link>
      </div>
    </section>
  );
}

export default HeroBanner;
