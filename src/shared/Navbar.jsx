import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(true);
      if (window.scrollY > 0) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "aboutMe", label: "About" },
    { href: "Projects", label: "Projects" },
    { href: "system", label: "System" },
    { href: "resume", label: "Resume" },
    { href: "https://cal.com/m1theusr", label: "Contact", external: true },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-7xl p-3 z-50 h-20 rounded-lg shadow-lg transition-all duration-300 ease-in-out backdrop-blur-xl
      ${isScrolled ? "bg-white/10 text-white" : " bg-white/10 text-white"}`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <img src="./src/assets/logo.png" alt="Logo" className="h-12" />
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label, external }) => 
            external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[rgb(251,255,0)] transition-colors duration-200 cursor-pointer"
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                to={href}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[rgb(251,255,0)] transition-colors duration-200 cursor-pointer"
              >
                {label}
              </Link>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden text-white focus:outline-none flex items-center justify-center w-6 h-6"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                isOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'
              }`}
              style={{ top: '2px' }}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ top: '10px' }}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                isOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-0'
              }`}
              style={{ top: '18px' }}
            />
          </div>
        </button>
      </div>

      <div
        className={`absolute top-full left-0 w-full p-4 transition-all duration-300 ${
          isOpen ? "bg-black/80 backdrop-blur-md text-white opacity-100" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        {navLinks.map(({ href, label, external }) => 
            external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-3 rounded hover:bg-[rgb(251,255,0)] cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                to={href}
                spy={true}
                smooth={true}
                duration={500}
                className="block py-2 px-3 rounded hover:bg-[rgb(251,255,0)] cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;