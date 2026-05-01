import { useState } from 'react';

const serviceCategories = [
  {
    title: 'Management Consulting',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    desc: 'We help businesses turn scattered ideas into clear strategy, sharp execution, and sustainable growth.',
    items: [
      { name: 'Business Strategy Development', price: '₦400,000', layman: 'Business Growth Development' },
      { name: 'Business Model Design & Optimisation', price: '₦200,000 – ₦1,500,000', layman: 'Profit Improvement Plan' },
      { name: 'Growth / Scaling Strategy', price: '₦300,000 – ₦2,500,000', layman: 'Business Expansion Plan' },
      { name: 'Go-to-Market (GTM) Strategy', price: '₦400,000 – ₦2,000,000', layman: 'Sales & Market Entry Plan' },
      { name: 'Market Entry Strategy', price: '₦500,000 – ₦2,800,000', layman: 'Market Expansion Plan' },
      { name: 'Product / Service Launch Strategy', price: '₦500,000 – ₦1,500,000', layman: 'New Product Launch Plan' },
    ],
  },
  {
    title: 'Market Research & Strategic Intelligence',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    desc: 'Data-driven insights to inform your strategic decisions and market positioning.',
    items: [
      { name: 'Market Research & Analysis', price: '₦300,000 – ₦2,000,000', layman: 'Market Study — finding out what customers want and where the demand is.' },
      { name: 'Competitor Analysis & Benchmarking', price: '₦250,000 – ₦1,200,000', layman: 'Competitor Check — studying what competitors are doing so you can do better.' },
      { name: 'Pricing Research / Willingness-to-Pay', price: '₦200,000 – ₦1,000,000', layman: 'Product Pricing Study — know the best price customers are willing to pay.' },
    ],
  },
  {
    title: 'Sales, Revenue & Commercial Growth',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    desc: 'Helping businesses increase sales and build reliable revenue streams.',
    items: [
      { name: 'Sales Strategy Development', price: '₦300,000 – ₦1,500,000', layman: 'Sales Growth Plan — helping a business increase sales.' },
      { name: 'Customer Acquisition Strategy', price: '₦250,000 – ₦1,300,000', layman: 'Customer Attraction Plan — find and win new customers consistently.' },
      { name: 'Lead Generation Systems', price: '₦400,000 – ₦1,200,000', layman: 'Customer Lead System — setting up systems that bring potential customers regularly.' },
    ],
  },
  {
    title: 'Business Development',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    desc: 'Building partnerships, securing funding, and creating growth opportunities.',
    items: [
      { name: 'Stakeholder Engagement Strategy', price: '₦300,000 – ₦1,200,000', layman: 'Partner & Stakeholder Management Plan' },
      { name: 'Business Plan Development', price: '₦300,000 – ₦900,000', layman: 'Business Plan Preparation — create a clear plan to guide or attract investors.' },
      { name: 'Investor Pitch Deck', price: '₦250,000 – ₦700,000', layman: 'Investor Presentation — convince investors to fund the business.' },
      { name: 'Grant Identification', price: '₦200,000 – ₦500,000', layman: 'Grant Opportunity Search' },
      { name: 'Grant Proposal Writing', price: '₦250,000 – ₦800,000', layman: 'Grant Application Support' },
      { name: 'Change Management Strategy', price: '₦600,000 – ₦1,800,000', layman: 'Business Change Implementation Plan' },
      { name: 'Operational Rollout Support', price: '₦500,000 – ₦1,500,000', layman: 'Business Implementation Support — put new strategies into action.' },
    ],
  },
  {
    title: 'Operations & Process Optimization',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    desc: 'Streamlining workflows, cutting costs, and boosting team productivity.',
    items: [
      { name: 'Operational Diagnostics', price: '₦200,000 – ₦1,800,000', layman: 'Business Health Check — find problems and inefficiencies.' },
      { name: 'Business Process Mapping', price: '₦250,000 – ₦1,200,000', layman: 'Step-by-Step Workflow Review — see which steps are slow or wasteful.' },
      { name: 'Workflow Optimization & Automation', price: '₦400,000 – ₦2,000,000', layman: 'Work Process Improvement & Automation — make work faster and simpler.' },
      { name: 'Process Redesign', price: '₦200,000 – ₦1,800,000', layman: 'Better Way to Work Plan — tasks done smarter and faster.' },
      { name: 'Cost Optimization', price: '₦500,000 – ₦1,500,000', layman: 'Cost Cutting & Savings Plan' },
      { name: 'Resource Utilization Analysis', price: '₦400,000 – ₦1,200,000', layman: 'Make the Most of Your Resources plan' },
      { name: 'Supplier & Contract Optimization', price: '₦400,000 – ₦1,200,000', layman: 'Better Supplier Deals' },
      { name: 'Productivity Improvement Programme', price: '₦700,000 – ₦2,200,000', layman: 'Team Productivity Boost' },
    ],
  },
  {
    title: 'Project Management Services',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    desc: 'End-to-end project delivery with disciplined planning and expert control.',
    items: [
      { name: 'Project Planning & Scheduling', price: '₦300,000 – ₦900,000' },
      { name: 'Resource Allocation', price: '₦200,000 – ₦600,000' },
      { name: 'Project Budgeting & Cost Control', price: '₦300,000 – ₦900,000' },
      { name: 'Risk Management', price: '₦300,000 – ₦800,000' },
      { name: 'Stakeholder Communication Planning', price: '₦250,000 – ₦700,000' },
      { name: 'Project Monitoring & Reporting', price: '₦200,000 – ₦600,000' },
      { name: 'Project Issue Resolution', price: '₦200,000 – ₦600,000' },
      { name: 'Project Closure & Evaluation', price: '₦300,000 – ₦800,000' },
    ],
  },
  {
    title: 'Leadership Development & Professional Training',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    desc: 'Building skilled, adaptable teams through targeted training and coaching.',
    items: [
      { name: 'Leadership Development Programme', price: '₦700,000 – ₦2,500,000' },
      { name: 'Executive Coaching (per month)', price: '₦200,000 – ₦600,000' },
      { name: 'Management Training', price: '₦300,000 – ₦900,000' },
      { name: 'Decision-Making & Emotional Intelligence Training', price: '₦300,000 – ₦800,000' },
      { name: 'Project Management Training', price: '₦350,000 – ₦1,000,000' },
      { name: 'Agile / PRINCE2 / PMP Workshops', price: '₦500,000 – ₦1,500,000' },
      { name: 'Change Management Training', price: '₦350,000 – ₦900,000' },
    ],
  },
  {
    title: 'Digital & Technology Solutions',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    desc: 'User-focused digital products that improve efficiency, brand consistency, and conversion.',
    items: [
      { name: 'Website Design & Development', price: '₦250,000 – ₦1,200,000' },
      { name: 'Web Application Development', price: '₦1,500,000 – ₦6,000,000' },
      { name: 'Mobile App Development', price: '₦2,000,000 – ₦8,000,000' },
      { name: 'CMS Implementation', price: '₦300,000 – ₦900,000' },
      { name: 'E-commerce Development', price: '₦600,000 – ₦2,000,000' },
      { name: 'Payment & Inventory Integration', price: '₦300,000 – ₦900,000' },
      { name: 'Digital Workflow Systems', price: '₦800,000 – ₦3,000,000' },
      { name: 'Internal Business Apps', price: '₦700,000 – ₦2,500,000' },
      { name: 'Data Dashboards', price: '₦400,000 – ₦1,200,000' },
      { name: 'Cloud Migration', price: '₦700,000 – ₦2,500,000' },
      { name: 'System Integration', price: '₦800,000 – ₦3,000,000' },
    ],
  },
];

const retainers = [
  { name: 'Business Advisory', price: '₦300,000 – ₦600,000' },
  { name: 'Strategy & Growth Advisory', price: '₦400,000 – ₦1,200,000' },
  { name: 'Project Management Office Support', price: '₦300,000 – ₦1,500,000' },
  { name: 'Digital Systems Management', price: '₦250,000 – ₦800,000' },
];

function ServicesPage() {
  const [openCat, setOpenCat] = useState(0);

  return (
    <div className="pt-[70px]">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="container-main text-center max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">What We Offer</h1>
          <p className="text-lg text-brand-body leading-relaxed">
            At Tijha, we provide a suite of consulting and digital solutions designed to help organisations operate smarter, faster, and more sustainably. Our services span business process optimisation, project management, and digital transformation.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-[#F5F5F7]">
        <div className="container-main max-w-5xl">
          <div className="space-y-4">
            {serviceCategories.map((cat, i) => {
              const isOpen = openCat === i;
              return (
                <div key={cat.title} className={`neo-card overflow-hidden transition-all duration-300 ${isOpen ? 'ring-2 ring-brand-blue/20' : ''}`}>
                  <button
                    onClick={() => setOpenCat(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left"
                  >
                    <div className={`neo-circle w-12 h-12 flex-shrink-0 ${isOpen ? 'text-brand-blue' : 'text-brand-body'}`}>
                      {cat.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold ${isOpen ? 'text-brand-blue' : 'text-brand-dark'}`}>{cat.title}</h3>
                      <p className="text-sm text-brand-body mt-1 hidden sm:block">{cat.desc}</p>
                    </div>
                    <svg className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-blue' : 'text-brand-body'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6">
                      <div className="neo-inset rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                          <thead className="bg-brand-blue/5">
                            <tr>
                              <th className="text-left px-5 py-3 font-semibold text-brand-dark">Service</th>
                              <th className="text-left px-5 py-3 font-semibold text-brand-dark">Typical Price</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#e5e5ea]">
                            {cat.items.map((item) => (
                              <tr key={item.name} className="hover:bg-white/50">
                                <td className="px-5 py-4">
                                  <div className="font-medium text-brand-dark">{item.name}</div>
                                  {item.layman && (
                                    <div className="text-xs text-brand-body mt-1">{item.layman}</div>
                                  )}
                                </td>
                                <td className="px-5 py-4 text-brand-body font-medium whitespace-nowrap">{item.price}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Retainers */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Recommended Monthly Retainers</h2>
            <p className="text-brand-body">Ongoing advisory and management support tailored to your needs.</p>
          </div>
          <div className="neo-inset rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-blue/5">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-brand-dark">Service Type</th>
                  <th className="text-left px-6 py-4 font-semibold text-brand-dark">Monthly Retainer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e5ea]">
                {retainers.map((r) => (
                  <tr key={r.name} className="hover:bg-white/50">
                    <td className="px-6 py-4 font-medium text-brand-dark">{r.name}</td>
                    <td className="px-6 py-4 text-brand-body font-medium">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
