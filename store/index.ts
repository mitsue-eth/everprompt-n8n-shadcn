// Basic store setup - will be expanded later
export interface AppStore {
  // UI State
  mode: "dark" | "light";
  currentPrompt: string;
  isSaving: boolean;
  lastSaved: Date | null;
  
  // Data State
  prompts: Array<{
    id: string;
    title: string;
    content: string;
    updatedAt: Date;
  }>;
  labels: Array<{
    id: string;
    name: string;
    color: string;
    lastUsedAt?: number;
  }>;
  
  // Actions
  setMode: (mode: "dark" | "light") => void;
  setCurrentPrompt: (content: string) => void;
  setSaving: (saving: boolean) => void;
  setLastSaved: (date: Date | null) => void;
  addPrompt: (prompt: { id: string; title: string; content: string }) => void;
  updatePrompt: (id: string, updates: Partial<{ title: string; content: string }>) => void;
  addLabel: (label: { id: string; name: string; color: string }) => void;
}

// This will be replaced with Zustand store later
export const createAppStore = (): AppStore => ({
  mode: "dark",
  currentPrompt: "",
  isSaving: false,
  lastSaved: null,
  prompts: [],
  labels: [],
  
  setMode: () => {},
  setCurrentPrompt: () => {},
  setSaving: () => {},
  setLastSaved: () => {},
  addPrompt: () => {},
  updatePrompt: () => {},
  addLabel: () => {},
});
