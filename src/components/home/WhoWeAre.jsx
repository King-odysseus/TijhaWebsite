import { Link } from 'react-router-dom';

function WhoWeAre() {
  return (
    <section className="bg-white py-36 md:py-52">
      <div className="w-full px-8 md:px-16 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-indigo mb-6">
              <span className="inline-block w-8 h-0.5 bg-bronze rounded-full" />
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight mb-8">
              Your ally in sustainable growth and operational excellence
            </h2>
            <p className="text-brand-body leading-relaxed mb-8 text-base md:text-lg">
              We believe that true growth comes from aligning innovation with operational excellence, ensuring that every decision creates lasting value. By combining strategic insight with practical solutions, we help organizations not only achieve their immediate goals but also build resilient systems that thrive in the long term.
            </p>
            <Link
              to="/about"
              className="inline-block px-6 py-3 neo-btn text-brand-dark font-semibold text-sm hover:text-bronze transition-colors"
            >
              Learn more
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/Team.png"
              alt="Tijha team"
              className="w-4/5 h-auto object-contain rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
