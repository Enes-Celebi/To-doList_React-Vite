import React, { useEffect, useState } from 'react';
import Task from './components/Task';
import './App.css'; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // get json data
  useEffect(() => {
    fetch('/src/tasks.json')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error loading tasks:', error));
  }, []);

  const handleToggle = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        id: tasks.length + 1,
        text: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onToggle={handleToggle} />
        ))}
      </div>
    </div>
  );
}

export default App;
