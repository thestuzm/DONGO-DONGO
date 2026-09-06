import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../store/appStore';

const loadingMessages = [
  'Preparing your learning adventure...',
  'Gathering knowledge stars...',
  'Warming up the chalkboard...',
  'Setting up your study space...',
  'Almost ready to learn!'
];

export const LoadingScreen: React.FC = () => {
  const { setLoading } = useAppStore();
  const [currentMessage, setCurrentMessage] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    // Simulate loading sequence
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % loadingMessages.length);
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setLoading(false);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [setLoading]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center paper-texture"
    >
      {/* Film grain overlay */}
      <div className="film-grain" />
      
      <div className="relative z-10 text-center px-8">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.5, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.68, -0.55, 0.265, 1.55] }}
          className="mb-12"
        >
          <div className="ink-border watercolor-fill bg-[#f5f1e8] p-8 inline-block ink-shadow">
            <h1 
              className="text-5xl md:text-7xl font-bold text-[#8b1538]"
              style={{ 
                fontFamily: "'Comic Neue', cursive",
                textShadow: '3px 3px 0px rgba(26,26,26,0.15)'
              }}
            >
              Dongo Dongo
            </h1>
            <p className="text-xl md:text-2xl text-[#1a1a1a] mt-2 font-semibold">
              Copilot Tutor
            </p>
          </div>
        </motion.div>

        {/* Loading Spinner */}
        <div className="mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="loading-spinner mx-auto"
          />
        </div>

        {/* Progress Bar */}
        <div className="w-80 md:w-96 h-4 ink-border bg-[#faf6ed] overflow-hidden mb-6">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
            className="h-full bg-[#d4a017]"
            style={{
              borderRadius: '0 255px 255px 0 / 0 15px 15px 0'
            }}
          />
        </div>

        {/* Loading Message */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentMessage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-lg text-[#636E72] font-medium"
          >
            {loadingMessages[currentMessage]}
          </motion.p>
        </AnimatePresence>

        {/* Decorative elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 text-6xl opacity-20"
        >
          ✏️
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute -bottom-10 -left-20 text-6xl opacity-20"
        >
          📚
        </motion.div>
      </div>
    </motion.div>
  );
};
