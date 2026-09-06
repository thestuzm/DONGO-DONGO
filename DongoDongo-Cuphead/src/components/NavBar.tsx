import { motion } from 'framer-motion';

interface NavBarProps {
  activeTab: 'dashboard' | 'chat' | 'quiz';
  onTabChange: (tab: 'dashboard' | 'chat' | 'quiz') => void;
}

export default function NavBar({ activeTab, onTabChange }: NavBarProps) {
  const tabs = [
    { id: 'dashboard', label: '📚 Topics', icon: '📖' },
    { id: 'chat', label: '💬 Chat', icon: '💭' },
    { id: 'quiz', label: '📝 Quiz', icon: '✏️' }
  ] as const;

  return (
    <nav style={{
      position: 'absolute',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 100,
      display: 'flex',
      gap: '10px',
      padding: '10px',
    }}>
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          className="cuphead-btn"
          onClick={() => onTabChange(tab.id)}
          whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
          whileTap={{ scale: 0.95 }}
          animate={activeTab === tab.id ? { y: [0, -5, 0] } : {}}
          transition={{
            duration: 0.3,
            ease: [0.68, -0.55, 0.265, 1.55],
            repeat: activeTab === tab.id ? Infinity : 0,
            repeatDelay: 2
          }}
          style={{
            padding: '12px 24px',
            border: '3px solid #1a1a1a',
            borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
            background: activeTab === tab.id 
              ? 'radial-gradient(ellipse at center, #f4d03f 0%, #d4a017 60%, #b8860b 100%)'
              : 'radial-gradient(ellipse at center, #f4e4c1 0%, #e8d5b5 60%, #c4a882 100%)',
            fontFamily: 'Georgia, serif',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: '0 0 0 3px #1a1a1a, 4px 4px 0 rgba(0,0,0,0.2)',
            animation: activeTab === tab.id ? 'inkWobble 3s ease-in-out infinite' : 'none'
          }}
        >
          {tab.icon} {tab.label}
        </motion.button>
      ))}
    </nav>
  );
}
