import React, { useState, useEffect } from 'react';

type MascotState = 'idle' | 'thinking' | 'happy' | 'excited' | 'confused' | 'teaching' | 'celebrating' | 'sleeping';

interface MascotOverlayProps {
  view: 'dashboard' | 'chat' | 'quiz';
}

const MascotOverlay: React.FC<MascotOverlayProps> = ({ view }) => {
  const [currentState, setCurrentState] = useState<MascotState>('idle');
  const [isBlinking, setIsBlinking] = useState(false);
  const [bouncePhase, setBouncePhase] = useState(0);

  // Breathing animation
  useEffect(() => {
    const breatheInterval = setInterval(() => {
      setBouncePhase(prev => (prev + 1) % 60);
    }, 50);
    return () => clearInterval(breatheInterval);
  }, []);

  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, []);

  // State changes based on view
  useEffect(() => {
    switch (view) {
      case 'dashboard':
        setCurrentState('happy');
        break;
      case 'chat':
        setCurrentState('teaching');
        break;
      case 'quiz':
        setCurrentState('thinking');
        break;
    }
  }, [view]);

  const getMascotSVG = () => {
    const bounceY = Math.sin(bouncePhase * 0.1) * 3;
    
    return (
      <svg 
        viewBox="0 0 200 200" 
        className={`mascot-svg state-${currentState}`}
        style={{ transform: `translateY(${bounceY}px)` }}
      >
        {/* Body - Owl Shape */}
        <ellipse cx="100" cy="120" rx="60" ry="70" fill="#8b4513" stroke="#1a1a1a" strokeWidth="3"/>
        
        {/* Belly */}
        <ellipse cx="100" cy="130" rx="40" ry="50" fill="#d4a017" stroke="#1a1a1a" strokeWidth="2"/>
        
        {/* Head */}
        <circle cx="100" cy="70" r="50" fill="#8b4513" stroke="#1a1a1a" strokeWidth="3"/>
        
        {/* Eyes */}
        <g className={isBlinking ? 'blinking' : ''}>
          <circle cx="80" cy="65" r="15" fill="#fff" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="120" cy="65" r="15" fill="#fff" stroke="#1a1a1a" strokeWidth="2"/>
          
          {/* Pupils - change based on state */}
          <circle 
            cx={currentState === 'thinking' ? 75 : 80} 
            cy="65" 
            r="8" 
            fill="#1a1a1a"
            className="pupil-left"
          />
          <circle 
            cx={currentState === 'thinking' ? 115 : 120} 
            cy="65" 
            r="8" 
            fill="#1a1a1a"
            className="pupil-right"
          />
        </g>
        
        {/* Beak */}
        <polygon points="100,75 90,85 110,85" fill="#d4a017" stroke="#1a1a1a" strokeWidth="2"/>
        
        {/* Wings - animate based on state */}
        <ellipse 
          cx="45" cy="120" rx="20" ry="30" 
          fill="#8b4513" stroke="#1a1a1a" strokeWidth="2"
          className={`wing-left ${currentState === 'excited' || currentState === 'celebrating' ? 'flapping' : ''}`}
        />
        <ellipse 
          cx="155" cy="120" rx="20" ry="30" 
          fill="#8b4513" stroke="#1a1a1a" strokeWidth="2"
          className={`wing-right ${currentState === 'excited' || currentState === 'celebrating' ? 'flapping' : ''}`}
        />
        
        {/* Feet */}
        <ellipse cx="85" cy="185" rx="12" ry="8" fill="#d4a017" stroke="#1a1a1a" strokeWidth="2"/>
        <ellipse cx="115" cy="185" rx="12" ry="8" fill="#d4a017" stroke="#1a1a1a" strokeWidth="2"/>
        
        {/* State-specific elements */}
        {currentState === 'thinking' && (
          <g className="thought-bubbles">
            <circle cx="150" cy="30" r="5" fill="#1a1a1a" opacity="0.6"/>
            <circle cx="160" cy="20" r="8" fill="#1a1a1a" opacity="0.4"/>
            <circle cx="170" cy="15" r="10" fill="#1a1a1a" opacity="0.2"/>
          </g>
        )}
        
        {currentState === 'happy' && (
          <path d="M 85 80 Q 100 90 115 80" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
        )}
        
        {currentState === 'teaching' && (
          <g className="teaching-pointer">
            <rect x="140" y="50" width="40" height="20" fill="#f5f1e8" stroke="#1a1a1a" strokeWidth="2" rx="5"/>
            <text x="160" y="64" fontSize="10" fill="#1a1a1a" textAnchor="middle">Hi!</text>
          </g>
        )}
      </svg>
    );
  };

  return (
    <div className="mascot-overlay">
      <div className="mascot-container">
        {getMascotSVG()}
        <div className="mascot-name">Dongo</div>
      </div>
    </div>
  );
};

export default MascotOverlay;
