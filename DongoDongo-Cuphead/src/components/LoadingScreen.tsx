import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('Initializing...');

  const loadingMessages = [
    'Initializing...',
    'Loading curriculum...',
    'Preparing mascot...',
    'Setting up your profile...',
    'Almost ready...',
  ];

  useEffect(() => {
    const duration = 2500;
    const interval = 50;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        
        // Update message based on progress
        const messageIndex = Math.floor((newProgress / 100) * loadingMessages.length);
        setMessage(loadingMessages[Math.min(messageIndex, loadingMessages.length - 1)]);

        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--dd-color-bg)',
        zIndex: 10000,
      }}
    >
      {/* Animated Logo */}
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ 
          scale: 1, 
          rotate: 0,
          y: [0, -10, 0]
        }}
        transition={{
          scale: { duration: 0.6, type: 'spring', stiffness: 200, damping: 15 },
          rotate: { duration: 0.6, type: 'spring', stiffness: 200, damping: 15 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }}
        style={{
          shapeRendering: 'geometricPrecision',
        }}
      >
        {/* Decorative Circle Border */}
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="var(--dd-color-primary)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          filter="drop-shadow(0 0 1px rgba(29, 53, 87, 0.8))"
        />
        
        {/* Inner decorative elements */}
        <motion.circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="var(--dd-color-secondary)"
          strokeWidth="2"
          strokeDasharray="8 4"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* DD Letters */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <text
            x="100"
            y="115"
            textAnchor="middle"
            fontFamily="'Abril Fatface', cursive"
            fontSize="72"
            fill="var(--dd-color-primary)"
            style={{
              stroke: 'var(--dd-color-ink-black)',
              strokeWidth: 1.5,
              paintOrder: 'stroke',
            }}
          >
            DD
          </text>
        </motion.g>
        
        {/* Sparkle decorations */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 100 + 90 * Math.cos(rad);
          const y = 100 + 90 * Math.sin(rad);
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill="var(--dd-color-accent)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ 
                delay: 0.5 + i * 0.1,
                duration: 0.4,
              }}
            />
          );
        })}
      </motion.svg>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{
          marginTop: '2rem',
          fontFamily: 'var(--dd-font-display)',
          fontSize: 'calc(var(--dd-font-size-base) * 2)',
          color: 'var(--dd-color-primary)',
        }}
      >
        Dongo Dongo
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{
          marginTop: '0.5rem',
          fontSize: 'calc(var(--dd-font-size-base) * 0.9)',
          color: 'var(--dd-color-text)',
          opacity: 0.7,
        }}
      >
        Your Personal Learning Companion
      </motion.p>

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: '300px' }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{
          marginTop: '3rem',
          position: 'relative',
        }}
      >
        {/* Progress Track */}
        <svg
          width="300"
          height="12"
          viewBox="0 0 300 12"
          style={{
            shapeRendering: 'geometricPrecision',
          }}
        >
          {/* Background track */}
          <rect
            x="0"
            y="0"
            width="300"
            height="12"
            rx="6"
            fill="none"
            stroke="var(--dd-color-ink-black)"
            strokeWidth="2"
            opacity="0.2"
          />
          
          {/* Progress fill */}
          <motion.rect
            x="2"
            y="2"
            height="8"
            rx="4"
            fill="var(--dd-color-secondary)"
            initial={{ width: 0 }}
            animate={{ width: (progress / 100) * 296 }}
            transition={{ duration: 0.1 }}
            filter="drop-shadow(0 0 2px rgba(230, 57, 70, 0.6))"
          />
          
          {/* Border */}
          <rect
            x="0"
            y="0"
            width="300"
            height="12"
            rx="6"
            fill="none"
            stroke="var(--dd-color-ink-black)"
            strokeWidth="2"
          />
        </svg>

        {/* Progress Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            textAlign: 'center',
            marginTop: '0.75rem',
            fontSize: 'calc(var(--dd-font-size-base) * 0.8)',
            color: 'var(--dd-color-text)',
            opacity: 0.8,
          }}
        >
          {message}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
