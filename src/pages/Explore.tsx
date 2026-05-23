import React, { useState, useMemo } from 'react';
import { useLang } from '../contexts/LanguageContext';
import { Search, MapPin, Briefcase, IndianRupee, TrendingUp, Filter, Sparkles, X, ChevronRight, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ADVANCED_CAREERS } from '../data/careers';
import type { Career } from '../data/careers';

const Explore = () => {
  const { t } = useLang();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDemand, setSelectedDemand] = useState<string>('all');
  const [selectedWorkStyle, setSelectedWorkStyle] = useState<string>('all');
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);

  // Filter logic
  const filteredCareers = useMemo(() => {
    return ADVANCED_CAREERS.filter(career => {
      const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            career.overview.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || career.category === selectedCategory;
      const matchesDemand = selectedDemand === 'all' || career.demandLevel === selectedDemand;
      const matchesWorkStyle = selectedWorkStyle === 'all' || career.workStyle === selectedWorkStyle;
      
      return matchesSearch && matchesCategory && matchesDemand && matchesWorkStyle;
    });
  }, [searchTerm, selectedCategory, selectedDemand, selectedWorkStyle]);

  return (
    <div className="max-w-7xl mx-auto animate-fade-in pb-20">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-6">
          Welcome to Explore Careers
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Discover your future career path with AI-powered guidance and personalized recommendations.
        </p>
        
        {/* Search Bar & AI Match */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-3xl mx-auto px-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xl backdrop-blur-sm transition-all"
              placeholder={t('exp.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Link 
            to="/chat?ask=I need personalized career recommendations based on my skills and interests. Can you act as my career counselor?"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-glow-green"
          >
            <Sparkles size={20} />
            {t('exp.matchMe')}
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <div className="w-full lg:w-64 shrink-0 space-y-6">
          <div className="glass-card p-6 border border-white/10 sticky top-24">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <Filter className="text-emerald-400" size={20} />
              <h2 className="font-bold text-lg">{t('exp.filters')}</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-400 uppercase mb-3">{t('exp.category')}</label>
                <div className="space-y-2">
                  {['all', 'tech', 'engineering', 'medical', 'arts', 'commerce', 'business'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === cat ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'text-gray-300 hover:bg-white/5'
                      }`}
                    >
                      {cat === 'all' ? t('exp.all') : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-400 uppercase mb-3">{t('exp.demand')}</label>
                <div className="space-y-2">
                  {['all', 'Very High', 'High', 'Medium'].map(level => (
                    <button
                      key={level}
                      onClick={() => setSelectedDemand(level)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedDemand === level ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'text-gray-300 hover:bg-white/5'
                      }`}
                    >
                      {level === 'all' ? 'Any Demand' : level}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-400 uppercase mb-3">{t('exp.workStyle')}</label>
                <div className="space-y-2">
                  {['all', 'Remote', 'Office', 'Hybrid', 'Field'].map(style => (
                    <button
                      key={style}
                      onClick={() => setSelectedWorkStyle(style)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedWorkStyle === style ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'text-gray-300 hover:bg-white/5'
                      }`}
                    >
                      {style === 'all' ? 'Any Style' : style}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Grid */}
        <div className="flex-1">
          {filteredCareers.length === 0 ? (
            <div className="glass-card p-12 text-center border border-white/5">
              <p className="text-xl text-gray-400">{t('exp.noResults')}</p>
              <button 
                onClick={() => {
                  setSearchTerm(''); setSelectedCategory('all'); setSelectedDemand('all'); setSelectedWorkStyle('all');
                }}
                className="mt-4 px-6 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg hover:bg-emerald-500/30 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCareers.map((career) => (
                <div 
                  key={career.id} 
                  onClick={() => setSelectedCareer(career)}
                  className="glass-card overflow-hidden group cursor-pointer hover:-translate-y-2 transition-all duration-300 border border-white/10 hover:border-emerald-500/50 flex flex-col h-full"
                >
                  <div className={`p-6 ${career.color} bg-opacity-20 border-b border-white/5 flex items-start justify-between`}>
                    <div className="text-4xl">{career.icon}</div>
                    <span className="px-2 py-1 bg-black/30 rounded text-xs font-bold text-white uppercase tracking-wider">
                      {career.category}
                    </span>
                  </div>
                  
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{career.title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-2 mb-4 flex-1">{career.overview}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <IndianRupee size={16} className="text-green-400" />
                        <span className="truncate">{career.salary}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <TrendingUp size={16} className="text-blue-400" />
                        <span>{career.demandLevel} Demand</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-emerald-400 font-medium text-sm">
                      <span>View Details</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Career Details Modal */}
      {selectedCareer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedCareer(null)}></div>
          
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0B1437] border border-white/20 rounded-2xl shadow-2xl flex flex-col animate-fade-in overflow-hidden">
            
            {/* Modal Header */}
            <div className={`p-6 ${selectedCareer.color} bg-opacity-20 flex justify-between items-start border-b border-white/10`}>
              <div className="flex items-center gap-4">
                <div className="text-5xl bg-black/20 p-3 rounded-xl">{selectedCareer.icon}</div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-white mb-1">{selectedCareer.title}</h2>
                  <div className="flex gap-2 text-sm">
                    <span className="px-2 py-1 bg-black/30 rounded font-medium">{selectedCareer.category.toUpperCase()}</span>
                    <span className="px-2 py-1 bg-black/30 rounded font-medium">{selectedCareer.workStyle}</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCareer(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                  <section>
                    <h3 className="text-xl font-bold mb-3 text-emerald-400">Career Overview</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedCareer.overview}</p>
                    <p className="mt-3 text-gray-400"><strong className="text-gray-200">Future Scope:</strong> {selectedCareer.futureScope}</p>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-bold mb-4 text-emerald-400">Beginner Roadmap</h3>
                    <div className="space-y-4 relative">
                      <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-white/10"></div>
                      {selectedCareer.beginnerRoadmap.map((step, idx) => (
                        <div key={idx} className="flex gap-4 relative">
                          <div className="w-6 h-6 rounded-full bg-emerald-500 border-4 border-[#0B1437] z-10 shrink-0 mt-1"></div>
                          <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex-1">
                            <h4 className="font-bold text-white">{step.step}</h4>
                            <p className="text-sm text-gray-400 mt-1">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-bold mb-3 text-emerald-400">Real-World Applications</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCareer.realWorldApps.map((app, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                          {app}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
                
                {/* Sidebar Details */}
                <div className="space-y-6">
                  <div className="glass-card p-5 border border-white/5">
                    <h4 className="text-sm uppercase tracking-wider font-bold text-gray-400 mb-4">Quick Facts</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 text-green-400 mb-1">
                          <IndianRupee size={16} /> <span className="font-semibold">Average Salary</span>
                        </div>
                        <p className="text-sm text-gray-300 pl-6">{selectedCareer.salary}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-blue-400 mb-1">
                          <TrendingUp size={16} /> <span className="font-semibold">Demand Level</span>
                        </div>
                        <p className="text-sm text-gray-300 pl-6">{selectedCareer.demandLevel}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-orange-400 mb-1">
                          <Briefcase size={16} /> <span className="font-semibold">Work Style</span>
                        </div>
                        <p className="text-sm text-gray-300 pl-6">{selectedCareer.workStyle}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><Sparkles size={16} className="text-yellow-400"/> Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCareer.requiredSkills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs text-white">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2"><GraduationCap size={16} className="text-cyan-400"/> Recommended Courses</h4>
                    <ul className="space-y-2">
                      {selectedCareer.recommendedCourses.map((course, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                          <ChevronRight size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-black/20 flex justify-end gap-4">
              <Link
                to={`/chat?ask=How do I become a ${selectedCareer.title}? What skills should I learn first?`}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl transition-colors flex items-center gap-2"
              >
                Discuss with Mitra AI <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Explore;
