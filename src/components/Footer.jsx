import { Link } from 'react-router-dom';
import logo from '../assets/Tijha New2.png';

function Footer() {
  return (
    <footer className="bg-indigo py-[100px] border-t border-white/10">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="block mb-4">
              <img src={logo} alt="Tijha" className="h-10 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Your partner in digital and operational excellence. We bridge strategy with execution to transform how organizations operate and grow.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Useful Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-white/70 hover:text-bronze transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-white/70 hover:text-bronze transition-colors">About Us</Link>
              <Link to="/services" className="text-sm text-white/70 hover:text-bronze transition-colors">Services</Link>
              <Link to="/contact" className="text-sm text-white/70 hover:text-bronze transition-colors">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-white/70">Business Development</span>
              <span className="text-sm text-white/70">Project Management</span>
              <span className="text-sm text-white/70">Digital Solutions</span>
              <span className="text-sm text-white/70">Training & Capacity</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/60">
            © 2025 TIJHA CONSULT | ALL RIGHT RESERVED
          </p>
          <p className="text-xs text-white/60">
            POWERED BY ATARIFIX
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
