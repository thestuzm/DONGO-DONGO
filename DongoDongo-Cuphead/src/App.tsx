import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useAppStore } from './store/appStore';
import { LoadingScreen } from './components/LoadingScreen';
import { ProfileSelection } from './components/ProfileSelection';
import { NavBar } from './components/NavBar';
import { TopicDashboard } from './components/TopicDashboard';
import { ChatInterface } from './components/ChatInterface';
import { QuizSection } from './components/QuizSection';

function App() {
  const { isLoading, currentTier, activeTab, setActiveTab } = useAppStore();

  // Handle tab switching
  const renderContent = () => {
    switch (activeTab) {
      case 'topics':
        return <TopicDashboard />;
      case 'chat':
        return <ChatInterface />;
      case 'quiz':
        return <QuizSection />;
      default:
        return <TopicDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f1e8] paper-texture">
      {/* Global Film Grain Overlay */}
      <div className="film-grain pointer-events-none fixed inset-0 z-[9999]" />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : !currentTier ? (
          <ProfileSelection key="profile" />
        ) : (
          <>
            <NavBar 
              key="navbar"
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
            <main key="content" className="relative z-10">
              {renderContent()}
            </main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
