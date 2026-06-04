import { Link } from 'react-router-dom';

const APP_URL = 'https://books.tijha.com';

const features = [
  {
    title: 'Professional Invoicing',
    desc: 'Create, send, and track polished invoices, and get paid faster with clear payment status at a glance.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  },
  {
    title: 'Expense Tracking',
    desc: 'Record and categorise business expenses with built-in Withholding Tax (WHT) support, so nothing slips through.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
  },
  {
    title: 'Real-Time Analytics',
    desc: 'See live financial insights and reports, revenue, expenses, and cash flow, so you always know where you stand.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M9 17V9m4 8V5m4 12v-6" />,
  },
  {
    title: 'Inventory Management',
    desc: 'Track products and stock levels in real time so you never oversell or run out of what your customers want.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
  },
  {
    title: 'Receipts & Cash Sales',
    desc: 'Generate professional receipts for cash sales in seconds and keep an accurate record of every transaction.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />,
  },
  {
    title: 'Loans & Repayments',
    desc: 'Track business loans, schedules, and repayments in one place so your obligations are always under control.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: 'Tax Compliance',
    desc: 'Stay compliant with VAT (7.5%) and WHT (5%) handled automatically, built for the way African SMBs are taxed.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
  {
    title: 'Team & Access Control',
    desc: 'Invite your team and assign role-based permissions so everyone sees exactly what they need, and nothing more.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
  },
];

const steps = [
  { step: '01', title: 'Create your account', desc: 'Sign up for TijhaBooks in minutes, no installation, no setup fees.' },
  { step: '02', title: 'Set up your business', desc: 'Add your products, clients, and tax settings so the books match how you actually operate.' },
  { step: '03', title: 'Run your finances', desc: 'Invoice, track expenses, manage stock, and watch real-time insights roll in.' },
];

const trust = [
  'Built for African SMBs, with VAT (7.5%) and WHT (5%) handled for you',
  'Role-based team access keeps your data secure',
  'Automated backups so your records are always safe',
  'Modern, dark-mode interface that works on any device',
];

function LaunchButton({ children, variant = 'primary', className = '' }) {
  const base =
    variant === 'primary'
      ? 'bg-bronze hover:bg-[#b8895c] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5'
      : 'bg-white text-indigo hover:text-bronze shadow-md hover:shadow-lg';
  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm md:text-base font-semibold transition-all duration-200 ${base} ${className}`}
    >
      {children}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  );
}

function TijhaBooksPage() {
  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="pt-16 pb-16 md:pt-32 md:pb-32 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-bronze mb-4">
                Tijha Books
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-[2.75rem] font-bold text-indigo leading-tight mb-6">
                Run Your Business Finances <span className="text-bronze">With Confidence.</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-brand-body leading-relaxed mb-8">
                TijhaBooks is our complete business management platform built for African SMBs, professional invoicing, expense tracking, tax compliance, and real-time analytics in one clean, modern app.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <LaunchButton>Open Tijha Books</LaunchButton>
                <a href="#features" className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full text-sm md:text-base font-semibold neo-btn text-indigo hover:text-bronze transition-colors">
                  See Features
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/services-analysis.jpg"
                alt="Financial figures and analytics on screen"
                className="w-full h-72 md:h-[420px] object-cover rounded-3xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-2xl bg-bronze/15 -z-0 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* What is Tijha Books */}
      <section className="section-padding bg-[#F5F5F7]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/tijha-accounting-presentation.jpg"
                alt="Businesswoman reviewing accounting data"
                className="w-full h-[360px] md:h-[500px] object-cover object-top rounded-3xl shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-bronze mb-4">What It Is</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo mb-6">
                One Platform For Your Whole Back Office
              </h2>
              <p className="text-brand-body leading-relaxed mb-4">
                Most small businesses juggle invoices in one place, expenses in another, and tax in a spreadsheet. TijhaBooks brings it all together, so your numbers are accurate, current, and ready whenever you need them.
              </p>
              <p className="text-brand-body leading-relaxed">
                It is the same accounting tool we build and rely on, now available to you as a ready-to-use solution. No servers to manage, no complex setup, just sign in and start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-bronze mb-4">What You Get</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-indigo">Everything You Need To Stay On Top Of The Books</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="group neo-card p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="neo-circle w-14 h-14 mb-5 text-bronze">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{f.icon}</svg>
                </div>
                <h3 className="text-lg font-bold text-indigo mb-3 group-hover:text-bronze transition-colors">{f.title}</h3>
                <p className="text-sm text-brand-body leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-[#F0EDF7] via-[#F8F7FC] to-[#F0EDF5]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo/8 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-bronze/8 rounded-full blur-3xl" />
        <div className="container-main relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-bronze mb-4">How It Works</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-indigo">Up And Running In Three Steps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="glass-card p-8 text-center">
                <div className="glass-circle w-14 h-14 mx-auto mb-5 text-bronze font-bold">{s.step}</div>
                <h3 className="text-lg font-bold text-indigo mb-3">{s.title}</h3>
                <p className="text-sm text-brand-body leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tijha Books / trust */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-bronze mb-4">Why TijhaBooks</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo mb-8">Made For How You Actually Do Business</h2>
              <ul className="space-y-4">
                {trust.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="neo-circle w-7 h-7 flex-shrink-0 text-bronze mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-brand-body leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:h-full">
              <img
                src="/images/employee-financial-review.jpg"
                alt="Professional analyzing financial data"
                className="w-full h-72 lg:h-full object-cover rounded-3xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="relative py-24 overflow-hidden bg-indigo">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo via-indigo to-[#1b1850]" />
        <div className="container-main relative z-10 text-center max-w-3xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to take control of your books?
          </h2>
          <p className="text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Start invoicing, tracking, and growing with TijhaBooks today. It is free to get started, and your numbers will thank you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <LaunchButton>Open Tijha Books</LaunchButton>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm md:text-base font-semibold bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-all duration-200"
            >
              Talk To Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TijhaBooksPage;
