import { useState, useEffect } from 'react';
import {
  Navbar as FlowbiteNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-4 pt-4 transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-4'
        }`}
    >
      <FlowbiteNavbar
        fluid
        rounded
        className={`rounded-[2rem] border-0 transition-all duration-300 ${scrolled
          ? 'bg-[#f0f0f3] shadow-[6px_6px_10px_#6b7280,-3px_-3px_6px_#ffffff]'
          : 'bg-white shadow-[3px_3px_6px_#6b7280,-2px_-2px_4px_#ffffff]'
          }`}
      >
        <NavbarBrand href="/">
          <span className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bronze">
              <svg
                className="h-4 w-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </span>
            <span className="text-xl font-bold text-indigo">Tijha</span>
          </span>
        </NavbarBrand>

        <NavbarToggle />

        <NavbarCollapse>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <NavbarLink
              href="#"
              className="text-[15px] font-medium text-indigo hover:text-bronze transition-colors duration-200"
            >
              Home
            </NavbarLink>
            <NavbarLink
              href="#"
              className="text-[15px] font-medium text-indigo hover:text-bronze transition-colors duration-200"
            >
              Properties
            </NavbarLink>
            <NavbarLink
              href="#"
              className="text-[15px] font-medium text-indigo hover:text-bronze transition-colors duration-200"
            >
              About
            </NavbarLink>
            <NavbarLink
              href="#"
              className="text-[15px] font-medium text-indigo hover:text-bronze transition-colors duration-200"
            >
              Contact
            </NavbarLink>
          </div>

          <div className="mt-4 flex flex-col gap-3 md:ml-8 md:mt-0 md:flex-row md:items-center">
            <button
              type="button"
              className="rounded-full border-2 border-indigo px-6 py-2 text-[15px] font-semibold text-indigo transition-all duration-200 hover:bg-indigo hover:text-white"
            >
              Sign In
            </button>
            <button
              type="button"
              className="rounded-full bg-bronze px-6 py-2 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#b8895c] hover:shadow-lg"
            >
              Get It Now
            </button>
          </div>
        </NavbarCollapse>
      </FlowbiteNavbar>
    </div>
  );
}

export default Navbar;
