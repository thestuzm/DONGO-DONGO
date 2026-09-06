import React, { useState } from 'react';
import './styles/global.scss';
import { LoadingScreen, ProfileSelection, ProfileTier } from './components/Onboarding';
import { NavBar } from './components/NavBar';
import { TopicDashboard } from './components/TopicDashboard';
import { ChatInterface } from './components/ChatInterface';
import { QuizInterface } from './components/QuizInterface';

type Tab = 'topics' | 'chat' | 'quiz';
type AppState = 'loading' | 'profile-select' | 'main';

function App() {
  const [appState, setAppState] = useState<AppState>('loading');
  const [profileTier, setProfileTier] = useState<ProfileTier | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('topics');

  const handleLoadingComplete = () => {
    setAppState('profile-select');
  };

  const handleProfileSelect = (tier: ProfileTier) => {
    setProfileTier(tier);
    setAppState('main');
  };

  const handleProfileChange = () => {
    setAppState('profile-select');
    setProfileTier(null);
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  if (appState === 'loading') {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  if (appState === 'profile-select') {
    return <ProfileSelection onSelectProfile={handleProfileSelect} />;
  }

  if (!profileTier) {
    return null;
  }

  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar 
        profileTier={profileTier}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onProfileChange={handleProfileChange}
      />
      
      <main style={{ flex: 1, overflow: 'auto' }}>
        {activeTab === 'topics' && <TopicDashboard profileTier={profileTier} />}
        {activeTab === 'chat' && <ChatInterface profileTier={profileTier} />}
        {activeTab === 'quiz' && <QuizInterface profileTier={profileTier} />}
      </main>
    </div>
  );
}

export default App;
