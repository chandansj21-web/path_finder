export const interestQuestions = [
  { 
    q: "On a free Sunday, what excites you most?",
    opts: [
      { emoji: "🔧", label: "Fixing my cycle, a broken radio, or farm equipment", trait: "R" },
      { emoji: "🔬", label: "Watching a science experiment or nature documentary", trait: "I" },
      { emoji: "🎨", label: "Drawing, singing, or making reels for social media", trait: "A" },
      { emoji: "🤝", label: "Helping a younger kid with homework or community work", trait: "S" },
    ]
  },
  {
    q: "If you had to lead a project in your village/town, what would it be?",
    opts: [
      { emoji: "🎤", label: "Organizing the entire temple festival or local fair", trait: "E" },
      { emoji: "📊", label: "Managing the accounts and budget for the panchayat", trait: "C" },
      { emoji: "🏗️", label: "Building a new bus shelter or repairing roads", trait: "R" },
      { emoji: "📚", label: "Setting up a small library or teaching center", trait: "S" }
    ]
  },
  {
    q: "What kind of challenges do you enjoy solving?",
    opts: [
      { emoji: "🧩", label: "Puzzles, coding problems, or math equations", trait: "I" },
      { emoji: "🎭", label: "Coming up with a creative story or drama script", trait: "A" },
      { emoji: "💼", label: "Convincing people to buy something from a local shop", trait: "E" },
      { emoji: "📋", label: "Organizing school timetables or keeping records neat", trait: "C" }
    ]
  },
  {
    q: "When you are with your friends, you are usually the one who...",
    opts: [
      { emoji: "🛠️", label: "Fixes things when they break (like a phone or toy)", trait: "R" },
      { emoji: "🤔", label: "Asks 'why' and Googles facts to settle arguments", trait: "I" },
      { emoji: "❤️", label: "Listens to everyone's problems and gives advice", trait: "S" },
      { emoji: "🗣️", label: "Makes all the plans and convinces everyone to join", trait: "E" }
    ]
  },
  {
    q: "Which of these activities sounds like the most fun?",
    opts: [
      { emoji: "🎸", label: "Learning to play a musical instrument or dancing", trait: "A" },
      { emoji: "🗂️", label: "Sorting your files, notes, or helping in a Kirana shop", trait: "C" },
      { emoji: "🌱", label: "Working in the fields, gardening, or being outdoors", trait: "R" },
      { emoji: "🩺", label: "Learning about how the human body works or medicine", trait: "I" }
    ]
  },
  {
    q: "If you won a prize, what would it most likely be for?",
    opts: [
      { emoji: "🏆", label: "Being the class monitor or leading the sports team", trait: "E" },
      { emoji: "📝", label: "Having the neatest handwriting or perfect attendance", trait: "C" },
      { emoji: "🤝", label: "Being the most helpful and kind student in class", trait: "S" },
      { emoji: "🎨", label: "Winning a drawing, singing, or essay competition", trait: "A" }
    ]
  },
  {
    q: "What kind of work environment do you prefer?",
    opts: [
      { emoji: "🌳", label: "Outside, moving around, maybe driving a KSRTC bus or tractor", trait: "R" },
      { emoji: "🏢", label: "In an office, working on computers and analyzing data", trait: "I" },
      { emoji: "🏥", label: "In a hospital or school, working directly with people", trait: "S" },
      { emoji: "🏢", label: "In a bank or office, dealing with numbers and files", trait: "C" }
    ]
  },
  {
    q: "How do you like to learn new things?",
    opts: [
      { emoji: "💡", label: "By coming up with my own unique, creative way to do it", trait: "A" },
      { emoji: "🚀", label: "By starting a small project and figuring out how to sell it", trait: "E" },
      { emoji: "🛠️", label: "By doing it with my hands, building or fixing it directly", trait: "R" },
      { emoji: "📖", label: "By reading books, observing, and understanding the theory", trait: "I" }
    ]
  }
];

export const traitMeta: Record<string, { label: string; careers: { emoji: string; name: string; salary: string }[] }> = {
  R: { 
    label: "Hands-on Builder", 
    careers: [
      { emoji: "⚙️", name: "Mechanical Engineer", salary: "₹4L - ₹12L" },
      { emoji: "🌱", name: "Agriculture / Farming Expert", salary: "₹3L - ₹10L" },
      { emoji: "🏗️", name: "Civil Engineer", salary: "₹3L - ₹10L" }
    ] 
  },
  I: { 
    label: "Curious Investigator", 
    careers: [
      { emoji: "💻", name: "Software Engineer", salary: "₹5L - ₹25L" },
      { emoji: "🩺", name: "Doctor (MBBS)", salary: "₹8L - ₹40L+" },
      { emoji: "🔬", name: "Data Scientist", salary: "₹7L - ₹28L" }
    ] 
  },
  A: { 
    label: "Creative Artist", 
    careers: [
      { emoji: "🎨", name: "UI/UX Designer", salary: "₹5L - ₹18L" },
      { emoji: "📱", name: "Digital Content Creator", salary: "Variable" },
      { emoji: "📐", name: "Architect", salary: "₹4L - ₹15L" }
    ] 
  },
  S: { 
    label: "People Helper", 
    careers: [
      { emoji: "📚", name: "Teacher / Professor", salary: "₹3L - ₹12L" },
      { emoji: "🧑‍⚕️", name: "Nurse / Healthcare Worker", salary: "₹2L - ₹8L" },
      { emoji: "🤝", name: "Social Worker (NGO)", salary: "₹2L - ₹6L" }
    ] 
  },
  E: { 
    label: "Bold Leader", 
    careers: [
      { emoji: "💡", name: "Entrepreneur / Startup Founder", salary: "Variable" },
      { emoji: "⚖️", name: "Lawyer", salary: "₹4L - ₹20L+" },
      { emoji: "👔", name: "Business Manager (MBA)", salary: "₹6L - ₹30L+" }
    ] 
  },
  C: { 
    label: "Organized Planner", 
    careers: [
      { emoji: "📈", name: "Chartered Accountant", salary: "₹8L - ₹25L+" },
      { emoji: "🏦", name: "Bank Officer (PO/Clerk)", salary: "₹4L - ₹10L" },
      { emoji: "📊", name: "Data Analyst", salary: "₹4L - ₹12L" }
    ] 
  },
};
