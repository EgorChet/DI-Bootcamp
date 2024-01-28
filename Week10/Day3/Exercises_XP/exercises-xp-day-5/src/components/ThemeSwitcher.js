// src/ThemeSwitcher.js
import { useTheme } from "./ThemeContext";
import "./ThemeSwitcher.css";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button className="theme-switcher-btn" onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default ThemeSwitcher;
