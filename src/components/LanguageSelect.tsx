import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LanguageSelectProps {
  onLanguageSelect: (language: string) => void;
}

const LanguageSelect = ({ onLanguageSelect }: LanguageSelectProps) => {
  const { language, setLanguage, t } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedLanguage) {
      setLanguage(selectedLanguage);
      onLanguageSelect(selectedLanguage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] p-8 rounded-2xl shadow-2xl">
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Globe2 size={48} className="text-[#00aaff]" />
            </motion.div>
          </div>
          
          <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#00aaff] to-[#0088cc] bg-clip-text text-transparent">
            {t('landing.select_language')}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 text-white rounded-lg border-2 border-[#00aaff]/30 focus:border-[#00aaff] focus:outline-none transition-colors appearance-none"
                required
              >
                <option value="">{t('landing.placeholder')}</option>
                <option value="en">{t('landing.languages.en')}</option>
                <option value="es">{t('landing.languages.es')}</option>
                <option value="pt">{t('landing.languages.pt')}</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <motion.div
                  animate={{
                    y: [0, 2, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  <Globe2 size={20} className="text-[#00aaff]" />
                </motion.div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={`w-full py-3 rounded-lg font-medium transition-colors ${
                selectedLanguage
                  ? 'bg-[#00aaff] text-black hover:bg-[#0099ff]'
                  : 'bg-[#00aaff]/30 text-white/50 cursor-not-allowed'
              }`}
              disabled={!selectedLanguage}
            >
              {t('landing.continue')}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default LanguageSelect;