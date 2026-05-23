export interface Career {
  id: string;
  title: string;
  category: string;
  overview: string;
  requiredSkills: string[];
  recommendedCourses: string[];
  futureScope: string;
  salary: string;
  demandLevel: 'High' | 'Very High' | 'Medium';
  workStyle: 'Remote' | 'Office' | 'Field' | 'Hybrid';
  favoriteSubjects: string[];
  beginnerRoadmap: { step: string; desc: string }[];
  realWorldApps: string[];
  higherStudyOptions: string[];
  icon: string;
  color: string;
}

export const ADVANCED_CAREERS: Career[] = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    category: 'tech',
    overview: 'Design, build, and maintain software systems, applications, and web services. A core role in the tech industry driving digital transformation globally.',
    requiredSkills: ['Algorithms', 'Data Structures', 'Java/C++', 'System Design', 'Git'],
    recommendedCourses: ['B.Tech Computer Science', 'BCA', 'B.Sc IT'],
    futureScope: 'Evergreen demand across all sectors as every business becomes digital.',
    salary: '₹5L - ₹25L / year',
    demandLevel: 'High',
    workStyle: 'Hybrid',
    favoriteSubjects: ['Math', 'Computer Science'],
    beginnerRoadmap: [
      { step: 'Learn basics', desc: 'Start with Python or C++.' },
      { step: 'DSA', desc: 'Master Data Structures and Algorithms.' },
      { step: 'Projects', desc: 'Build 2-3 real-world applications.' },
      { step: 'Internship', desc: 'Apply for entry-level SDE roles.' }
    ],
    realWorldApps: ['WhatsApp', 'Google Search', 'Banking Apps'],
    higherStudyOptions: ['M.Tech in CS', 'MS in USA/Europe'],
    icon: '💻',
    color: 'bg-blue-600'
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    category: 'tech',
    overview: 'Develop intelligent algorithms and neural networks that allow machines to learn and mimic human intelligence.',
    requiredSkills: ['Python', 'Machine Learning', 'TensorFlow', 'Linear Algebra', 'NLP'],
    recommendedCourses: ['B.Tech AI & Data Science', 'B.Tech CS'],
    futureScope: 'The fastest-growing field globally, revolutionizing everything from healthcare to autonomous driving.',
    salary: '₹8L - ₹35L / year',
    demandLevel: 'Very High',
    workStyle: 'Remote',
    favoriteSubjects: ['Math', 'Computer Science', 'Statistics'],
    beginnerRoadmap: [
      { step: 'Math foundation', desc: 'Learn Calculus and Linear Algebra.' },
      { step: 'Python Mastery', desc: 'Learn NumPy, Pandas, Scikit-Learn.' },
      { step: 'Deep Learning', desc: 'Build simple neural networks.' },
      { step: 'Portfolio', desc: 'Participate in Kaggle competitions.' }
    ],
    realWorldApps: ['ChatGPT', 'Self-driving Cars', 'Face Recognition'],
    higherStudyOptions: ['MS in Artificial Intelligence', 'PhD in Deep Learning'],
    icon: '🤖',
    color: 'bg-indigo-600'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    category: 'tech',
    overview: 'Analyze vast amounts of complex data to find patterns, derive insights, and help companies make data-driven decisions.',
    requiredSkills: ['Python/R', 'SQL', 'Statistics', 'Data Visualization', 'Machine Learning'],
    recommendedCourses: ['B.Tech Data Science', 'B.Sc Statistics', 'BCA'],
    futureScope: 'Data is the new oil. Massive demand in finance, e-commerce, and healthcare.',
    salary: '₹7L - ₹28L / year',
    demandLevel: 'Very High',
    workStyle: 'Hybrid',
    favoriteSubjects: ['Math', 'Statistics', 'Economics'],
    beginnerRoadmap: [
      { step: 'Statistics', desc: 'Learn probability and hypothesis testing.' },
      { step: 'SQL', desc: 'Master database querying.' },
      { step: 'Visualization', desc: 'Learn Tableau or PowerBI.' },
      { step: 'Modeling', desc: 'Build predictive ML models.' }
    ],
    realWorldApps: ['Netflix Recommendations', 'Amazon Product Suggestions'],
    higherStudyOptions: ['MS in Data Science', 'MBA in Business Analytics'],
    icon: '📊',
    color: 'bg-cyan-600'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Analyst',
    category: 'tech',
    overview: 'Protect an organization\'s computer networks and systems from cyber attacks, hackers, and data breaches.',
    requiredSkills: ['Networking', 'Ethical Hacking', 'Linux', 'Cryptography', 'Risk Analysis'],
    recommendedCourses: ['B.Tech Cyber Security', 'BCA', 'CEH Certification'],
    futureScope: 'Critical necessity for every company; severe shortage of skilled professionals globally.',
    salary: '₹6L - ₹20L / year',
    demandLevel: 'Very High',
    workStyle: 'Hybrid',
    favoriteSubjects: ['Computer Science', 'Physics'],
    beginnerRoadmap: [
      { step: 'Networking', desc: 'Understand TCP/IP, DNS, Firewalls.' },
      { step: 'OS', desc: 'Master Linux command line.' },
      { step: 'Certifications', desc: 'Get CompTIA Security+.' },
      { step: 'Bug Bounty', desc: 'Practice on HackerOne.' }
    ],
    realWorldApps: ['Banking Security', 'Military Networks', 'VPNs'],
    higherStudyOptions: ['M.Tech in Information Security'],
    icon: '🛡️',
    color: 'bg-slate-600'
  },
  {
    id: 'cloud-engineer',
    title: 'Cloud Engineer',
    category: 'tech',
    overview: 'Design, implement, and manage scalable cloud infrastructure on platforms like AWS, Azure, or Google Cloud.',
    requiredSkills: ['AWS/Azure', 'Docker', 'Kubernetes', 'Linux', 'Terraform'],
    recommendedCourses: ['B.Tech CS', 'AWS Certifications'],
    futureScope: 'Almost all companies are migrating to the cloud, creating massive infrastructure demand.',
    salary: '₹7L - ₹25L / year',
    demandLevel: 'High',
    workStyle: 'Remote',
    favoriteSubjects: ['Computer Science'],
    beginnerRoadmap: [
      { step: 'OS & Networks', desc: 'Learn Linux and basic networking.' },
      { step: 'Cloud Basics', desc: 'Create a free AWS account and explore.' },
      { step: 'Containers', desc: 'Learn Docker basics.' },
      { step: 'Certification', desc: 'Pass AWS Solutions Architect.' }
    ],
    realWorldApps: ['Netflix Streaming Infrastructure', 'Cloud Storage'],
    higherStudyOptions: ['Advanced Cloud Architecture Certifications'],
    icon: '☁️',
    color: 'bg-sky-500'
  },
  {
    id: 'web-developer',
    title: 'Web Developer',
    category: 'tech',
    overview: 'Build interactive, responsive, and high-performance websites and web applications.',
    requiredSkills: ['HTML/CSS', 'JavaScript', 'React/Vue', 'Node.js', 'Databases'],
    recommendedCourses: ['BCA', 'B.Tech CS', 'Web Dev Bootcamps'],
    futureScope: 'High demand for specialized frontend (React) and full-stack developers.',
    salary: '₹4L - ₹18L / year',
    demandLevel: 'High',
    workStyle: 'Remote',
    favoriteSubjects: ['Computer Science', 'Art/Design'],
    beginnerRoadmap: [
      { step: 'Basics', desc: 'HTML, CSS, JavaScript.' },
      { step: 'Framework', desc: 'Learn React.js.' },
      { step: 'Backend', desc: 'Learn Node.js and MongoDB.' },
      { step: 'Portfolio', desc: 'Build an e-commerce clone.' }
    ],
    realWorldApps: ['Amazon.com', 'Twitter Web', 'PathFinder App'],
    higherStudyOptions: ['MCA', 'Full Stack Specialized Programs'],
    icon: '🌐',
    color: 'bg-emerald-500'
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Developer',
    category: 'tech',
    overview: 'Create mobile applications for iOS and Android devices using native or cross-platform frameworks.',
    requiredSkills: ['Swift/Kotlin', 'Flutter/React Native', 'UI/UX Principles', 'APIs'],
    recommendedCourses: ['BCA', 'B.Tech CS'],
    futureScope: 'Mobile-first world ensures continuous demand for high-quality app developers.',
    salary: '₹5L - ₹20L / year',
    demandLevel: 'High',
    workStyle: 'Hybrid',
    favoriteSubjects: ['Computer Science'],
    beginnerRoadmap: [
      { step: 'Choose Platform', desc: 'Pick Flutter for cross-platform.' },
      { step: 'Dart Basics', desc: 'Learn the Dart language.' },
      { step: 'UI Building', desc: 'Recreate popular app UIs.' },
      { step: 'Publishing', desc: 'Launch an app on Play Store.' }
    ],
    realWorldApps: ['Instagram', 'Uber', 'Spotify'],
    higherStudyOptions: ['MCA'],
    icon: '📱',
    color: 'bg-purple-500'
  },
  {
    id: 'game-developer',
    title: 'Game Developer',
    category: 'tech',
    overview: 'Design and program interactive video games for consoles, PCs, and mobile devices.',
    requiredSkills: ['C# / C++', 'Unity / Unreal Engine', '3D Math', 'Physics Simulation'],
    recommendedCourses: ['B.Tech CS', 'B.Sc Gaming & Animation'],
    futureScope: 'Gaming is larger than the movie and music industries combined. Huge growth in AR/VR.',
    salary: '₹4L - ₹15L / year',
    demandLevel: 'Medium',
    workStyle: 'Office',
    favoriteSubjects: ['Math', 'Physics', 'Computer Science'],
    beginnerRoadmap: [
      { step: 'Engine Basics', desc: 'Download Unity and learn interface.' },
      { step: 'Scripting', desc: 'Learn C# basics.' },
      { step: 'First Game', desc: 'Build a simple 2D platformer.' },
      { step: '3D Mechanics', desc: 'Learn physics and lighting.' }
    ],
    realWorldApps: ['BGMI', 'Minecraft', 'VR Training Simulators'],
    higherStudyOptions: ['MS in Game Design', 'AR/VR Specialization'],
    icon: '🎮',
    color: 'bg-rose-500'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Designer',
    category: 'tech',
    overview: 'Design intuitive, beautiful, and user-centric interfaces for digital products.',
    requiredSkills: ['Figma', 'User Research', 'Wireframing', 'Color Theory', 'Prototyping'],
    recommendedCourses: ['B.Des', 'Any Degree + UI/UX Certification'],
    futureScope: 'Crucial for product success. Great design is a key differentiator for modern startups.',
    salary: '₹5L - ₹18L / year',
    demandLevel: 'High',
    workStyle: 'Remote',
    favoriteSubjects: ['Art', 'Psychology', 'Computer Science'],
    beginnerRoadmap: [
      { step: 'Tools', desc: 'Master Figma.' },
      { step: 'Theory', desc: 'Study typography, colors, layout.' },
      { step: 'Case Study', desc: 'Redesign a popular app.' },
      { step: 'Portfolio', desc: 'Create a Behance portfolio.' }
    ],
    realWorldApps: ['App Interfaces', 'Website Layouts', 'Dashboards'],
    higherStudyOptions: ['M.Des', 'HCI (Human-Computer Interaction)'],
    icon: '🎨',
    color: 'bg-pink-500'
  },
  {
    id: 'electronics-engineer',
    title: 'Electronics Engineer',
    category: 'engineering',
    overview: 'Design and develop electronic circuits, devices, and communication systems.',
    requiredSkills: ['Circuit Design', 'Microcontrollers', 'C/C++', 'PCB Design'],
    recommendedCourses: ['B.Tech ECE (Electronics & Communication)'],
    futureScope: 'Growth driven by IoT, 5G, EV industry, and hardware manufacturing in India.',
    salary: '₹4L - ₹14L / year',
    demandLevel: 'Medium',
    workStyle: 'Office',
    favoriteSubjects: ['Physics', 'Math'],
    beginnerRoadmap: [
      { step: 'Basics', desc: 'Master Ohm\'s law and circuit theory.' },
      { step: 'Microcontrollers', desc: 'Program an Arduino.' },
      { step: 'PCB', desc: 'Learn KiCad or Altium.' },
      { step: 'Projects', desc: 'Build a smart home device.' }
    ],
    realWorldApps: ['Smartphones', 'Televisions', 'Medical Devices'],
    higherStudyOptions: ['M.Tech in VLSI', 'MS in Electronics'],
    icon: '🔌',
    color: 'bg-yellow-600'
  },
  {
    id: 'vlsi-engineer',
    title: 'VLSI Engineer',
    category: 'engineering',
    overview: 'Design ultra-complex microchips and processors that power modern electronics.',
    requiredSkills: ['Verilog/VHDL', 'Digital Logic', 'CMOS Design', 'Computer Architecture'],
    recommendedCourses: ['B.Tech ECE', 'M.Tech VLSI'],
    futureScope: 'Massive global semiconductor push. High salaries for specialized chip designers.',
    salary: '₹8L - ₹25L / year',
    demandLevel: 'High',
    workStyle: 'Office',
    favoriteSubjects: ['Physics', 'Math'],
    beginnerRoadmap: [
      { step: 'Digital Logic', desc: 'Master gates and flip-flops.' },
      { step: 'Verilog', desc: 'Learn Hardware Description Language.' },
      { step: 'FPGA', desc: 'Implement logic on FPGA boards.' },
      { step: 'M.Tech prep', desc: 'Prepare for GATE ECE.' }
    ],
    realWorldApps: ['Intel/AMD Processors', 'Apple Silicon Chips', 'GPUs'],
    higherStudyOptions: ['M.Tech in VLSI Design', 'PhD in Semiconductors'],
    icon: '🔬',
    color: 'bg-amber-600'
  },
  {
    id: 'embedded-engineer',
    title: 'Embedded Systems Engineer',
    category: 'engineering',
    overview: 'Write low-level software that controls specific hardware devices (cars, appliances, robots).',
    requiredSkills: ['C/C++', 'Microprocessors', 'RTOS', 'Hardware Debugging'],
    recommendedCourses: ['B.Tech ECE', 'B.Tech CS'],
    futureScope: 'Booming due to Electric Vehicles (EVs), Drones, and IoT devices.',
    salary: '₹5L - ₹18L / year',
    demandLevel: 'High',
    workStyle: 'Hybrid',
    favoriteSubjects: ['Physics', 'Computer Science'],
    beginnerRoadmap: [
      { step: 'C Programming', desc: 'Master pointers and memory.' },
      { step: 'Microcontrollers', desc: 'Work with STM32 or Raspberry Pi.' },
      { step: 'Protocols', desc: 'Learn I2C, SPI, UART.' },
      { step: 'RTOS', desc: 'Learn FreeRTOS concepts.' }
    ],
    realWorldApps: ['Car Engine Control', 'Smartwatches', 'Drones'],
    higherStudyOptions: ['M.Tech Embedded Systems'],
    icon: '⚙️',
    color: 'bg-slate-500'
  },
  {
    id: 'robotics-engineer',
    title: 'Robotics Engineer',
    category: 'engineering',
    overview: 'Design, build, and program robots for manufacturing, medical, and space applications.',
    requiredSkills: ['ROS', 'Kinematics', 'Python/C++', 'Control Systems', 'Computer Vision'],
    recommendedCourses: ['B.Tech Robotics/Mechatronics', 'B.Tech Mechanical/ECE'],
    futureScope: 'Automation is taking over manufacturing, logistics, and surgery.',
    salary: '₹6L - ₹20L / year',
    demandLevel: 'High',
    workStyle: 'Field',
    favoriteSubjects: ['Physics', 'Math', 'Computer Science'],
    beginnerRoadmap: [
      { step: 'Mechanics', desc: 'Understand basic physics and motors.' },
      { step: 'Arduino', desc: 'Build a line-following robot.' },
      { step: 'ROS', desc: 'Learn Robot Operating System.' },
      { step: 'Vision', desc: 'Integrate OpenCV for object tracking.' }
    ],
    realWorldApps: ['Factory Arms', 'Surgical Robots', 'Mars Rovers'],
    higherStudyOptions: ['MS in Robotics', 'PhD in Autonomous Systems'],
    icon: '🦾',
    color: 'bg-zinc-600'
  },
  {
    id: 'mechanical',
    title: 'Mechanical Engineer',
    category: 'engineering',
    overview: 'Design, analyze, and manufacture mechanical systems, engines, and machines.',
    requiredSkills: ['CAD/CAM', 'Thermodynamics', 'Fluid Mechanics', 'Material Science'],
    recommendedCourses: ['B.Tech Mechanical Engineering'],
    futureScope: 'Evolving heavily into EVs, renewable energy, and advanced manufacturing.',
    salary: '₹4L - ₹12L / year',
    demandLevel: 'Medium',
    workStyle: 'Field',
    favoriteSubjects: ['Physics', 'Math'],
    beginnerRoadmap: [
      { step: 'Physics', desc: 'Master mechanics and thermodynamics.' },
      { step: 'Software', desc: 'Learn AutoCAD and SolidWorks.' },
      { step: 'Projects', desc: 'Participate in BAJA or Supra SAE.' },
      { step: 'Internship', desc: 'Work at a manufacturing plant.' }
    ],
    realWorldApps: ['Automobiles', 'Aircraft Engines', 'HVAC Systems'],
    higherStudyOptions: ['M.Tech in Thermal/Design', 'MS in Mechatronics'],
    icon: '⚙️',
    color: 'bg-orange-700'
  },
  {
    id: 'civil',
    title: 'Civil Engineer',
    category: 'engineering',
    overview: 'Design, build, and maintain physical infrastructure like roads, bridges, and buildings.',
    requiredSkills: ['Structural Analysis', 'AutoCAD', 'Project Management', 'Surveying'],
    recommendedCourses: ['B.Tech Civil Engineering'],
    futureScope: 'Constant demand for infrastructure development and smart city projects.',
    salary: '₹3L - ₹10L / year',
    demandLevel: 'Medium',
    workStyle: 'Field',
    favoriteSubjects: ['Physics', 'Math'],
    beginnerRoadmap: [
      { step: 'Drafting', desc: 'Learn AutoCAD perfectly.' },
      { step: 'Structural', desc: 'Learn STAAD.Pro or Etabs.' },
      { step: 'Site Visit', desc: 'Spend time on construction sites.' },
      { step: 'Govt Exams', desc: 'Prepare for SSC JE or GATE.' }
    ],
    realWorldApps: ['Skyscrapers', 'Highways', 'Dams'],
    higherStudyOptions: ['M.Tech in Structural Engineering', 'MBA in Construction Management'],
    icon: '🏗️',
    color: 'bg-yellow-700'
  },
  {
    id: 'aerospace',
    title: 'Aerospace Engineer',
    category: 'engineering',
    overview: 'Design aircraft, spacecraft, satellites, and missiles.',
    requiredSkills: ['Aerodynamics', 'Propulsion', 'Flight Mechanics', 'Avionics'],
    recommendedCourses: ['B.Tech Aerospace/Aeronautical Engineering'],
    futureScope: 'Growing private space industry (SpaceX, Skyroot) and expanding aviation sector.',
    salary: '₹6L - ₹18L / year',
    demandLevel: 'Medium',
    workStyle: 'Office',
    favoriteSubjects: ['Physics', 'Math'],
    beginnerRoadmap: [
      { step: 'Physics', desc: 'Deep dive into fluid dynamics.' },
      { step: 'Modeling', desc: 'Learn CATIA or ANSYS.' },
      { step: 'Projects', desc: 'Build RC planes or model rockets.' },
      { step: 'Internship', desc: 'Apply to ISRO or DRDO labs.' }
    ],
    realWorldApps: ['Satellites', 'Commercial Airplanes', 'Space Rockets'],
    higherStudyOptions: ['MS in Aerospace', 'PhD in Propulsion'],
    icon: '🚀',
    color: 'bg-red-600'
  },
  {
    id: 'doctor',
    title: 'Doctor (MBBS)',
    category: 'medical',
    overview: 'Diagnose illnesses, treat injuries, and improve human health through medicine and surgery.',
    requiredSkills: ['Anatomy', 'Clinical Diagnosis', 'Empathy', 'Surgical Skills', 'Stamina'],
    recommendedCourses: ['MBBS'],
    futureScope: 'Evergreen, highly respected. Shortage of specialist doctors globally.',
    salary: '₹8L - ₹40L+ / year',
    demandLevel: 'Very High',
    workStyle: 'Field',
    favoriteSubjects: ['Biology', 'Chemistry'],
    beginnerRoadmap: [
      { step: 'NEET Prep', desc: 'Score 600+ in NEET UG.' },
      { step: 'MBBS (4.5 yrs)', desc: 'Rigorous study of medical sciences.' },
      { step: 'Internship (1 yr)', desc: 'Mandatory clinical rotation.' },
      { step: 'NEET PG', desc: 'Specialize via MD or MS.' }
    ],
    realWorldApps: ['Hospitals', 'Surgery', 'Medical Research'],
    higherStudyOptions: ['MD (Medicine)', 'MS (Surgery)', 'DM/MCh (Super Specialty)'],
    icon: '🩺',
    color: 'bg-red-500'
  },
  {
    id: 'lawyer',
    title: 'Lawyer / Advocate',
    category: 'arts',
    overview: 'Represent clients in legal proceedings, draft legal documents, and advise on legal rights.',
    requiredSkills: ['Argumentation', 'Legal Drafting', 'Research', 'Public Speaking', 'Analytical Thinking'],
    recommendedCourses: ['BA LLB (5 years)', 'LLB (3 years after degree)'],
    futureScope: 'High demand in Corporate Law, Cyber Law, and Intellectual Property.',
    salary: '₹4L - ₹20L+ / year',
    demandLevel: 'High',
    workStyle: 'Office',
    favoriteSubjects: ['Civics', 'History', 'English'],
    beginnerRoadmap: [
      { step: 'CLAT Prep', desc: 'Clear CLAT for NLU admission.' },
      { step: 'Law School', desc: 'Participate heavily in Moot Courts.' },
      { step: 'Internships', desc: 'Intern under senior advocates or firms.' },
      { step: 'Bar Exam', desc: 'Clear AIBE to practice in courts.' }
    ],
    realWorldApps: ['Courtrooms', 'Corporate Mergers', 'Human Rights Defense'],
    higherStudyOptions: ['LLM', 'Judiciary Exams (Judge)'],
    icon: '⚖️',
    color: 'bg-amber-800'
  },
  {
    id: 'ca',
    title: 'Chartered Accountant (CA)',
    category: 'commerce',
    overview: 'Manage finances, taxation, auditing, and corporate governance for businesses and individuals.',
    requiredSkills: ['Accounting', 'Taxation Laws', 'Financial Auditing', 'Excel', 'Patience'],
    recommendedCourses: ['CA Foundation/Intermediate/Final', 'B.Com (Optional)'],
    futureScope: 'Every registered company requires CA signatures. Guaranteed high-status career.',
    salary: '₹8L - ₹25L+ / year',
    demandLevel: 'Very High',
    workStyle: 'Office',
    favoriteSubjects: ['Accountancy', 'Math', 'Economics'],
    beginnerRoadmap: [
      { step: 'Foundation', desc: 'Clear CA Foundation post 12th.' },
      { step: 'Intermediate', desc: 'Clear Group 1 & 2 of CA Inter.' },
      { step: 'Articleship', desc: '3 years of practical training under a CA.' },
      { step: 'CA Final', desc: 'Pass the toughest final exams.' }
    ],
    realWorldApps: ['Corporate Audits', 'Income Tax Filing', 'Financial Planning'],
    higherStudyOptions: ['CFA (Chartered Financial Analyst)', 'MBA Finance'],
    icon: '📈',
    color: 'bg-emerald-700'
  },
  {
    id: 'entrepreneur',
    title: 'Entrepreneur / Founder',
    category: 'business',
    overview: 'Create, launch, and run a new business or startup, taking on financial risks in the hope of profit.',
    requiredSkills: ['Leadership', 'Sales', 'Risk Management', 'Resilience', 'Product Management'],
    recommendedCourses: ['Any Degree', 'BBA/MBA'],
    futureScope: 'India is the 3rd largest startup ecosystem. Limitless potential.',
    salary: 'Variable (₹0 to Millions)',
    demandLevel: 'Medium',
    workStyle: 'Hybrid',
    favoriteSubjects: ['Business Studies', 'Economics'],
    beginnerRoadmap: [
      { step: 'Idea generation', desc: 'Identify a real-world problem to solve.' },
      { step: 'MVP', desc: 'Build a Minimum Viable Product.' },
      { step: 'Feedback', desc: 'Talk to 100 potential customers.' },
      { step: 'Scaling', desc: 'Raise funding or bootstrap growth.' }
    ],
    realWorldApps: ['Startups', 'Agencies', 'Tech Platforms'],
    higherStudyOptions: ['MBA in Entrepreneurship', 'Startup Accelerators (Y-Combinator)'],
    icon: '💡',
    color: 'bg-yellow-500'
  }
];
