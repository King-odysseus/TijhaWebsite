import { Link } from 'react-router-dom';

const avatars = [
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
];

function Hero() {
  return (
    <section className="w-full bg-[#F5F5F7] pt-[100px] pb-16 md:pb-32 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10 flex flex-col items-center text-center">
        {/* Announcement Badge */}
        <div className="neo-card-sm flex items-center gap-2 pl-3 pr-4 py-1.5 w-fit mb-8">
          <span className="flex items-center gap-1.5 text-brand-blue text-xs sm:text-sm font-medium">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4m7-3a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1m-2 10a.75.75 0 0 1 .728.568.97.97 0 0 0 .704.704.75.75 0 0 1 0 1.456.97.97 0 0 0-.704.704.75.75 0 0 1-1.456 0 .97.97 0 0 0-.704-.704.75.75 0 0 1 0-1.456.97.97 0 0 0 .704-.704A.75.75 0 0 1 10 11" fill="#007BFF" />
            </svg>
            Beyond Consultancy
          </span>
          <span className="text-brand-blue">•</span>
          <Link to="/services" className="flex items-center gap-1 text-brand-blue text-xs sm:text-xs font-medium hover:underline">
            Explore Services
            <svg className="mt-0.5" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m1 1 4 3.5L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-[58px] text-center max-w-4xl mx-auto text-brand-dark leading-[1.15] font-bold tracking-tight mb-6">
          YOUR PARTNER IN DIGITAL AND OPERATIONAL EXCELLENCE.
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-brand-body text-center max-w-2xl mx-auto mb-8 leading-relaxed">
          At Tijha, we bridge strategy with execution to transform how organizations operate and grow. Through data-driven insight and digital innovation, we deliver measurable impact and sustainable performance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link
            to="/services"
            className="bg-brand-blue hover:bg-blue-600 text-white text-sm md:text-base px-8 py-3.5 rounded-full transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold"
          >
            See Services
          </Link>
          <Link
            to="/contact"
            className="neo-btn text-brand-dark text-sm md:text-base px-8 py-3.5 rounded-full transition font-semibold hover:-translate-y-0.5"
          >
            Book a Call
          </Link>
        </div>

        {/* Avatars + Stars */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex -space-x-3 pr-4">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`user${i}`}
                className="w-10 h-10 object-cover rounded-full border-2 border-white shadow-neo-sm hover:-translate-y-0.5 transition z-[1]"
                loading="lazy"
              />
            ))}
          </div>
          <div className="text-left">
            <div className="flex">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-transparent fill-[#007BFF]">
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
              ))}
            </div>
            <p className="text-xs text-brand-body mt-1">Trusted by 100+ organisations</p>
          </div>
        </div>

        {/* Logo / Client Bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mx-auto opacity-50">
          <span className="text-sm font-bold text-brand-body uppercase tracking-wider">SMEs</span>
          <span className="text-sm font-bold text-brand-body uppercase tracking-wider">NGOs</span>
          <span className="text-sm font-bold text-brand-body uppercase tracking-wider">Corporates</span>
          <span className="text-sm font-bold text-brand-body uppercase tracking-wider">Government</span>
          <span className="text-sm font-bold text-brand-body uppercase tracking-wider">Startups</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
