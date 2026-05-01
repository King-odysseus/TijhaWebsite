import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    id: 1,
    heading: 'Find Your Dream Property',
    subtext: 'Discover premium real estate tailored to your lifestyle',
    bg: 'from-[#262262] to-[#1a1850]',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    ),
  },
  {
    id: 2,
    heading: 'Modern Living Spaces',
    subtext: 'Curated homes with exceptional design and comfort',
    bg: 'from-[#C49A6C] to-[#a07d4e]',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ),
  },
  {
    id: 3,
    heading: 'Invest in Your Future',
    subtext: 'Smart investments with guaranteed returns',
    bg: 'from-[#262262] to-[#C49A6C]',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    ),
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="w-full h-[700px] relative overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex transition-all duration-700 ease-in-out ${index === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
        >
          <div className={`w-full h-full bg-gradient-to-r ${slide.bg} flex px-16`}>
            {/* Text Side */}
            <div className="w-1/2 h-full flex flex-col justify-center px-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                {slide.heading}
              </h2>
              <p className="text-white/70 mt-4 text-lg max-w-md">{slide.subtext}</p>
            </div>

            {/* Icon Side */}
            <div className="w-1/2 h-full flex items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {slide.icon}
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all duration-200"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all duration-200"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === current ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
