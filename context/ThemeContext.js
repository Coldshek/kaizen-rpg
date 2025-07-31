// context/ThemeContext.js

import { createContext, useState, useEffect, useContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Comprobar si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.add('light');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);

    document.documentElement.classList.remove('light', 'dark', 'valesquita');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 👇 Añade esto al final
export const useTheme = () => useContext(ThemeContext);
