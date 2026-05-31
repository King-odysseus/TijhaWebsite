import { Link } from 'react-router-dom';

const tiles = [
  {
    // Growth arrow
    accent: false,
    icon: (
      <path d="M3 17l6-6 4 4 8-8M21 7v6m0-6h-6" />
    ),
  },
  {
    // People / partnership
    accent: true,
    icon: (
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
  {
    // Shield / protection
    accent: false,
    icon: (
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    ),
  },
];

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-indigo pt-28 pb-24 md:pt-36 md:pb-32">
      {/* Cityscape / globe texture with a deep navy wash for depth */}
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/Globe.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo via-indigo/95 to-[#1a1747]" />
      {/* Soft gold glow accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-bronze/20 blur-3xl" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="max-w-xl">
            <span className="animate-fade-in-up inline-block text-xs font-bold uppercase tracking-[0.25em] text-bronze mb-5">
              Tijha Consult
            </span>
            <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Your Partner In <span className="text-bronze">Digital &amp; Operational</span> Excellence
            </h1>
            <p className="animate-fade-in-up-delay-1 text-white/70 leading-relaxed mb-9 text-base md:text-lg">
              We bridge strategy with execution to transform how organizations operate and grow. Through data-driven insight and digital innovation, we power sustainable growth for SMEs, NGOs, enterprises, government, and startups.
            </p>

            <div className="animate-fade-in-up-delay-2 flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="btn-gold px-8 py-4 text-sm"
              >
                See Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full text-sm font-semibold text-white border border-white/25 hover:border-bronze hover:text-bronze transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Floating icon tiles — premium accent like the reference */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[360px]">
            <div className="flex items-center gap-6">
              {tiles.map((tile, i) => (
                <div
                  key={i}
                  className={`animate-float flex items-center justify-center w-28 h-28 xl:w-32 xl:h-32 rounded-2xl shadow-2xl ${
                    tile.accent
                      ? 'bg-bronze -translate-y-8'
                      : 'bg-white/10 backdrop-blur-sm border border-white/15 translate-y-8'
                  }`}
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  <svg
                    className={`w-10 h-10 ${tile.accent ? 'text-white' : 'text-bronze'}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    {tile.icon}
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
