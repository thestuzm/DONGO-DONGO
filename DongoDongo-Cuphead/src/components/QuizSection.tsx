import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore, TIER_INFO } from '../store/appStore';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

const sampleQuestions: Record<number, QuizQuestion[]> = {
  1: [
    {
      id: 'q1',
      question: 'What is 5 + 7?',
      options: ['10', '12', '15', '8'],
      correctAnswer: 1
    },
    {
      id: 'q2',
      question: 'Which shape has 3 sides?',
      options: ['Square', 'Circle', 'Triangle', 'Rectangle'],
      correctAnswer: 2
    }
  ],
  2: [
    {
      id: 'q1',
      question: 'What is the capital of Zambia?',
      options: ['Ndola', 'Kitwe', 'Lusaka', 'Livingstone'],
      correctAnswer: 2
    },
    {
      id: 'q2',
      question: 'Solve: 2x + 5 = 15',
      options: ['x = 5', 'x = 10', 'x = 7.5', 'x = 2.5'],
      correctAnswer: 0
    }
  ],
  3: [
    {
      id: 'q1',
      question: 'What is the derivative of x²?',
      options: ['x', '2x', 'x²', '2'],
      correctAnswer: 1
    },
    {
      id: 'q2',
      question: 'Which element has atomic number 6?',
      options: ['Oxygen', 'Nitrogen', 'Carbon', 'Hydrogen'],
      correctAnswer: 2
    }
  ]
};

export const QuizSection: React.FC = () => {
  const { currentTier } = useAppStore();
  const tierInfo = currentTier ? TIER_INFO[currentTier] : null;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [gameMode] = useState(currentTier === 1);

  const questions = currentTier ? sampleQuestions[currentTier] : sampleQuestions[1];
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    setTimeout(() => {
      if (answerIndex === currentQuestion.correctAnswer) {
        setScore(prev => prev + 1);
      }
      
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
  };

  const percentage = (score / questions.length) * 100;

  return (
    <div className="pt-24 pb-12 px-4 paper-texture min-h-screen">
      <div className="film-grain" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 
            className="text-3xl md:text-5xl font-bold text-[#8b1538] mb-2"
            style={{ fontFamily: "'Comic Neue', cursive" }}
          >
            {gameMode ? '🎮 Learning Games' : '📝 Quiz Time'}
          </h1>
          <p className="text-[#636E72] text-lg">
            {tierInfo?.grades} - Test your knowledge!
          </p>
        </motion.div>

        {!showResult ? (
          <>
            {/* Progress Bar */}
            <div className="mb-8 ink-border bg-[#faf6ed] p-4 watercolor-fill">
              <div className="flex justify-between text-sm font-semibold mb-2">
                <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                <span>Score: {score}</span>
              </div>
              <div className="h-4 bg-[#dfe6e9] rounded-full overflow-hidden ink-border">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
                  className="h-full bg-gradient-to-r from-[#4ECDC4] to-[#FFD93D]"
                  style={{ borderRadius: '0 255px 255px 0 / 0 15px 15px 0' }}
                />
              </div>
            </div>

            {/* Question Card */}
            <motion.div
              key={currentQuestion.id}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              className="ink-border bg-white p-8 mb-6 watercolor-fill ink-shadow"
              style={{
                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                borderWidth: '3px'
              }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-8">
                {currentQuestion.question}
              </h2>

              {/* Answer Options */}
              <div className={`grid ${currentTier === 1 ? 'grid-cols-1 sm:grid-cols-2 gap-4' : 'grid-cols-1 md:grid-cols-2 gap-4'}`}>
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.03, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`p-6 text-left font-bold text-lg ink-border transition-all ${
                      selectedAnswer === index
                        ? index === currentQuestion.correctAnswer
                          ? 'bg-[#00B894] text-white'
                          : 'bg-[#FF6B6B] text-white'
                        : 'bg-[#faf6ed] text-[#1a1a1a] hover:bg-[#FFEAA7]'
                    }`}
                    style={{
                      borderRadius: currentTier === 1
                        ? '255px 15px 225px 15px / 15px 225px 15px 255px'
                        : '15px 225px 15px 255px / 255px 15px 225px 15px',
                      borderWidth: '3px'
                    }}
                  >
                    <span className="mr-3">{String.fromCharCode(65 + index)}.</span>
                    {option}
                    {selectedAnswer === index && index === currentQuestion.correctAnswer && (
                      <span className="float-right text-xl">✅</span>
                    )}
                    {selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                      <span className="float-right text-xl">❌</span>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Fun elements for Tier 1 */}
            {currentTier === 1 && (
              <div className="flex justify-center gap-4">
                {[['🌟', '⭐'], ['🎈', '🎉'], ['🦋', '🌺']].map((emojis, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 10, 0, -10, 0]
                    }}
                    transition={{ 
                      duration: 2 + i, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3
                    }}
                    className="text-4xl"
                  >
                    {emojis[currentQuestionIndex % 2]}
                  </motion.div>
                ))}
              </div>
            )}
          </>
        ) : (
          /* Results Screen */
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <div 
              className="ink-border bg-white p-12 watercolor-fill ink-shadow mb-8"
              style={{
                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                borderWidth: '3px'
              }}
            >
              {/* Score Display */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="text-8xl mb-6"
              >
                {percentage === 100 ? '🏆' : percentage >= 70 ? '🎉' : percentage >= 50 ? '👍' : '💪'}
              </motion.div>

              <h2 className="text-4xl font-bold text-[#8b1538] mb-4">
                {percentage === 100 ? 'Perfect Score!' : percentage >= 70 ? 'Great Job!' : percentage >= 50 ? 'Good Effort!' : 'Keep Practicing!'}
              </h2>

              <p className="text-2xl text-[#1a1a1a] mb-8">
                You scored <span className="font-bold text-[#4ECDC4]">{score}</span> out of{' '}
                <span className="font-bold text-[#FFD93D]">{questions.length}</span>
              </p>

              {/* Progress Circle */}
              <div className="relative w-48 h-48 mx-auto mb-8">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="#dfe6e9"
                    strokeWidth="16"
                    fill="none"
                  />
                  <motion.circle
                    initial={{ strokeDashoffset: 552 }}
                    animate={{ strokeDashoffset: 552 - (552 * percentage) / 100 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    cx="96"
                    cy="96"
                    r="88"
                    stroke={percentage >= 70 ? '#00B894' : percentage >= 50 ? '#FFD93D' : '#FF6B6B'}
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray="552"
                    strokeLinecap="round"
                    style={{
                      borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px'
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#1a1a1a]">{Math.round(percentage)}%</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetQuiz}
                  className="px-8 py-4 bg-[#8b1538] text-white font-bold text-xl ink-border ink-shadow"
                  style={{
                    borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                    borderWidth: '3px'
                  }}
                >
                  Try Again
                </motion.button>
                
                {currentTier !== 1 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-[#4ECDC4] text-white font-bold text-xl ink-border ink-shadow"
                    style={{
                      borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                      borderWidth: '3px'
                    }}
                  >
                    View Leaderboard
                  </motion.button>
                )}
              </div>
            </div>

            {/* Celebration for Tier 1 */}
            {currentTier === 1 && percentage >= 70 && (
              <div className="flex justify-center gap-6 flex-wrap">
                {['🎈', '✨', '🌟', '🎉', '⭐', '🦋'].map((emoji, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ 
                      y: [-20, -40, -20],
                      opacity: 1,
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                    className="text-5xl"
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};
