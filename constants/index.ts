// Application constants
export const APP_CONFIG = {
  name: "EverPrompt",
  description: "Prompt management for n8n workflows",
  version: "0.1.0",
  url: "https://everprompt.ai",
} as const;

// Theme configuration
export const THEME_CONFIG = {
  defaultMode: "dark" as const,
  storageKey: "everprompt-theme",
  colors: {
    dark: {
      primary: "#000000",
      secondary: "#111111",
      text: "#ffffff",
      textSecondary: "#888888",
      accent: "#00ff88",
      border: "#333333",
    },
    light: {
      primary: "#ffffff",
      secondary: "#f8f9fa",
      text: "#000000",
      textSecondary: "#666666",
      accent: "#0066cc",
      border: "#e1e5e9",
    },
  },
} as const;

// UI configuration
export const UI_CONFIG = {
  maxVisibleLabels: 8,
  arcRadius: 120,
  arcDegrees: 180,
  promptEditorHeight: "80vh",
  labelSheetWidth: "400px",
} as const;

// Development configuration
export const DEV_CONFIG = {
  enableLogging: process.env.NODE_ENV === "development",
  enableHotReload: true,
  enableErrorOverlay: true,
} as const;
