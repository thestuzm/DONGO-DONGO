import { motion, AnimatePresence } from 'framer-motion';

interface MascotOverlayProps {
  state: 'idle' | 'thinking' | 'excited' | 'explaining';
}

type EasingType = [number, number, number, number];

export default function MascotOverlay({ state }: MascotOverlayProps) {
  // Mascot expressions based on state
  const getMascotExpression = () => {
    switch (state) {
      case 'thinking':
        return { eyes: '🤔', mouth: '🤔', accessory: '💭' };
      case 'excited':
        return { eyes: '⭐', mouth: '😄', accessory: '✨' };
      case 'explaining':
        return { eyes: '👀', mouth: '🗣️', accessory: '📚' };
      default:
        return { eyes: '😊', mouth: '🙂', accessory: '🎩' };
    }
  };

  const expression = getMascotExpression();

  // Animation variants for different states
  const stateVariants: Record<string, { y?: number[]; x?: number[]; rotate?: number[]; scale?: number[]; transition: { duration: number; repeat: number; ease: EasingType } }> = {
    idle: {
      y: [0, -10, 0],
      rotate: [-2, 2, -2, 0],
      scale: [1, 1.02, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: [0.68, -0.55, 0.265, 1.55] as EasingType
      }
    },
    thinking: {
      y: [0, -5, 0],
      rotate: [-5, 5, -5],
      scale: [1, 0.95, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: [0.25, 0.46, 0.45, 0.94] as EasingType
      }
    },
    excited: {
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
      rotate: [-10, 10, -10, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: [0.68, -0.55, 0.265, 1.55] as EasingType
      }
    },
    explaining: {
      x: [-10, 10, -10],
      y: [0, -5, 0],
      rotate: [-3, 3, -3],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: [0.175, 0.885, 0.32, 1.275] as EasingType
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key={state}
        initial={{ opacity: 0, scale: 0.5, y: 100 }}
        animate={state}
        variants={stateVariants}
        exit={{ opacity: 0, scale: 0.5, y: -100 }}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 1000,
          cursor: 'pointer'
        }}
      >
        {/* Mascot Body - Cuphead Style Character */}
        <div style={{
          position: 'relative',
          width: '150px',
          height: '180px'
        }}>
          {/* Thought Bubble / Accessory */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [-10, 10, -10],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.68, -0.55, 0.265, 1.55],
              delay: 0.5
            }}
            style={{
              position: 'absolute',
              top: '-40px',
              right: '-20px',
              width: '60px',
              height: '60px',
              background: 'radial-gradient(ellipse at center, #ffffff 0%, #f4e4c1 100%)',
              border: '3px solid #1a1a1a',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '30px',
              boxShadow: '4px 4px 0 rgba(0,0,0,0.2)',
              zIndex: 10,
              animation: 'inkWobble 2s ease-in-out infinite'
            }}
          >
            {expression.accessory}
          </motion.div>

          {/* Head */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120px',
            height: '130px',
            background: 'radial-gradient(ellipse at center, #ffdbac 0%, #e8c49a 100%)',
            border: '4px solid #1a1a1a',
            borderRadius: '60px 60px 50px 50px / 50px 50px 60px 60px',
            boxShadow: '0 0 0 4px #1a1a1a, 6px 6px 0 rgba(0,0,0,0.2)',
            overflow: 'hidden',
            animation: 'inkWobble 3s ease-in-out infinite',
            zIndex: 5
          }}>
            {/* Eyes */}
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '35px'
            }}>
              <div style={{
                width: '35px',
                height: '40px',
                background: '#ffffff',
                border: '3px solid #1a1a1a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                animation: 'blink 3s ease-in-out infinite'
              }}>
                {expression.eyes}
              </div>
              <div style={{
                width: '35px',
                height: '40px',
                background: '#ffffff',
                border: '3px solid #1a1a1a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                animation: 'blink 3s ease-in-out infinite 0.1s'
              }}>
                {expression.eyes}
              </div>
            </div>

            {/* Nose */}
            <div style={{
              position: 'absolute',
              top: '75px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '20px',
              height: '15px',
              background: '#8b1538',
              border: '2px solid #1a1a1a',
              borderRadius: '50%'
            }} />

            {/* Mouth */}
            <div style={{
              position: 'absolute',
              bottom: '25px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '30px',
              animation: state === 'explaining' ? 'talk 0.3s ease-in-out infinite' : 'none'
            }}>
              {expression.mouth}
            </div>

            {/* Blush */}
            <div style={{
              position: 'absolute',
              top: '70px',
              left: '15px',
              width: '20px',
              height: '12px',
              background: 'radial-gradient(ellipse, #ff9999 0%, transparent 100%)',
              opacity: 0.6,
              borderRadius: '50%'
            }} />
            <div style={{
              position: 'absolute',
              top: '70px',
              right: '15px',
              width: '20px',
              height: '12px',
              background: 'radial-gradient(ellipse, #ff9999 0%, transparent 100%)',
              opacity: 0.6,
              borderRadius: '50%'
            }} />
          </div>

          {/* Body */}
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '70px',
            background: 'radial-gradient(ellipse at center, #8b1538 0%, #6b0f2a 100%)',
            border: '4px solid #1a1a1a',
            borderRadius: '40px 40px 35px 35px / 35px 35px 40px 40px',
            boxShadow: '0 0 0 4px #1a1a1a, 4px 4px 0 rgba(0,0,0,0.2)',
            zIndex: 4,
            animation: 'inkWobble 3s ease-in-out infinite reverse'
          }}>
            {/* Bow Tie */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '25px',
                height: '25px',
                background: '#d4a017',
                border: '3px solid #1a1a1a',
                transform: 'rotate(45deg)',
                marginRight: '-8px',
                boxShadow: '2px 2px 0 rgba(0,0,0,0.3)'
              }} />
              <div style={{
                width: '25px',
                height: '25px',
                background: '#d4a017',
                border: '3px solid #1a1a1a',
                transform: 'rotate(45deg)',
                marginLeft: '-8px',
                boxShadow: '2px 2px 0 rgba(0,0,0,0.3)'
              }} />
              <div style={{
                position: 'absolute',
                width: '15px',
                height: '15px',
                background: '#1a1a1a',
                borderRadius: '50%',
                border: '2px solid #1a1a1a'
              }} />
            </div>
          </div>

          {/* Arms */}
          <motion.div
            animate={state === 'excited' ? {
              rotate: [-30, 30, -30],
              y: [0, -20, 0]
            } : {}}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: [0.68, -0.55, 0.265, 1.55]
            }}
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '-20px',
              width: '40px',
              height: '15px',
              background: 'radial-gradient(ellipse at center, #ffdbac 0%, #e8c49a 100%)',
              border: '3px solid #1a1a1a',
              borderRadius: '20px',
              transform: 'rotate(-30deg)',
              boxShadow: '2px 2px 0 rgba(0,0,0,0.2)'
            }}
          />
          <motion.div
            animate={state === 'excited' ? {
              rotate: [30, -30, 30],
              y: [0, -20, 0]
            } : {}}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: [0.68, -0.55, 0.265, 1.55],
              delay: 0.4
            }}
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '-20px',
              width: '40px',
              height: '15px',
              background: 'radial-gradient(ellipse at center, #ffdbac 0%, #e8c49a 100%)',
              border: '3px solid #1a1a1a',
              borderRadius: '20px',
              transform: 'rotate(30deg)',
              boxShadow: '2px 2px 0 rgba(0,0,0,0.2)'
            }}
          />
        </div>

        {/* Name Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            position: 'absolute',
            bottom: '-25px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '5px 15px',
            background: 'radial-gradient(ellipse at center, #ffffff 0%, #f4e4c1 100%)',
            border: '2px solid #1a1a1a',
            borderRadius: '15px',
            fontFamily: 'Georgia, serif',
            fontSize: '12px',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            boxShadow: '2px 2px 0 rgba(0,0,0,0.2)',
            animation: 'inkWobble 2s ease-in-out infinite'
          }}
        >
          Dongo Dongo! 🎓
        </motion.div>
      </motion.div>

      {/* Global CSS for animations */}
      <style>{`
        @keyframes blink {
          0%, 45%, 55%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.1); }
        }
        
        @keyframes talk {
          0%, 100% { transform: translateX(-50%) scaleY(1); }
          50% { transform: translateX(-50%) scaleY(1.2); }
        }
        
        @keyframes inkWobble {
          0%, 100% {
            border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
          }
          25% {
            border-radius: 225px 25px 255px 5px / 25px 255px 5px 225px;
          }
          50% {
            border-radius: 245px 5px 235px 25px / 5px 235px 25px 245px;
          }
          75% {
            border-radius: 235px 15px 245px 15px / 15px 245px 15px 235px;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
