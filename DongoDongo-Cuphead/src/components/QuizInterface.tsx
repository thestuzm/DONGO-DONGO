import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProfileTier } from './Onboarding';
import { CURRICULUM_DATA } from '../data/curriculum';

interface QuizInterfaceProps {
  profileTier: ProfileTier;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const QuizInterface: React.FC<QuizInterfaceProps> = ({ profileTier }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const tierData = CURRICULUM_DATA.find(t => t.id === profileTier);
  
  // Generate mock quiz questions based on tier
  const questions: QuizQuestion[] = generateQuizQuestions(profileTier, tierData);
  const currentQuestion = questions[currentQuestionIndex];
  const isGentleWaltz = profileTier === 'gentle-waltz';
  const isLastRide = profileTier === 'last-ride';

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setCompleted(false);
  };

  if (!tierData) {
    return (
      <div className="empty-state">
        <p>No quiz data available for this profile.</p>
      </div>
    );
  }

  if (completed) {
    return (
      <motion.div
        className="quiz-complete"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        {/* Trophy/Celebration Icon */}
        <motion.svg
          width="150"
          height="150"
          viewBox="0 0 200 200"
          style={{ shapeRendering: 'geometricPrecision' }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <circle cx="100" cy="100" r="90" fill="#FFB703" stroke="var(--dd-color-ink-black)" strokeWidth="3" />
          <path d="M100 40L100 160M60 80L100 100L140 80M70 140H130" stroke="var(--dd-color-ink-black)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="100" cy="70" r="10" fill="var(--dd-color-bg)" />
          <path d="M90 90Q100 100 110 90" stroke="var(--dd-color-ink-black)" strokeWidth="3" strokeLinecap="round" fill="none" />
        </motion.svg>

        <h2
          style={{
            fontFamily: 'var(--dd-font-display)',
            fontSize: 'calc(var(--dd-font-size-base) * 2.5)',
            color: 'var(--dd-color-primary)',
            marginTop: '2rem',
          }}
        >
          {isGentleWaltz ? 'Amazing Job!' : isLastRide ? 'Assessment Complete' : 'Well Done!'}
        </h2>

        <p
          style={{
            fontSize: 'calc(var(--dd-font-size-base) * 1.2)',
            color: 'var(--dd-color-text)',
            marginTop: '0.5rem',
          }}
        >
          You scored {score} out of {questions.length}
        </p>

        {/* Progress Circle */}
        <div
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: `conic-gradient(var(--dd-color-secondary) ${(score / questions.length) * 360}deg, var(--dd-color-bg) 0deg)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '2rem 0',
            border: 'var(--dd-border-width) solid var(--dd-color-ink-black)',
          }}
        >
          <div
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              background: 'var(--dd-color-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <span
              style={{
                fontSize: 'calc(var(--dd-font-size-base) * 2.5)',
                fontWeight: 700,
                color: 'var(--dd-color-primary)',
              }}
            >
              {Math.round((score / questions.length) * 100)}%
            </span>
            <span
              style={{
                fontSize: 'calc(var(--dd-font-size-base) * 0.9)',
                color: 'var(--dd-color-text)',
                opacity: 0.7,
              }}
            >
              Accuracy
            </span>
          </div>
        </div>

        <motion.button
          onClick={handleRestart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary"
          style={{
            marginTop: '1rem',
            fontSize: 'calc(var(--dd-font-size-base) * 1.1)',
            fontWeight: 600,
          }}
        >
          Try Again
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="quiz-interface"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: 'calc(1.5rem * var(--dd-spacing-multiplier))',
      }}
    >
      {/* Header with Progress */}
      <div
        style={{
          marginBottom: 'calc(2rem * var(--dd-spacing-multiplier))',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'calc(1rem * var(--dd-spacing-multiplier))',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--dd-font-display)',
              fontSize: 'calc(var(--dd-font-size-base) * 2)',
              color: 'var(--dd-color-primary)',
              margin: 0,
            }}
          >
            {isGentleWaltz ? 'Let\'s Play!' : isLastRide ? 'Exam Practice' : 'Quiz Time'}
          </h2>
          <span
            style={{
              fontSize: 'calc(var(--dd-font-size-base) * 1)',
              color: 'var(--dd-color-text)',
              fontWeight: 600,
            }}
          >
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          />
        </div>
      </div>

      {/* Question Card */}
      <motion.article
        className="card"
        key={currentQuestion.id}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        style={{
          marginBottom: 'calc(1.5rem * var(--dd-spacing-multiplier))',
        }}
      >
        <h3
          style={{
            fontSize: isGentleWaltz 
              ? 'calc(var(--dd-font-size-base) * 1.3)' 
              : 'calc(var(--dd-font-size-base) * 1.1)',
            fontWeight: 600,
            color: 'var(--dd-color-text)',
            marginBottom: 'calc(1.5rem * var(--dd-spacing-multiplier))',
            lineHeight: 1.5,
          }}
        >
          {currentQuestion.question}
        </h3>

        {/* Answer Options */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'calc(0.75rem * var(--dd-spacing-multiplier))',
          }}
        >
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correctAnswer;
            const showResult = showExplanation;

            return (
              <motion.button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
                whileHover={!showExplanation ? { x: 5, scale: 1.02 } : {}}
                whileTap={!showExplanation ? { scale: 0.98 } : {}}
                style={{
                  padding: 'calc(1rem * var(--dd-spacing-multiplier)) calc(1.5rem * var(--dd-spacing-multiplier))',
                  textAlign: 'left',
                  background: showResult
                    ? isCorrect
                      ? '#4CAF5025'
                      : isSelected
                      ? '#F4433625'
                      : 'var(--dd-color-bg)'
                    : isSelected
                    ? 'var(--dd-color-primary)'
                    : 'var(--dd-color-bg)',
                  color: showResult
                    ? isCorrect || isSelected
                      ? 'var(--dd-color-bg)'
                      : 'var(--dd-color-text)'
                    : isSelected
                    ? 'var(--dd-color-bg)'
                    : 'var(--dd-color-text)',
                  border: 'var(--dd-border-width) solid var(--dd-color-ink-black)',
                  borderRadius: 'var(--dd-border-radius)',
                  cursor: showExplanation ? 'default' : 'pointer',
                  fontSize: isGentleWaltz 
                    ? 'calc(var(--dd-font-size-base) * 1.05)' 
                    : 'calc(var(--dd-font-size-base) * 0.95)',
                  fontWeight: 500,
                  position: 'relative',
                  minHeight: 'var(--dd-touch-target-min)',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: showResult
                      ? isCorrect
                        ? '#4CAF50'
                        : isSelected
                        ? '#F44336'
                        : 'transparent'
                      : isSelected
                      ? 'var(--dd-color-bg)'
                      : 'transparent',
                    color: showResult
                      ? 'white'
                      : isSelected
                      ? 'var(--dd-color-primary)'
                      : 'var(--dd-color-text)',
                    marginRight: 'calc(0.75rem * var(--dd-spacing-multiplier))',
                    fontWeight: 700,
                  }}
                >
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </motion.button>
            );
          })}
        </div>
      </motion.article>

      {/* Explanation & Next Button */}
      {showExplanation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            padding: 'calc(1.5rem * var(--dd-spacing-multiplier))',
            background: selectedAnswer === currentQuestion.correctAnswer
              ? '#4CAF5015'
              : '#F4433615',
            border: 'var(--dd-border-width) solid var(--dd-color-ink-black)',
            borderRadius: 'var(--dd-border-radius)',
            marginBottom: 'calc(1.5rem * var(--dd-spacing-multiplier))',
          }}
        >
          <h4
            style={{
              fontSize: 'calc(var(--dd-font-size-base) * 1.1)',
              fontWeight: 600,
              color: selectedAnswer === currentQuestion.correctAnswer
                ? '#2E7D32'
                : '#C62828',
              marginBottom: '0.5rem',
            }}
          >
            {selectedAnswer === currentQuestion.correctAnswer
              ? isGentleWaltz
                ? '🎉 Correct! Great job!'
                : '✓ Correct!'
              : isGentleWaltz
              ? '😊 Not quite, but that\'s okay!'
              : '✗ Incorrect'}
          </h4>
          <p
            style={{
              fontSize: 'var(--dd-font-size-base)',
              color: 'var(--dd-color-text)',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {currentQuestion.explanation}
          </p>
        </motion.div>
      )}

      {/* Action Buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 'calc(1rem * var(--dd-spacing-multiplier))',
        }}
      >
        {!showExplanation ? (
          <motion.button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            whileHover={{ scale: selectedAnswer !== null ? 1.05 : 1 }}
            whileTap={{ scale: selectedAnswer !== null ? 0.95 : 1 }}
            className="btn btn-primary"
            style={{
              opacity: selectedAnswer === null ? 0.5 : 1,
              cursor: selectedAnswer === null ? 'not-allowed' : 'pointer',
              fontSize: 'calc(var(--dd-font-size-base) * 1)',
              fontWeight: 600,
            }}
          >
            Submit Answer
          </motion.button>
        ) : (
          <motion.button
            onClick={handleNextQuestion}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-secondary"
            style={{
              fontSize: 'calc(var(--dd-font-size-base) * 1)',
              fontWeight: 600,
            }}
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

function generateQuizQuestions(tier: ProfileTier | null, tierData: any): QuizQuestion[] {
  const baseQuestions: QuizQuestion[] = [
    {
      id: 'q1',
      question: tier === 'gentle-waltz' 
        ? 'What is 5 + 3?' 
        : tier === 'midnight-chase'
        ? 'Simplify: 3x + 2x'
        : 'What is the derivative of x²?',
      options: tier === 'gentle-waltz'
        ? ['6', '7', '8', '9']
        : tier === 'midnight-chase'
        ? ['5x', '6x', '5', 'x⁵']
        : ['x', '2x', 'x²', '2'],
      correctAnswer: tier === 'gentle-waltz' ? 2 : tier === 'midnight-chase' ? 0 : 1,
      explanation: tier === 'gentle-waltz'
        ? 'When you add 5 and 3, you get 8!'
        : tier === 'midnight-chase'
        ? 'Combine like terms: 3x + 2x = 5x'
        : 'Using the power rule: d/dx(x²) = 2x',
    },
    {
      id: 'q2',
      question: tier === 'gentle-waltz'
        ? 'Which shape has 4 equal sides?'
        : tier === 'midnight-chase'
        ? 'What is the pH of a neutral solution?'
        : 'What is the unit of force?',
      options: tier === 'gentle-waltz'
        ? ['Circle', 'Triangle', 'Square', 'Rectangle']
        : tier === 'midnight-chase'
        ? ['pH 0', 'pH 7', 'pH 14', 'pH 10']
        : ['Joule', 'Watt', 'Newton', 'Pascal'],
      correctAnswer: tier === 'gentle-waltz' ? 2 : tier === 'midnight-chase' ? 1 : 2,
      explanation: tier === 'gentle-waltz'
        ? 'A square has 4 equal sides and 4 right angles!'
        : tier === 'midnight-chase'
        ? 'A neutral solution has pH 7, which is neither acidic nor basic'
        : 'Force is measured in Newtons (N), named after Sir Isaac Newton',
    },
    {
      id: 'q3',
      question: tier === 'gentle-waltz'
        ? 'What do plants need to make food?'
        : tier === 'midnight-chase'
        ? 'What process do plants use to make food?'
        : 'What is the powerhouse of the cell?',
      options: tier === 'gentle-waltz'
        ? ['Water only', 'Sunlight', 'Air only', 'Soil only']
        : tier === 'midnight-chase'
        ? ['Respiration', 'Photosynthesis', 'Digestion', 'Fermentation']
        : ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi apparatus'],
      correctAnswer: tier === 'gentle-waltz' ? 1 : tier === 'midnight-chase' ? 1 : 2,
      explanation: tier === 'gentle-waltz'
        ? 'Plants use sunlight to make their own food through photosynthesis!'
        : tier === 'midnight-chase'
        ? 'Photosynthesis is the process where plants convert light energy into chemical energy'
        : 'Mitochondria produce ATP through cellular respiration, earning the nickname "powerhouse"',
    },
  ];

  // Add more questions for higher tiers
  if (tier === 'last-ride') {
    baseQuestions.push(
      {
        id: 'q4',
        question: "According to Faraday's Law, what induces an EMF?",
        options: ['Static magnetic field', 'Changing magnetic flux', 'Electric current', 'Resistance'],
        correctAnswer: 1,
        explanation: "Faraday's Law states that a changing magnetic flux through a loop induces an electromotive force (EMF)",
      },
      {
        id: 'q5',
        question: 'In organic chemistry, what functional group is -OH?',
        options: ['Aldehyde', 'Ketone', 'Alcohol', 'Carboxylic acid'],
        correctAnswer: 2,
        explanation: 'The hydroxyl group (-OH) characterizes alcohols in organic chemistry',
      }
    );
  }

  return baseQuestions;
}
