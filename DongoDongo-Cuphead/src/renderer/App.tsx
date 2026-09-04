import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import TopicDashboard from './components/TopicDashboard';
import ChatInterface from './components/ChatInterface';
import MascotOverlay from './components/MascotOverlay';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'chat' | 'quiz'>('dashboard');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  return (
    <div className="app-container">
      <NavBar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
      />
      
      <main className="main-content">
        {currentView === 'dashboard' && (
          <TopicDashboard 
            onSelectTopic={(topic) => {
              setSelectedTopic(topic);
              setCurrentView('chat');
            }} 
          />
        )}
        
        {currentView === 'chat' && (
          <ChatInterface 
            topic={selectedTopic}
            onBack={() => setCurrentView('dashboard')}
          />
        )}
      </main>
      
      <MascotOverlay view={currentView} />
    </div>
  );
};

export default App;
