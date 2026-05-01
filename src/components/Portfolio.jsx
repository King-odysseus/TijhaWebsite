import { useState } from 'react';

const categories = ['All', 'Life', 'Interiors', 'Nature', 'Travel', 'Food'];

const projects = [
  { id: 1, title: 'Minimalism in Architecture', category: 'Travel', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop' },
  { id: 2, title: 'Museum Of Future', category: 'Interiors', image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&h=400&fit=crop' },
  { id: 3, title: 'Urban Living Spaces', category: 'Life', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop' },
  { id: 4, title: 'Nature Retreats', category: 'Nature', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop' },
];

function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Work</h2>
          <p className="text-brand-body max-w-2xl mx-auto leading-relaxed mb-8">
            Explore a selection of projects that showcase our expertise in strategy, operations, and digital transformation.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? 'bg-brand-blue text-white shadow-lg'
                    : 'neo-btn text-brand-body hover:text-brand-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <div key={project.id} className="neo-card overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-[3/2] overflow-hidden bg-[#e0e0e5]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-dark mb-1">{project.title}</h3>
                <span className="text-sm text-brand-body">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
