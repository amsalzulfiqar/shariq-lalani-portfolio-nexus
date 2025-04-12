
import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', delay = 0 }) => {
  const words = text.split(' ');
  
  return (
    <div className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split('').map((char, charIndex) => (
            <span 
              key={charIndex} 
              className="inline-block opacity-0 animate-fade-in" 
              style={{ 
                animationDelay: `${delay + (wordIndex * 0.05) + (charIndex * 0.03)}s`, 
                animationFillMode: 'forwards' 
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
