import React from 'react';
import { motion } from 'framer-motion';

export type ProfileTier = 'gentle-waltz' | 'midnight-chase' | 'last-ride';

interface ProfileCardProps {
  id: ProfileTier;
  displayName: string;
  subtitle: string;
  gradeRange: string;
  color: string;
  iconPath: string;
  onSelect: (tier: ProfileTier) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  id,
  displayName,
  subtitle,
  gradeRange,
  color,
  iconPath,
  onSelect,
}) => {
  return (
    <motion.button
      className="profile-card"
      onClick={() => onSelect(id)}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ 
        y: -8, 
        scale: 1.03,
        transition: { type: 'spring', stiffness: 300, damping: 15 }
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: 'var(--dd-color-bg)',
        border: 'var(--dd-border-width) solid var(--dd-color-ink-black)',
        borderRadius: 'var(--dd-border-radius)',
        padding: 'calc(2rem * var(--dd-spacing-multiplier))',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        minWidth: '280px',
        maxWidth: '340px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 50% 0%, ${color}15 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Icon */}
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 200 200"
        style={{
          shapeRendering: 'geometricPrecision',
          zIndex: 1,
        }}
        initial={{ rotate: -10, scale: 0.9 }}
        whileHover={{ rotate: 0, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 250, damping: 15 }}
      >
        {/* Circle background */}
        <circle
          cx="100"
          cy="100"
          r="90"
          fill={color}
          opacity="0.15"
          stroke="var(--dd-color-ink-black)"
          strokeWidth="3"
        />
        
        {/* Icon path */}
        <motion.path
          d={iconPath}
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          filter="drop-shadow(0 0 1px rgba(0,0,0,0.5))"
        />
        
        {/* Decorative sparkles */}
        {[20, 100, 180].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={40 + i * 10}
            r="3"
            fill={color}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.3, 1] }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
          />
        ))}
      </motion.svg>

      {/* Content */}
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <h3
          style={{
            fontFamily: 'var(--dd-font-display)',
            fontSize: 'calc(var(--dd-font-size-base) * 1.5)',
            color: 'var(--dd-color-primary)',
            marginBottom: '0.5rem',
          }}
        >
          {displayName}
        </h3>
        <p
          style={{
            fontSize: 'calc(var(--dd-font-size-base) * 0.9)',
            color: 'var(--dd-color-text)',
            opacity: 0.8,
            marginBottom: '0.25rem',
          }}
        >
          {subtitle}
        </p>
        <p
          style={{
            fontSize: 'calc(var(--dd-font-size-base) * 0.85)',
            color: 'var(--dd-color-text)',
            opacity: 0.6,
            fontWeight: 500,
          }}
        >
          {gradeRange}
        </p>
      </div>

      {/* Select button hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          marginTop: '0.5rem',
          padding: '0.5rem 1.5rem',
          background: color,
          color: 'var(--dd-color-bg)',
          borderRadius: 'calc(var(--dd-border-radius) / 2)',
          fontSize: 'calc(var(--dd-font-size-base) * 0.85)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        Select
      </motion.div>
    </motion.button>
  );
};

interface ProfileSelectionProps {
  onSelectProfile: (tier: ProfileTier) => void;
}

export const ProfileSelection: React.FC<ProfileSelectionProps> = ({ onSelectProfile }) => {
  const profiles: Array<{
    id: ProfileTier;
    displayName: string;
    subtitle: string;
    gradeRange: string;
    color: string;
    iconPath: string;
  }> = [
    {
      id: 'gentle-waltz',
      displayName: 'The Gentle Waltz',
      subtitle: 'Easy',
      gradeRange: 'Grades 3-6',
      color: '#E63946',
      iconPath: 'M100 20C100 20 60 60 60 100C60 140 100 180 100 180C100 180 140 140 140 100C140 60 100 20 100 20ZM100 100L100 100M80 90L100 100L120 90M80 110L100 100L120 110',
    },
    {
      id: 'midnight-chase',
      displayName: 'The Midnight Chase',
      subtitle: 'Normal',
      gradeRange: 'Grades 7-9',
      color: '#457B9D',
      iconPath: 'M100 20L100 180M60 60L100 100L140 60M60 140L100 100L140 140',
    },
    {
      id: 'last-ride',
      displayName: 'The Last Ride',
      subtitle: 'Advanced',
      gradeRange: 'Grades 10-12',
      color: '#1D3557',
      iconPath: 'M100 20L100 180M60 60L140 60M60 100L140 100M60 140L140 140M60 180L140 180',
    },
  ];

  return (
    <motion.div
      className="profile-selection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--dd-color-bg)',
        padding: '2rem',
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: 'center',
          marginBottom: 'calc(3rem * var(--dd-spacing-multiplier))',
        }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'var(--dd-font-display)',
            fontSize: 'calc(var(--dd-font-size-base) * 3)',
            color: 'var(--dd-color-primary)',
            marginBottom: '0.5rem',
          }}
        >
          Select Your Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            fontSize: 'calc(var(--dd-font-size-base) * 1.1)',
            color: 'var(--dd-color-text)',
            opacity: 0.8,
          }}
        >
          Choose the learning path that fits you best
        </motion.p>
      </motion.div>

      {/* Title Bar */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          marginBottom: 'calc(2rem * var(--dd-spacing-multiplier))',
          padding: '0.75rem 2rem',
          background: 'var(--dd-color-primary)',
          color: 'var(--dd-color-bg)',
          borderRadius: 'calc(var(--dd-border-radius) / 2)',
          display: 'inline-block',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--dd-font-display)',
            fontSize: 'calc(var(--dd-font-size-base) * 1.25)',
            margin: 0,
            letterSpacing: '1px',
          }}
        >
          SELECT DIFFICULTY
        </h2>
      </motion.div>

      {/* Profile Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 'calc(2rem * var(--dd-spacing-multiplier))',
          maxWidth: '1200px',
        }}
      >
        {profiles.map((profile, index) => (
          <motion.div
            key={profile.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.15 }}
          >
            <ProfileCard
              {...profile}
              onSelect={onSelectProfile}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative elements */}
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          opacity: 0.1,
          pointerEvents: 'none',
        }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="var(--dd-color-primary)"
          strokeWidth="2"
          strokeDasharray="8 4"
        />
      </motion.svg>
    </motion.div>
  );
};

export { LoadingScreen } from './LoadingScreen';
