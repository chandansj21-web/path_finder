import React, { useState } from 'react';
import { useLang } from '../contexts/LanguageContext';
import { Flag, Milestone, CheckCircle, BrainCircuit, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const ROADMAPS = [
  { id: 'sde', name: 'Software Developer', icon: <BrainCircuit size={20} /> },
  { id: 'ias', name: 'IAS Officer', icon: <Flag size={20} /> },
  { id: 'doctor', name: 'Doctor (MBBS)', icon: <CheckCircle size={20} /> },
  { id: 'teacher', name: 'Govt Teacher', icon: <BookOpen size={20} /> },
  { id: 'agri', name: 'Agri-Entrepreneur', icon: <Users size={20} /> }
];

const ROADMAP_DATA: Record<string, { steps: { title: string, desc: string, duration: string }[] }> = {
  sde: {
    steps: [
      { title: 'Class 11-12 (PCM)', desc: 'Focus on Math & Physics. Start basic coding (Python/HTML).', duration: '2 Years' },
      { title: 'Entrance Exams', desc: 'Clear JEE Main, KCET, or COMEDK for a good engineering college.', duration: 'April-May' },
      { title: 'B.Tech / BE Degree', desc: 'Enroll in Computer Science or IT. Learn DSA, Web Dev, and build projects.', duration: '4 Years' },
      { title: 'Internships', desc: 'Do internships in 3rd/4th year to gain practical experience.', duration: '3-6 Months' },
      { title: 'Placements & Job', desc: 'Apply through campus or off-campus. Starting salary: ₹4L - ₹15L.', duration: 'Final Year' },
    ]
  },
  ias: {
    steps: [
      { title: 'Class 11-12 (Any Stream)', desc: 'Arts/Humanities is preferred but not mandatory. Build general knowledge.', duration: '2 Years' },
      { title: 'Bachelor\'s Degree', desc: 'Complete any graduation degree. Start reading NCERTs and Newspapers.', duration: '3-4 Years' },
      { title: 'UPSC Prelims', desc: 'Clear the objective type preliminary examination (GS & CSAT).', duration: 'Year 1 Prep' },
      { title: 'UPSC Mains', desc: 'Clear the 9 subjective papers including optional subject.', duration: 'Year 2 Prep' },
      { title: 'Interview & Training', desc: 'Clear the personality test. Training at LBSNAA.', duration: 'Final Stage' },
    ]
  },
  doctor: {
    steps: [
      { title: 'Class 11-12 (PCB)', desc: 'Focus strictly on Biology, Chemistry, and Physics.', duration: '2 Years' },
      { title: 'NEET UG Exam', desc: 'Must clear NEET with high scores to get a Govt Medical College.', duration: 'May' },
      { title: 'MBBS Degree', desc: '4.5 years of rigorous academic and practical medical study.', duration: '4.5 Years' },
      { title: 'Compulsory Internship', desc: '1 year of mandatory hospital internship.', duration: '1 Year' },
      { title: 'NEET PG (Optional)', desc: 'Clear for MD/MS specialization for higher salary.', duration: 'Post MBBS' },
    ]
  },
  teacher: {
    steps: [
      { title: 'Class 12 / PUC', desc: 'Complete Class 12 in any stream.', duration: '2 Years' },
      { title: 'Graduation + B.Ed', desc: 'Complete BA/B.Sc/B.Com and a Bachelor of Education degree.', duration: '3+2 Years' },
      { title: 'TET Exam', desc: 'Clear the Teacher Eligibility Test (CTET or State TET).', duration: '6 Months Prep' },
      { title: 'Govt Recruitment', desc: 'Apply for state or central govt teaching vacancies (KVS, State Board).', duration: 'Variable' },
    ]
  },
  agri: {
    steps: [
      { title: 'Class 11-12 (Science/Agri)', desc: 'Take PCB or Agriculture stream.', duration: '2 Years' },
      { title: 'B.Sc Agriculture', desc: 'Clear ICAR AIEEA or state CET for B.Sc Agri.', duration: '4 Years' },
      { title: 'Modern Farming Skills', desc: 'Learn Hydroponics, Organic Farming, and Tech integration.', duration: 'Ongoing' },
      { title: 'Govt Schemes & Funding', desc: 'Utilize NABARD and state schemes to fund your agribusiness.', duration: 'Business Setup' },
    ]
  }
};

const Roadmap = () => {
  const { t } = useLang();
  const [activeRoadmap, setActiveRoadmap] = useState('sde');
  const data = ROADMAP_DATA[activeRoadmap];

  return (
    <div className="max-w-7xl mx-auto animate-fade-in pb-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
          {t('rd.title')}
        </h1>
        <p className="text-xl text-gray-300">
          {t('rd.subtitle')}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-2 mb-12 overflow-x-auto pb-4 scrollbar-hide">
        {ROADMAPS.map(rm => (
          <button
            key={rm.id}
            onClick={() => setActiveRoadmap(rm.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
              activeRoadmap === rm.id 
              ? 'bg-purple-600 text-white shadow-glow-pink' 
              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {rm.icon}
            {rm.name}
          </button>
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 transform md:-translate-x-1/2 rounded-full"></div>
        
        {data.steps.map((step, i) => (
          <div key={i} className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
            <div className="absolute left-6 md:left-1/2 w-8 h-8 bg-purple-600 rounded-full border-4 border-[#0B1437] transform -translate-x-1/2 flex items-center justify-center z-10 shadow-glow-pink">
              <Milestone size={14} className="text-white" />
            </div>

            <div className="ml-16 md:ml-0 w-full md:w-1/2 px-4 md:px-8">
              <div className="glass-card p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 block">Step {i + 1} • {step.duration}</span>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            </div>
            
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link 
          to={`/chat?ask=Can you give me a detailed study plan to become a ${ROADMAPS.find(r => r.id === activeRoadmap)?.name}?`}
          className="inline-flex px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-all border border-white/20"
        >
          {t('rd.ask')}
        </Link>
      </div>
    </div>
  );
};

export default Roadmap;
