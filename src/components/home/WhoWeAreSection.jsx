import { Link } from 'react-router-dom';

function WhoWeAreSection() {
  return (
    <section className="bg-white py-[150px]">
      <div className="w-full px-8 md:px-16 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo leading-tight mb-8">
              <span className="border-b-2 border-bronze pb-1">Who</span> We Are
            </h2>
            <p className="text-brand-body leading-relaxed mb-8 text-base md:text-lg text-left">
              Tijha is a forward-thinking consulting firm dedicated to helping organizations navigate complex challenges and unlock sustainable growth.
            </p>
            <p className="text-brand-body leading-relaxed mb-8 text-base md:text-lg text-left">
              We combine deep industry expertise with innovative digital solutions to deliver measurable results. Our team of seasoned consultants, strategists, and technologists work alongside you to build resilient systems, streamline operations, and create lasting value for your business.
            </p>
            <Link
              to="/about"
              className="btn-gold px-7 py-3.5 text-sm"
            >
              Learn more
            </Link>
          </div>
          <div className="flex items-center justify-center lg:pl-8">
            <img
              src="/images/support%20team.png"
              alt="Tijha support team"
              className="w-full h-auto object-contain rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;
