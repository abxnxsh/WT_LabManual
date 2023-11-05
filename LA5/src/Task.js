  // Task.js
  import React from 'react';

  const Task = ({ task, onDelete }) => {
    return (
      <div className="task">
        <h3>{task.text}</h3>
        <button className="btn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    );
  };

  export default Task;
