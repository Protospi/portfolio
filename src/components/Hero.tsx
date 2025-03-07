import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-[#00aaff]">John Doe</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 mb-8">
          Full Stack Developer & UI/UX Enthusiast
        </p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-8 py-3 bg-[#00aaff] text-black rounded-full font-medium hover:bg-[#0099ff] transition-colors"
        >
          View Projects
          <ArrowRight className="ml-2" size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;