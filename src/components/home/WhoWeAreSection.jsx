import { Link } from 'react-router-dom';

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop',
    alt: 'Team collaborating around a table',
  },
  {
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop',
    alt: 'Business meeting and partnership',
  },
  {
    src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&auto=format&fit=crop',
    alt: 'Consultants discussing strategy',
  },
  {
    src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80&auto=format&fit=crop',
    alt: 'Team reviewing data on a laptop',
  },
];

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
              className="inline-block px-6 py-3 neo-btn text-brand-dark font-semibold text-sm hover:text-bronze transition-colors"
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

        {/* Image grid + supporting text */}
        <div className="mt-20 md:mt-28">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {gallery.map((img) => (
              <div
                key={img.src}
                className="group overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-44 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12 md:mt-14">
            <h3 className="text-2xl md:text-3xl font-bold text-indigo leading-tight mb-4">
              Built On <span className="text-bronze">Collaboration</span>, Driven By Results
            </h3>
            <p className="text-brand-body leading-relaxed text-base md:text-lg">
              From strategy and market research to digital systems and hands-on delivery, we work alongside your team at every stage. Our consultants pair deep expertise with practical tools, turning ambitious goals into measurable, lasting outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;
