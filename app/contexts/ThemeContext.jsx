'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('preload');

    // Always set light mode and save it
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');

    setTimeout(() => {
      document.documentElement.classList.remove('preload');
      document.documentElement.classList.add('loaded');
      setMounted(true);
    }, 100);
  }, []);

  if (!mounted) {
    // Avoid hydration mismatch
    return (
      <ThemeContext.Provider value={{ theme: 'light', isLight: true }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme: 'light', isLight: true }}>
      {children}
    </ThemeContext.Provider>
  );
};
