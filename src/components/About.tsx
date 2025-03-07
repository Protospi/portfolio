import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00aaff] mb-8">About Me</h2>
          <div className="prose prose-lg text-gray-300">
            <p className="mb-6">
              I'm a passionate Full Stack Developer with over 5 years of experience in building
              modern web applications. My expertise includes React, Node.js, and cloud technologies.
            </p>
            <p className="mb-6">
              I love creating elegant solutions to complex problems and am constantly learning
              new technologies to stay at the forefront of web development.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source projects,
              writing technical blog posts, or exploring new design trends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;