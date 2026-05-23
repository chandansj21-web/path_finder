import React from 'react';
import { Mic } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const VoiceFAB = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/chat') {
    return null;
  }

  const handleVoiceClick = () => {
    navigate('/chat?voice=1');
  };

  return (
    <button
      onClick={handleVoiceClick}
      className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-gold-500 to-orange-500 text-white shadow-glow-gold hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center group animate-float-slow"
      aria-label="Voice Ask Mitra"
    >
      <Mic size={28} className="group-hover:animate-pulse" />
      <span className="absolute -top-10 bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
        Talk to Mitra AI 🤖
      </span>
    </button>
  );
};

export default VoiceFAB;
