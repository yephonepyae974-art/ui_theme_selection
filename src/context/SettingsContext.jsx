import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("app-settings");

    if (savedSettings) {
      return JSON.parse(savedSettings);
    }

    return {
      theme: "light",
      language: "en",
    };
  });

  useEffect(() => {
    localStorage.setItem("app-settings", JSON.stringify(settings));
  }, [settings]);

  const setTheme = (theme) => {
    setSettings((previousSettings) => ({
      ...previousSettings,
      theme,
    }));
  };

  const setLanguage = (language) => {
    setSettings((previousSettings) => ({
      ...previousSettings,
      language,
    }));
  };

  const resetSettings = () => {
    setSettings({
      theme: "light",
      language: "en",
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        theme: settings.theme,
        language: settings.language,
        setTheme,
        setLanguage,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}