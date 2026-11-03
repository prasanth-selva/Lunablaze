export interface ServiceItem {
  id: string
  title: string
  subtitle: string
  description: string
  deliverables: string[]
  icon: string
  color: string
}

export interface FocusAreaItem {
  id: string
  title: string
  category: string
  description: string
  metrics: string
  gradient: string
}

export interface BuildLogItem {
  id: string
  title: string
  date: string
  category: string
  excerpt: string
  readTime: string
}

export const LUNABLAZE_DATA = {
  studio: {
    name: 'Lunablaze',
    tagline: 'Student-Powered Technology Innovation Studio',
    subtitle: 'Catalyzing the Breakthroughs Humanity Needs Now',
    founded: 2026,
    location: 'India & Global-First',
    description: 'Building AI systems, web platforms, mobile apps, cybersecurity, automation, and robotics — with the speed of student innovation and the rigor of production delivery.',
  },
  services: [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      subtitle: 'Intelligent Systems & Neural Architectures',
      description: 'Intelligent systems that enhance decisions, automate complexity, and scale insight across enterprise workflows.',
      deliverables: ['Custom LLM Fine-Tuning', 'Retrieval-Augmented Generation (RAG)', 'Autonomous Agent Pipelines', 'Computer Vision Models'],
      icon: 'Brain',
      color: '#E50925',
    },
    {
      id: 'web-platforms',
      title: 'Web Platforms',
      subtitle: 'High-Performance Digital Infrastructure',
      description: 'Production-grade websites and web apps built for performance, scale, and immersive brand experiences.',
      deliverables: ['Next.js App Architecture', 'Interactive WebGL / 3D Experiences', 'Design Systems & UI Engineering', 'Real-time Cloud Backends'],
      icon: 'Globe',
      color: '#3B82F6',
    },
    {
      id: 'mobile-applications',
      title: 'Mobile Applications',
      subtitle: 'Native & Cross-Platform Experiences',
      description: 'Native and cross-platform experiences designed for real users in the real world with uncompromising fluid motion.',
      deliverables: ['iOS & Android Native Apps', 'React Native & Expo Ecosystems', 'Offline-first Architecture', 'High-FPS Gesture Animations'],
      icon: 'Smartphone',
      color: '#10B981',
    },
    {
      id: 'automation-systems',
      title: 'Automation Systems',
      subtitle: 'Frictionless Enterprise Workflows',
      description: 'Workflows and integrations that eliminate friction across teams, tools, and autonomous agent loops.',
      deliverables: ['Event-Driven Pipelines', 'API Orchestration & Webhooks', 'Cloud Infrastructure Automation', 'Legacy System Modernization'],
      icon: 'Zap',
      color: '#F59E0B',
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      subtitle: 'Resilient Defensive Architecture',
      description: 'Resilient architectures and proactive penetration testing that protect what matters most in volatile digital landscapes.',
      deliverables: ['Threat Modeling & Auditing', 'Zero-Trust Network Design', 'Automated Vulnerability Scanning', 'Secure Enclave Cryptography'],
      icon: 'Shield',
      color: '#8B5CF6',
    },
    {
      id: 'robotics',
      title: 'Robotics & Hardware',
      subtitle: 'Cyber-Physical Integration',
      description: 'Extending human reach into physical and extreme environments through intelligent machines and edge computing.',
      deliverables: ['ROS / ROS2 Navigation Stacks', 'Edge AI & Sensor Fusion', 'Firmware & Embedded Systems', 'Hardware-in-the-loop Testing'],
      icon: 'Cpu',
      color: '#EC4899',
    },
  ] as ServiceItem[],
  focusAreas: [
    {
      id: 'artificial-intelligence',
      title: 'Artificial Intelligence',
      category: 'Core Research',
      description: 'Building systems that extend human capability and solve problems at unprecedented scale with verifiable reasoning.',
      metrics: '99.4% Task Accuracy',
      gradient: 'from-red-500/20 to-orange-500/20',
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      category: 'Enterprise Engineering',
      description: 'Modernizing institutions and infrastructure for a world that moves faster than legacy systems allow.',
      metrics: '10x Speedup Delivered',
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Defense',
      category: 'Resilient Systems',
      description: 'Protecting critical digital infrastructure in an era of escalating threat complexity and autonomous attacks.',
      metrics: 'Zero Breach Record',
      gradient: 'from-purple-500/20 to-indigo-500/20',
    },
    {
      id: 'automation',
      title: 'Autonomous Systems',
      category: 'Workflow Intelligence',
      description: 'Connecting people, data, and action through self-healing systems that eliminate operational friction at scale.',
      metrics: '85% Toil Reduction',
      gradient: 'from-amber-500/20 to-yellow-500/20',
    },
    {
      id: 'robotics',
      title: 'Robotics & Edge Computing',
      category: 'Cyber-Physical',
      description: 'Extending human reach into physical and extreme environments through intelligent machines and spatial computing.',
      metrics: 'Sub-10ms Latency',
      gradient: 'from-pink-500/20 to-rose-500/20',
    },
    {
      id: 'future-technologies',
      title: 'Future Technologies',
      category: 'Advanced R&D',
      description: 'Prototyping the breakthroughs that will define the next decade, before the commercial world is ready.',
      metrics: '12 Active Patents/Proposals',
      gradient: 'from-emerald-500/20 to-teal-500/20',
    },
  ] as FocusAreaItem[],
  process: [
    { step: '01', title: 'Discover', description: 'Understand the challenge and define success metrics through rigorous technical scoping.' },
    { step: '02', title: 'Design', description: 'Shape the solution with architectural clarity, immersive UX, and rigorous threat modeling.' },
    { step: '03', title: 'Build', description: 'Ship with relentless engineering rigor, student agility, and mandatory mentor code reviews.' },
    { step: '04', title: 'Scale', description: 'Launch, measure, iterate, and compound impact across global production deployments.' },
  ],
  buildLogs: [
    {
      id: 'student-powered-innovation',
      title: 'Why student-powered innovation works',
      date: 'Oct 28, 2026',
      category: 'Perspective',
      excerpt: 'Student-powered does not mean inexperienced delivery. Here is how Lunablaze combines fresh thinking with mentor-led production quality on real timelines.',
      readTime: '4 min read',
    },
    {
      id: 'ai-that-serves-people',
      title: 'AI that serves people, not demo theater',
      date: 'Oct 15, 2026',
      category: 'Research',
      excerpt: 'How Lunablaze approaches intelligent systems with responsibility, clarity, and real-world utility — avoiding hype cycles.',
      readTime: '6 min read',
    },
    {
      id: 'shipping-at-velocity',
      title: 'Shipping production code with zero technical debt',
      date: 'Sep 30, 2026',
      category: 'Engineering',
      excerpt: 'Our rigorous pull request workflows and automated testing gates that guarantee enterprise reliability from student contributors.',
      readTime: '5 min read',
    },
  ] as BuildLogItem[],
}
