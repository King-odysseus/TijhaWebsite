import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Tijha New2.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [{ label: 'Tijha Books', href: '/tijha-books' }],
  },
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
          {navLinks.map((link) => {
            const childActive = link.children?.some((c) => c.href === location.pathname);
            const isActive = location.pathname === link.href || childActive;

            const linkEl = (
              <Link
                to={link.href}
                className={`relative text-base font-medium transition-colors duration-200 group inline-flex items-center gap-1 ${isActive ? 'text-bronze' : 'text-indigo hover:text-bronze'
                  }`}
              >
                {link.label}
                {link.children && (
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/menu:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-bronze transition-all duration-200 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
              </Link>
            );

            if (!link.children) {
              return <div key={link.label}>{linkEl}</div>;
            }

            return (
              <div key={link.label} className="relative group/menu">
                {linkEl}
                {/* Hover dropdown (pt-3 forms a hover bridge to the panel) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-52 invisible opacity-0 translate-y-1 transition-all duration-200 group-hover/menu:visible group-hover/menu:opacity-100 group-hover/menu:translate-y-0">
                  <div className="rounded-xl bg-white shadow-lg border border-gray-100 py-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[#F5F5F7] ${location.pathname === child.href ? 'text-bronze' : 'text-indigo hover:text-bronze'
                          }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: CTA */}
        <div className="col-start-3 flex items-center justify-end gap-3">
          <Link
            to="/contact"
            className="hidden md:flex bg-bronze text-white pr-5 pl-2 py-2 rounded-full text-sm font-semibold hover:bg-[#b8895c] transition items-center animate-pulse-glow"
          >
            <div className="w-8 h-8 rounded-full text-bronze bg-white mr-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
            </div>
            Get In Touch
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-12 h-12 -mr-1 flex items-center justify-center text-indigo ml-auto"
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div key={link.label} className="flex flex-col">
                <Link
                  to={link.href}
                  className={`text-sm font-medium py-2 transition-colors ${location.pathname === link.href
                    ? 'text-bronze'
                    : 'text-indigo hover:text-bronze'
                    }`}
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.label}
                    to={child.href}
                    className={`pl-4 py-2 text-sm transition-colors border-l-2 border-bronze/30 ml-1 ${location.pathname === child.href
                      ? 'text-bronze'
                      : 'text-brand-body hover:text-bronze'
                      }`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              to="/contact"
              className="text-center py-3 bg-bronze text-white text-sm font-semibold rounded-full mt-2"
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
