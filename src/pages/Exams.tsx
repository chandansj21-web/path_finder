import React, { useState } from 'react';
import { Calendar as CalendarIcon, Search, AlertCircle } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const EXAMS_DATA = [
  { name: 'JEE Main', type: 'national', date: '04 Apr', desc: 'Engineering entrance for NITs/IIITs. Required for JEE Advanced.', status: 'Admit Card out soon' },
  { name: 'NEET UG', type: 'national', date: '05 May', desc: 'Medical entrance for MBBS/BDS in all colleges across India.', status: 'Registration closing soon' },
  { name: 'KCET', type: 'state', date: '18 Apr', desc: 'Karnataka CET for Engineering, Pharmacy, and Agri in state colleges.', status: 'Registration open' },
  { name: 'CUET UG', type: 'national', date: '15 May', desc: 'Common University Entrance for BA/BSc/BCom in Central Universities.', status: 'Forms available' },
  { name: 'COMEDK UGET', type: 'state', date: '12 May', desc: 'Entrance for private engineering colleges in Karnataka.', status: 'Apply before April' },
  { name: 'NATA', type: 'national', date: '06 Apr', desc: 'National Aptitude Test in Architecture for B.Arch admissions.', status: 'First attempt in April' },
  { name: 'CLAT', type: 'national', date: '01 Dec', desc: 'Common Law Admission Test for National Law Universities (NLUs).', status: 'Next cycle in Dec' },
  { name: 'NDA', type: 'national', date: '21 Apr', desc: 'National Defence Academy exam for Army, Navy, and Air Force.', status: 'Admit cards released' },
  { name: 'SSP Pre-Matric', type: 'scholarship', date: '30 Aug', desc: 'Karnataka State Scholarship Portal for class 1-10 students.', status: 'Portal opening soon' },
  { name: 'SSP Post-Matric', type: 'scholarship', date: '30 Oct', desc: 'Karnataka State Scholarship Portal for PUC and Degree students.', status: 'Apply with caste certificate' },
  { name: 'NMMS', type: 'scholarship', date: '15 Nov', desc: 'National Means cum Merit Scholarship for Class 8 students.', status: 'Preparation time' },
  { name: 'KVPY (INSPIRE)', type: 'scholarship', date: '05 Nov', desc: 'Scholarship for students pursuing basic science degrees.', status: 'Check eligibility' },
];

const Exams = () => {
  const { t } = useLang();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredExams = EXAMS_DATA.filter(exam => 
    (filter === 'all' || exam.type === filter) &&
    (exam.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     exam.desc.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto animate-fade-in pb-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
          {t('ex.title')}
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          {t('ex.subtitle')}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder={t('ex.search')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>
        
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 scrollbar-hide">
          <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-lg whitespace-nowrap ${filter === 'all' ? 'bg-orange-500 text-white' : 'bg-white/5 text-gray-400'}`}>All Exams</button>
          <button onClick={() => setFilter('national')} className={`px-4 py-2 rounded-lg whitespace-nowrap ${filter === 'national' ? 'bg-blue-500 text-white' : 'bg-white/5 text-gray-400'}`}>National (UG)</button>
          <button onClick={() => setFilter('state')} className={`px-4 py-2 rounded-lg whitespace-nowrap ${filter === 'state' ? 'bg-green-500 text-white' : 'bg-white/5 text-gray-400'}`}>State (Karnataka)</button>
          <button onClick={() => setFilter('scholarship')} className={`px-4 py-2 rounded-lg whitespace-nowrap ${filter === 'scholarship' ? 'bg-purple-500 text-white' : 'bg-white/5 text-gray-400'}`}>Scholarships</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExams.map((exam, i) => (
          <div key={i} className="glass-card p-6 border border-white/10 hover:border-orange-500/50 transition-all flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${
                exam.type === 'national' ? 'bg-blue-500/20 text-blue-400' : 
                exam.type === 'state' ? 'bg-green-500/20 text-green-400' : 'bg-purple-500/20 text-purple-400'
              }`}>
                {exam.type}
              </span>
              <div className="bg-white/5 p-2 rounded-lg text-center min-w-[3rem]">
                <p className="text-xs text-gray-400 font-bold">{exam.date.split(' ')[1]}</p>
                <p className="text-lg font-bold text-white">{exam.date.split(' ')[0]}</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2">{exam.name}</h3>
            <p className="text-sm text-gray-400 mb-6 flex-1">{exam.desc}</p>
            
            <div className="mt-auto space-y-4">
              <div className="flex items-center gap-2 text-xs text-orange-400 bg-orange-500/10 p-2 rounded-md border border-orange-500/20">
                <AlertCircle size={14} />
                <span>{exam.status}</span>
              </div>
              <Link 
                to={`/chat?ask=Tell me about the ${exam.name} exam`}
                className="block w-full py-2 bg-white/5 hover:bg-white/10 text-center rounded-lg text-sm font-medium transition-colors border border-white/10"
              >
                {t('ex.ask')}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exams;
