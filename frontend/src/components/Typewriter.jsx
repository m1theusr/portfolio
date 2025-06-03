import React, { useState, useEffect } from 'react';

const Typewriter = ({ text = '', delay = 50, className = '' }) => {
  const [currentText, setCurrentText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Resetar a animação quando o texto mudar
  useEffect(() => {
    // Converter o texto para string segura e garantir que não seja undefined
    const safeText = typeof text === 'string' ? text : '';
    
    // Resetar os estados
    setCurrentText('');
    setIsComplete(false);
    
    // Se não há texto, não faz nada
    if (safeText.length === 0) return;
    
    // Armazenar a posição atual na string
    let currentPosition = 0;
    
    // Função para adicionar um caractere por vez
    const addNextChar = () => {
      if (currentPosition < safeText.length) {
        setCurrentText(prev => prev + safeText.charAt(currentPosition));
        currentPosition++;
        return true; // Ainda há caracteres para adicionar
      }
      return false; // Não há mais caracteres para adicionar
    };
    
    // Configura um timer para adicionar os caracteres
    const timer = setInterval(() => {
      const hasMoreChars = addNextChar();
      if (!hasMoreChars) {
        clearInterval(timer); // Limpa o timer quando terminar
        setIsComplete(true);  // Marca como completo
      }
    }, delay);
    
    // Limpa o timer quando o componente for desmontado
    return () => clearInterval(timer);
  }, [text, delay]);
  
  // Efeito para o cursor piscante
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {currentText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default Typewriter;