import React from 'react';
import { useLang } from '../contexts/LanguageContext';
import { Sparkles, ArrowRight, BookOpen, GraduationCap, Briefcase, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const { t } = useLang();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 text-4xl floating-orb" style={{ animationDelay: '0s' }}>🚀</div>
      <div className="absolute top-40 right-20 text-4xl floating-orb" style={{ animationDelay: '1s' }}>💡</div>
      <div className="absolute bottom-20 left-1/4 text-4xl floating-orb" style={{ animationDelay: '2s' }}>🎓</div>
      
      <div className="glass-card p-8 md:p-12 max-w-4xl w-full relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-cyan-400">
            {t('app.name')}
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-display mb-4 text-glow-cyan">
          {t('hero.title')}
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
          <Link to="/after-10th" className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold-500 text-navy-900 font-bold text-lg hover:bg-gold-400 transition-all hover:scale-105 shadow-glow-gold">
            {t('btn.class10')}
            <ArrowRight size={20} />
          </Link>
          
          <Link to="/after-12th" className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 text-navy-900 font-bold text-lg hover:bg-cyan-400 transition-all hover:scale-105 shadow-glow-cyan">
            {t('btn.class1112')}
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full max-w-7xl">
        {[
          { title: t('nav.chat'), icon: Sparkles, path: '/chat', color: 'text-gold-400' },
          { title: t('nav.explore'), icon: BookOpen, path: '/explore', color: 'text-cyan-400' },
          { title: t('nav.exams'), icon: Trophy, path: '/exams', color: 'text-gold-400' },
          { title: t('nav.roadmap'), icon: GraduationCap, path: '/roadmap', color: 'text-cyan-400' },
        ].map((feature, i) => (
          <Link key={i} to={feature.path} className="glass-card p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-transform group">
            <feature.icon size={40} className={`${feature.color} mb-4 group-hover:animate-bounce`} />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <span className="text-gray-400 text-sm group-hover:text-white transition-colors">Explore →</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Landing;
