import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Trash2, ChevronLeft, ChevronRight, MessageSquare, Minimize2, Maximize2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
      <div className="h-screen bg-gray-900 p-4 flex flex-col items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsExpanded(true)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00aaff] text-black hover:bg-[#0099ff] transition-colors"
        >
          <ChevronRight size={24} />
        </motion.button>
        <MessageSquare size={24} className="text-[#00aaff] mt-4" />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-gray-900 p-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-bold text-[#00aaff]">{t('chat.title')}</span>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={clearChat}
            className="p-2 text-gray-400 hover:text-[#00aaff] transition-colors"
            title={t('chat.clear')}
          >
            <Trash2 size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(false)}
            className="p-2 text-gray-400 hover:text-[#00aaff] transition-colors"
            title={t('chat.collapse')}
          >
            <ChevronLeft size={20} />
          </motion.button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
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
                  ? 'bg-[#00aaff] text-black'
                  : 'bg-gray-800 text-white'
              }`}
            >
              {message.text}
            </div>
          </motion.div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t('chat.placeholder')}
          className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00aaff]"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-4 py-2 bg-[#00aaff] text-black rounded-lg hover:bg-[#0099ff] transition-colors"
        >
          <Send size={20} />
        </motion.button>
      </form>
    </div>
  );
};

export default Chatbot;