import { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, purpleTheme } from './../Components/styles/GlobalStyles';

const ThemeContext = createContext();

export function ThemeWrapper({ children }) {

  const [theme, setTheme] = useState("dark_theme");

  const chooseTheme = () => {
    if (theme === "dark_theme") {
        return darkTheme
    } else if (theme === "light_theme") {
        return lightTheme
    } else if (theme === "purple_theme") {
        return purpleTheme
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={chooseTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}