import React from 'react';
import { Flame, Award, CheckCircle, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../contexts/LanguageContext';

const Dashboard = () => {
  const { t } = useLang();

  return (
    <div className="max-w-7xl mx-auto animate-fade-in pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">{t('dash.title')}</h1>
          <p className="text-gray-400">{t('dash.subtitle')}</p>
        </div>
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
          <Flame className="text-orange-500" size={28} />
          <div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wide">{t('dash.streak')}</p>
            <p className="text-2xl font-bold text-white">4 Days</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Actions */}
        <div className="lg:col-span-2 space-y-8">
          
          <div className="glass-card p-6 border-l-4 border-l-cyan-500">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="text-cyan-400" />
              {t('dash.daily')}
            </h2>
            <div className="space-y-4">
              <label className="flex items-start gap-4 p-4 bg-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
                <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-400 text-cyan-500 focus:ring-cyan-500 bg-transparent" />
                <div>
                  <p className="font-bold text-gray-200">Take the RIASEC Skill Test</p>
                  <p className="text-sm text-gray-400">Discover your Holland codes and matched careers.</p>
                </div>
              </label>
              <label className="flex items-start gap-4 p-4 bg-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
                <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-400 text-cyan-500 focus:ring-cyan-500 bg-transparent" />
                <div>
                  <p className="font-bold text-gray-200">Watch 1 Career Story Video</p>
                  <p className="text-sm text-gray-400">Head over to the Videos tab to complete this.</p>
                </div>
              </label>
              <label className="flex items-start gap-4 p-4 bg-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-colors opacity-50">
                <input type="checkbox" defaultChecked disabled className="mt-1 w-5 h-5 rounded border-gray-400 text-cyan-500 focus:ring-cyan-500 bg-cyan-500" />
                <div>
                  <p className="font-bold text-gray-200 line-through">Ask Mitra AI a question</p>
                  <p className="text-sm text-gray-400">Completed yesterday</p>
                </div>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gold-500/20 flex items-center justify-center mb-4 border border-gold-500/30">
                <Award className="text-gold-400" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-1">Career Explorer Badge</h3>
              <p className="text-sm text-gray-400 mb-4">You explored 10 different career paths this week.</p>
              <div className="w-full bg-white/10 rounded-full h-2 mb-1">
                <div className="bg-gold-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <span className="text-xs text-gold-400 font-bold uppercase">Unlocked</span>
            </div>

            <div className="glass-card p-6 flex flex-col items-center text-center opacity-70">
              <div className="w-16 h-16 rounded-full bg-gray-500/20 flex items-center justify-center mb-4 border border-gray-500/30">
                <CheckCircle className="text-gray-400" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-1">Roadmap Master</h3>
              <p className="text-sm text-gray-400 mb-4">Complete 5 tasks on your chosen roadmap.</p>
              <div className="w-full bg-white/10 rounded-full h-2 mb-1">
                <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <span className="text-xs text-gray-400 font-bold uppercase">2 / 5 Tasks</span>
            </div>
          </div>
        </div>

        {/* Right Column - Updates */}
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold mb-4 border-b border-white/10 pb-2">{t('dash.deadlines')}</h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="bg-white/10 p-2 rounded-lg text-center min-w-[3rem]">
                  <p className="text-xs text-gray-400 uppercase font-bold">Apr</p>
                  <p className="text-lg font-bold text-white">15</p>
                </div>
                <div>
                  <p className="font-bold text-sm">KCET Registration</p>
                  <p className="text-xs text-gray-400">Ends in 5 days</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-white/10 p-2 rounded-lg text-center min-w-[3rem]">
                  <p className="text-xs text-gray-400 uppercase font-bold">May</p>
                  <p className="text-lg font-bold text-white">05</p>
                </div>
                <div>
                  <p className="font-bold text-sm">NEET UG Exam</p>
                  <p className="text-xs text-gray-400">Admit cards soon</p>
                </div>
              </div>
            </div>
            <Link to="/exams" className="block text-center mt-6 text-sm text-cyan-400 hover:text-cyan-300 font-semibold">
              View all exams →
            </Link>
          </div>

          <div className="glass-card p-6 bg-gradient-to-br from-purple-900/40 to-transparent border-purple-500/30">
            <h3 className="text-lg font-bold mb-2">{t('dash.resumeChat')}</h3>
            <p className="text-sm text-gray-300 mb-4">You were discussing the IAS roadmap with Mitra. Want to continue?</p>
            <Link to="/chat" className="block w-full py-2 bg-purple-500 hover:bg-purple-400 text-white font-bold rounded-lg text-center transition-colors shadow-glow-gold text-sm">
              {t('dash.openChat')}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
