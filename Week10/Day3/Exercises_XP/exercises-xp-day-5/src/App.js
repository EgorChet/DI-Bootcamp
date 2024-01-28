// src/App.js
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import CharacterCounter from "./components/CharacterCounter";
import TodoList from "./components/ToDoList";
import "./App.css";

function ThemeContent() {
  const { theme } = useTheme(); // Moved inside the scope of ThemeProvider

  return (
    <div className={`App ${theme}-theme`}>
      <h1>Theme Switcher Example</h1>
      <ThemeSwitcher />
      <CharacterCounter />
      <TodoList />
      {/* Other components */}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeContent /> {/*New component that uses the theme*/}
    </ThemeProvider>
  );
}

export default App;
