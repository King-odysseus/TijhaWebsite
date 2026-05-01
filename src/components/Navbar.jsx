import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#F5F5F7]/90 backdrop-blur-md shadow-neo-sm'
          : 'bg-transparent'
        }`}
    >
      <div className="container-main flex items-center justify-between h-[70px]">
        <Link to="/" className="text-xl font-bold text-brand-dark tracking-tight">
          TIJHA
        </Link>

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
          <Link
            to="/contact"
            className="px-5 py-2 bg-brand-blue text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Get In Touch
          </Link>
        </div>

        <button
          className="md:hidden neo-btn w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
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

      {mobileOpen && (
        <div className="md:hidden neo-card-sm mx-4 mb-4 p-4">
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
              className="text-center py-2 bg-brand-blue text-white text-sm font-semibold rounded-lg mt-2"
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
