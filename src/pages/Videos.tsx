import React, { useState } from 'react';
import { PlayCircle, BookOpen, GraduationCap, Flame, Globe } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

const Videos = () => {
  const { t, lang } = useLang();
  const [activeTab, setActiveTab] = useState('stories');

  // Helper to get YouTube Search Embed URL
  const getYTUrl = (query: string) => {
    const langSuffix = lang === 'kn' ? 'in Kannada' : lang === 'hi' ? 'in Hindi' : lang === 'ta' ? 'in Tamil' : 'in English';
    return `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(query + ' ' + langSuffix)}`;
  };

  const tabs = [
    { id: 'stories', name: 'Career Stories', icon: <PlayCircle size={18} /> },
    { id: 'prep', name: 'Exam Prep', icon: <BookOpen size={18} /> },
    { id: 'skills', name: 'Skills', icon: <GraduationCap size={18} /> },
    { id: 'motivation', name: 'Motivation', icon: <Flame size={18} /> },
  ];

  const videoQueries: Record<string, string[]> = {
    'stories': ['IAS Officer day in life', 'Software Engineer office tour', 'Doctor hospital vlog', 'Agriculture startup story'],
    'prep': ['JEE Main strategy', 'NEET biology one shot', 'CUET preparation tips', 'KCET physics revision'],
    'skills': ['Learn Python programming basics', 'English speaking practice', 'UI UX design tutorial', 'Financial literacy for students'],
    'motivation': ['Study motivation', 'Exam success story', 'Never give up students', 'Sandeep Maheshwari for students']
  };

  return (
    <div className="max-w-7xl mx-auto animate-fade-in pb-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 mb-4">
          {t('vid.title')}
        </h1>
        <p className="text-xl text-gray-300">
          {t('vid.subtitle')}
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="glass-card p-2 flex flex-wrap gap-2 justify-center rounded-2xl">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id 
                ? 'bg-red-500 text-white shadow-glow-gold' 
                : 'text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center mb-8 text-sm text-gray-400 items-center gap-2">
        <Globe size={16} />
        {t('vid.showing')} <strong className="text-white uppercase">{lang}</strong>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videoQueries[activeTab].map((query, i) => (
          <div key={`${lang}-${i}`} className="glass-card overflow-hidden group">
            <div className="relative pt-[56.25%] bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={getYTUrl(query)}
                title={query}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{query}</h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider">{tabs.find(t=>t.id===activeTab)?.name} • {t('vid.auto')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
