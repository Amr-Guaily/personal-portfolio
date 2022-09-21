const { createContext, useContext, useState, useEffect } = require('react');

const themeCtx = createContext({
  theme: 'Light',
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(themeCtx);
}

export function ThemeProvider({ children }) {
  /**
   * ? Before i use "typeof window === 'object" i get "ReferenceError: localStorage is not defined"- WHY!?
   * The localStorage property is defined on the window object and is not available on the server,
   * So, we need to make sure we are on clint-side
   */
  const [theme, setTheme] = useState('Light');

  useEffect(() => {
    setTheme(localStorage.getItem('PERSONAL_SITE-THEME') || 'Light');
  }, []);

  function toggleTheme() {
    if (theme === 'Light') {
      localStorage.setItem('PERSONAL_SITE-THEME', 'Dark');
      setTheme('Dark');
    } else if (theme === 'Dark') {
      localStorage.setItem('PERSONAL_SITE-THEME', 'Light');
      setTheme('Light');
    }
  }
  const context = { theme, toggleTheme };

  return <themeCtx.Provider value={context}>{children}</themeCtx.Provider>;
}
