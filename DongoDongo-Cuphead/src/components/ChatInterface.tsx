import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore, TIER_INFO } from '../store/appStore';
import { MascotOverlay } from './MascotOverlay';
import * as Icons from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

export const ChatInterface: React.FC = () => {
  const { currentTier } = useAppStore();
  const tierInfo = currentTier ? TIER_INFO[currentTier] : null;
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'assistant',
      text: `Hi! I'm ${tierInfo?.mascotName || 'your tutor'}. How can I help you learn today?`,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [mascotEmotion, setMascotEmotion] = useState<'neutral' | 'happy' | 'thinking' | 'excited' | 'talking'>('neutral');

  const tools = tierInfo?.tools || ['text'];
  const showVoiceFirst = tierInfo?.showVoiceFirst || false;

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputText('');
    setMascotEmotion('thinking');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: "That's a great question! Let me explain... [This is where the AI would provide a helpful answer based on the Zambian curriculum]",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setMascotEmotion('happy');
    }, 1500);
  };

  const handleVoiceInput = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setMascotEmotion('talking');
      // Simulate voice recognition
      setTimeout(() => {
        setInputText("Can you help me understand photosynthesis?");
        setIsRecording(false);
        setMascotEmotion('neutral');
      }, 2000);
    }
  };

  const clearHistory = () => {
    setMessages([{
      id: Date.now().toString(),
      sender: 'assistant',
      text: `Chat cleared! I'm ${tierInfo?.mascotName}. What would you like to learn?`,
      timestamp: new Date()
    }]);
  };

  return (
    <div className="pt-24 pb-12 px-4 paper-texture min-h-screen">
      <div className="film-grain" />
      
      <div className="max-w-5xl mx-auto relative z-10 h-[calc(100vh-8rem)] flex gap-6">
        {/* Mascot Sidebar - Always visible */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="hidden lg:block w-64 flex-shrink-0"
        >
          <div className="sticky top-28">
            <MascotOverlay emotion={mascotEmotion} message="Ready to help!" />
            
            {/* Quick Tools */}
            <div className="mt-6 space-y-3">
              {tools.includes('calculator') && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full ink-border bg-[#faf6ed] p-3 font-semibold watercolor-fill flex items-center justify-center gap-2"
                >
                  <Icons.Calculator size={20} />
                  Calculator
                </motion.button>
              )}
              
              {tools.includes('upload') && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full ink-border bg-[#faf6ed] p-3 font-semibold watercolor-fill flex items-center justify-center gap-2"
                >
                  <Icons.Paperclip size={20} />
                  Upload File
                </motion.button>
              )}
              
              {tools.includes('delete-history') && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={clearHistory}
                  className="w-full ink-border bg-[#ffcccc] p-3 font-semibold watercolor-fill flex items-center justify-center gap-2 text-[#8b1538]"
                >
                  <Icons.Trash2 size={20} />
                  Clear Chat
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col ink-border bg-[#faf6ed] watercolor-fill overflow-hidden" style={{
          borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
          borderWidth: '3px'
        }}>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 ink-border watercolor-fill ink-shadow ${
                    message.sender === 'user' 
                      ? 'bg-[#6C5CE7] text-white' 
                      : 'bg-white text-[#1a1a1a]'
                  }`}
                  style={{
                    borderRadius: message.sender === 'user'
                      ? '225px 15px 255px 15px / 15px 255px 15px 225px'
                      : '15px 225px 15px 255px / 255px 15px 225px 15px',
                    borderWidth: '2px'
                  }}
                >
                  <p className={message.sender === 'user' ? 'text-white' : 'text-[#1a1a1a]'}>
                    {message.text}
                  </p>
                  <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-white/70' : 'text-[#636E72]'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-[#dfe6e9]">
            {/* Voice button prominent for Tier 1 */}
            {showVoiceFirst && (
              <div className="flex justify-center mb-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleVoiceInput}
                  className={`w-20 h-20 rounded-full ink-border ink-shadow flex items-center justify-center text-4xl voice-pulse ${
                    isRecording ? 'bg-[#FF6B6B] text-white' : 'bg-[#faf6ed] text-[#FF6B6B]'
                  }`}
                  style={{
                    borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                    borderWidth: '3px'
                  }}
                >
                  {isRecording ? <Icons.StopCircle size={40} /> : <Icons.Mic size={40} />}
                </motion.button>
              </div>
            )}

            <div className="flex items-center gap-3">
              {/* Emoji button for Tier 1 */}
              {tools.includes('emoji') && (
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-3xl"
                >
                  😊
                </motion.button>
              )}

              {/* Text Input */}
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={showVoiceFirst ? "Type or use voice..." : "Type your question..."}
                className="flex-1 ink-border bg-white p-4 outline-none text-[#1a1a1a] text-lg font-medium watercolor-fill"
                style={{
                  fontSize: currentTier === 1 ? '1.2rem' : '1rem',
                  borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                  borderWidth: '2px'
                }}
              />

              {/* Voice button for Tier 2 & 3 */}
              {!showVoiceFirst && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleVoiceInput}
                  className={`w-14 h-14 rounded-full ink-border ink-shadow flex items-center justify-center text-2xl ${
                    isRecording ? 'bg-[#FF6B6B] text-white' : 'bg-[#faf6ed] text-[#636E72]'
                  }`}
                >
                  {isRecording ? <Icons.StopCircle size={24} /> : <Icons.Mic size={24} />}
                </motion.button>
              )}

              {/* Send Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSendMessage}
                className="w-14 h-14 rounded-full ink-border ink-shadow flex items-center justify-center bg-[#8b1538] text-white"
                style={{
                  borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                  borderWidth: '3px'
                }}
              >
                <Icons.Send size={24} />
              </motion.button>
            </div>

            {/* Recording indicator */}
            {isRecording && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-3 text-[#FF6B6B] font-semibold flex items-center justify-center gap-2"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  🔴
                </motion.span>
                Listening...
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
