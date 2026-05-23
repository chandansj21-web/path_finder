import React, { useState } from 'react';
import { useLang } from '../contexts/LanguageContext';
import { interestQuestions, traitMeta } from '../data/pathfinder';
import { Trophy, RefreshCw, MessageSquare, Map } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SkillTest = () => {
  const { t } = useLang();
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (trait: string) => {
    const newAnswers = [...answers, trait];
    setAnswers(newAnswers);

    if (currentQ < interestQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResults(true);
    }
  };

  const getResults = () => {
    const counts: Record<string, number> = {};
    answers.forEach((trait) => {
      counts[trait] = (counts[trait] || 0) + 1;
    });

    const sortedTraits = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    const topTraits = sortedTraits.slice(0, 3);
    
    // Calculate percentages
    const total = answers.length;
    return topTraits.map(trait => ({
      trait,
      percent: Math.round((counts[trait] / total) * 100)
    }));
  };

  const resetTest = () => {
    setCurrentQ(0);
    setAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    const topResults = getResults();

    return (
      <div className="max-w-5xl mx-auto py-10 relative">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-drift pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold-500/20 rounded-full blur-3xl animate-drift pointer-events-none" style={{ animationDelay: '2s' }}></div>

        <div className="text-center mb-12 animate-fade-in relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-orange-400 mb-4">
            {t('skill.results_title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('skill.results_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {topResults.map((result, idx) => (
            <div 
              key={idx} 
              className="glass-strong p-6 rounded-2xl border border-white/10 relative overflow-hidden animate-scale-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-gold-400 font-bold">
                  <Trophy size={20} />
                  <span>#{idx + 1}</span>
                </div>
                <div className="text-2xl font-display font-bold text-cyan-400">{result.percent}%</div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6">
                {traitMeta[result.trait].label}
              </h3>

              {/* Progress bar */}
              <div className="w-full bg-white/10 rounded-full h-2 mb-8 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                  style={{ width: `${result.percent}%`, transition: 'width 1s ease-out' }}
                ></div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{t('skill.matched')}</p>
                {traitMeta[result.trait].careers.map((career, cIdx) => (
                  <button
                    key={cIdx}
                    onClick={() => navigate(`/chat?ask=How do I become a ${career.name}?`)}
                    className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/50 rounded-xl p-3 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{career.emoji}</span>
                      <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{career.name}</span>
                    </div>
                    <span className="text-xs text-green-400 font-medium bg-green-400/10 px-2 py-1 rounded">{career.salary}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 relative z-10 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <button 
            onClick={() => navigate('/chat?ask=Can you explain my skill test results to me and suggest a path?')}
            className="px-8 py-4 bg-gradient-to-r from-gold-500 to-orange-500 hover:from-gold-400 hover:to-orange-400 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-glow-gold"
          >
            <MessageSquare size={20} />
            {t('skill.discuss')}
          </button>
          
          <button 
            onClick={() => navigate('/roadmap')}
            className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all"
          >
            <Map size={20} />
            Start my roadmap
          </button>
          
          <button 
            onClick={resetTest}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-gray-300 font-bold rounded-2xl flex items-center justify-center gap-2 transition-all border border-white/10"
          >
            <RefreshCw size={20} />
            {t('skill.retake')}
          </button>
        </div>
      </div>
    );
  }

  const progress = ((currentQ) / interestQuestions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto py-10">
      
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-display font-bold text-white mb-4">
          🧪 Skill & Interest Test
        </h1>
        <p className="text-xl text-gray-400">
          8 quick questions. No wrong answers. Discover your path.
        </p>
      </div>

      <div className="glass-card p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 font-medium mb-3">
            <span>{t('skill.q')} {currentQ + 1} {t('skill.of')} {interestQuestions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-gold-400 to-cyan-400 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="animate-fade-in" key={currentQ}>
          <h2 className="text-3xl font-display font-bold text-white mb-10 text-center leading-tight">
            {interestQuestions[currentQ].q}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {interestQuestions[currentQ].opts.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(opt.trait)}
                className="group relative p-6 bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/50 rounded-2xl text-left transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:via-cyan-500/5 transition-all"></div>
                <div className="relative flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">{opt.emoji}</div>
                  <div className="flex-1">
                    <span className="text-lg text-gray-200 group-hover:text-white font-medium block">
                      {opt.label}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTest;
