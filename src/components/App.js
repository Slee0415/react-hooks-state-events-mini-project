// App.js
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onCategoryChange={(category) => console.log(category)}
      />
      <NewTaskForm
        categories={CATEGORIES.filter(category => category !== "All")}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
