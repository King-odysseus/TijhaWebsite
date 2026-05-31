import { Link } from 'react-router-dom';

function CTABanner() {
  return (
    <section className="py-24 bg-white">
      <div className="container-main text-center max-w-4xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
          READY TO TRANSFORM YOUR ORGANISATION?
        </h2>
        <p className="text-brand-body leading-relaxed mb-10 max-w-2xl mx-auto">
          YOUR GOALS DESERVE MORE THAN IDEAS, THEY REQUIRE STRUCTURED SOLUTIONS, DISCIPLINED EXECUTION, AND TEAMS EMPOWERED TO SUCCEED.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3.5 bg-bronze hover:bg-[#b8895c] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
        >
          Book a consultation
        </Link>
      </div>
    </section>
  );
}

export default CTABanner;
