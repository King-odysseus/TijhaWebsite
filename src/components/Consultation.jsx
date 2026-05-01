function Consultation() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-main text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Free Consultation</h2>
        <p className="text-brand-body max-w-2xl mx-auto leading-relaxed mb-10">
          Ready to transform your organisation? Book a free consultation with our team and discover how Tijha can help you achieve your goals.
        </p>
        <a
          href="mailto:info@tijha.com"
          className="inline-block px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
        >
          Contact us
        </a>
      </div>
    </section>
  );
}

export default Consultation;
