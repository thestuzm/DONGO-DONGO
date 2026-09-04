import React from 'react';

interface NavBarProps {
  currentView: 'dashboard' | 'chat' | 'quiz';
  onViewChange: (view: 'dashboard' | 'chat' | 'quiz') => void;
}

const NavBar: React.FC<NavBarProps> = ({ currentView, onViewChange }) => {
  const handleMinimize = () => {
    if ((window as any).electronAPI) {
      (window as any).electronAPI.minimizeWindow();
    }
  };

  const handleMaximize = () => {
    if ((window as any).electronAPI) {
      (window as any).electronAPI.maximizeWindow();
    }
  };

  const handleClose = () => {
    if ((window as any).electronAPI) {
      (window as any).electronAPI.closeWindow();
    }
  };

  return (
    <nav className="nav-bar">
      <div className="nav-title">
        <span className="title-icon">📚</span>
        <h1>Dongo Dongo Copilot</h1>
      </div>
      
      <div className="nav-links">
        <button 
          className={`nav-link ${currentView === 'dashboard' ? 'active' : ''}`}
          onClick={() => onViewChange('dashboard')}
        >
          Topics
        </button>
        <button 
          className={`nav-link ${currentView === 'chat' ? 'active' : ''}`}
          onClick={() => onViewChange('chat')}
        >
          Chat
        </button>
        <button 
          className={`nav-link ${currentView === 'quiz' ? 'active' : ''}`}
          onClick={() => onViewChange('quiz')}
        >
          Quiz
        </button>
      </div>
      
      <div className="window-controls">
        <button className="window-btn minimize" onClick={handleMinimize}>−</button>
        <button className="window-btn maximize" onClick={handleMaximize}>□</button>
        <button className="window-btn close" onClick={handleClose}>×</button>
      </div>
    </nav>
  );
};

export default NavBar;
