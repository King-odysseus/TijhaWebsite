const posts = [
  {
    id: 1,
    title: 'Future of customer support',
    meta: 'Jan 15, 2024 • Strategy',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&h=200&fit=crop',
    excerpt: 'How digital transformation is reshaping the way organisations engage with their stakeholders.',
  },
  {
    id: 2,
    title: 'Get you started',
    meta: 'Feb 02, 2024 • Growth',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop',
    excerpt: 'A practical guide to launching your business model design and go-to-market strategy.',
  },
  {
    id: 3,
    title: 'Scaling operations smartly',
    meta: 'Mar 10, 2024 • Operations',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop',
    excerpt: 'Workflow optimisation and automation techniques for growing teams.',
  },
  {
    id: 4,
    title: 'ESG for SMEs',
    meta: 'Apr 05, 2024 • Sustainability',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=200&h=200&fit=crop',
    excerpt: 'Embedding sustainability and governance into small and medium enterprises.',
  },
];

function Blog() {
  return (
    <section id="blog" className="section-padding bg-[#F5F5F7]">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Blog</h2>
          <p className="text-brand-body max-w-2xl mx-auto leading-relaxed">
            Insights, tips, and stories from our team of experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {posts.map((post) => (
            <a
              key={post.id}
              href="#"
              className="neo-card p-5 flex gap-5 items-start group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-[#e0e0e5] shadow-neo-sm">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div>
                <p className="text-xs text-brand-body mb-1">{post.meta}</p>
                <h3 className="text-base font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-brand-body line-clamp-2">{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-block text-brand-blue font-semibold hover:underline">
            Explore All
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blog;
