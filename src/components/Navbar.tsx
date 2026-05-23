import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang, langMeta, type Lang } from '../contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const changeLanguage = (code: Lang) => {
    setLang(code);
    setLangOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.chat'), path: '/chat' },
    { name: t('nav.after10th'), path: '/after-10th' },
    { name: t('nav.after12th'), path: '/after-12th' },
    { name: t('nav.explore'), path: '/explore' },
    { name: t('nav.exams'), path: '/exams' },
    { name: t('nav.skillTest'), path: '/skill-test' },
    { name: t('nav.roadmap'), path: '/roadmap' },
    { name: t('nav.videos'), path: '/videos' },
    { name: t('nav.dashboard'), path: '/dashboard' },
  ];

  return (
    <nav className="sticky top-0 z-40 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-display font-bold text-white flex items-center gap-2">
              <span className="text-glow-gold text-gold-500">Path</span>Finder
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-white/10 text-cyan-400'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors shadow-sm backdrop-blur-md"
                >
                  <Globe size={16} className="text-cyan-400" />
                  <span>{langMeta[lang].flag} {langMeta[lang].label}</span>
                </button>
                {langOpen && (
                  <div className="absolute right-0 mt-2 w-40 rounded-xl shadow-lg glass-card py-2 border border-white/10 overflow-hidden">
                    {(Object.keys(langMeta) as Lang[]).map((lCode) => (
                      <button
                        key={lCode}
                        onClick={() => changeLanguage(lCode)}
                        className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                          lang === lCode ? 'bg-cyan-500/20 text-cyan-300' : 'text-gray-200 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <span className="text-lg">{langMeta[lCode].flag}</span>
                        <span>{langMeta[lCode].label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-card absolute w-full rounded-t-none">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-white/10 text-cyan-400'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-white/10">
              <div className="flex items-center px-3">
                <Globe size={18} className="text-gray-400 mr-2" />
                <span className="text-gray-300 font-medium">Language</span>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 px-2">
                {(Object.keys(langMeta) as Lang[]).map((lCode) => (
                  <button
                    key={lCode}
                    onClick={() => {
                      changeLanguage(lCode);
                      setIsOpen(false);
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      lang === lCode ? 'bg-white/10 text-gold-400' : 'text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    {langMeta[lCode].label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
