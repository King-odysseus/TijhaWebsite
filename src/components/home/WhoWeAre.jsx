import { Link } from 'react-router-dom';

function WhoWeAre() {
  return (
    <section className="bg-white py-[30px] py-[50px]">
      <div className="w-full px-8 md:px-16 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex items-center justify-center order-2 lg:order-1">
            <img
              src="/images/Team.png"
              alt="Tijha team"
              className="w-4/5 h-auto object-contain rounded-2xl"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2 lg:pl-8 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo leading-tight mb-8">
              <span className="border-b-2 border-bronze pb-1">Our</span> Vision For You
            </h2>
            <p className="text-brand-body leading-relaxed mb-8 text-base md:text-lg text-justify">
              We don't just offer advise we give you the knowledge and digital tools to seamlessly integrate change.
            </p>
            <p className="text-brand-body leading-relaxed mb-8 text-base md:text-lg text-justify">
              We believe that true transformation comes from pairing expert guidance with practical digital tools, ensuring every update integrates smoothly and creates lasting impact. By combining deep knowledge with seamless execution, we help you not only implement changes quickly but also build adaptable systems that keep delivering value over time.
            </p>
            <Link
              to="/about"
              className="inline-block px-6 py-3 neo-btn text-brand-dark font-semibold text-sm hover:text-bronze transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
