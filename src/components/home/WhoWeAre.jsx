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
              Our Vision For You
            </h2>
            <p className="text-brand-body leading-relaxed mb-8 text-base md:text-lg">
              We don't just offer help—we give you the knowledge and digital tools to seamlessly integrate change.
            </p>
            <p className="text-brand-body leading-relaxed mb-8 text-base md:text-lg">
              We believe that true transformation comes from pairing expert guidance with practical digital tools—ensuring every update integrates smoothly and creates lasting impact. By combining deep knowledge with seamless execution, we help you not only implement changes quickly but also build adaptable systems that keep delivering value over time.
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
