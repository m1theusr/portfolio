import React from "react";
import Background from "./Background"; // Componente do background
import NavBar from "../shared/Navbar";
import Footer from "../shared/Footer";
import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

const Layout = () => {
  return (
    <>
      <Background />
      <div className="content">
        <NavBar />
        <HomePage />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    </>
  );
};

export default Layout;