import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, FileText, BarChart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface TopNavProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const TopNav = ({ currentView, setCurrentView }: TopNavProps) => {
  const { t } = useLanguage();

  const navItems = [
    { id: 'site', icon: Monitor, label: t('nav.front') },
    { id: 'back', icon: Server, label: t('nav.back') },
    { id: 'report', icon: FileText, label: t('nav.report') },
    { id: 'analytics', icon: BarChart, label: t('nav.analytics') }
  ];

  return (
    <nav className="bg-gradient-to-r from-[#2C3E50] to-[#3F4C6B] py-4 px-4 shadow-lg">
      <div className="flex justify-center space-x-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentView(item.id)}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg transition-all ${
                currentView === item.id
                  ? 'bg-[#00aaff] text-black shadow-md'
                  : 'bg-black/20 text-white hover:bg-black/30'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
};

export default TopNav;