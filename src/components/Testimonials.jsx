function Testimonials() {
  return (
    <section className="section-padding bg-[#F5F5F7]">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Testimonials</h2>
          <p className="text-brand-body max-w-2xl mx-auto leading-relaxed">
            Hear from the organisations we have helped transform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="neo-card p-10 text-center">
            <div className="neo-circle w-16 h-16 mx-auto mb-6 text-indigo text-lg font-bold">AE</div>
            <blockquote className="text-lg md:text-xl text-brand-dark leading-relaxed mb-6 italic">
              "Tijha transformed our approach to operations. Their hands-on methodology and deep expertise helped us reduce costs by 30% while improving team productivity."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="text-left">
                <p className="font-bold text-brand-dark">Amelia Edwards</p>
                <p className="text-sm text-brand-body">Operations Director, Greenfield NGO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
