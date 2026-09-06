// Zambian Curriculum Data Structure
// Grades 3-12 organized by tier

export type Subject = {
  id: string;
  name: string;
  icon: string;
  description: string;
  topics: Topic[];
  color: string;
};

export type Topic = {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string; // e.g., "45 min"
  lessons: Lesson[];
};

export type Lesson = {
  id: string;
  title: string;
  content: string;
  resources: string[];
  quizQuestions: QuizQuestion[];
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

// Tier 1: The Gentle Waltz (Grades 3-6)
export const tier1Subjects: Subject[] = [
  {
    id: 'english-gw',
    name: 'English',
    icon: 'book-open',
    description: 'Reading, writing, and speaking skills',
    color: '#FF6B6B',
    topics: [
      {
        id: 'eng-gw-1',
        title: 'Basic Grammar',
        description: 'Parts of speech, simple sentences',
        difficulty: 'beginner',
        estimatedTime: '30 min',
        lessons: []
      },
      {
        id: 'eng-gw-2',
        title: 'Storytelling',
        description: 'Creating simple stories',
        difficulty: 'beginner',
        estimatedTime: '45 min',
        lessons: []
      }
    ]
  },
  {
    id: 'math-gw',
    name: 'Mathematics',
    icon: 'calculator',
    description: 'Numbers, shapes, and patterns',
    color: '#4ECDC4',
    topics: [
      {
        id: 'math-gw-1',
        title: 'Addition & Subtraction',
        description: 'Basic operations with numbers up to 1000',
        difficulty: 'beginner',
        estimatedTime: '40 min',
        lessons: []
      },
      {
        id: 'math-gw-2',
        title: 'Shapes & Patterns',
        description: 'Identifying 2D and 3D shapes',
        difficulty: 'beginner',
        estimatedTime: '35 min',
        lessons: []
      }
    ]
  },
  {
    id: 'civic-gw',
    name: 'Civic Education',
    icon: 'flag',
    description: 'Understanding community and country',
    color: '#FFE66D',
    topics: []
  },
  {
    id: 'science-gw',
    name: 'Science',
    icon: 'flask-conical',
    description: 'Exploring the natural world',
    color: '#95E1D3',
    topics: []
  },
  {
    id: 'geography-gw',
    name: 'Geography',
    icon: 'globe',
    description: 'Maps, places, and environments',
    color: '#F38181',
    topics: []
  },
  {
    id: 'it-gw',
    name: 'Computer Studies (I.T)',
    icon: 'laptop',
    description: 'Basic computer skills',
    color: '#AA96DA',
    topics: []
  },
  {
    id: 'food-gw',
    name: 'Food & Nutrition',
    icon: 'apple',
    description: 'Healthy eating and food preparation',
    color: '#FCBAD3',
    topics: []
  },
  {
    id: 'safety-gw',
    name: 'Safety Education',
    icon: 'shield',
    description: 'Staying safe at home and school',
    color: '#FFA07A',
    topics: []
  },
  {
    id: 'arts-gw',
    name: 'Arts & Crafts',
    icon: 'palette',
    description: 'Creative expression through art',
    color: '#FFD93D',
    topics: []
  }
];

// Tier 2: The Midnight Chase (Grades 7-9)
export const tier2Subjects: Subject[] = [
  {
    id: 'english-mc',
    name: 'English',
    icon: 'book-open',
    description: 'Advanced language skills',
    color: '#FF6B6B',
    topics: []
  },
  {
    id: 'math-mc',
    name: 'Mathematics',
    icon: 'calculator',
    description: 'Algebra, geometry, and statistics',
    color: '#4ECDC4',
    topics: []
  },
  {
    id: 'science-mc',
    name: 'Integrated Science',
    icon: 'flask-conical',
    description: 'Biology, Chemistry, Physics basics',
    color: '#95E1D3',
    topics: []
  },
  {
    id: 'business-mc',
    name: 'Business Studies',
    icon: 'briefcase',
    description: 'Entrepreneurship and commerce',
    color: '#FFE66D',
    topics: []
  },
  {
    id: 'safety-mc',
    name: 'Safety & First Aid',
    icon: 'heart-pulse',
    description: 'Emergency response and safety',
    color: '#FFA07A',
    topics: []
  },
  {
    id: 'it-mc',
    name: 'Computer Studies (I.T)',
    icon: 'laptop',
    description: 'Programming and digital literacy',
    color: '#AA96DA',
    topics: []
  },
  {
    id: 'civic-mc',
    name: 'Civic Education',
    icon: 'flag',
    description: 'Government and citizenship',
    color: '#F38181',
    topics: []
  },
  {
    id: 'geography-mc',
    name: 'Geography',
    icon: 'globe',
    description: 'Physical and human geography',
    color: '#95E1D3',
    topics: []
  },
  {
    id: 'design-mc',
    name: 'Design & Technology',
    icon: 'hammer',
    description: 'Technical drawing and design',
    color: '#FFD93D',
    topics: []
  }
];

// Tier 3: The Last Ride (Grades 10-12)
export const tier3Subjects: Subject[] = [
  {
    id: 'english-lr',
    name: 'English',
    icon: 'book-open',
    description: 'Advanced literature and composition',
    color: '#FF6B6B',
    topics: []
  },
  {
    id: 'math-lr',
    name: 'Mathematics',
    icon: 'calculator',
    description: 'Core mathematics for exams',
    color: '#4ECDC4',
    topics: []
  },
  {
    id: 'adv-math-lr',
    name: 'Advanced Mathematics',
    icon: 'sigma',
    description: 'Calculus and advanced algebra',
    color: '#6C5CE7',
    topics: []
  },
  {
    id: 'physics-lr',
    name: 'Physics',
    icon: 'atom',
    description: 'Mechanics, electricity, waves',
    color: '#A29BFE',
    topics: []
  },
  {
    id: 'chemistry-lr',
    name: 'Chemistry',
    icon: 'flask-conical',
    description: 'Organic and inorganic chemistry',
    color: '#FD79A8',
    topics: []
  },
  {
    id: 'biology-lr',
    name: 'Biology',
    icon: 'dna',
    description: 'Life sciences and ecosystems',
    color: '#00B894',
    topics: []
  },
  {
    id: 'design-ai-lr',
    name: 'Design Tech & AI',
    icon: 'cpu',
    description: 'Modern technology and artificial intelligence',
    color: '#0984E3',
    topics: []
  },
  {
    id: 'it-lr',
    name: 'Computer Studies (I.T)',
    icon: 'laptop',
    description: 'Advanced programming and systems',
    color: '#AA96DA',
    topics: []
  },
  {
    id: 'literature-lr',
    name: 'Literature',
    icon: 'book-open',
    description: 'African and world literature',
    color: '#FDCB6E',
    topics: []
  },
  {
    id: 'geography-lr',
    name: 'Geography',
    icon: 'globe',
    description: 'Advanced physical and economic geography',
    color: '#00CEC9',
    topics: []
  },
  {
    id: 'business-edu-lr',
    name: 'Business Education',
    icon: 'briefcase',
    description: 'Accounting and business management',
    color: '#FFEAA7',
    topics: []
  },
  {
    id: 'business-studies-lr',
    name: 'Business Studies',
    icon: 'chart-line',
    description: 'Entrepreneurship and economics',
    color: '#DFE6E9',
    topics: []
  },
  {
    id: 'arts-lr',
    name: 'Arts & Crafts',
    icon: 'palette',
    description: 'Advanced creative arts',
    color: '#FF7675',
    topics: []
  },
  {
    id: 'safety-lr',
    name: 'Safety & First Aid',
    icon: 'heart-pulse',
    description: 'Advanced emergency response',
    color: '#FFA07A',
    topics: []
  }
];

export const getSubjectsByTier = (tier: number): Subject[] => {
  switch(tier) {
    case 1: return tier1Subjects;
    case 2: return tier2Subjects;
    case 3: return tier3Subjects;
    default: return tier1Subjects;
  }
};
