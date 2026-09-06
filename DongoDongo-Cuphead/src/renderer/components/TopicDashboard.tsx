import React from 'react';

interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  color: string;
}

const topics: Topic[] = [
  {
    id: 'math',
    title: 'Mathematics',
    description: 'Algebra, Geometry & Calculus',
    icon: '📐',
    progress: 65,
    color: '#8b1538'
  },
  {
    id: 'science',
    title: 'Science',
    description: 'Physics, Chemistry & Biology',
    icon: '🔬',
    progress: 42,
    color: '#4a6fa5'
  },
  {
    id: 'english',
    title: 'English',
    description: 'Grammar, Literature & Writing',
    icon: '📝',
    progress: 78,
    color: '#d4a017'
  },
  {
    id: 'history',
    title: 'History',
    description: 'Zambian & World History',
    icon: '🏛️',
    progress: 30,
    color: '#704214'
  }
];

interface TopicDashboardProps {
  onSelectTopic: (topicId: string) => void;
}

const TopicDashboard: React.FC<TopicDashboardProps> = ({ onSelectTopic }) => {
  return (
    <div className="topic-dashboard">
      <header className="dashboard-header">
        <h2>Choose Your Adventure!</h2>
        <p>Pick a subject to start learning</p>
      </header>
      
      <div className="topics-grid">
        {topics.map((topic) => (
          <div 
            key={topic.id}
            className="topic-card"
            onClick={() => onSelectTopic(topic.id)}
            style={{ '--topic-color': topic.color } as React.CSSProperties}
          >
            <div className="topic-icon">{topic.icon}</div>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${topic.progress}%` }}
              />
            </div>
            <span className="progress-text">{topic.progress}% Complete</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicDashboard;
