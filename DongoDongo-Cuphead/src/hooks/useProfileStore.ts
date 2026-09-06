import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CurriculumTier, getCurriculumByTier } from '../data/curriculum';

export type ProfileTier = 'gentle-waltz' | 'midnight-chase' | 'last-ride' | null;

interface DesignTokens {
  baseFontSize: number;
  touchTargetMin: number;
  spacingMultiplier: number;
  animationStiffness: number;
  animationDamping: number;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  borderStrokeWidth: number;
  borderRadius: number;
}

interface ProfileState {
  selectedTier: ProfileTier;
  currentTierData: CurriculumTier | null;
  designTokens: DesignTokens;
  hasCompletedOnboarding: boolean;
  
  // Actions
  selectTier: (tierId: ProfileTier) => void;
  resetProfile: () => void;
  completeOnboarding: () => void;
  updateDesignTokens: (tokens: Partial<DesignTokens>) => void;
}

const DEFAULT_TOKENS: DesignTokens = {
  baseFontSize: 16,
  touchTargetMin: 48,
  spacingMultiplier: 1.2,
  animationStiffness: 300,
  animationDamping: 15,
  primaryColor: '#1D3557',
  secondaryColor: '#E63946',
  accentColor: '#A8DADC',
  backgroundColor: '#F1FAEE',
  textColor: '#1D3557',
  borderStrokeWidth: 2,
  borderRadius: 8,
};

const TIER_THEMES: Record<string, DesignTokens> = {
  'gentle-waltz': {
    baseFontSize: 18,
    touchTargetMin: 64,
    spacingMultiplier: 1.5,
    animationStiffness: 250,
    animationDamping: 12,
    primaryColor: '#E63946',
    secondaryColor: '#457B9D',
    accentColor: '#A8DADC',
    backgroundColor: '#F1FAEE',
    textColor: '#1D3557',
    borderStrokeWidth: 3,
    borderRadius: 12,
  },
  'midnight-chase': {
    baseFontSize: 16,
    touchTargetMin: 48,
    spacingMultiplier: 1.2,
    animationStiffness: 300,
    animationDamping: 15,
    primaryColor: '#1D3557',
    secondaryColor: '#E63946',
    accentColor: '#A8DADC',
    backgroundColor: '#F1FAEE',
    textColor: '#1D3557',
    borderStrokeWidth: 2,
    borderRadius: 8,
  },
  'last-ride': {
    baseFontSize: 14,
    touchTargetMin: 44,
    spacingMultiplier: 1.0,
    animationStiffness: 400,
    animationDamping: 20,
    primaryColor: '#1D3557',
    secondaryColor: '#457B9D',
    accentColor: '#E63946',
    backgroundColor: '#F1FAEE',
    textColor: '#1D3557',
    borderStrokeWidth: 1.5,
    borderRadius: 6,
  },
};

export const useProfileStore = create<ProfileState>()(
  persist(
    (set, get) => ({
      selectedTier: null,
      currentTierData: null,
      designTokens: DEFAULT_TOKENS,
      hasCompletedOnboarding: false,

      selectTier: (tierId: ProfileTier) => {
        if (!tierId) {
          set({ 
            selectedTier: null, 
            currentTierData: null, 
            designTokens: DEFAULT_TOKENS 
          });
          return;
        }

        const tierData = getCurriculumByTier(tierId);
        const themeTokens = TIER_THEMES[tierId] || DEFAULT_TOKENS;

        set({
          selectedTier: tierId,
          currentTierData: tierData || null,
          designTokens: themeTokens,
          hasCompletedOnboarding: true,
        });

        // Apply CSS custom properties
        applyDesignTokens(themeTokens);
      },

      resetProfile: () => {
        set({
          selectedTier: null,
          currentTierData: null,
          designTokens: DEFAULT_TOKENS,
          hasCompletedOnboarding: false,
        });
        applyDesignTokens(DEFAULT_TOKENS);
      },

      completeOnboarding: () => {
        set({ hasCompletedOnboarding: true });
      },

      updateDesignTokens: (tokens: Partial<DesignTokens>) => {
        const updatedTokens = { ...get().designTokens, ...tokens };
        set({ designTokens: updatedTokens });
        applyDesignTokens(updatedTokens);
      },
    }),
    {
      name: 'dongo-dongo-profile-storage',
      partialize: (state) => ({
        selectedTier: state.selectedTier,
        hasCompletedOnboarding: state.hasCompletedOnboarding,
      }),
    }
  )
);

function applyDesignTokens(tokens: DesignTokens) {
  const root = document.documentElement;
  if (!root) return;

  root.style.setProperty('--dd-font-size-base', `${tokens.baseFontSize}px`);
  root.style.setProperty('--dd-touch-target-min', `${tokens.touchTargetMin}px`);
  root.style.setProperty('--dd-spacing-multiplier', tokens.spacingMultiplier.toString());
  root.style.setProperty('--dd-animation-stiffness', tokens.animationStiffness.toString());
  root.style.setProperty('--dd-animation-damping', tokens.animationDamping.toString());
  root.style.setProperty('--dd-color-primary', tokens.primaryColor);
  root.style.setProperty('--dd-color-secondary', tokens.secondaryColor);
  root.style.setProperty('--dd-color-accent', tokens.accentColor);
  root.style.setProperty('--dd-color-bg', tokens.backgroundColor);
  root.style.setProperty('--dd-color-text', tokens.textColor);
  root.style.setProperty('--dd-border-width', `${tokens.borderStrokeWidth}px`);
  root.style.setProperty('--dd-border-radius', `${tokens.borderRadius}px`);
}

// Helper hooks for common operations
export function useCurrentTier() {
  const state = useProfileStore();
  return {
    tier: state.selectedTier,
    data: state.currentTierData,
    isLoaded: state.hasCompletedOnboarding && state.selectedTier !== null,
  };
}

export function useDesignTokens() {
  return useProfileStore((state) => state.designTokens);
}

export function useMascotPersona() {
  const tier = useProfileStore((state) => state.selectedTier);
  
  switch (tier) {
    case 'gentle-waltz':
      return {
        name: 'Professor Whiskers',
        description: 'A curious young scholar with round glasses and a bow tie',
        accessories: ['glasses', 'bowtie'],
        voice: 'encouraging',
        complexity: 'simple',
      };
    case 'midnight-chase':
      return {
        name: 'Alex',
        description: 'A confident teen mentor in a smart jacket',
        accessories: ['jacket'],
        voice: 'friendly',
        complexity: 'moderate',
      };
    case 'last-ride':
      return {
        name: 'Dr. Sage',
        description: 'A wise adult guide with professional attire',
        accessories: ['professional'],
        voice: 'concise',
        complexity: 'advanced',
      };
    default:
      return {
        name: 'Assistant',
        description: 'Your learning companion',
        accessories: [],
        voice: 'neutral',
        complexity: 'basic',
      };
  }
}
