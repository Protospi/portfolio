import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Trash2, ChevronLeft, ChevronRight, MessageSquare, Minimize2, Maximize2, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import chatBackground from '../assets/chatbackground.webp';

interface Message {
  text: string;
  isUser: boolean;
}

interface ChatbotProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const Chatbot = ({ isExpanded, setIsExpanded }: ChatbotProps) => {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    { text: t('chat.welcome'), isUser: false }
  ]);
  const [input, setInput] = useState('');

  // Update messages when language changes
  useEffect(() => {
    setMessages(currentMessages => 
      currentMessages.map(msg => ({
        ...msg,
        text: msg.isUser ? msg.text : msg.text === t('chat.welcome') 
          ? t('chat.welcome') 
          : t('chat.demo_response')
      }))
    );
  }, [language, t]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isUser: true }]);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: t('chat.demo_response'),
        isUser: false
      }]);
    }, 1000);

    setInput('');
  };

  const clearChat = () => {
    setMessages([{ text: t('chat.welcome'), isUser: false }]);
  };

  if (!isExpanded) {
    return (
      <div className="h-screen bg-gray-50 p-4 flex flex-col items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsExpanded(true)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
        >
          <ChevronRight size={24} />
        </motion.button>
        <MessageSquare size={24} className="text-blue-600 mt-4" />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="flex justify-between items-center p-5 bg-white border-b border-gray-100">
        <span className="text-2xl font-bold text-blue-600">
          {t('chat.title')}
        </span>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={clearChat}
            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
            title={t('chat.clear')}
          >
            <Trash2 size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(false)}
            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
            title={t('chat.collapse')}
          >
            <ChevronLeft size={20} />
          </motion.button>
        </div>
      </div>

      <div 
        className="flex-1 overflow-y-auto p-4 space-y-4 relative"
        style={{
          backgroundColor: '#f9fafb',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${chatBackground})`,
            backgroundSize: 'auto 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: 'rotate(90deg) scale(1.2)',
            marginTop: '4%',
            opacity: 0.8,
            top: '-10%',
            left: '-10%',
            right: '-10%',
            bottom: '-10%',
            width: '120%',
            height: '120%'
          }}
        />

        <div className="absolute bottom-2 left-2 z-20 group">
          <Info 
            size={24}
            strokeWidth={2.5}
            className="text-black hover:opacity-80 transition-opacity cursor-help"
          />
          <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block">
            <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
              {t('chat.image_info')}
            </div>
          </div>
        </div>

        <div className="relative z-10 space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isUser
                    ? 'bg-blue-100 text-blue-900'
                    : 'bg-white shadow-sm border border-gray-100 text-gray-700'
                }`}
              >
                {message.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('chat.placeholder')}
            className="flex-1 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
          >
            <Send size={20} />
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;