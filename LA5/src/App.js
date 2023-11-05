
import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' },
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') {
      return;
    }

    const newTaskObject = { id: tasks.length + 1, text: newTask };
    setTasks([...tasks, newTaskObject]);
    setNewTask('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Task Tracker</h1>

      <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn" onClick={addTask}>
          Add Task
        </button>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks to display</p>
      ) : (
        tasks.map((task) => (
          <div className="task" key={task.id}>
            <h3>{task.text}</h3>
            <button className="btn" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
