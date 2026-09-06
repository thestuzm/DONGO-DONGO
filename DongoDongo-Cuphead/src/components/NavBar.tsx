import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore, TIER_INFO } from '../store/appStore';
import * as Icons from 'lucide-react';

interface NavBarProps {
  activeTab: 'topics' | 'chat' | 'quiz';
  onTabChange: (tab: 'topics' | 'chat' | 'quiz') => void;
}

export const NavBar: React.FC<NavBarProps> = ({ activeTab, onTabChange }) => {
  const { currentTier, resetApp } = useAppStore();
  const tierInfo = currentTier ? TIER_INFO[currentTier] : null;

  const tabs = [
    { id: 'topics' as const, icon: 'book-open', label: 'Topics' },
    { id: 'chat' as const, icon: 'message-circle', label: 'Chat' },
    { id: 'quiz' as const, icon: 'award', label: 'Quiz' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 ink-border ink-shadow bg-[#f5f1e8] watercolor-fill"
      style={{
        borderBottomWidth: '3px',
        borderRadius: '0 0 255px 15px / 0 0 15px 255px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={resetApp}
          >
            <div 
              className="ink-border bg-[#8b1538] text-[#faf6ed] px-4 py-2 font-bold watercolor-fill"
              style={{
                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                borderWidth: '2px'
              }}
            >
              DD
            </div>
            {tierInfo && (
              <span className="hidden md:block text-sm font-medium text-[#636E72]">
                {tierInfo.name}
              </span>
            )}
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 tab-nav">
            {tabs.map((tab) => {
              const IconComponent = Icons[tab.icon as keyof typeof Icons] as React.ComponentType<any>;
              const isActive = activeTab === tab.id;
              
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onTabChange(tab.id)}
                  className={`relative px-4 py-2 font-semibold transition-colors ${
                    isActive ? 'text-[#8b1538]' : 'text-[#636E72]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <IconComponent size={20} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </div>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-[#8b1538]"
                      style={{
                        borderRadius: '2px'
                      }}
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Profile Indicator */}
          {currentTier && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="hidden md:flex items-center gap-2"
            >
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: tierInfo?.colorPrimary }}
              />
              <span className="text-sm font-medium text-[#1a1a1a]">
                Tier {currentTier}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};
