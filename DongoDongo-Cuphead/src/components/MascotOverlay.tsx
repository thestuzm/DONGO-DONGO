import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store/appStore';

type MascotEmotion = 'neutral' | 'happy' | 'thinking' | 'excited' | 'talking';

interface MascotOverlayProps {
  emotion?: MascotEmotion;
  message?: string;
}

export const MascotOverlay: React.FC<MascotOverlayProps> = ({ 
  emotion = 'neutral',
  message = ''
}) => {
  const { currentTier } = useAppStore();

  // Mascot designs based on tier
  const mascots = {
    1: {
      name: 'Professor Whiskers',
      base: '🦉',
      accessories: ['👓', '🎀'], // Glasses and bow tie
      colors: { primary: '#FFD93D', secondary: '#FF6B6B' }
    },
    2: {
      name: 'Alex',
      base: '🦊',
      accessories: ['🧣'], // Scarf - more mature
      colors: { primary: '#6C5CE7', secondary: '#00CEC9' }
    },
    3: {
      name: 'Dr. Sage',
      base: '🦅',
      accessories: ['🎓', '👔'], // Graduation cap and tie - fully mature
      colors: { primary: '#2D3436', secondary: '#FDCB6E' }
    }
  };

  const mascot = mascots[currentTier as 1 | 2 | 3] || mascots[1];

  // Eye states based on emotion
  const getEyeStyle = () => {
    switch (emotion) {
      case 'happy': return '✨';
      case 'thinking': return '🤔';
      case 'excited': return '⭐';
      case 'talking': return '💬';
      default: return '👀';
    }
  };

  // Mouth animation class
  const mouthClass = emotion === 'talking' ? 'mouth-talk' : '';

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="mascot-container relative"
    >
      {/* Mascot Container */}
      <div 
        className="ink-border ink-shadow bg-[#faf6ed] p-6 watercolor-fill"
        style={{
          borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
          borderColor: mascot.colors.primary,
          borderWidth: '3px'
        }}
      >
        {/* Mascot Name Tag */}
        <div className="text-center mb-4">
          <span 
            className="text-sm font-bold px-3 py-1 ink-border inline-block watercolor-fill"
            style={{
              backgroundColor: mascot.colors.primary + '30',
              borderRadius: '15px 225px 15px 255px / 255px 15px 225px 15px',
              color: mascot.colors.primary
            }}
          >
            {mascot.name}
          </span>
        </div>

        {/* Mascot Face */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          {/* Base mascot emoji */}
          <motion.div
            animate={{ 
              y: [0, -5, 0],
              rotate: [0, 3, 0, -3, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-8xl text-center"
          >
            {mascot.base}
          </motion.div>

          {/* Accessories */}
          <div className="absolute top-0 right-0 text-2xl">
            {mascot.accessories.map((acc, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.2 }}
                className="inline-block"
              >
                {acc}
              </motion.span>
            ))}
          </div>

          {/* Eyes overlay */}
          <motion.div
            className="absolute top-8 left-1/2 transform -translate-x-1/2 eye-blink"
            style={{ fontSize: '20px' }}
          >
            {getEyeStyle()}
          </motion.div>
        </div>

        {/* Speech Bubble */}
        {(message || emotion === 'talking') && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="ink-border bg-white p-3 mt-4 relative watercolor-fill"
            style={{
              borderRadius: '25px 25px 25px 5px / 25px 25px 25px 5px',
              borderWidth: '2px'
            }}
          >
            {/* Speech bubble tail */}
            <div 
              className="absolute -top-2 left-1/2 w-4 h-4 bg-white ink-border-l ink-border-t"
              style={{
                transform: 'translateX(-50%) rotate(45deg)',
                borderRight: '2px solid #1a1a1a',
                borderBottom: '2px solid #1a1a1a',
                borderRadius: '2px'
              }}
            />
            <p className={`text-sm font-medium text-[#1a1a1a] ${mouthClass}`}>
              {message || "I'm here to help you learn!"}
            </p>
          </motion.div>
        )}

        {/* Emotion indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {(['neutral', 'happy', 'thinking', 'excited'] as const).map((emo) => (
            <motion.button
              key={emo}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-8 h-8 rounded-full ink-border flex items-center justify-center text-lg ${
                emotion === emo ? 'ring-2 ring-offset-2' : ''
              }`}
              style={{
                backgroundColor: emotion === emo ? mascot.colors.primary : '#faf6ed'
              }}
            >
              {emo === 'neutral' && '😐'}
              {emo === 'happy' && '😊'}
              {emo === 'thinking' && '🤔'}
              {emo === 'excited' && '🤩'}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
