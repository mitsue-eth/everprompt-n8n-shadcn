// Custom React hooks for EverPrompt
import { useState, useCallback, useEffect } from "react";

// Theme hook
export function useTheme() {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  const toggleMode = useCallback(() => {
    setMode(prev => prev === "dark" ? "light" : "dark");
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return { mode, toggleMode };
}

// Prompt editor hook
export function usePromptEditor(initialValue: string = "") {
  const [value, setValue] = useState(initialValue);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const handleChange = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  const handleSave = useCallback(async () => {
    setIsSaving(true);
    // Simulate save delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastSaved(new Date());
    setIsSaving(false);
  }, []);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(value);
  }, [value]);

  return {
    value,
    setValue,
    handleChange,
    handleSave,
    handleCopy,
    isSaving,
    lastSaved,
  };
}

// Local storage hook
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue] as const;
}
