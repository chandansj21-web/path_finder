import React, { useState, useEffect, useRef } from 'react';
import { useLang, langMeta } from '../contexts/LanguageContext';
import { Send, Bot, User, Mic, MicOff, Volume2, VolumeX, StopCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const LANG_CODES = {
  en: 'en-IN',
  hi: 'hi-IN',
  kn: 'kn-IN',
  ta: 'ta-IN'
};

const SUGGESTIONS = [
  "Which stream should I choose after 10th?",
  "How to crack KCET exam?",
  "Are there scholarships for girls in Karnataka?",
  "What are the best ITI courses?",
];

const getOfflineResponse = (inputText: string): string => {
  const query = inputText.toLowerCase();
  
  if (query.includes('10') || query.includes('tenth') || query.includes('after 10')) {
    return `Namaskara! Choosing your path after 10th standard is a very exciting journey! Here are the 4 main paths in Karnataka:

1. **PUC (Pre-University Course)**: 
   - *Science Stream (PCMB/PCMC)*: Best for Engineering, Medical, B.Sc., or Computer Applications.
   - *Commerce Stream (CEBA/SEBA)*: Ideal for Chartered Accountancy (CA), Business Administration (BBA), or Commerce (B.Com).
   - *Arts Stream*: Perfect for IAS/IPS preparation, Journalism, Law, or Literature.
2. **Diploma in Engineering (3 years)**: Practical technical learning in fields like CS, Mechanical, or Civil. Leads directly to job opportunities or 2nd-year engineering entry (Lateral Entry).
3. **ITI Courses (1-2 years)**: Skills-focused trade courses like Electrician, Plumber, or Fitter. Extremely good for immediate local employment.
4. **Paramedical Courses**: Short courses for healthcare assistant roles.

What subjects do you enjoy studying the most? I can help you pick the right stream! 🎓

[YT: career options after 10th standard in karnataka]`;
  }
  
  if (query.includes('12') || query.includes('twelfth') || query.includes('after 12')) {
    return `Choosing a path after 12th standard is a crucial step for your professional future! 

* **If you took Science**:
  - *Engineering (BE/B.Tech)*: Admissions via KCET/COMEDK.
  - *Medical (MBBS/BDS/BAMS)*: Admissions via NEET exam.
  - *Pure Sciences*: B.Sc. in Physics, Chemistry, Mathematics, or Biotechnology.
  - *Computer Applications*: BCA or B.Sc. CS.
* **If you took Commerce**:
  - *B.Com / BBA*: Great foundation for MBA or corporate finance.
  - *Professional Certifications*: CA (Chartered Accountancy), CS (Company Secretary), or CMA.
* **If you took Arts**:
  - *BA / BSW / BFA*: For languages, sociology, social work, or fine arts.
  - *Law (BA LLB)*: Integrated 5-year professional program.

What stream did you choose in your PUC? Let me know, and I will recommend colleges near you! 🏛️

[YT: what to do after 12th standard in india]`;
  }

  if (query.includes('kcet') || query.includes('cet') || query.includes('exam')) {
    return `KCET (Karnataka Common Entrance Test) is extremely important for securing a government-quota engineering or agriculture seat in Karnataka!

**Mitra's Top 3 Tips to Crack KCET:**
1. **Master the PU Syllabus**: 100% of the questions come from the 1st and 2nd PUC syllabus. Clear your concepts!
2. **Practice Speed & Timing**: You have 60 questions in 80 minutes for each subject. Practice previous years' papers with a timer!
3. **Formula & Shortcut Notes**: Create short formula sheets for Mathematics and Physics, and name reactions for Chemistry.

Would you like some recommendations on free local YouTube channels to study for KCET? 📚

[YT: how to prepare for kcet exam in karnataka]`;
  }

  if (query.includes('scholarship') || query.includes('girl') || query.includes('money') || query.includes('free')) {
    return `Yes! There are fantastic government and private scholarships specifically designed to help students, especially girls and rural scholars in Karnataka:

1. **SSP Scholarship (State Scholarship Portal)**: Post-matric scholarship for SC/ST/OBC/Minority students.
2. **Prathibha Puraskar**: For high scorers in 10th/12th exams.
3. **Vidyasiri Scheme**: Hostel and food support for rural students.
4. **LIC Golden Jubilee Scholarship**: For economically weaker sections.
5. **Private Corporate Scholarships**: Schemes by companies like Santoor (for girls), Jindal, and Infosys.

Never let financial concerns stop your education. We can find a way! 🌟

[YT: best scholarships for students in karnataka]`;
  }

  return `Namaskara! I am Mitra (मित्र / ಮಿತ್ರ), your career counselor friend. 

I am currently running in **Offline Demonstration Mode** because the configured API key has depleted its quota or is restricted. 

To help you explore, I can answer questions about:
1. 🎓 **Options after 10th standard** (PUC streams, ITI, Diploma)
2. 🏛️ **Options after 12th standard** (Degrees, Engineering, Commerce, Arts)
3. 📝 **State exams like KCET or competitive tests**
4. 💰 **Scholarships & financial help**

*To unlock full AI conversations, you can get a free API key from Google AI Studio and put it in your \`.env\` file.* 

What would you like to explore today? 🚀

[YT: career guidance for rural students]`;
};

const Chat = () => {
  const { lang, t } = useLang();
  const location = useLocation();
  const navigate = useNavigate();
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [isOffline, setIsOffline] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis>(window.speechSynthesis);

  // Initialize Speech Recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      
      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
        // We could auto-send here, but letting the user review is better
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error("Speech recognition error", event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  // Handle URL Params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const askParam = params.get('ask');
    const voiceParam = params.get('voice');

    if (askParam) {
      sendMessage(askParam);
      // Clean up URL
      navigate('/chat', { replace: true });
    }

    if (voiceParam === '1' && recognitionRef.current) {
      toggleListen();
      navigate('/chat', { replace: true });
    }
  }, [location]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const toggleListen = () => {
    if (!recognitionRef.current) return;
    
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      // Stop speaking if currently speaking
      if (isSpeaking) stopSpeaking();
      
      recognitionRef.current.lang = LANG_CODES[lang] || 'en-IN';
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const speakText = (text: string) => {
    if (!autoSpeak) return;
    stopSpeaking();
    
    // Strip markdown and [YT: ...] tags for speech
    const cleanText = text.replace(/\[YT:.*?\]/g, '').replace(/[*_#]/g, '');
    
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = LANG_CODES[lang] || 'en-IN';
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    synthRef.current.speak(utterance);
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  const parseMessageContent = (content: string) => {
    const ytMatch = content.match(/\[YT:\s*(.*?)\]/);
    let cleanContent = content;
    let ytQuery = null;
    
    if (ytMatch) {
      cleanContent = content.replace(ytMatch[0], '').trim();
      ytQuery = ytMatch[1] === 'none' ? null : ytMatch[1];
    }
    
    return { cleanContent, ytQuery };
  };

  const sendMessage = async (textToUse?: string) => {
    const text = textToUse || input;
    if (!text.trim()) return;

    // Stop speaking before sending new msg
    stopSpeaking();

    const newMessages: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('NO_API_KEY');
      }

      const LANGUAGE_NAMES = {
        en: 'English',
        hi: 'Hindi',
        kn: 'Kannada',
        ta: 'Tamil'
      };

      const systemPrompt = `You are Mitra (मित्र / ಮಿತ್ರ — "friend"), a warm, encouraging career counselor for rural Indian students aged 14–18, especially from Karnataka.
ALWAYS reply in ${LANGUAGE_NAMES[lang] || 'English'} using the native script (never transliterate).
Use simple words and rural Indian examples (compare coding to crop planning, etc.).
Never make a student feel their background is a limit.
Be brief (4–8 short sentences) unless asked for detail. Use bullets + emojis.
When recommending a career, include: 1) What it is 2) How to get there from current class 3) Salary range in INR 4) Govt vs Private options 5) Local colleges near Mysuru/Karnataka 6) Free Indian YouTube channels.
CRITICAL OUTPUT FORMAT: At the very end of every reply append ONE line: [YT: <english search query, max 6 words>]
Examples: [YT: what is JEE main exam]. If no concept video helps: [YT: none]`;

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: 'gemini-3.5-flash',
        systemInstruction: systemPrompt
      });

      const geminiHistory = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      const chat = model.startChat({
        history: geminiHistory,
        generationConfig: {
          temperature: 0.2,
          topP: 0.7,
          maxOutputTokens: 1024,
        }
      });

      const result = await chat.sendMessage(text);
      const aiReply = result.response.text();
      
      setMessages([...newMessages, { role: 'assistant', content: aiReply }]);
      setIsOffline(false);
      
      if (autoSpeak) {
        speakText(aiReply);
      }
      
    } catch (error: any) {
      console.error("Error talking to Mitra:", error);
      
      const errorMessage = error.message || "";
      const isApiKeyIssue = errorMessage.includes("API_KEY") || 
                           errorMessage.includes("403") || 
                           errorMessage.includes("429") || 
                           errorMessage.includes("quota") || 
                           errorMessage.includes("denied") ||
                           errorMessage.includes("not found") ||
                           errorMessage.includes("completions");

      if (isApiKeyIssue) {
        setIsOffline(true);
        const offlineReply = getOfflineResponse(text);
        setMessages([...newMessages, { role: 'assistant', content: offlineReply }]);
        if (autoSpeak) {
          speakText(offlineReply);
        }
      } else {
        setMessages([...newMessages, { role: 'assistant', content: `Oops! My network seems a bit weak. (Error: ${error.message}). [YT: none]` }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-8rem)] flex flex-col glass-card border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl">
      
      {/* Header */}
      <div className="bg-white/5 border-b border-white/10 p-4 flex items-center justify-between z-10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-400 to-orange-500 flex items-center justify-center p-0.5 animate-pulse-glow">
            <div className="w-full h-full bg-navy-900 rounded-full flex items-center justify-center">
              <Bot className="text-gold-400" size={24} />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-display font-bold text-white">Mitra AI</h2>
            <p className="text-xs text-cyan-400 font-medium tracking-wide uppercase">Your Career Friend</p>
          </div>
        </div>
        
        {/* Voice Output Toggle */}
        <div className="flex items-center gap-2">
          {isSpeaking && (
            <button onClick={stopSpeaking} className="p-2 text-red-400 hover:bg-white/10 rounded-full transition-colors animate-pulse">
              <StopCircle size={20} />
            </button>
          )}
          <button 
            onClick={() => { setAutoSpeak(!autoSpeak); if(isSpeaking) stopSpeaking(); }}
            className={`p-2 rounded-full transition-colors ${autoSpeak ? 'text-gold-400 bg-gold-400/10' : 'text-gray-500 hover:bg-white/5'}`}
            title={autoSpeak ? "Voice Output On" : "Voice Output Off"}
          >
            {autoSpeak ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
        </div>
      </div>

      {/* Offline Mode Banner */}
      {isOffline && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2.5 text-xs sm:text-sm text-amber-300 flex items-center justify-between gap-4 z-10 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-base">⚠️</span>
            <span>
              <strong>Demo Mode</strong>: API key quota is depleted. 
              <a 
                href="https://aistudio.google.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline ml-1 font-semibold hover:text-amber-200 transition-colors"
              >
                Get a 100% Free Gemini API Key here
              </a> and paste in `.env` to unlock full AI counselor.
            </span>
          </div>
          <button 
            onClick={() => setIsOffline(false)} 
            className="text-amber-400 hover:text-amber-200 transition-colors font-bold text-base px-1"
          >
            &times;
          </button>
        </div>
      )}

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar relative">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fade-in opacity-80">
            <Bot size={64} className="text-white/20" />
            <div className="max-w-sm">
              <h3 className="text-2xl font-display font-bold text-white mb-2">{t('chat.namaskara')}</h3>
              <p className="text-gray-400">{t('chat.intro')}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 w-full max-w-lg">
              {[t('chat.s1'), t('chat.s2'), t('chat.s3'), t('chat.s4')].map((s, idx) => (
                <button 
                  key={idx} 
                  onClick={() => sendMessage(s)}
                  className="px-4 py-2 bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 rounded-xl text-sm text-gray-300 hover:text-cyan-400 text-left transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {messages.map((msg, idx) => {
          const { cleanContent, ytQuery } = parseMessageContent(msg.content);
          
          return (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-scale-in`}>
              <div className={`max-w-[85%] md:max-w-[75%] rounded-2xl p-4 ${
                msg.role === 'user' 
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-br-none shadow-lg' 
                  : 'bg-white/10 border border-white/10 text-gray-100 rounded-bl-none shadow-xl'
              }`}>
                {msg.role === 'assistant' && (
                  <div className="prose prose-invert prose-p:leading-relaxed prose-pre:bg-black/50 prose-a:text-cyan-400 max-w-none">
                    <ReactMarkdown>{cleanContent}</ReactMarkdown>
                  </div>
                )}
                {msg.role === 'user' && (
                  <p className="leading-relaxed">{cleanContent}</p>
                )}
                
                {/* Embedded YouTube Video */}
                {msg.role === 'assistant' && ytQuery && ytQuery.toLowerCase() !== 'none' && (
                  <div className="mt-4 rounded-xl overflow-hidden border border-white/20 shadow-2xl relative aspect-video bg-black/50">
                    <iframe 
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(ytQuery)}`}
                      title="YouTube Search Embed"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 border border-white/10 text-white rounded-2xl rounded-bl-none p-4 flex gap-2">
              <div className="w-2 h-2 bg-gold-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-navy-900 border-t border-white/10 z-10">
        <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex gap-2">
          
          <button 
            type="button" 
            onClick={toggleListen}
            className={`p-4 rounded-xl transition-all flex-shrink-0 ${
              isListening ? 'bg-red-500 hover:bg-red-600 animate-pulse' : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white'
            }`}
          >
            {isListening ? <MicOff size={24} className="text-white" /> : <Mic size={24} />}
          </button>
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isListening ? t('chat.listening') : t('chat.input')}
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-500"
            disabled={isListening}
          />
          
          <button 
            type="submit" 
            disabled={!input.trim() || isLoading}
            className="p-4 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 disabled:hover:bg-cyan-600 rounded-xl transition-colors flex-shrink-0"
          >
            <Send size={24} className="text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
