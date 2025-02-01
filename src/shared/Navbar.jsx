import React, { useState, useEffect } from "react";

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      if (window.scrollY > 0) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#aboutMe", label: "About" },
    { href: "#Projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-7xl p-3 z-50 h-20 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
        showNavbar
          ? "opacity-100 visible"
          : "opacity-0 invisible"
      } ${isScrolled ? "backdrop-blur-xl bg-gray/20 text-white" : "backdrop-blur-xl text-white"} 
      ${isOpen ? "md:hidden" : ""}`}
    >
      <div className="flex justify-between items-center">
        <img src="./src/assets/logo.png" alt="Logo" className="h-12 px-5" />
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-[rgb(251,255,0)] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden p-2 w-10 h-10 text-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden mt-2 px-4 py-3 rounded transition-all duration-500 ease-in-out ${
          isOpen
            ? "backdrop-blur-xl bg-black/10 opacity-100 translate-y-0 text-white"
            : "backdrop-blur-none bg-white/30 opacity-0 -translate-y-4"
        }`}
      >
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="block py-2 px-3 rounded hover:bg-[rgb(251,255,0)]"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;