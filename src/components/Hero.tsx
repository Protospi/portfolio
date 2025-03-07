import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-300">{t('hero.greeting')} </span>
            <span className="bg-gradient-to-r from-[#00aaff] to-[#00ff00] bg-clip-text text-transparent">
              {t('hero.name')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12">
            {t('hero.role')}
          </p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#00aaff] text-black font-medium px-8 py-3 rounded-lg hover:bg-[#0088cc] transition-colors"
          >
            {t('hero.cta')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;