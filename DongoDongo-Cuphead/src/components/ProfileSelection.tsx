import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore, DifficultyTier } from '../store/appStore';

const TIERS = [
  {
    id: 1,
    name: 'The Gentle Waltz',
    subtitle: 'Easy Profile',
    grades: 'Grades 3-6',
    description: 'A playful journey through learning basics',
    color: '#FFD93D',
    secondaryColor: '#FF6B6B',
    icon: '🌟',
    mascotPreview: '🦉'
  },
  {
    id: 2,
    name: 'The Midnight Chase',
    subtitle: 'Normal Profile',
    grades: 'Grades 7-9',
    description: 'An adventurous quest for knowledge',
    color: '#6C5CE7',
    secondaryColor: '#00CEC9',
    icon: '🌙',
    mascotPreview: '🦊'
  },
  {
    id: 3,
    name: 'The Last Ride',
    subtitle: 'Advanced Profile',
    grades: 'Grades 10-12',
    description: 'The ultimate challenge before university',
    color: '#2D3436',
    secondaryColor: '#FDCB6E',
    icon: '🎓',
    mascotPreview: '🦅'
  }
];

export const ProfileSelection: React.FC = () => {
  const { setTier } = useAppStore();

  const handleSelectTier = (tierId: DifficultyTier) => {
    setTier(tierId);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen paper-texture flex flex-col items-center justify-center px-4 py-12"
    >
      {/* Film grain */}
      <div className="film-grain" />
      
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
        className="text-center mb-16 relative z-10"
      >
        <h1 
          className="text-4xl md:text-6xl font-bold text-[#8b1538] mb-4 ink-border inline-block bg-[#f5f1e8] px-8 py-4 watercolor-fill ink-shadow"
          style={{
            borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
            fontFamily: "'Comic Neue', cursive"
          }}
        >
          Select Your Journey
        </h1>
        <p className="text-xl text-[#636E72] mt-6 font-medium">
          Choose your learning path to begin
        </p>
      </motion.div>

      {/* Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {TIERS.map((tier, index) => (
          <motion.button
            key={tier.id}
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ 
              y: 0, 
              opacity: 1, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2,
              ease: [0.68, -0.55, 0.265, 1.55]
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              rotate: index % 2 === 0 ? 2 : -2
            }}
            whileTap={{ scale: 0.95, y: -5 }}
            onClick={() => handleSelectTier(tier.id as DifficultyTier)}
            className="group relative ink-border ink-shadow cursor-pointer overflow-hidden card-lift"
            style={{
              backgroundColor: tier.color + '20', // 20% opacity
              borderColor: tier.color,
              borderWidth: '3px',
              borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px'
            }}
          >
            {/* Watercolor background */}
            <div 
              className="absolute inset-0 watercolor-fill opacity-50"
              style={{
                background: `radial-gradient(ellipse at 30% 30%, ${tier.color}40 0%, transparent 70%)`
              }}
            />
            
            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col items-center text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
                className="text-7xl mb-6"
              >
                {tier.icon}
              </motion.div>

              {/* Mascot Preview */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.5 }}
                className="text-4xl mb-4"
              >
                {tier.mascotPreview}
              </motion.div>

              {/* Title */}
              <h2 
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: tier.color }}
              >
                {tier.name}
              </h2>

              {/* Subtitle */}
              <p 
                className="text-lg font-semibold mb-3"
                style={{ color: tier.secondaryColor }}
              >
                {tier.subtitle}
              </p>

              {/* Grades */}
              <div className="ink-border bg-[#faf6ed] px-4 py-2 mb-4 watercolor-fill">
                <span className="font-bold text-[#1a1a1a]">{tier.grades}</span>
              </div>

              {/* Description */}
              <p className="text-[#636E72] font-medium leading-relaxed">
                {tier.description}
              </p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.7 }}
                className="mt-6 btn-cuphead ink-border ink-shadow"
                style={{
                  backgroundColor: tier.color,
                  borderColor: tier.color,
                  color: tier.id === 3 ? '#fff' : '#1a1a1a'
                }}
              >
                Start Learning
              </motion.div>
            </div>

            {/* Hover effect overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
              style={{ backgroundColor: tier.color }}
            />
          </motion.button>
        ))}
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="fixed top-20 left-10 text-8xl opacity-10 pointer-events-none"
      >
        ✨
      </motion.div>

      <motion.div
        animate={{ 
          rotate: [0, -360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="fixed bottom-20 right-10 text-8xl opacity-10 pointer-events-none"
      >
        📖
      </motion.div>
    </motion.div>
  );
};
