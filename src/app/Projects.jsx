import { useEffect, useRef, useState } from "react";

export default function CaseStudyCard() {
  const cardsRef = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  
  const projects = [
    {
      title: "Modernizing a Subscription Management Platform",
      description: "With a user-centered approach, the goal was to create an intuitive interface for effortless financial management while incorporating gamification.",
      engagement: "12 min",
      satisfaction: "4.5*"
    },
    {
      title: "Revamping an E-Commerce Website",
      description: "Focus was to create a user-friendly interface that simplified the process of accessing premium operational web scraping proxies.",
      engagement: "15 min",
      satisfaction: "4.7*"
    },
    {
      title: "Developing a Mobile Health Tracking App",
      description: "Leading Bitcoin Data and Stats site. Live price action, monitor on-chain data, and track key economic indicators.",
      engagement: "18 min",
      satisfaction: "4.8*"
    },
    {
      title: "Enhancing a SaaS CRM System",
      description: "Developed an advanced CRM system with AI-driven insights and automation to improve customer retention and sales strategies.",
      engagement: "20 min",
      satisfaction: "4.9*"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          } else {
            setVisibleIndexes((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.5 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <main className="bg-black py-16 text-center">
      <div className="text-white container mx-auto">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-4 text-lg text-white">Scroll Down</p>
      </div>

      <div className="relative flex flex-col items-center space-y-12 mt-12">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            data-index={index}
            className={`relative w-full max-w-3xl p-8 rounded-2xl shadow-lg transition-all duration-700 ease-in-out transform 
              ${visibleIndexes.includes(index) ? "opacity-100 translate-y-0 scale-100 z-10" : "opacity-0 translate-y-10 scale-95 z-0"}
              ${visibleIndexes.includes(index - 1) ? "-mt-20" : ""}`}
            style={{ background: "linear-gradient(to right, #1F2937, #374151)" }}
          >
            <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <button className="mt-4 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
                  View case study
                </button>
              </div>
              <div className="bg-gray-700 p-4 rounded-xl flex flex-col items-center">
                <div className="w-48 h-28 bg-gray-600 rounded-lg" />
                <div className="mt-4 flex justify-between w-full text-center">
                  <div>
                    <p className="text-gray-400 text-sm">Engagement</p>
                    <p className="text-lg font-semibold text-white">{project.engagement}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">User Satisfaction</p>
                    <p className="text-lg font-semibold text-white">{project.satisfaction}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
