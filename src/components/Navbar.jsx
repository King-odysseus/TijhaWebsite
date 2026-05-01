import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Tijha New2.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="w-full fixed top-0 z-50 px-4 pt-4">
      <div
        className={`flex items-center justify-between px-2.5 md:pl-6 py-2 max-w-6xl rounded-full mx-auto w-full transition-all duration-300 ${scrolled
          ? 'neo-card border border-[#d1d1d6]/40'
          : 'border border-[#d1d1d6]/20 bg-white/30 backdrop-blur-md'
          }`}
      >
        <Link to="/" className="pl-2">
          <img src={logo} alt="Tijha" className="h-8 md:h-10 w-auto object-contain" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.href
                ? 'text-brand-blue'
                : 'text-brand-body hover:text-brand-dark'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:flex bg-brand-blue text-white pr-6 pl-2 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition items-center shadow-lg hover:shadow-xl"
          >
            <div className="w-8 h-8 rounded-full text-brand-blue bg-white mr-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
            </div>
            Get In Touch
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden neo-btn w-10 h-10 flex items-center justify-center rounded-full"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden neo-card mx-4 mt-2 p-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium py-2 transition-colors ${location.pathname === link.href
                  ? 'text-brand-blue'
                  : 'text-brand-body hover:text-brand-dark'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-center py-3 bg-brand-blue text-white text-sm font-semibold rounded-full mt-2 shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
