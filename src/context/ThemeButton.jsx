import WrapperComponent from "../demo2/WrapperComponent";
import { useCONTEXTe } from "./ThemeProvider";

const ThemeButton = () => {
  const { theme, toggleTheme } = useCONTEXTe();
  return (
    <WrapperComponent>
      <button
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#333" : "#fff",
        }}
      >
        toggle theme
      </button>
    </WrapperComponent>
  );
};
export default ThemeButton;
