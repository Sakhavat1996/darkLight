import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  handleTheme: () => {},
});

export default function ThemeComponentProvider({ children }) {
  const [theme, setTheme] = useState("light");
  function handleTheme() {
    console.log('Clickedd')
    setTheme(prevState=>(
        prevState === 'light' ? 'dark' : 'light'
    ))
  }
  const valContext = {
    theme,
    handleTheme,
  };
  return (
    <ThemeContext.Provider value={valContext}>
      {children}
    </ThemeContext.Provider>
  );
}
