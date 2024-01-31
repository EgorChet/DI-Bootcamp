import { useState } from "react";
import TaskList from "./components/TaskList";
import CategorySelector from "./components/CategorySelector";
import AddTaskForm from "./components/AddTaskForm";
import AddCategoryForm from "./components/AddCategoryForm";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelected = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Productivity Tracker</h1>
        <AddCategoryForm />
        <CategorySelector onCategorySelected={handleCategorySelected} />
        <AddTaskForm categoryId={selectedCategory} />
        <TaskList categoryId={selectedCategory} />
      </header>
    </div>
  );
}

export default App;
