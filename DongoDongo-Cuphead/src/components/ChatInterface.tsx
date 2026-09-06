import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProfileTier } from './Onboarding';
import { useMascotPersona } from '../hooks/useProfileStore';

interface ChatInterfaceProps {
  profileTier: ProfileTier;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'mascot';
  text: string;
  timestamp: Date;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ profileTier }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'mascot',
      text: getDefaultGreeting(profileTier),
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const persona = useMascotPersona();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');

    // Simulate mascot response
    setTimeout(() => {
      const mascotResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'mascot',
        text: getPersonaResponse(persona.voice, inputText),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, mascotResponse]);
    }, 1000);
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Voice input is not supported in your browser.');
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
    };

    recognition.start();
  };

  const isGentleWaltz = profileTier === 'gentle-waltz';
  const isLastRide = profileTier === 'last-ride';

  return (
    <motion.div
      className="chat-interface"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 80px)',
        maxWidth: '900px',
        margin: '0 auto',
        padding: 'calc(1rem * var(--dd-spacing-multiplier))',
      }}
    >
      {/* Mascot Display Area */}
      <motion.div
        style={{
          flex: '0 0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 'calc(2rem * var(--dd-spacing-multiplier))',
          borderBottom: 'var(--dd-border-width) solid var(--dd-color-ink-black)',
        }}
      >
        <MascotFace persona={persona} isSpeaking={false} />
        
        {/* Current Response Text */}
        <AnimatePresence>
          {messages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{
                marginTop: 'calc(1.5rem * var(--dd-spacing-multiplier))',
                padding: 'calc(1rem * var(--dd-spacing-multiplier)) calc(1.5rem * var(--dd-spacing-multiplier))',
                background: 'var(--dd-color-bg)',
                border: 'var(--dd-border-width) solid var(--dd-color-ink-black)',
                borderRadius: 'var(--dd-border-radius)',
                maxWidth: '500px',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              {/* Speech bubble tail */}
              <div
                style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: 0,
                  borderLeft: '10px solid transparent',
                  borderRight: '10px solid transparent',
                  borderBottom: '10px solid var(--dd-color-ink-black)',
                }}
              />
              <p
                style={{
                  fontSize: isGentleWaltz ? 'calc(var(--dd-font-size-base) * 1.1)' : 'var(--dd-font-size-base)',
                  color: 'var(--dd-color-text)',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {messages[messages.length - 1].text}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Messages Transcript (Collapsible for Gentle Waltz) */}
      {!isGentleWaltz && (
        <motion.div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: 'calc(1rem * var(--dd-spacing-multiplier))',
            display: 'flex',
            flexDirection: 'column',
            gap: 'calc(0.75rem * var(--dd-spacing-multiplier))',
          }}
        >
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, x: message.sender === 'user' ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              style={{
                alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '70%',
              }}
            >
              <div
                style={{
                  padding: 'calc(0.75rem * var(--dd-spacing-multiplier)) calc(1rem * var(--dd-spacing-multiplier))',
                  background: message.sender === 'user' ? 'var(--dd-color-primary)' : 'var(--dd-color-bg)',
                  color: message.sender === 'user' ? 'var(--dd-color-bg)' : 'var(--dd-color-text)',
                  border: 'var(--dd-border-width) solid var(--dd-color-ink-black)',
                  borderRadius: 'var(--dd-border-radius)',
                  borderBottomRightRadius: message.sender === 'user' ? '4px' : undefined,
                  borderBottomLeftRadius: message.sender === 'mascot' ? '4px' : undefined,
                }}
              >
                <p style={{ margin: 0, fontSize: 'calc(var(--dd-font-size-base) * 0.9)' }}>
                  {message.text}
                </p>
              </div>
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </motion.div>
      )}

      {/* Input Area */}
      <motion.div
        style={{
          flex: '0 0 auto',
          padding: 'calc(1rem * var(--dd-spacing-multiplier))',
          borderTop: 'var(--dd-border-width) solid var(--dd-color-ink-black)',
          display: 'flex',
          gap: 'calc(0.75rem * var(--dd-spacing-multiplier))',
          alignItems: 'flex-end',
        }}
      >
        {/* Voice Input Button (Primary for Gentle Waltz) */}
        {isGentleWaltz && (
          <motion.button
            onClick={handleVoiceInput}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              minWidth: 'var(--dd-touch-target-min)',
              minHeight: 'var(--dd-touch-target-min)',
              borderRadius: '50%',
              background: isListening ? 'var(--dd-color-secondary)' : 'var(--dd-color-primary)',
              color: 'var(--dd-color-bg)',
              border: 'var(--dd-border-width) solid var(--dd-color-ink-black)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <path d="M12 2C10.9 2 10 2.9 10 4V12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12V4C14 2.9 13.1 2 12 2ZM18 12C18 15.31 15.31 18 12 18C8.69 18 6 15.31 6 12H4C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12H18ZM11 20V22H13V20H11Z" />
            </svg>
          </motion.button>
        )}

        {/* Text Input */}
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={isGentleWaltz ? 'Type or use voice...' : 'Type your message...'}
          rows={isGentleWaltz ? 1 : 2}
          style={{
            flex: 1,
            padding: 'calc(0.75rem * var(--dd-spacing-multiplier))',
            fontSize: 'var(--dd-font-size-base)',
            fontFamily: 'var(--dd-font-body)',
            border: 'var(--dd-border-width) solid var(--dd-color-ink-black)',
            borderRadius: 'var(--dd-border-radius)',
            resize: 'none',
            minHeight: isGentleWaltz ? 'var(--dd-touch-target-min)' : 'auto',
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />

        {/* Send Button */}
        <motion.button
          onClick={handleSendMessage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary"
          style={{
            minWidth: 'var(--dd-touch-target-min)',
            minHeight: 'var(--dd-touch-target-min)',
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M2 21L21 3L12 12L2 21ZM12 12L21 3L12 12Z" />
          </svg>
        </motion.button>

        {/* Additional Tools for Higher Tiers */}
        {!isGentleWaltz && (
          <>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-accent"
              title="Attach file"
              style={{
                minWidth: 'var(--dd-touch-target-min)',
                minHeight: 'var(--dd-touch-target-min)',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </motion.button>

            {isLastRide && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary"
                title="Clear chat history"
                onClick={() => setMessages([])}
                style={{
                  minWidth: 'var(--dd-touch-target-min)',
                  minHeight: 'var(--dd-touch-target-min)',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6V21C19 21.5304 18.7893 22.0391 18.4142 22.4142C18.0391 22.7893 17.5304 23 17 23H7C6.46957 23 5.96086 22.7893 5.58579 22.4142C5.21071 22.0391 5 21.5304 5 21V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" />
                </svg>
              </motion.button>
            )}
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

// Mascot Face Component with SVG paths
const MascotFace: React.FC<{ persona: any; isSpeaking: boolean }> = ({ persona, isSpeaking }) => {
  return (
    <motion.svg
      width="180"
      height="180"
      viewBox="0 0 200 200"
      style={{
        shapeRendering: 'geometricPrecision',
      }}
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Head outline */}
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="var(--dd-color-bg)"
        stroke="var(--dd-color-ink-black)"
        strokeWidth="3"
      />

      {/* Eyes */}
      <g>
        {/* Left eye */}
        <ellipse cx="70" cy="85" rx="12" ry="15" fill="white" stroke="var(--dd-color-ink-black)" strokeWidth="2" />
        <motion.circle
          cx="70"
          cy="85"
          r="5"
          fill="var(--dd-color-ink-black)"
          animate={{
            cx: [68, 72, 68],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Right eye */}
        <ellipse cx="130" cy="85" rx="12" ry="15" fill="white" stroke="var(--dd-color-ink-black)" strokeWidth="2" />
        <motion.circle
          cx="130"
          cy="85"
          r="5"
          fill="var(--dd-color-ink-black)"
          animate={{
            cx: [128, 132, 128],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </g>

      {/* Glasses for Gentle Waltz */}
      {persona.accessories.includes('glasses') && (
        <g>
          <circle cx="70" cy="85" r="18" fill="none" stroke="#457B9D" strokeWidth="3" />
          <circle cx="130" cy="85" r="18" fill="none" stroke="#457B9D" strokeWidth="3" />
          <line x1="88" y1="85" x2="112" y2="85" stroke="#457B9D" strokeWidth="3" />
        </g>
      )}

      {/* Mouth - changes based on speaking state */}
      <motion.path
        d={isSpeaking ? "M80 125Q100 145 120 125" : "M85 125Q100 135 115 125"}
        fill="none"
        stroke="var(--dd-color-ink-black)"
        strokeWidth="3"
        strokeLinecap="round"
        animate={{
          d: isSpeaking 
            ? ["M80 125Q100 145 120 125", "M80 125Q100 135 120 125", "M80 125Q100 145 120 125"]
            : "M85 125Q100 135 115 125",
        }}
        transition={{
          duration: 0.3,
          repeat: isSpeaking ? Infinity : 0,
        }}
      />

      {/* Bow tie for Gentle Waltz */}
      {persona.accessories.includes('bowtie') && (
        <path
          d="M85 155L100 145L115 155L100 165Z"
          fill="#E63946"
          stroke="var(--dd-color-ink-black)"
          strokeWidth="2"
        />
      )}
    </motion.svg>
  );
};

function getDefaultGreeting(tier: ProfileTier | null): string {
  switch (tier) {
    case 'gentle-waltz':
      return "Hi there! I'm Professor Whiskers! What would you like to learn today?";
    case 'midnight-chase':
      return "Hey! I'm Alex. Ready to tackle some topics?";
    case 'last-ride':
      return "Greetings. I'm Dr. Sage. Let's focus on your academic goals.";
    default:
      return "Hello! How can I help you learn today?";
  }
}

function getPersonaResponse(voice: string, userText: string): string {
  const responses: Record<string, string[]> = {
    encouraging: [
      "Great question! Let's explore that together!",
      "I love your curiosity! Here's what I think...",
      "That's wonderful! Let me explain...",
    ],
    friendly: [
      "Good point! Here's my take on it...",
      "Interesting! Let me share what I know...",
      "Nice question! Here's the info...",
    ],
    concise: [
      "Here's the relevant information.",
      "Based on the curriculum, the answer is:",
      "Key points to note:",
    ],
  };

  const options = responses[voice] || responses.friendly;
  return options[Math.floor(Math.random() * options.length)];
}
