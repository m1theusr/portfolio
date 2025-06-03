import React, { useState, useEffect } from 'react';

const SystemStatus = () => {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        // Simplificando para usar o proxy do Nginx - isso funciona tanto em dev quanto em Docker
        console.log('Fetching system status...');
        
        // Usar o caminho relativo que o Nginx vai encaminhar para o backend
        const response = await fetch('/system/status');
        if (!response.ok) {
          throw new Error(`Failed to fetch system status: ${response.status}`);
        }
        const data = await response.json();
        setStatus(data);
      } catch (err) {
        console.error('System status error:', err);
        setError(err.message);
      }
    };

    fetchStatus();
    // Fetch status every 30 seconds
    const interval = setInterval(fetchStatus, 30000);

    return () => clearInterval(interval);
  }, []);

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        Error: {error}
      </div>
    );
  }

  if (!status) {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-6 w-full">
      <div className="p-4 rounded-lg" style={{ background: "linear-gradient(to right,rgba(39, 39, 41, 0.28),rgba(53, 48, 39, 0.56))" }}>
        <p className="text-gray-300 text-lg">CPU Load</p>
        <p className="text-2xl font-medium text-white mt-2">{status.cpuLoad}%</p>
      </div>
      <div className="p-4 rounded-lg" style={{ background: "linear-gradient(to right,rgba(39, 39, 41, 0.28),rgba(53, 48, 39, 0.56))" }}>
        <p className="text-gray-300 text-lg">Memory Usage</p>
        <p className="text-2xl font-medium text-white mt-2">{status.usedMem} / {status.totalMem}</p>
      </div>
      <div className="p-4 rounded-lg" style={{ background: "linear-gradient(to right,rgba(39, 39, 41, 0.28),rgba(53, 48, 39, 0.56))" }}>
        <p className="text-gray-300 text-lg">Operating System</p>
        <p className="text-2xl font-medium text-white mt-2">{status.os}</p>
      </div>
      <div className="p-4 rounded-lg" style={{ background: "linear-gradient(to right,rgba(39, 39, 41, 0.28),rgba(53, 48, 39, 0.56))" }}>
        <p className="text-gray-300 text-lg">Uptime</p>
        <p className="text-2xl font-medium text-white mt-2">{Math.floor(status.uptime / 3600)} hours</p>
      </div>
    </div>
  );
};

export default SystemStatus;
