import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import About from "./About";

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar isScrolled={isScrolled} />
      <div
        className="relative bg-cover bg-center text-white h-screen flex items-center parallax background-noise"
        style={{
          backgroundImage: "url('./src/assets/img-home.png')",
        }}
      >
        <div className="max-w-7xl container mx-auto px-1">
          <h1
            className="pl-5 pb-3 md:text-7xl text-7xl font-bold mb-5 text-gradient responsive-text"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            Matheus Rodrigues
          </h1>
          <p
            className="relative flex items-center text-2xl responsive-p"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <span className="pl-6 text-gradient text-white mr-2">I'm</span>
            <span
              className="text-gradient overflow-hidden border-r-2 border-[rgb(251,255,0)] whitespace-nowrap max-w-[13ch] animate-typing text-2xl font-bold text-white"
            >
              <span className="block group-[data-text='0']:block group-[data-text='1']:hidden underline decoration-[rgb(251,255,0)]">
                DevOps Engineer
              </span>
              <span className="hidden group-[data-text='1']:block group-[data-text='0']:hidden">
                SRE
              </span>
            </span>
          </p>
          <div
            className={`flex justify-start space-x-4 mt-6 transform transition-all duration-500`}
          >
            
            <a href="" aria-label="Find us on LinkedIn" target="_blank" rel="noopener">
              <svg className="h-7 w-7 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                
              </svg>
            </a>
            <a href="" aria-label="Find us on Facebook" target="_blank" rel="noopener">
              <svg className="h-7 w-7 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                
              </svg>
            </a>
            <a href="" aria-label="Find us on Instagram" target="_blank" rel="noopener">
              <svg className="h-7 w-7 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                
              </svg>
            </a>
          </div>

          <Link
            to="about" 
            smooth={true}
            duration={500}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <div className="animate-bounce text-4xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
