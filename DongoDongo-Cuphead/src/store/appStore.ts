import { create } from 'zustand';

export type DifficultyTier = 1 | 2 | 3;

export type TierInfo = {
  id: DifficultyTier;
  name: string;
  subtitle: string;
  grades: string;
  description: string;
  mascotName: string;
  mascotPersona: string;
  colorPrimary: string;
  colorSecondary: string;
  colorAccent: string;
  borderRadius: string;
  fontSize: 'large' | 'medium' | 'normal';
  showVoiceFirst: boolean;
  tools: string[];
};

export const TIER_INFO: Record<DifficultyTier, TierInfo> = {
  1: {
    id: 1,
    name: 'The Gentle Waltz',
    subtitle: 'Easy Profile',
    grades: 'Grades 3-6',
    description: 'A playful journey through learning basics',
    mascotName: 'Professor Whiskers',
    mascotPersona: 'nerdy',
    colorPrimary: '#FFD93D',
    colorSecondary: '#FF6B6B',
    colorAccent: '#4ECDC4',
    borderRadius: '25px',
    fontSize: 'large',
    showVoiceFirst: true,
    tools: ['voice', 'emoji']
  },
  2: {
    id: 2,
    name: 'The Midnight Chase',
    subtitle: 'Normal Profile',
    grades: 'Grades 7-9',
    description: 'An adventurous quest for knowledge',
    mascotName: 'Alex',
    mascotPersona: 'friendly',
    colorPrimary: '#6C5CE7',
    colorSecondary: '#A29BFE',
    colorAccent: '#00CEC9',
    borderRadius: '18px',
    fontSize: 'medium',
    showVoiceFirst: false,
    tools: ['text', 'voice', 'calculator', 'upload']
  },
  3: {
    id: 3,
    name: 'The Last Ride',
    subtitle: 'Advanced Profile',
    grades: 'Grades 10-12',
    description: 'The ultimate challenge before university',
    mascotName: 'Dr. Sage',
    mascotPersona: 'mature',
    colorPrimary: '#2D3436',
    colorSecondary: '#636E72',
    colorAccent: '#FDCB6E',
    borderRadius: '12px',
    fontSize: 'normal',
    showVoiceFirst: false,
    tools: ['text', 'voice', 'calculator', 'upload', 'delete-history', 'export']
  }
};

interface AppState {
  currentTier: DifficultyTier | null;
  isLoading: boolean;
  loadingProgress: number;
  loadingMessage: string;
  activeTab: 'topics' | 'chat' | 'quiz';
  selectedSubject: string | null;
  
  // Actions
  setTier: (tier: DifficultyTier) => void;
  setLoading: (loading: boolean, progress?: number, message?: string) => void;
  setActiveTab: (tab: 'topics' | 'chat' | 'quiz') => void;
  setSelectedSubject: (subjectId: string | null) => void;
  resetApp: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentTier: null,
  isLoading: true,
  loadingProgress: 0,
  loadingMessage: 'Initializing...',
  activeTab: 'topics',
  selectedSubject: null,
  
  setTier: (tier) => set({ currentTier: tier }),
  
  setLoading: (loading, progress = 0, message = 'Loading...') => 
    set({ isLoading: loading, loadingProgress: progress, loadingMessage: message }),
  
  setActiveTab: (tab) => set({ activeTab: tab }),
  
  setSelectedSubject: (subjectId) => set({ selectedSubject: subjectId }),
  
  resetApp: () => set({
    currentTier: null,
    activeTab: 'topics',
    selectedSubject: null
  })
}));
