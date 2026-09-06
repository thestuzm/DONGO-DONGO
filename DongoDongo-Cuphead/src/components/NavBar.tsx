import React from 'react';
import { motion } from 'framer-motion';
import { ProfileTier } from './Onboarding';

interface NavBarProps {
  profileTier: ProfileTier;
  activeTab: 'topics' | 'chat' | 'quiz';
  onTabChange: (tab: 'topics' | 'chat' | 'quiz') => void;
  onProfileChange: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({
  profileTier,
  activeTab,
  onTabChange,
  onProfileChange,
}) => {
  const tabs: Array<{
    id: 'topics' | 'chat' | 'quiz';
    label: string;
    iconPath: string;
  }> = [
    { id: 'topics', label: 'Topics', iconPath: 'M4 6H20M4 12H20M4 18H20' },
    { id: 'chat', label: 'Chat', iconPath: 'M4 4H20V20H4V4ZM8 8V16M12 8V16M16 8V16' },
    { id: 'quiz', label: 'Quiz', iconPath: 'M12 2C12 2 8 8 8 14C8 18 10 22 12 22C14 22 16 18 16 14C16 8 12 2 12 2Z' },
  ];

  return (
    <motion.nav
      className="nav-bar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        background: 'var(--dd-color-bg)',
        borderBottom: 'var(--dd-border-width) solid var(--dd-color-ink-black)',
        padding: 'calc(0.75rem * var(--dd-spacing-multiplier)) calc(1.5rem * var(--dd-spacing-multiplier))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <motion.div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'calc(0.75rem * var(--dd-spacing-multiplier))',
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 200 200"
          style={{
            shapeRendering: 'geometricPrecision',
          }}
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="var(--dd-color-primary)"
            stroke="var(--dd-color-ink-black)"
            strokeWidth="4"
          />
          <text
            x="100"
            y="115"
            textAnchor="middle"
            fontFamily="'Abril Fatface', cursive"
            fontSize="72"
            fill="var(--dd-color-bg)"
            style={{
              stroke: 'var(--dd-color-ink-black)',
              strokeWidth: 2,
              paintOrder: 'stroke',
            }}
          >
            DD
          </text>
        </svg>
        
        <div>
          <h1
            style={{
              fontFamily: 'var(--dd-font-display)',
              fontSize: 'calc(var(--dd-font-size-base) * 1.25)',
              color: 'var(--dd-color-primary)',
              margin: 0,
            }}
          >
            Dongo Dongo
          </h1>
          <p
            style={{
              fontSize: 'calc(var(--dd-font-size-base) * 0.75)',
              color: 'var(--dd-color-text)',
              opacity: 0.7,
              margin: 0,
            }}
          >
            {profileTier === 'gentle-waltz' && 'The Gentle Waltz'}
            {profileTier === 'midnight-chase' && 'The Midnight Chase'}
            {profileTier === 'last-ride' && 'The Last Ride'}
          </p>
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <div
        style={{
          display: 'flex',
          gap: 'calc(0.5rem * var(--dd-spacing-multiplier))',
        }}
      >
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              padding: 'calc(0.5rem * var(--dd-spacing-multiplier)) calc(1rem * var(--dd-spacing-multiplier))',
              background: activeTab === tab.id ? 'var(--dd-color-primary)' : 'transparent',
              color: activeTab === tab.id ? 'var(--dd-color-bg)' : 'var(--dd-color-text)',
              border: 'var(--dd-border-width) solid var(--dd-color-ink-black)',
              borderRadius: 'calc(var(--dd-border-radius) / 2)',
              cursor: 'pointer',
              minWidth: 'var(--dd-touch-target-min)',
              minHeight: 'var(--dd-touch-target-min)',
              transition: 'all 0.2s ease',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                shapeRendering: 'geometricPrecision',
              }}
            >
              <path d={tab.iconPath} />
            </svg>
            <span
              style={{
                fontSize: 'calc(var(--dd-font-size-base) * 0.75)',
                fontWeight: 600,
              }}
            >
              {tab.label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Profile Change Button */}
      <motion.button
        onClick={onProfileChange}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn btn-secondary"
        style={{
          padding: 'calc(0.5rem * var(--dd-spacing-multiplier)) calc(1rem * var(--dd-spacing-multiplier))',
          fontSize: 'calc(var(--dd-font-size-base) * 0.85)',
          fontWeight: 600,
        }}
      >
        Change Profile
      </motion.button>
    </motion.nav>
  );
};
