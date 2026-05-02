import { Link } from 'react-router-dom';

function WhoWeAre() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-indigo mb-4">
              <span className="inline-block w-8 h-0.5 bg-bronze rounded-full" />
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight mb-6">
              Your ally in sustainable growth and operational excellence
            </h2>
            <p className="text-brand-body leading-relaxed mb-6">
              We believe that true growth comes from aligning innovation with operational excellence, ensuring that every decision creates lasting value. By combining strategic insight with practical solutions, we help organizations not only achieve their immediate goals but also build resilient systems that thrive in the long term.
            </p>
            <Link
              to="/about"
              className="inline-block px-6 py-3 neo-btn text-brand-dark font-semibold text-sm hover:text-bronze transition-colors"
            >
              Learn more
            </Link>
          </div>
          <div className="neo-card aspect-[4/3] flex items-center justify-center overflow-hidden">
            <img
              src="/images/Freidnly%20ally.png"
              alt="Friendly ally illustration"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
