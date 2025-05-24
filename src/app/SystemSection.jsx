import React from 'react';
import SystemStatus from '../components/system/SystemStatus';

const SystemSection = () => {
  return (
    <section id="system" className="py-16 text-center" data-aos="fade-up">
      <div className="text-[rgb(251,255,0)] container mx-auto">
        <h1 className="text-4xl font-bold">System Status</h1>
        <p className="mt-4 text-lg text-white">Real-time System Information</p>
      </div>

      <div className="p-4 container mx-auto relative flex flex-col items-center mt-12">
        <div 
          className="backdrop-blur-lg relative w-full max-w-3xl p-8 rounded-2xl shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          style={{ background: "linear-gradient(to right,rgba(39, 39, 41, 0.28),rgba(53, 48, 39, 0.56))" }}
        >
          <SystemStatus />
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
