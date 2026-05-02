const plans = [
  {
    price: '₦300K',
    subtitle: 'Single Plan',
    features: [
      'Business advisory (monthly)',
      'Operational diagnostics',
      'Stakeholder engagement strategy',
      'Process mapping review',
      'Email support',
    ],
  },
  {
    price: '₦1.2M',
    subtitle: 'Professional Plan',
    features: [
      'Strategy & growth advisory',
      'Project management office support',
      'Digital systems management',
      'Custom training programmes',
      'Priority support & mentoring',
      'Quarterly business reviews',
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Plans</h2>
          <p className="text-brand-body max-w-2xl mx-auto leading-relaxed">
            Flexible retainers designed to match your organisation's size, goals, and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.subtitle} className="neo-card p-8 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="text-5xl font-extrabold text-brand-dark mb-2">{plan.price}</div>
              <p className="text-lg font-semibold text-brand-body mb-6">{plan.subtitle}</p>

              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-brand-body">
                    <svg className="w-5 h-5 text-indigo flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-brand-blue text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
