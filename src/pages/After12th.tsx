import React, { useState } from 'react';
import { useLang } from '../contexts/LanguageContext';
import { Beaker, Calculator, Palette, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const After12th = () => {
  const { t } = useLang();
  const [activeStream, setActiveStream] = useState('science-math');

  const STREAMS = [
    { id: 'science-math', name: 'Science (PCM)', icon: <Calculator size={24} /> },
    { id: 'science-bio', name: 'Science (PCB)', icon: <Beaker size={24} /> },
    { id: 'commerce', name: 'Commerce', icon: <Briefcase size={24} /> },
    { id: 'arts', name: 'Arts / Humanities', icon: <Palette size={24} /> },
  ];

  const CAREER_DATA: Record<string, { name: string, careers: any[] }> = {
    'science-math': {
      name: 'Science (PCM)',
      careers: [
        { name: 'Engineering (B.Tech/BE)', exam: 'JEE Main, KCET, COMEDK', govt: 'ISRO, DRDO, PWD', time: '4 Years' },
        { name: 'Architecture (B.Arch)', exam: 'NATA, JEE Main Paper 2', govt: 'Town Planning, DDA', time: '5 Years' },
        { name: 'Commercial Pilot', exam: 'NDA (for IAF), DGCA', govt: 'Air India, IAF', time: '2-3 Years' },
        { name: 'Data Science / BCA', exam: 'CUET, State Exams', govt: 'NIC, Banking IT', time: '3-4 Years' },
      ]
    },
    'science-bio': {
      name: 'Science (PCB)',
      careers: [
        { name: 'Medicine (MBBS/BDS)', exam: 'NEET', govt: 'Govt Hospitals, AIIMS', time: '5.5 Years' },
        { name: 'Agriculture (B.Sc Agri)', exam: 'ICAR CUET, KCET', govt: 'Agricultural Officer, NABARD', time: '4 Years' },
        { name: 'Nursing (B.Sc Nursing)', exam: 'KCET, AIIMS Nursing', govt: 'Govt Hospitals, Military', time: '4 Years' },
        { name: 'Pharmacy (B.Pharm)', exam: 'KCET', govt: 'Drug Inspector', time: '4 Years' },
      ]
    },
    'commerce': {
      name: 'Commerce',
      careers: [
        { name: 'Chartered Accountant (CA)', exam: 'CA Foundation', govt: 'PSUs, Income Tax Dept', time: '4-5 Years' },
        { name: 'B.Com / BBA', exam: 'CUET', govt: 'Banking (IBPS), SSC CGL', time: '3 Years' },
        { name: 'Company Secretary (CS)', exam: 'CSEET', govt: 'Corporate Governance', time: '3-4 Years' },
      ]
    },
    'arts': {
      name: 'Arts / Humanities',
      careers: [
        { name: 'Law (BA LLB)', exam: 'CLAT, LSAT', govt: 'Judge, Public Prosecutor', time: '5 Years' },
        { name: 'Civil Services (BA/B.Sc)', exam: 'UPSC, KPSC', govt: 'IAS, IPS, KAS', time: '3 Years Degree + Prep' },
        { name: 'Design (B.Des)', exam: 'NID DAT, UCEED, NIFT', govt: 'Handloom Boards, NID', time: '4 Years' },
        { name: 'Journalism & Mass Comm', exam: 'CUET', govt: 'Prasar Bharati', time: '3 Years' },
      ]
    }
  };

  const currentStreamData = CAREER_DATA[activeStream];

  return (
    <div className="max-w-7xl mx-auto animate-fade-in pb-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          {t('a12.title')}
        </h1>
        <p className="text-xl text-gray-300">
          {t('a12.subtitle')}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="sticky top-24 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {STREAMS.map(stream => (
              <button
                key={stream.id}
                onClick={() => setActiveStream(stream.id)}
                className={`flex items-center gap-3 px-4 py-4 rounded-xl font-medium transition-all min-w-[140px] lg:min-w-0 ${
                  activeStream === stream.id 
                  ? 'bg-blue-600 text-white shadow-glow-blue' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {stream.icon}
                {stream.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentStreamData?.careers.map((career, index) => (
              <div key={index} className="glass-card p-6 border border-white/10 hover:border-blue-500/50 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{career.name}</h3>
                  <GraduationCap className="text-gray-500 group-hover:text-blue-400" size={24} />
                </div>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold block mb-1">{t('a12.exams')}</span>
                    <p className="text-sm text-gray-300 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">{career.exam}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-green-400 font-semibold block mb-1">{t('a12.govt')}</span>
                    <p className="text-sm text-gray-300 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">{career.govt}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-1">{t('a12.duration')}</span>
                    <p className="text-sm text-gray-300">{career.time}</p>
                  </div>
                </div>

                <Link 
                  to={`/chat?ask=How do I prepare for ${career.name} after 12th?`}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors border border-white/10"
                >
                  <span>{t('a12.askPath')}</span>
                  <ChevronRight size={18} className="text-blue-400" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default After12th;
