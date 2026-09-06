import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatInterfaceProps {
  onMascotStateChange: (state: 'idle' | 'thinking' | 'excited' | 'explaining') => void;
  onBack: () => void;
}

export default function ChatInterface({ onMascotStateChange, onBack }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Howdy there, kid! Ready to learn some algebra? I'm here to help you crack those equations!",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    onMascotStateChange('thinking');

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Great question! Let me break it down for ya...",
        "You're on the right track, partner! Here's the trick...",
        "Hot dog! That's a brainy one! Let's solve it together!",
        "I've seen this before! Remember, X marks the spot!",
        "Keep that noggin working! You're getting warmer!"
      ];

      const aiMessage: ChatMessage = {
        id: messages.length + 2,
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
      onMascotStateChange('explaining');

      // Return to idle after explanation
      setTimeout(() => {
        onMascotStateChange('idle');
      }, 3000);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px'
    }}>
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.68, -0.55, 0.265, 1.55] }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '20px',
          padding: '15px',
          border: '3px solid #1a1a1a',
          borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
          background: 'radial-gradient(ellipse at center, #f4e4c1 0%, #e8d5b5 60%, #c4a882 100%)',
          boxShadow: '0 0 0 3px #1a1a1a, 4px 4px 0 rgba(0,0,0,0.2)',
          animation: 'inkWobble 3s ease-in-out infinite'
        }}
      >
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.2, rotate: [-5, 5, -5, 0] }}
          whileTap={{ scale: 0.9 }}
          style={{
            width: '40px',
            height: '40px',
            border: '3px solid #1a1a1a',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, #d4a017 0%, #b8860b 100%)',
            cursor: 'pointer',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '3px 3px 0 rgba(0,0,0,0.3)'
          }}
        >
          ←
        </motion.button>
        <h2 style={{
          fontFamily: 'Georgia, serif',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#1a1a1a'
        }}>
          💬 Study Hall Chat
        </h2>
      </motion.div>

      {/* Messages Area */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }}
        className="cuphead-card"
        style={{
          flex: 1,
          overflowY: 'auto',
          marginBottom: '20px',
          padding: '20px',
          border: '3px solid #1a1a1a',
          borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
          background: 'radial-gradient(ellipse at center, #f4e4c1 0%, #e8d5b5 60%, #c4a882 100%)',
          boxShadow: 'inset 0 0 60px rgba(26,26,26,0.1)'
        }}
      >
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, x: message.sender === 'user' ? 100 : -100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: [0.68, -0.55, 0.265, 1.55],
                delay: index * 0.1
              }}
              style={{
                display: 'flex',
                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                marginBottom: '15px'
              }}
            >
              <div style={{
                maxWidth: '70%',
                padding: '15px 20px',
                border: '3px solid #1a1a1a',
                borderRadius: message.sender === 'user' 
                  ? '255px 15px 15px 255px / 15px 225px 225px 15px'
                  : '15px 255px 255px 15px / 225px 15px 15px 255px',
                background: message.sender === 'user'
                  ? 'radial-gradient(ellipse at center, #8b1538 0%, #6b0f2a 100%)'
                  : 'radial-gradient(ellipse at center, #ffffff 0%, #f4e4c1 100%)',
                color: message.sender === 'user' ? '#fff' : '#1a1a1a',
                boxShadow: '4px 4px 0 rgba(0,0,0,0.2)',
                animation: 'inkWobble 2s ease-in-out infinite',
                position: 'relative'
              }}>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.5',
                  fontFamily: 'Courier New, monospace'
                }}>
                  {message.text}
                </p>
                
                {/* Timestamp */}
                <span style={{
                  display: 'block',
                  fontSize: '11px',
                  marginTop: '8px',
                  opacity: 0.7,
                  fontFamily: 'Georgia, serif'
                }}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>

                {/* Ink splash decoration */}
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  right: message.sender === 'user' ? '-10px' : 'auto',
                  left: message.sender === 'user' ? 'auto' : '-10px',
                  width: '30px',
                  height: '30px',
                  background: 'radial-gradient(circle, rgba(26,26,26,0.1) 0%, transparent 70%)',
                  borderRadius: '50%'
                }} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                marginBottom: '15px'
              }}
            >
              <div style={{
                padding: '15px 20px',
                border: '3px solid #1a1a1a',
                borderRadius: '15px 255px 255px 15px / 225px 15px 15px 255px',
                background: 'radial-gradient(ellipse at center, #ffffff 0%, #f4e4c1 100%)',
                boxShadow: '4px 4px 0 rgba(0,0,0,0.2)',
                animation: 'inkWobble 2s ease-in-out infinite'
              }}>
                <div style={{ display: 'flex', gap: '5px' }}>
                  {[0, 1, 2].map(i => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: [0.68, -0.55, 0.265, 1.55]
                      }}
                      style={{
                        width: '10px',
                        height: '10px',
                        background: '#1a1a1a',
                        borderRadius: '50%'
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={messagesEndRef} />
      </motion.div>

      {/* Input Area */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center'
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything, partner..."
          style={{
            flex: 1,
            padding: '15px 20px',
            border: '3px solid #1a1a1a',
            borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
            background: 'radial-gradient(ellipse at center, #ffffff 0%, #f4e4c1 100%)',
            fontFamily: 'Courier New, monospace',
            fontSize: '16px',
            outline: 'none',
            boxShadow: '0 0 0 3px #1a1a1a, inset 0 0 20px rgba(26,26,26,0.1)',
            animation: 'inkWobble 3s ease-in-out infinite'
          }}
        />
        
        <motion.button
          onClick={handleSend}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="cuphead-btn"
          style={{
            padding: '15px 30px',
            border: '3px solid #1a1a1a',
            borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
            background: 'radial-gradient(ellipse at center, #d4a017 0%, #b8860b 100%)',
            fontFamily: 'Georgia, serif',
            fontWeight: 'bold',
            fontSize: '18px',
            cursor: 'pointer',
            boxShadow: '0 0 0 3px #1a1a1a, 4px 4px 0 rgba(0,0,0,0.2)',
            animation: 'inkWobble 3s ease-in-out infinite'
          }}
        >
          Send! →
        </motion.button>
      </motion.div>
    </div>
  );
}
