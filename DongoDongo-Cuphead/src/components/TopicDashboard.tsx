import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore, TIER_INFO } from '../store/appStore';
import { getSubjectsByTier } from '../data/curriculum';
import * as Icons from 'lucide-react';

export const TopicDashboard: React.FC = () => {
  const { currentTier, setSelectedSubject } = useAppStore();
  const tierInfo = currentTier ? TIER_INFO[currentTier] : null;
  const subjects = currentTier ? getSubjectsByTier(currentTier) : [];
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSubjects = subjects.filter(subject =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subject.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Netflix-style featured section for Tier 3
  const isAdvancedTier = currentTier === 3;

  return (
    <div className="pt-24 pb-12 px-4 paper-texture min-h-screen">
      <div className="film-grain" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <h1 
            className="text-3xl md:text-5xl font-bold text-[#8b1538] mb-2"
            style={{ fontFamily: "'Comic Neue', cursive" }}
          >
            Your Learning Topics
          </h1>
          <p className="text-[#636E72] text-lg">
            {tierInfo?.grades} - Explore your subjects
          </p>
        </motion.div>

        {/* Search Bar - More prominent for Tier 1 */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`mb-8 ${currentTier === 1 ? 'max-w-md' : 'max-w-xl'}`}
        >
          <div className="ink-border bg-[#faf6ed] watercolor-fill flex items-center gap-3 p-3 ink-shadow">
            <Icons.Search size={24} className="text-[#636E72]" />
            <input
              type="text"
              placeholder={currentTier === 1 ? "Find a subject..." : "Search subjects, topics..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-[#1a1a1a] text-lg font-medium placeholder-[#B2BEC3]"
              style={{ fontSize: currentTier === 1 ? '1.2rem' : '1rem' }}
            />
          </div>
        </motion.div>

        {/* Featured Section for Advanced Tier */}
        {isAdvancedTier && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
              <span className="text-3xl">🔥</span>
              Featured for Exams
            </h2>
            <div className="carousel-track">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="carousel-item ink-border ink-shadow overflow-hidden cursor-pointer"
                  style={{
                    borderRadius: '15px 225px 15px 255px / 255px 15px 225px 15px',
                    borderWidth: '3px'
                  }}
                >
                  <div className="h-40 bg-gradient-to-br from-[#8b1538] to-[#d4a017] flex items-center justify-center">
                    <span className="text-6xl">📚</span>
                  </div>
                  <div className="p-4 bg-[#faf6ed]">
                    <h3 className="font-bold text-lg text-[#1a1a1a]">Advanced Calculus</h3>
                    <p className="text-sm text-[#636E72] mt-1">Master derivatives and integrals</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Subject Grid - Layout varies by tier */}
        <div className={
          currentTier === 1 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
            : currentTier === 2
              ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
              : "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
        }>
          {filteredSubjects.map((subject, index) => {
            const IconComponent = Icons[subject.icon as keyof typeof Icons] as React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }> || Icons.BookOpen;
            
            return (
              <motion.div
                key={subject.id}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={{ 
                  y: 0, 
                  opacity: 1, 
                  scale: 1,
                  rotate: currentTier === 1 ? [0, 2, 0, -2, 0] : 0
                }}
                transition={{ 
                  delay: index * 0.1,
                  duration: currentTier === 1 ? 0.8 : 0.5,
                  ease: currentTier === 1 ? [0.68, -0.55, 0.265, 1.55] : [0.4, 0, 0.2, 1]
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  rotate: currentTier === 1 ? 3 : 0
                }}
                onClick={() => setSelectedSubject(subject.id)}
                className="card-lift ink-border ink-shadow cursor-pointer overflow-hidden bg-[#faf6ed] watercolor-fill"
                style={{
                  borderRadius: currentTier === 1 
                    ? '255px 15px 225px 15px / 15px 225px 15px 255px'
                    : currentTier === 2
                      ? '25px 225px 25px 255px / 255px 25px 225px 15px'
                      : '15px 225px 15px 255px / 255px 15px 225px 15px',
                  borderWidth: '3px',
                  borderColor: subject.color
                }}
              >
                {/* Icon Header */}
                <div 
                  className="p-4 flex items-center justify-between"
                  style={{ backgroundColor: subject.color + '30' }}
                >
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center ink-border bg-white"
                    style={{ color: subject.color }}
                  >
                    <IconComponent size={28} strokeWidth={2.5} />
                  </div>
                  {currentTier === 1 && (
                    <motion.span
                      animate={{ rotate: [0, 15, 0, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-2xl"
                    >
                      ✨
                    </motion.span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 
                    className="font-bold text-lg mb-2"
                    style={{ 
                      fontSize: currentTier === 1 ? '1.3rem' : '1.1rem',
                      color: subject.color
                    }}
                  >
                    {subject.name}
                  </h3>
                  <p className="text-sm text-[#636E72] line-clamp-2">
                    {subject.description}
                  </p>
                  
                  {/* Progress indicator for Tier 2 & 3 */}
                  {currentTier !== 1 && (
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-[#636E72] mb-1">
                        <span>Progress</span>
                        <span>{Math.floor(Math.random() * 60)}%</span>
                      </div>
                      <div className="h-2 bg-[#dfe6e9] rounded-full overflow-hidden ink-border">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.floor(Math.random() * 60)}%` }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                          className="h-full"
                          style={{ backgroundColor: subject.color }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredSubjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <span className="text-6xl block mb-4">🔍</span>
            <p className="text-xl text-[#636E72] font-medium">
              No subjects found matching "{searchQuery}"
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
