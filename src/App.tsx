import React, { useState } from 'react';
import TopNav from './components/TopNav';
import MainContent from './components/MainContent';
import Chatbot from './components/Chatbot';
import LanguageSelect from './components/LanguageSelect';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function AppContent() {
  const [currentView, setCurrentView] = useState('site');
  const [isChatExpanded, setIsChatExpanded] = useState(true);
  const [hasSelectedLanguage, setHasSelectedLanguage] = useState(false);
  const { setLanguage } = useLanguage();

  const handleLanguageSelect = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    setHasSelectedLanguage(true);
  };

  if (!hasSelectedLanguage) {
    return <LanguageSelect onLanguageSelect={handleLanguageSelect} />;
  }

  return (
    <div className="flex h-screen">
      <div className={`${isChatExpanded ? 'w-1/3' : 'w-16'} h-full transition-all duration-300`}>
        <Chatbot isExpanded={isChatExpanded} setIsExpanded={setIsChatExpanded} />
      </div>
      <div className={`${isChatExpanded ? 'w-2/3' : 'flex-1'} flex flex-col transition-all duration-300`}>
        <TopNav currentView={currentView} setCurrentView={setCurrentView} />
        <div className="flex-1 overflow-y-auto">
          <MainContent currentView={currentView} />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;