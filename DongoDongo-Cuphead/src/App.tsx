import { Canvas } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from './components/NavBar';
import TopicDashboard from './components/TopicDashboard';
import ChatInterface from './components/ChatInterface';
import MascotOverlay from './components/MascotOverlay';

// Animated Ink Splash Background
function InkBackground() {
  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Text
          position={[0, 0, -5]}
          fontSize={2}
          color="#1a1a1a"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/courierprime/v15/u-4q0qQriQVXPp6D9Td_xw.woff2"
        >
          DONGO DONGO
        </Text>
      </Float>
    </group>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'chat' | 'quiz'>('dashboard');
  const [mascotState, setMascotState] = useState<'idle' | 'thinking' | 'excited' | 'explaining'>('idle');

  return (
    <>
      {/* Global Film Grain Overlay */}
      <div className="film-grain-overlay" />
      
      {/* 3D Canvas for Vintage Effects & Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <InkBackground />
          </Suspense>
        </Canvas>
      </div>

      {/* UI Layer */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%' }}>
        {/* Navigation Bar */}
        <NavBar activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Main Content Area */}
        <main style={{ 
          position: 'absolute', 
          top: '80px', 
          left: '20px', 
          right: '20px', 
          bottom: '20px' 
        }}>
          {activeTab === 'dashboard' && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
            >
              <TopicDashboard onSelectTopic={() => setActiveTab('chat')} />
            </motion.div>
          )}

          {activeTab === 'chat' && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
            >
              <ChatInterface 
                onMascotStateChange={setMascotState}
                onBack={() => setActiveTab('dashboard')}
              />
            </motion.div>
          )}

          {activeTab === 'quiz' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
            >
              <div className="cuphead-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h2 style={{ fontFamily: 'Georgia, serif', marginBottom: '20px', textAlign: 'center' }}>
                  📝 Quiz Mode Coming Soon!
                </h2>
                <p style={{ textAlign: 'center', fontSize: '18px' }}>
                  Practice makes perfect, kid!
                </p>
              </div>
            </motion.div>
          )}
        </main>

        {/* Animated Mascot Overlay */}
        <MascotOverlay state={mascotState} />
      </div>
    </>
  );
}

export default App;
