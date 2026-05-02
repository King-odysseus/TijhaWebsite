import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Tijha New2.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/services' },
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
    <nav className="w-full fixed top-0 z-50 bg-white border-b border-gray-200">
      <div className="w-full px-6 md:px-12 lg:px-20 grid grid-cols-3 items-center h-20">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center justify-start">
          <img src={logo} alt="Tijha" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Center: Nav links */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`relative text-base font-medium transition-colors duration-200 group ${location.pathname === link.href
                ? 'text-bronze'
                : 'text-indigo hover:text-bronze'
                }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-bronze transition-all duration-200 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
            </Link>
          ))}
        </div>

        {/* Right: CTA */}
        <div className="flex items-center justify-end gap-3">
          <Link
            to="/contact"
            className="hidden md:flex bg-bronze text-indigo pr-7 pl-2.5 py-2.5 rounded-full text-base font-semibold hover:bg-[#b8895c] transition items-center animate-pulse-glow"
          >
            <div className="w-9 h-9 rounded-full text-bronze bg-white mr-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
            </div>
            Get In Touch
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-indigo"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="md:hidden bg-white border-t border-gray-200 px-6 md:px-12 lg:px-20 py-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium py-2 transition-colors ${location.pathname === link.href
                  ? 'text-bronze'
                  : 'text-indigo hover:text-bronze'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-center py-3 bg-bronze text-indigo text-sm font-semibold rounded-full mt-2"
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
