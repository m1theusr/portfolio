import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div id= "aboutMe" className="flex justify-center items-center h-screen bg-black">
      <div
        className="bg-black p-8 rounded-lg shadow-lg max-w-2xl w-full"
        data-aos="fade-up"
      >
        <h1
          className="text-4xl font-bold text-center text-[rgb(251,255,0)] mb-4"
          data-aos="fade-up"
        >
          About Me
        </h1>
        <p
          className="text-xl text-gray-400 mb-4"
          data-aos="fade-up"
        >
          Hello! I’m a passionate DevOps Engineer and SRE with a strong focus on
          automating systems, improving infrastructure efficiency, and ensuring
          reliability across distributed platforms. With experience in cloud
          services, CI/CD pipelines, containerization, and monitoring, I’m always
          looking to optimize processes and make systems scalable and robust.
        </p>
        <p
          className="text-xl text-gray-400"
          data-aos="fade-up"
        >
          I enjoy solving complex problems, collaborating with teams to build
          resilient systems, and keeping up with the latest trends in DevOps
          practices and technologies.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;