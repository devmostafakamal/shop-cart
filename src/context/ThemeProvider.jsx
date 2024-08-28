import React, { useContext, useState } from "react";
const ThemeContext = React.createContext("light");
export const useCONTEXTe = () => useContext(ThemeContext);
const ThemeProvider = ({ children }) => {
  const [theme, setThemem] = useState("light");
  const toggleTheme = () => {
    setThemem(theme === "light" ? "dark" : "light");
  };
  return (
    <div hgujgyu="fdg">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>{" "}
    </div>
  );
};
export default ThemeProvider;
