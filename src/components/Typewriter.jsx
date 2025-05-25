import React, { useEffect, useState } from 'react';

const Typewriter = ({ text = '', delay = 50, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    // Reset display text when text prop changes
    setDisplayText('');
    let currentIndex = 0;
    let timeout;

    const type = () => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        currentIndex++;
        timeout = setTimeout(type, delay);
      }
    };

    // Start typing after a small delay
    timeout = setTimeout(type, 100);
    
    // Cleanup
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <div className={`${className} inline-block`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default Typewriter;
