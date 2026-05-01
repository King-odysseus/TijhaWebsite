import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    id: 1,
    heading: 'Find Your Dream Property',
    subtext: 'Discover premium real estate tailored to your lifestyle',
  },
  {
    id: 2,
    heading: 'Modern Living Spaces',
    subtext: 'Curated homes with exceptional design and comfort',
  },
  {
    id: 3,
    heading: 'Invest in Your Future',
    subtext: 'Smart investments with guaranteed returns',
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
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="w-full bg-[#F5F5F7] pt-[70px]">
      <div className="container-main py-24 md:py-32 flex flex-col items-center text-center">
        <div className="mb-8">
          <span className="inline-block neo-circle w-20 h-20 mb-6 text-brand-blue">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark leading-tight tracking-tight mb-6">
          TIJHA
        </h1>

        <div className="max-w-2xl mx-auto mb-10 min-h-[80px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ${index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                }`}
            >
              <p className="text-lg md:text-xl text-brand-body leading-relaxed">
                {slide.subtext}
              </p>
            </div>
          ))}
          <p className="text-lg md:text-xl text-brand-body leading-relaxed">
            We believe in making technology work for you. Our mission is to simplify complex tasks and boost productivity with innovative solutions.
          </p>
        </div>

        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
        >
          Let's talk
        </a>

        {/* Carousel Indicators */}
        <div className="flex gap-3 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all duration-300 ${index === current ? 'w-8 bg-brand-blue' : 'w-3 bg-[#d1d1d6] hover:bg-brand-body'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
