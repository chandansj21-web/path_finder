import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldAlert, GraduationCap, Wrench, Microscope, Book, Palette, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../contexts/LanguageContext';

const After10th = () => {
  const { t } = useLang();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const paths = [
    {
      id: 'science',
      title: 'Science (PCMB/PCMC/PCME)',
      icon: <Microscope className="text-cyan-400" size={32} />,
      description: 'The foundation for STEM. Required if you want to enter Medical, Engineering, Architecture, or pure scientific research. It demands strong analytical and mathematical skills.',
      careers: ['Software Engineer', 'Doctor (MBBS/BDS)', 'Architect', 'Data Scientist', 'Commercial Pilot', 'Pharmacist', 'Agricultural Scientist', 'NDA (Defence)'],
      duration: '2 Years (11th & 12th PUC) followed by 3-5 Years Degree',
      color: 'bg-cyan-500/10 border-cyan-500/30'
    },
    {
      id: 'commerce',
      title: 'Commerce (CEBA/SEBA)',
      icon: <Calculator className="text-gold-400" size={32} />,
      description: 'The backbone of business and economy. Perfect for students interested in finance, stock markets, accounting, corporate law, and business management.',
      careers: ['Chartered Accountant (CA)', 'Bank Manager (IBPS/SBI)', 'Company Secretary (CS)', 'Financial Analyst', 'Marketing Manager', 'Investment Banker', 'Economist'],
      duration: '2 Years (11th & 12th PUC) followed by 3-4 Years Degree',
      color: 'bg-gold-500/10 border-gold-500/30'
    },
    {
      id: 'arts',
      title: 'Arts / Humanities',
      icon: <Palette className="text-pink-400" size={32} />,
      description: 'The study of human society and culture. Highly recommended for students aiming for UPSC (Civil Services), Law, Journalism, Psychology, and Creative Arts.',
      careers: ['IAS/IPS Officer', 'Lawyer / Judge', 'Journalist', 'Psychologist', 'UI/UX Designer', 'Professor', 'Social Worker', 'Digital Marketer'],
      duration: '2 Years (11th & 12th PUC) followed by 3-5 Years Degree',
      color: 'bg-pink-500/10 border-pink-500/30'
    },
    {
      id: 'diploma',
      title: 'Polytechnic Diploma',
      icon: <Book className="text-green-400" size={32} />,
      description: 'A highly practical, skill-oriented alternative to 11th/12th. You learn engineering concepts hands-on and can directly enter the 2nd year of B.Tech (Lateral Entry).',
      careers: ['Junior Engineer (Govt/Private)', 'Loco Pilot (Railways)', 'IT Network Administrator', 'Civil Draftsman', 'Automobile Technician', 'B.Tech Lateral Entry'],
      duration: '3 Years (Direct admission after 10th)',
      color: 'bg-green-500/10 border-green-500/30'
    },
    {
      id: 'iti',
      title: 'ITI (Industrial Training Institute)',
      icon: <Wrench className="text-orange-400" size={32} />,
      description: 'The fastest track to skilled employment. Government ITIs offer heavily subsidized technical training, leading to secure jobs in Railways, Defence, and Manufacturing.',
      careers: ['Railway Technician', 'Electrician', 'Fitter', 'CNC Operator', 'Welder', 'Mechanic (Motor Vehicle)', 'Plumber', 'Govt PSU Employee'],
      duration: '6 Months to 2 Years (Depending on Trade)',
      color: 'bg-orange-500/10 border-orange-500/30'
    }
  ];

  const myths = [
    { myth: 'Science is only for the "smartest" students who score 95%+.', fact: 'Science requires consistent hard work and curiosity, not just high marks. Average scorers who are dedicated often make the best engineers and doctors.' },
    { myth: 'Arts students do not get high-paying jobs.', fact: 'Arts is the most direct path to the highest-paying and most prestigious government roles (like IAS/IPS). It also opens doors to highly lucrative fields like Corporate Law and Design.' },
    { myth: 'ITI & Diploma are only for students who fail or perform poorly.', fact: 'ITI and Diploma are highly respected, practical pathways. A skilled ITI graduate can get a secure Railway/Defence job and start earning years before a standard degree student.' },
    { myth: 'Commerce is only about math.', fact: 'Commerce is about logic, economics, and business laws. While basic calculation helps, you do not need advanced calculus to become a successful CA or Business Manager.' },
    { myth: 'Once I choose a stream after 10th, I can never change my career.', fact: 'While shifting from Arts to Science for college is restricted, shifting from Science to Commerce/Arts is very common. Many Science students later become Lawyers, IAS officers, or Business Managers.' }
  ];

  const toggleCard = (id: string) => {
    if (expandedCard === id) setExpandedCard(null);
    else setExpandedCard(id);
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
          {t('a10.title')}
        </h1>
        <p className="text-xl text-gray-300">
          {t('a10.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {paths.map((path) => (
          <div 
            key={path.id} 
            className={`glass-card p-6 border transition-all duration-300 cursor-pointer hover:-translate-y-1 ${path.color} ${expandedCard === path.id ? 'ring-2 ring-white/50' : ''}`}
            onClick={() => toggleCard(path.id)}
          >
            <div className="flex justify-between items-start mb-4">
              {path.icon}
              <div className="text-gray-400">
                {expandedCard === path.id ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{path.description}</p>
            
            {expandedCard === path.id && (
              <div className="pt-4 border-t border-white/10 mt-4 animate-fade-in">
                <p className="text-sm font-semibold text-gray-400 mb-2">{t('a10.duration')}</p>
                <p className="text-sm mb-4">{path.duration}</p>
                
                <p className="text-sm font-semibold text-gray-400 mb-2">{t('a10.topCareers')}</p>
                <div className="flex flex-wrap gap-2">
                  {path.careers.map((c, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs">
                      {c}
                    </span>
                  ))}
                </div>
                
                <Link to={`/chat?ask=Tell me more about ${path.title} after 10th`} className="mt-6 block text-center py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium">
                  {t('a10.askMitra')}
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* For Parents Section */}
      <div className="glass-card p-8 md:p-12 relative overflow-hidden mb-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
        
        <div className="flex items-center gap-4 mb-8">
          <ShieldAlert size={40} className="text-gold-400" />
          <h2 className="text-3xl font-display font-bold">{t('a10.parentsTitle')}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {myths.map((m, i) => (
            <div key={i} className="bg-black/30 p-6 rounded-xl border border-white/5">
              <p className="text-red-400 font-semibold mb-2">{t('a10.myth')} {m.myth}</p>
              <p className="text-green-400 font-medium text-sm leading-relaxed">{t('a10.fact')} {m.fact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default After10th;
