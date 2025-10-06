// Core types for EverPrompt
export interface Prompt {
  id: string;
  title: string;
  content: string;
  workspaceId: string;
  createdAt: Date;
  updatedAt: Date;
  archivedAt?: Date;
  metadata?: Record<string, any>;
}

export interface Label {
  id: string;
  name: string;
  color: string;
  workspaceId: string;
  createdAt: Date;
  updatedAt: Date;
  archivedAt?: Date;
  metadata?: Record<string, any>;
}

export interface Workspace {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  avatarUrl?: string;
  createdAt: Date;
}

// UI State types
export interface AppState {
  mode: "dark" | "light";
  currentPrompt: Prompt | null;
  selectedLabel: string | null;
  labelSheetOpen: boolean;
  prompts: Prompt[];
  labels: Label[];
  workspace: Workspace | null;
}

// Component prop types
export interface PromptEditorProps {
  value: string;
  onChange: (value: string) => void;
  onSave?: () => void;
  onCopy?: () => void;
  className?: string;
}

export interface ArcLabelsProps {
  labels: Array<{
    id: string;
    name: string;
    color: string;
    lastUsedAt?: number;
  }>;
  visibleCount?: number;
  onLabelClick: (labelId: string) => void;
  geometry?: {
    radius?: number;
    arcDeg?: number;
    cx?: number;
    cy?: number;
  };
}

export interface LabelSheetProps {
  open: boolean;
  label: {
    id: string;
    name: string;
    color?: string;
  } | {
    id: "**all**";
    name: "All labels";
  };
  prompts: Array<{
    id: string;
    title: string;
    preview: string;
    labelIds: string[];
    updatedAt: number;
    createdAt: number;
    meta?: Record<string, any>;
  }>;
  onOpenChange: (open: boolean) => void;
  onSelectPrompt: (promptId: string) => void;
  onSearch: (term: string) => void;
}
