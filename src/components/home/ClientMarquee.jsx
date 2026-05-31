import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    id: 1,
    quote:
      "Tijha delivered an outstanding website for us and their accounting tool has completely streamlined our financial operations. We couldn't be more pleased with the results — professional, on time, and exactly what we needed.",
    name: 'Braige',
    role: 'Client',
  },
  {
    id: 2,
    quote:
      "From brand design to social media setup and sharp business development insights, Tijha exceeded every expectation. They didn't just give us a look — they gave us a strategy that's already driving real growth. Extremely satisfied.",
    name: 'Vlad Clothing',
    role: 'Client',
  },
];

function ClientMarquee() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  const advance = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
      setVisible(true);
    }, 300);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 6000);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section className="bg-[#FAFAFC] py-16 md:py-24 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C49A6C] mb-4 text-shadow-bronze">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#262262]">
            What Our Clients Say
          </h2>
        </div>

        {/* Rotating card */}
        <div className="relative min-h-[260px] md:min-h-[220px]">
          <div
            className={`transition-opacity duration-300 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative rounded-2xl bg-white shadow-lg border border-[#D9D9D9]/40 p-8 md:p-10">
              {/* Quote mark */}
              <svg
                className="absolute top-6 left-6 w-10 h-10 text-[#C49A6C]/20"
                fill="currentColor"
                viewBox="0 0 48 48"
              >
                <path d="M13 12C8 12 4 16.5 4 22.5V38h14V24H10c0-5 2.5-8 7-8V12zm20 0c-5 0-9 4.5-9 10.5V38h14V24H30c0-5 2.5-8 7-8V12z" />
              </svg>

              {/* Quote text */}
              <p className="relative text-sm md:text-base text-[#6b7280] leading-relaxed italic mb-8 pt-4">
                "{testimonials[active].quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C49A6C]/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C49A6C] font-bold text-sm">
                    {testimonials[active].name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#262262]">
                    {testimonials[active].name}
                  </p>
                  <p className="text-xs text-[#6b7280]">{testimonials[active].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setVisible(false);
                setTimeout(() => {
                  setActive(i);
                  setVisible(true);
                }, 200);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === active
                  ? 'bg-[#C49A6C] w-6'
                  : 'bg-[#D9D9D9] hover:bg-[#C49A6C]/40'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientMarquee;
