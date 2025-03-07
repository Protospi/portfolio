import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

interface MainContentProps {
  currentView: string;
}

const MainContent = ({ currentView }: MainContentProps) => {
  switch (currentView) {
    case 'site':
      return (
        <div className="bg-black min-h-screen">
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      );
    case 'back':
      return (
        <div className="flex items-center justify-center min-h-screen bg-black">
          <p className="text-gray-400 text-xl">Backend content coming soon...</p>
        </div>
      );
    case 'report':
      return (
        <div className="flex items-center justify-center min-h-screen bg-black">
          <p className="text-gray-400 text-xl">Report content coming soon...</p>
        </div>
      );
    case 'analytics':
      return (
        <div className="flex items-center justify-center min-h-screen bg-black">
          <p className="text-gray-400 text-xl">Analytics content coming soon...</p>
        </div>
      );
    default:
      return null;
  }
};

export default MainContent;