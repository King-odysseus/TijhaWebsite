import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="w-full bg-[#F5F5F7] pt-[70px]">
      <div className="container-main py-24 md:py-32 flex flex-col items-center text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-6">
          Beyond Consultancy
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight tracking-tight mb-6 max-w-4xl">
          YOUR PARTNER IN DIGITAL AND OPERATIONAL EXCELLENCE.
        </h1>

        <p className="text-lg md:text-xl text-brand-body leading-relaxed max-w-3xl mx-auto mb-10">
          At Tijha, we bridge strategy with execution to transform how organizations operate and grow. Through data-driven insight and digital innovation, we deliver measurable impact and sustainable performance.
        </p>

        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

export default Hero;
