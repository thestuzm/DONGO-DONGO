/**
 * DONGO DONGO - ZAMBIAN CURRICULUM DATA STRUCTURE
 * Based on Examination Council of Zambia (ECZ) Syllabi
 * 
 * TIER 1: The Gentle Waltz (Grades 3-6) - Foundational, Visual, Interactive
 * TIER 2: The Midnight Chase (Grades 7-9) - Transitional, Analytical, Project-based
 * TIER 3: The Last Ride (Grades 10-12) - High-stakes Exam Prep, Dense, Rigorous
 */

export interface Subtopic {
  id: string;
  title: string;
  objectives: string[];
  difficulty: 'basic' | 'intermediate' | 'advanced';
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  subtopics: Subtopic[];
  estimatedMinutes: number;
  prerequisites?: string[];
}

export interface Subject {
  id: string;
  name: string;
  iconPath: string; // SVG path data
  color: string;
  topics: Topic[];
  gradeRange: [number, number];
}

export interface CurriculumTier {
  id: 'gentle-waltz' | 'midnight-chase' | 'last-ride';
  displayName: string;
  subtitle: string;
  gradeRange: [number, number];
  depthLevel: 'foundational' | 'transitional' | 'rigorous';
  subjects: Subject[];
  uiConfig: {
    baseFontSize: number;
    touchTargetMin: number;
    spacingMultiplier: number;
    animationStiffness: number;
    animationDamping: number;
  };
}

// SVG Icon Paths - 1930s Ink Style
const ICONS = {
  math: "M12 2L12 22M2 12L22 12",
  science: "M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2ZM12 12L12 12",
  english: "M4 4L20 20M20 4L4 20",
  civic: "M12 2L2 22L22 22L12 2Z",
  it: "M4 4H20V20H4V4ZM8 8V16M12 8V16M16 8V16",
  geography: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 12L12 12",
  food: "M12 2C12 2 8 8 8 14C8 18 10 22 12 22C14 22 16 18 16 14C16 8 12 2 12 2Z",
  safety: "M12 2L2 12L12 22L22 12L12 2Z",
  arts: "M12 2C12 2 6 8 6 14C6 18 9 22 12 22C15 22 18 18 18 14C18 8 12 2 12 2Z",
  business: "M4 4H20V20H4V4ZM8 12H16M8 16H16M8 8H16",
  design: "M12 2L2 12L12 22L22 12L12 2ZM12 8L12 16",
  physics: "M2 12C2 12 6 8 12 8C18 8 22 12 22 12C22 12 18 16 12 16C6 16 2 12 2 12Z",
  chemistry: "M12 2L12 22M8 6L16 6M8 10L16 10M8 14L16 14M8 18L16 18",
  biology: "M12 2C12 2 8 8 8 14C8 18 10 22 12 22C14 22 16 18 16 14C16 8 12 2 12 2ZM12 10C12 10 14 12 14 14",
  literature: "M4 4H20V20H4V4ZM8 8V16M12 8V16M16 8V16",
};

export const CURRICULUM_DATA: CurriculumTier[] = [
  {
    id: 'gentle-waltz',
    displayName: 'The Gentle Waltz',
    subtitle: 'Easy • Grades 3-6',
    gradeRange: [3, 6],
    depthLevel: 'foundational',
    uiConfig: {
      baseFontSize: 18,
      touchTargetMin: 64,
      spacingMultiplier: 1.5,
      animationStiffness: 250,
      animationDamping: 12,
    },
    subjects: [
      {
        id: 'math-gw',
        name: 'Mathematics',
        iconPath: ICONS.math,
        color: '#E63946',
        gradeRange: [3, 6],
        topics: [
          {
            id: 'math-gw-1',
            title: 'Numbers and Place Value',
            description: 'Understanding numbers up to 10,000',
            estimatedMinutes: 45,
            subtopics: [
              { id: 'math-gw-1-1', title: 'Reading and Writing Numbers', objectives: ['Read numbers to 10,000', 'Write numbers in words'], difficulty: 'basic' },
              { id: 'math-gw-1-2', title: 'Place Value', objectives: ['Identify ones, tens, hundreds, thousands'], difficulty: 'basic' },
            ],
          },
          {
            id: 'math-gw-2',
            title: 'Fractions',
            description: 'Introduction to equivalent fractions',
            estimatedMinutes: 50,
            subtopics: [
              { id: 'math-gw-2-1', title: 'Equivalent Fractions', objectives: ['Find equivalent fractions using diagrams'], difficulty: 'basic' },
              { id: 'math-gw-2-2', title: 'Comparing Fractions', objectives: ['Compare fractions with same denominators'], difficulty: 'basic' },
            ],
          },
          {
            id: 'math-gw-3',
            title: 'Geometry',
            description: '2D shapes and symmetry',
            estimatedMinutes: 40,
            subtopics: [
              { id: 'math-gw-3-1', title: '2D Shapes', objectives: ['Identify triangles, squares, rectangles, circles'], difficulty: 'basic' },
              { id: 'math-gw-3-2', title: 'Line Symmetry', objectives: ['Draw lines of symmetry in 2D shapes'], difficulty: 'intermediate' },
            ],
          },
        ],
      },
      {
        id: 'science-gw',
        name: 'Science',
        iconPath: ICONS.science,
        color: '#457B9D',
        gradeRange: [3, 6],
        topics: [
          {
            id: 'science-gw-1',
            title: 'States of Matter',
            description: 'Solids, liquids, and gases',
            estimatedMinutes: 45,
            subtopics: [
              { id: 'science-gw-1-1', title: 'Properties of Solids', objectives: ['Describe shape and volume of solids'], difficulty: 'basic' },
              { id: 'science-gw-1-2', title: 'Properties of Liquids', objectives: ['Describe how liquids take shape of container'], difficulty: 'basic' },
              { id: 'science-gw-1-3', title: 'Properties of Gases', objectives: ['Understand that air is a gas'], difficulty: 'basic' },
            ],
          },
          {
            id: 'science-gw-2',
            title: 'Human Senses',
            description: 'The five senses',
            estimatedMinutes: 40,
            subtopics: [
              { id: 'science-gw-2-1', title: 'The Five Senses', objectives: ['Name the five senses and their organs'], difficulty: 'basic' },
              { id: 'science-gw-2-2', title: 'Using Our Senses', objectives: ['Match senses to everyday activities'], difficulty: 'basic' },
            ],
          },
        ],
      },
      {
        id: 'english-gw',
        name: 'English',
        iconPath: ICONS.english,
        color: '#1D3557',
        gradeRange: [3, 6],
        topics: [
          {
            id: 'english-gw-1',
            title: 'Reading Comprehension',
            description: 'Understanding short stories',
            estimatedMinutes: 40,
            subtopics: [
              { id: 'english-gw-1-1', title: 'Main Idea', objectives: ['Identify the main idea of a paragraph'], difficulty: 'basic' },
              { id: 'english-gw-1-2', title: 'Details', objectives: ['Find supporting details in a text'], difficulty: 'basic' },
            ],
          },
          {
            id: 'english-gw-2',
            title: 'Grammar Basics',
            description: 'Nouns and verbs',
            estimatedMinutes: 35,
            subtopics: [
              { id: 'english-gw-2-1', title: 'Nouns', objectives: ['Identify common and proper nouns'], difficulty: 'basic' },
              { id: 'english-gw-2-2', title: 'Verbs', objectives: ['Recognize action verbs in sentences'], difficulty: 'basic' },
            ],
          },
        ],
      },
      {
        id: 'civic-gw',
        name: 'Civic Education',
        iconPath: ICONS.civic,
        color: '#A8DADC',
        gradeRange: [3, 6],
        topics: [
          {
            id: 'civic-gw-1',
            title: 'Good Citizenship',
            description: 'Being a responsible citizen',
            estimatedMinutes: 35,
            subtopics: [
              { id: 'civic-gw-1-1', title: 'Rights and Responsibilities', objectives: ['List basic rights of children'], difficulty: 'basic' },
              { id: 'civic-gw-1-2', title: 'Respecting Others', objectives: ['Show respect for elders and peers'], difficulty: 'basic' },
            ],
          },
          {
            id: 'civic-gw-2',
            title: 'Road Safety',
            description: 'Safe behavior on roads',
            estimatedMinutes: 30,
            subtopics: [
              { id: 'civic-gw-2-1', title: 'Traffic Signs', objectives: ['Recognize common traffic signs'], difficulty: 'basic' },
              { id: 'civic-gw-2-2', title: 'Crossing Roads Safely', objectives: ['Demonstrate safe road crossing'], difficulty: 'basic' },
            ],
          },
        ],
      },
      {
        id: 'it-gw',
        name: 'Computer Studies',
        iconPath: ICONS.it,
        color: '#F1FAEE',
        gradeRange: [3, 6],
        topics: [
          {
            id: 'it-gw-1',
            title: 'Parts of a Computer',
            description: 'Hardware basics',
            estimatedMinutes: 35,
            subtopics: [
              { id: 'it-gw-1-1', title: 'Input Devices', objectives: ['Identify keyboard, mouse, microphone'], difficulty: 'basic' },
              { id: 'it-gw-1-2', title: 'Output Devices', objectives: ['Identify monitor, printer, speakers'], difficulty: 'basic' },
            ],
          },
        ],
      },
      {
        id: 'geography-gw',
        name: 'Geography',
        iconPath: ICONS.geography,
        color: '#A8DADC',
        gradeRange: [3, 6],
        topics: [
          {
            id: 'geo-gw-1',
            title: 'Our Community',
            description: 'Local geography',
            estimatedMinutes: 40,
            subtopics: [
              { id: 'geo-gw-1-1', title: 'Features of a Community', objectives: ['Identify homes, schools, markets'], difficulty: 'basic' },
              { id: 'geo-gw-1-2', title: 'Maps', objectives: ['Draw simple maps of classroom'], difficulty: 'intermediate' },
            ],
          },
        ],
      },
      {
        id: 'food-gw',
        name: 'Food & Nutrition',
        iconPath: ICONS.food,
        color: '#E63946',
        gradeRange: [3, 6],
        topics: [
          {
            id: 'food-gw-1',
            title: 'Healthy Eating',
            description: 'Balanced diet basics',
            estimatedMinutes: 35,
            subtopics: [
              { id: 'food-gw-1-1', title: 'Food Groups', objectives: ['Name the three food groups'], difficulty: 'basic' },
              { id: 'food-gw-1-2', title: 'Balanced Meals', objectives: ['Plan a balanced meal'], difficulty: 'basic' },
            ],
          },
        ],
      },
      {
        id: 'safety-gw',
        name: 'Safety',
        iconPath: ICONS.safety,
        color: '#457B9D',
        gradeRange: [3, 6],
        topics: [
          {
            id: 'safety-gw-1',
            title: 'Home Safety',
            description: 'Staying safe at home',
            estimatedMinutes: 30,
            subtopics: [
              { id: 'safety-gw-1-1', title: 'Dangerous Objects', objectives: ['Identify dangerous items at home'], difficulty: 'basic' },
              { id: 'safety-gw-1-2', title: 'Emergency Numbers', objectives: ['Know emergency contact numbers'], difficulty: 'basic' },
            ],
          },
        ],
      },
      {
        id: 'arts-gw',
        name: 'Arts',
        iconPath: ICONS.arts,
        color: '#1D3557',
        gradeRange: [3, 6],
        topics: [
          {
            id: 'arts-gw-1',
            title: 'Drawing and Coloring',
            description: 'Basic art skills',
            estimatedMinutes: 45,
            subtopics: [
              { id: 'arts-gw-1-1', title: 'Shapes in Art', objectives: ['Use shapes to create drawings'], difficulty: 'basic' },
              { id: 'arts-gw-1-2', title: 'Color Mixing', objectives: ['Mix primary colors to make secondary colors'], difficulty: 'basic' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'midnight-chase',
    displayName: 'The Midnight Chase',
    subtitle: 'Normal • Grades 7-9',
    gradeRange: [7, 9],
    depthLevel: 'transitional',
    uiConfig: {
      baseFontSize: 16,
      touchTargetMin: 48,
      spacingMultiplier: 1.2,
      animationStiffness: 300,
      animationDamping: 15,
    },
    subjects: [
      {
        id: 'math-mc',
        name: 'Mathematics',
        iconPath: ICONS.math,
        color: '#E63946',
        gradeRange: [7, 9],
        topics: [
          {
            id: 'math-mc-1',
            title: 'Algebraic Expressions',
            description: 'Working with variables and expressions',
            estimatedMinutes: 50,
            subtopics: [
              { id: 'math-mc-1-1', title: 'Simplifying Expressions', objectives: ['Collect like terms', 'Use brackets'], difficulty: 'intermediate' },
              { id: 'math-mc-1-2', title: 'Substitution', objectives: ['Evaluate expressions by substitution'], difficulty: 'intermediate' },
            ],
          },
          {
            id: 'math-mc-2',
            title: 'Geometry of Circles',
            description: 'Properties of circles',
            estimatedMinutes: 55,
            subtopics: [
              { id: 'math-mc-2-1', title: 'Circle Parts', objectives: ['Identify radius, diameter, circumference'], difficulty: 'intermediate' },
              { id: 'math-mc-2-2', title: 'Area and Circumference', objectives: ['Calculate area and circumference'], difficulty: 'advanced' },
            ],
          },
        ],
      },
      {
        id: 'science-mc',
        name: 'Sciences',
        iconPath: ICONS.science,
        color: '#457B9D',
        gradeRange: [7, 9],
        topics: [
          {
            id: 'science-mc-1',
            title: 'Photosynthesis',
            description: 'How plants make food',
            estimatedMinutes: 50,
            subtopics: [
              { id: 'science-mc-1-1', title: 'Process of Photosynthesis', objectives: ['Write the equation for photosynthesis'], difficulty: 'intermediate' },
              { id: 'science-mc-1-2', title: 'Factors Affecting Photosynthesis', objectives: ['Investigate light intensity effects'], difficulty: 'advanced' },
            ],
          },
          {
            id: 'science-mc-2',
            title: 'Acids, Bases and Indicators',
            description: 'pH and chemical indicators',
            estimatedMinutes: 50,
            subtopics: [
              { id: 'science-mc-2-1', title: 'Properties of Acids and Bases', objectives: ['Test substances with litmus paper'], difficulty: 'intermediate' },
              { id: 'science-mc-2-2', title: 'The pH Scale', objectives: ['Use universal indicator to find pH'], difficulty: 'advanced' },
            ],
          },
        ],
      },
      {
        id: 'business-mc',
        name: 'Business Studies',
        iconPath: ICONS.business,
        color: '#1D3557',
        gradeRange: [7, 9],
        topics: [
          {
            id: 'business-mc-1',
            title: 'Types of Businesses',
            description: 'Sole traders, partnerships, companies',
            estimatedMinutes: 45,
            subtopics: [
              { id: 'business-mc-1-1', title: 'Sole Trader', objectives: ['Describe advantages and disadvantages'], difficulty: 'intermediate' },
              { id: 'business-mc-1-2', title: 'Partnerships', objectives: ['Explain partnership agreements'], difficulty: 'intermediate' },
            ],
          },
        ],
      },
      {
        id: 'design-mc',
        name: 'Design & Technology',
        iconPath: ICONS.design,
        color: '#A8DADC',
        gradeRange: [7, 9],
        topics: [
          {
            id: 'design-mc-1',
            title: 'Orthographic Projection',
            description: 'Technical drawing techniques',
            estimatedMinutes: 60,
            subtopics: [
              { id: 'design-mc-1-1', title: 'First Angle Projection', objectives: ['Draw three views of simple objects'], difficulty: 'advanced' },
              { id: 'design-mc-1-2', title: 'Dimensioning', objectives: ['Add correct dimensions to drawings'], difficulty: 'advanced' },
            ],
          },
        ],
      },
      {
        id: 'it-mc',
        name: 'Computer Studies',
        iconPath: ICONS.it,
        color: '#F1FAEE',
        gradeRange: [7, 9],
        topics: [
          {
            id: 'it-mc-1',
            title: 'Spreadsheets',
            description: 'Data organization and formulas',
            estimatedMinutes: 55,
            subtopics: [
              { id: 'it-mc-1-1', title: 'Formulas and Functions', objectives: ['Use SUM, AVERAGE, IF functions'], difficulty: 'intermediate' },
              { id: 'it-mc-1-2', title: 'Charts and Graphs', objectives: ['Create bar charts and pie charts'], difficulty: 'intermediate' },
            ],
          },
        ],
      },
      {
        id: 'civic-mc',
        name: 'Civic Education',
        iconPath: ICONS.civic,
        color: '#A8DADC',
        gradeRange: [7, 9],
        topics: [
          {
            id: 'civic-mc-1',
            title: 'Democracy and Governance',
            description: 'Democratic principles in Zambia',
            estimatedMinutes: 45,
            subtopics: [
              { id: 'civic-mc-1-1', title: 'Branches of Government', objectives: ['Describe executive, legislature, judiciary'], difficulty: 'intermediate' },
              { id: 'civic-mc-1-2', title: 'Elections', objectives: ['Explain the electoral process in Zambia'], difficulty: 'intermediate' },
            ],
          },
        ],
      },
      {
        id: 'geography-mc',
        name: 'Geography',
        iconPath: ICONS.geography,
        color: '#457B9D',
        gradeRange: [7, 9],
        topics: [
          {
            id: 'geo-mc-1',
            title: 'Weather and Climate',
            description: 'Meteorological concepts',
            estimatedMinutes: 50,
            subtopics: [
              { id: 'geo-mc-1-1', title: 'Elements of Weather', objectives: ['Measure temperature, rainfall, humidity'], difficulty: 'intermediate' },
              { id: 'geo-mc-1-2', title: 'Climate Zones', objectives: ['Describe climate zones of Zambia'], difficulty: 'intermediate' },
            ],
          },
        ],
      },
      {
        id: 'safety-mc',
        name: 'Safety & First Aid',
        iconPath: ICONS.safety,
        color: '#E63946',
        gradeRange: [7, 9],
        topics: [
          {
            id: 'safety-mc-1',
            title: 'Basic First Aid',
            description: 'Emergency response techniques',
            estimatedMinutes: 45,
            subtopics: [
              { id: 'safety-mc-1-1', title: 'Treating Wounds', objectives: ['Clean and dress minor wounds'], difficulty: 'intermediate' },
              { id: 'safety-mc-1-2', title: 'CPR Basics', objectives: ['Demonstrate CPR on mannequin'], difficulty: 'advanced' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'last-ride',
    displayName: 'The Last Ride',
    subtitle: 'Advanced • Grades 10-12',
    gradeRange: [10, 12],
    depthLevel: 'rigorous',
    uiConfig: {
      baseFontSize: 14,
      touchTargetMin: 44,
      spacingMultiplier: 1.0,
      animationStiffness: 400,
      animationDamping: 20,
    },
    subjects: [
      {
        id: 'math-lr',
        name: 'Mathematics',
        iconPath: ICONS.math,
        color: '#E63946',
        gradeRange: [10, 12],
        topics: [
          {
            id: 'math-lr-1',
            title: 'Calculus',
            description: 'Differentiation and integration',
            estimatedMinutes: 60,
            subtopics: [
              { id: 'math-lr-1-1', title: 'Differentiation Rules', objectives: ['Apply chain rule, product rule, quotient rule'], difficulty: 'advanced' },
              { id: 'math-lr-1-2', title: 'Applications of Derivatives', objectives: ['Find maxima and minima', 'Solve rate of change problems'], difficulty: 'advanced' },
            ],
          },
          {
            id: 'math-lr-2',
            title: 'Matrices',
            description: 'Matrix operations and applications',
            estimatedMinutes: 55,
            subtopics: [
              { id: 'math-lr-2-1', title: 'Matrix Operations', objectives: ['Add, subtract, multiply matrices'], difficulty: 'advanced' },
              { id: 'math-lr-2-2', title: 'Determinants and Inverses', objectives: ['Calculate determinants and inverse matrices'], difficulty: 'advanced' },
            ],
          },
        ],
      },
      {
        id: 'adv-math-lr',
        name: 'Advanced Mathematics',
        iconPath: ICONS.math,
        color: '#1D3557',
        gradeRange: [10, 12],
        topics: [
          {
            id: 'adv-math-lr-1',
            title: 'Complex Numbers',
            description: 'Imaginary and complex number systems',
            estimatedMinutes: 60,
            subtopics: [
              { id: 'adv-math-lr-1-1', title: 'Operations with Complex Numbers', objectives: ['Add, multiply complex numbers'], difficulty: 'advanced' },
              { id: 'adv-math-lr-1-2', title: 'Argand Diagrams', objectives: ['Represent complex numbers graphically'], difficulty: 'advanced' },
            ],
          },
        ],
      },
      {
        id: 'physics-lr',
        name: 'Physics',
        iconPath: ICONS.physics,
        color: '#457B9D',
        gradeRange: [10, 12],
        topics: [
          {
            id: 'physics-lr-1',
            title: 'Projectile Motion',
            description: 'Motion in two dimensions',
            estimatedMinutes: 60,
            subtopics: [
              { id: 'physics-lr-1-1', title: 'Equations of Motion', objectives: ['Derive projectile motion equations'], difficulty: 'advanced' },
              { id: 'physics-lr-1-2', title: 'Range and Maximum Height', objectives: ['Calculate range and maximum height'], difficulty: 'advanced' },
            ],
          },
          {
            id: 'physics-lr-2',
            title: 'Electromagnetic Induction',
            description: "Faraday's Law and applications",
            estimatedMinutes: 60,
            subtopics: [
              { id: 'physics-lr-2-1', title: "Faraday's Law", objectives: ['State and apply Faraday\'s Law'], difficulty: 'advanced' },
              { id: 'physics-lr-2-2', title: 'Lenz\'s Law', objectives: ['Apply Lenz\'s Law to determine direction of induced current'], difficulty: 'advanced' },
            ],
          },
        ],
      },
      {
        id: 'chemistry-lr',
        name: 'Chemistry',
        iconPath: ICONS.chemistry,
        color: '#E63946',
        gradeRange: [10, 12],
        topics: [
          {
            id: 'chemistry-lr-1',
            title: 'Organic Chemistry',
            description: 'Hydrocarbons and functional groups',
            estimatedMinutes: 60,
            subtopics: [
              { id: 'chemistry-lr-1-1', title: 'Alkanes and Alkenes', objectives: ['Name and draw structural formulas'], difficulty: 'advanced' },
              { id: 'chemistry-lr-1-2', title: 'Reactions of Organic Compounds', objectives: ['Predict products of organic reactions'], difficulty: 'advanced' },
            ],
          },
        ],
      },
      {
        id: 'biology-lr',
        name: 'Biology',
        iconPath: ICONS.biology,
        color: '#457B9D',
        gradeRange: [10, 12],
        topics: [
          {
            id: 'biology-lr-1',
            title: 'Genetics',
            description: 'Inheritance and variation',
            estimatedMinutes: 60,
            subtopics: [
              { id: 'biology-lr-1-1', title: 'Mendelian Genetics', objectives: ['Solve monohybrid and dihybrid crosses'], difficulty: 'advanced' },
              { id: 'biology-lr-1-2', title: 'DNA and Protein Synthesis', objectives: ['Describe transcription and translation'], difficulty: 'advanced' },
            ],
          },
          {
            id: 'biology-lr-2',
            title: 'Homeostasis',
            description: 'Maintaining internal balance',
            estimatedMinutes: 55,
            subtopics: [
              { id: 'biology-lr-2-1', title: 'Temperature Regulation', objectives: ['Explain mechanisms of thermoregulation'], difficulty: 'advanced' },
              { id: 'biology-lr-2-2', title: 'Osmoregulation', objectives: ['Describe kidney function in water balance'], difficulty: 'advanced' },
            ],
          },
        ],
      },
      {
        id: 'it-lr',
        name: 'Computer Studies',
        iconPath: ICONS.it,
        color: '#1D3557',
        gradeRange: [10, 12],
        topics: [
          {
            id: 'it-lr-1',
            title: 'Programming Concepts',
            description: 'Algorithm design and implementation',
            estimatedMinutes: 60,
            subtopics: [
              { id: 'it-lr-1-1', title: 'Data Structures', objectives: ['Implement arrays, lists, stacks, queues'], difficulty: 'advanced' },
              { id: 'it-lr-1-2', title: 'Algorithms', objectives: ['Design sorting and searching algorithms'], difficulty: 'advanced' },
            ],
          },
          {
            id: 'it-lr-2',
            title: 'Artificial Intelligence',
            description: 'Introduction to AI concepts',
            estimatedMinutes: 55,
            subtopics: [
              { id: 'it-lr-2-1', title: 'Machine Learning Basics', objectives: ['Understand supervised vs unsupervised learning'], difficulty: 'advanced' },
              { id: 'it-lr-2-2', title: 'Neural Networks', objectives: ['Describe structure of artificial neural networks'], difficulty: 'advanced' },
            ],
          },
        ],
      },
      {
        id: 'literature-lr',
        name: 'Literature',
        iconPath: ICONS.literature,
        color: '#A8DADC',
        gradeRange: [10, 12],
        topics: [
          {
            id: 'lit-lr-1',
            title: 'Prose Fiction',
            description: 'Analysis of novels and short stories',
            estimatedMinutes: 50,
            subtopics: [
              { id: 'lit-lr-1-1', title: 'Themes and Characters', objectives: ['Analyze major themes in set texts'], difficulty: 'advanced' },
              { id: 'lit-lr-1-2', title: 'Narrative Techniques', objectives: ['Identify point of view, symbolism, irony'], difficulty: 'advanced' },
            ],
          },
        ],
      },
      {
        id: 'business-edu-lr',
        name: 'Business Education',
        iconPath: ICONS.business,
        color: '#F1FAEE',
        gradeRange: [10, 12],
        topics: [
          {
            id: 'business-edu-lr-1',
            title: 'Financial Accounting',
            description: 'Preparation of financial statements',
            estimatedMinutes: 60,
            subtopics: [
              { id: 'business-edu-lr-1-1', title: 'Trial Balance', objectives: ['Prepare trial balance from ledger accounts'], difficulty: 'advanced' },
              { id: 'business-edu-lr-1-2', title: 'Final Accounts', objectives: ['Prepare income statement and balance sheet'], difficulty: 'advanced' },
            ],
          },
        ],
      },
      {
        id: 'design-lr',
        name: 'Design & Technology',
        iconPath: ICONS.design,
        color: '#E63946',
        gradeRange: [10, 12],
        topics: [
          {
            id: 'design-lr-1',
            title: 'Product Design',
            description: 'Design process and materials',
            estimatedMinutes: 60,
            subtopics: [
              { id: 'design-lr-1-1', title: 'Design Briefs', objectives: ['Develop comprehensive design briefs'], difficulty: 'advanced' },
              { id: 'design-lr-1-2', title: 'Material Selection', objectives: ['Select appropriate materials for products'], difficulty: 'advanced' },
            ],
          },
        ],
      },
      {
        id: 'geography-lr',
        name: 'Geography',
        iconPath: ICONS.geography,
        color: '#457B9D',
        gradeRange: [10, 12],
        topics: [
          {
            id: 'geo-lr-1',
            title: 'Economic Geography',
            description: 'Agriculture, mining, manufacturing',
            estimatedMinutes: 55,
            subtopics: [
              { id: 'geo-lr-1-1', title: 'Agricultural Systems', objectives: ['Compare subsistence and commercial farming'], difficulty: 'advanced' },
              { id: 'geo-lr-1-2', title: 'Mining in Zambia', objectives: ['Assess impact of copper mining'], difficulty: 'advanced' },
            ],
          },
        ],
      },
      {
        id: 'arts-lr',
        name: 'Arts & Crafts',
        iconPath: ICONS.arts,
        color: '#1D3557',
        gradeRange: [10, 12],
        topics: [
          {
            id: 'arts-lr-1',
            title: 'Advanced Drawing',
            description: 'Perspective and shading techniques',
            estimatedMinutes: 60,
            subtopics: [
              { id: 'arts-lr-1-1', title: 'Linear Perspective', objectives: ['Draw one and two-point perspective'], difficulty: 'advanced' },
              { id: 'arts-lr-1-2', title: 'Chiaroscuro', objectives: ['Apply light and shadow techniques'], difficulty: 'advanced' },
            ],
          },
        ],
      },
      {
        id: 'safety-lr',
        name: 'Safety & First Aid',
        iconPath: ICONS.safety,
        color: '#E63946',
        gradeRange: [10, 12],
        topics: [
          {
            id: 'safety-lr-1',
            title: 'Advanced First Aid',
            description: 'Emergency medical response',
            estimatedMinutes: 50,
            subtopics: [
              { id: 'safety-lr-1-1', title: 'Fractures and Sprains', objectives: ['Immobilize fractures using splints'], difficulty: 'advanced' },
              { id: 'safety-lr-1-2', title: 'Shock Management', objectives: ['Recognize and treat shock'], difficulty: 'advanced' },
            ],
          },
        ],
      },
    ],
  },
];

export function getCurriculumByTier(tierId: string): CurriculumTier | undefined {
  return CURRICULUM_DATA.find(tier => tier.id === tierId);
}

export function getAllSubjects(): Subject[] {
  return CURRICULUM_DATA.flatMap(tier => tier.subjects);
}

export function getSubjectById(subjectId: string): Subject | undefined {
  return getAllSubjects().find(subject => subject.id === subjectId);
}

export function getTopicById(topicId: string): Topic | undefined {
  for (const tier of CURRICULUM_DATA) {
    for (const subject of tier.subjects) {
      const topic = subject.topics.find(t => t.id === topicId);
      if (topic) return topic;
    }
  }
  return undefined;
}
