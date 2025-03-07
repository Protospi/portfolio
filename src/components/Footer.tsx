import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} - {t('footer.rights')}
          </div>
          <nav className="flex space-x-6">
            {[
              { key: 'home', label: t('header.home') },
              { key: 'about', label: t('header.about') },
              { key: 'projects', label: t('header.projects') },
              { key: 'contact', label: t('header.contact') }
            ].map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                className="text-gray-400 hover:text-[#00aaff] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;