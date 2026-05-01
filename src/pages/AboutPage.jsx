function AboutPage() {
  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="container-main text-center max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            A TEAM THAT STANDS BESIDE YOU, NOT JUST BEHIND YOU.
          </h1>
          <p className="text-lg text-brand-body leading-relaxed">
            We combine sharp technological and management consulting with hands-on support to deliver the right solutions and strengthen your team's capability to carry them forward.
          </p>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="section-padding bg-[#F5F5F7]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="neo-card aspect-[4/3] flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Tijha team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Our Mission</h2>
              <p className="text-brand-body leading-relaxed mb-4">
                At Tijha, we help organisations achieve measurable growth by combining strategy, execution, and tailored solutions. Our approach is built around four key steps: Understand, Plan, Deliver, and Support.
              </p>
              <p className="text-brand-body leading-relaxed mb-4">
                We begin by assessing your organisation's challenges, goals, and market context. Using these insights, we develop a customized roadmap aligned with your objectives. Execution happens alongside your teams, with hands-on support and knowledge transfer. Beyond delivery, we monitor progress and continuously refine solutions.
              </p>
              <p className="text-brand-body leading-relaxed">
                Through this approach, Tijha acts not just as a consultant, but as a hands-on partner guiding, implementing, and sustaining solutions.
              </p>
            </div>
          </div>

          {/* How We Work */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Understand', desc: 'Assess challenges, goals, and market context through comprehensive organisational diagnostics and stakeholder engagement.' },
              { title: 'Plan', desc: 'Develop customized roadmaps with clear milestones, performance indicators, and tailored solutions.' },
              { title: 'Deliver', desc: 'Implement solutions alongside client teams with hands-on support, training, and knowledge transfer.' },
              { title: 'Support', desc: 'Monitor KPIs, provide ongoing mentoring, and continuously refine strategies for sustainable growth.' },
            ].map((step) => (
              <div key={step.title} className="neo-card p-6 text-center">
                <h3 className="text-lg font-bold text-brand-blue mb-3">{step.title}</h3>
                <p className="text-sm text-brand-body leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our People</h2>
            <p className="text-brand-body max-w-2xl mx-auto leading-relaxed">
              At Tijha, our strength lies in the calibre, diversity, and dedication of the people behind our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Board of Consultants',
                desc: 'Seasoned industry professionals with over a decade of experience in management consulting, sustainability, digital transformation, and public sector reform.',
                expertise: 'Large-scale organisational transformations, market expansion strategies, ESG compliance, and policy implementation.',
                quals: 'MBAs, MSc in Development Studies, PMP and PRINCE2 certifications, CCMP, and other sector-specific accreditations.',
              },
              {
                title: 'Core Team',
                desc: 'Drives day-to-day delivery, combining analytical insight, operational efficiency, and technical innovation.',
                expertise: 'Business development, market access facilitation, project delivery, process optimisation, and digital solution deployment.',
                quals: "Bachelor's and master's degrees in Business Administration, Economics, or IT, alongside agile and project management certifications.",
              },
              {
                title: 'Collaborators',
                desc: 'External subject matter experts and partner organisations engaged when specific expertise is required.',
                expertise: 'Sustainability reporting (GRI, SASB), sector-focused process design, NGO fundraising, leadership development, and regional trade facilitation.',
                quals: 'Postgraduate degrees, certified trainers, and consultants with over 10 years of proven industry impact.',
              },
            ].map((group) => (
              <div key={group.title} className="neo-card p-8">
                <h3 className="text-xl font-bold text-brand-dark mb-3">{group.title}</h3>
                <p className="text-sm text-brand-body leading-relaxed mb-4">{group.desc}</p>
                <div className="mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">Expertise</span>
                  <p className="text-sm text-brand-body mt-1">{group.expertise}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">Qualifications</span>
                  <p className="text-sm text-brand-body mt-1">{group.quals}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
