import { useEffect, useRef, useState } from "react";

export default function CaseStudyCard() {
  const cardsRef = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  
  const projects = [
    {
      title: "Terraform + GKE + GCP",
      description: "Modular and structured infrastructure with Terraform, managing multiple environments on Google Cloud Platform (GCP) with Kubernetes (GKE). The setup enables efficient and reusable automation and scalability of resources.",
      link: "https://github.com/m1theusr/terraform-poc",
    },
    {
      title: "Cryptocurrency Trading Bot for Binance",
      description: "Automates buy and sell operations on Binance, using the API to monitor the market and execute orders based on predefined strategies. The bot focuses on efficiency, security, and high availability, maximizing investment returns.",
      link: "https://github.com/m1theusr/trading-bot-for-binance",
    },
    {
      title: "Developing a Mobile Health Tracking App",
      description: "Leading Bitcoin Data and Stats site. Live price action, monitor on-chain data, and track key economic indicators.",
      link: "https://github.com/m1theusr/bitcoin-data-and-stats",
    },
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
    <main id="Projects" className="py-16 text-center" data-aos="fade-up">
      <div className="text-[rgb(251,255,0)] container mx-auto">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-4 text-lg text-white">Scroll Down</p>
      </div>

      <div className="p-4 container mx-auto relative flex flex-col items-center space-y-12 mt-12">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => (cardsRef.current[index] = el)}
            data-index={index}
            className={`backdrop-blur-lg relative w-full max-w-3xl p-8 rounded-2xl shadow-lg transition-all duration-200 ease-in-out transform 
              ${visibleIndexes.includes(index) ? "opacity-100 translate-y-0 scale-100 z-10" : "opacity-0 translate-y-10 scale-95 z-0"}
              ${visibleIndexes.includes(index - 1) ? "-mt-20" : ""}
              hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 cursor-pointer
            `}
            style={{ background: "linear-gradient(to right,rgba(39, 39, 41, 0.28),rgba(53, 48, 39, 0.56))" }}
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none" />
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                <p className="text-gray-400 mt-2">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}