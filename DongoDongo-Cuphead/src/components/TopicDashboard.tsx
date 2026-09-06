import React from 'react';
import { motion } from 'framer-motion';
import { ProfileTier } from './Onboarding';
import { CURRICULUM_DATA, Subject } from '../data/curriculum';

interface TopicDashboardProps {
  profileTier: ProfileTier;
}

export const TopicDashboard: React.FC<TopicDashboardProps> = ({ profileTier }) => {
  const tierData = CURRICULUM_DATA.find(t => t.id === profileTier);
  
  if (!tierData) {
    return (
      <div className="empty-state">
        <p>No curriculum data available for this profile.</p>
      </div>
    );
  }

  return (
    <motion.div
      className="topic-dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        padding: 'calc(1.5rem * var(--dd-spacing-multiplier))',
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{
          marginBottom: 'calc(2rem * var(--dd-spacing-multiplier))',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--dd-font-display)',
            fontSize: 'calc(var(--dd-font-size-base) * 2.5)',
            color: 'var(--dd-color-primary)',
            marginBottom: '0.5rem',
          }}
        >
          Your Learning Journey
        </h2>
        <p
          style={{
            fontSize: 'calc(var(--dd-font-size-base) * 1.1)',
            color: 'var(--dd-color-text)',
            opacity: 0.8,
          }}
        >
          Explore subjects and master topics at your own pace
        </p>
      </motion.div>

      {/* Subject Rows - Netflix Style */}
      {tierData.subjects.map((subject, index) => (
        <SubjectRow
          key={subject.id}
          subject={subject}
          index={index}
          spacingMultiplier={tierData.uiConfig.spacingMultiplier}
        />
      ))}
    </motion.div>
  );
};

interface SubjectRowProps {
  subject: Subject;
  index: number;
  spacingMultiplier: number;
}

const SubjectRow: React.FC<SubjectRowProps> = ({ subject, index, spacingMultiplier }) => {
  return (
    <motion.section
      className="subject-row"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + index * 0.05 }}
      style={{
        marginBottom: 'calc(2rem * spacingMultiplier)',
      }}
    >
      {/* Row Title */}
      <h3
        style={{
          fontFamily: 'var(--dd-font-display)',
          fontSize: 'calc(var(--dd-font-size-base) * 1.5)',
          color: 'var(--dd-color-primary)',
          marginBottom: 'calc(1rem * spacingMultiplier)',
          display: 'flex',
          alignItems: 'center',
          gap: 'calc(0.75rem * spacingMultiplier)',
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke={subject.color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            shapeRendering: 'geometricPrecision',
          }}
        >
          <path d={subject.iconPath} />
        </svg>
        {subject.name}
      </h3>

      {/* Carousel Container */}
      <div className="carousel-container">
        <div className="carousel-track">
          {subject.topics.map((topic, topicIndex) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              subjectColor={subject.color}
              index={topicIndex}
              spacingMultiplier={spacingMultiplier}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

interface TopicCardProps {
  topic: any;
  subjectColor: string;
  index: number;
  spacingMultiplier: number;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, subjectColor, index, spacingMultiplier }) => {
  const progress = Math.random() * 100; // Mock progress - would come from state in real app
  
  return (
    <motion.article
      className="carousel-item card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 + index * 0.05 }}
      whileHover={{ 
        y: -6,
        transition: { type: 'spring', stiffness: 300, damping: 15 }
      }}
      style={{
        minWidth: '280px',
        maxWidth: '280px',
      }}
    >
      {/* Thumbnail with subject color */}
      <div
        className="card-thumbnail"
        style={{
          background: `radial-gradient(ellipse at center, ${subjectColor}25 0%, ${subjectColor}10 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke={subjectColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            shapeRendering: 'geometricPrecision',
            opacity: 0.8,
          }}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>

      {/* Content */}
      <div style={{ padding: 'calc(0.5rem * spacingMultiplier)' }}>
        <h4
          style={{
            fontFamily: 'var(--dd-font-body)',
            fontSize: 'calc(var(--dd-font-size-base) * 1)',
            fontWeight: 600,
            color: 'var(--dd-color-text)',
            marginBottom: '0.5rem',
          }}
        >
          {topic.title}
        </h4>
        <p
          style={{
            fontSize: 'calc(var(--dd-font-size-base) * 0.85)',
            color: 'var(--dd-color-text)',
            opacity: 0.7,
            marginBottom: 'calc(0.75rem * spacingMultiplier)',
            lineHeight: 1.5,
          }}
        >
          {topic.description}
        </p>

        {/* Progress Bar */}
        <div className="progress-container">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ 
              duration: 1, 
              delay: 0.3 + index * 0.05,
              type: 'spring',
              stiffness: 100,
              damping: 15
            }}
            style={{
              background: subjectColor,
            }}
          />
        </div>

        {/* Meta info */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 'calc(0.5rem * spacingMultiplier)',
            fontSize: 'calc(var(--dd-font-size-base) * 0.75)',
            color: 'var(--dd-color-text)',
            opacity: 0.6,
          }}
        >
          <span>{topic.subtopics.length} subtopics</span>
          <span>{topic.estimatedMinutes} min</span>
        </div>
      </div>
    </motion.article>
  );
};
