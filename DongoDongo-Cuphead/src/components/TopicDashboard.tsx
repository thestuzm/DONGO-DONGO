import { motion } from 'framer-motion';

interface TopicCard {
  id: number;
  title: string;
  description: string;
  progress: number;
  icon: string;
  color: string;
}

interface TopicDashboardProps {
  onSelectTopic: () => void;
}

export default function TopicDashboard({ onSelectTopic }: TopicDashboardProps) {
  const topics: TopicCard[] = [
    {
      id: 1,
      title: 'Algebra Basics',
      description: 'Master equations and variables',
      progress: 75,
      icon: '🔢',
      color: '#8b1538'
    },
    {
      id: 2,
      title: 'Geometry Fun',
      description: 'Shapes, angles, and proofs',
      progress: 45,
      icon: '📐',
      color: '#d4a017'
    },
    {
      id: 3,
      title: 'Physics World',
      description: 'Motion, forces, and energy',
      progress: 30,
      icon: '⚡',
      color: '#1a5f7a'
    },
    {
      id: 4,
      title: 'Chemistry Lab',
      description: 'Elements and reactions',
      progress: 60,
      icon: '🧪',
      color: '#2d5016'
    },
    {
      id: 5,
      title: 'Biology Life',
      description: 'Cells, organisms, ecosystems',
      progress: 20,
      icon: '🌿',
      color: '#15571a'
    },
    {
      id: 6,
      title: 'History Time',
      description: 'Past events and civilizations',
      progress: 90,
      icon: '📜',
      color: '#8b4513'
    }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      padding: '20px',
      height: '100%',
      overflowY: 'auto'
    }}>
      {topics.map((topic, index) => (
        <motion.div
          key={topic.id}
          className="cuphead-card"
          initial={{ opacity: 0, y: 100, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            delay: index * 0.1,
            duration: 0.6,
            ease: [0.68, -0.55, 0.265, 1.55]
          }}
          whileHover={{
            scale: 1.05,
            rotate: [0, -3, 3, 0],
            boxShadow: '0 0 30px rgba(0,0,0,0.4)'
          }}
          onClick={onSelectTopic}
          style={{
            padding: '25px',
            border: '3px solid #1a1a1a',
            borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
            background: `radial-gradient(ellipse at center, #f4e4c1 0%, #e8d5b5 60%, #c4a882 100%)`,
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            animation: 'inkWobble 3s ease-in-out infinite'
          }}
        >
          {/* Icon Badge */}
          <div style={{
            position: 'absolute',
            top: '-15px',
            right: '-15px',
            width: '60px',
            height: '60px',
            background: `radial-gradient(ellipse at center, ${topic.color} 0%, ${topic.color}cc 100%)`,
            border: '3px solid #1a1a1a',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            boxShadow: '3px 3px 0 rgba(0,0,0,0.3)',
            animation: 'inkWobble 2s ease-in-out infinite reverse'
          }}>
            {topic.icon}
          </div>

          {/* Title */}
          <h3 style={{
            fontFamily: 'Georgia, serif',
            fontSize: '22px',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#1a1a1a'
          }}>
            {topic.title}
          </h3>

          {/* Description */}
          <p style={{
            fontSize: '14px',
            marginBottom: '20px',
            color: '#333',
            lineHeight: '1.4'
          }}>
            {topic.description}
          </p>

          {/* Progress Bar */}
          <div style={{
            width: '100%',
            height: '20px',
            background: 'rgba(0,0,0,0.1)',
            border: '2px solid #1a1a1a',
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${topic.progress}%` }}
              transition={{
                delay: index * 0.1 + 0.3,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{
                height: '100%',
                background: `linear-gradient(90deg, ${topic.color}, ${topic.color}dd)`,
                border: '2px solid #1a1a1a',
                borderRadius: '10px',
                position: 'relative'
              }}
            >
              {/* Watercolor texture overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
                opacity: 0.5
              }} />
            </motion.div>
          </div>

          {/* Progress Text */}
          <p style={{
            textAlign: 'right',
            fontSize: '12px',
            marginTop: '8px',
            fontWeight: 'bold',
            fontFamily: 'Georgia, serif'
          }}>
            {topic.progress}% Complete
          </p>

          {/* Ink Splash Decoration */}
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            left: '-20px',
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(26,26,26,0.05) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }} />
        </motion.div>
      ))}
    </div>
  );
}
