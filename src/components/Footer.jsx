import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#F5F5F7] pt-12 pb-8 border-t border-[#e5e5ea]">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold text-brand-dark tracking-tight block mb-4">
              TIJHA
            </Link>
            <p className="text-sm text-brand-body leading-relaxed">
              Your partner in digital and operational excellence. We bridge strategy with execution to transform how organizations operate and grow.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-4">Useful Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-brand-body hover:text-brand-blue transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-brand-body hover:text-brand-blue transition-colors">About Us</Link>
              <Link to="/services" className="text-sm text-brand-body hover:text-brand-blue transition-colors">Services</Link>
              <Link to="/contact" className="text-sm text-brand-body hover:text-brand-blue transition-colors">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-brand-body">Business Development</span>
              <span className="text-sm text-brand-body">Project Management</span>
              <span className="text-sm text-brand-body">Digital Solutions</span>
              <span className="text-sm text-brand-body">Training & Capacity</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e5e5ea] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-body">
            © 2025 TIJHA CONSULT | ALL RIGHT RESERVED
          </p>
          <p className="text-xs text-brand-body">
            POWERED BY ATARIFIX
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
