import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, FileText, BarChart3 } from 'lucide-react';

interface TopNavProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const TopNav = ({ currentView, setCurrentView }: TopNavProps) => {
  const navItems = [
    { id: 'site', label: 'Front', icon: Layout },
    { id: 'back', label: 'Back', icon: Server },
    { id: 'report', label: 'Report', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
  ];

  return (
    <div className="bg-gradient-to-r from-[#2C3E50] to-[#3F4C6B] py-4 px-4 shadow-lg">
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
    </div>
  );
};

export default TopNav;