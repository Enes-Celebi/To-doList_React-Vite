import React from 'react';

function Task({ task, onToggle }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
        {task.text}
      </label>
    </div>
  );
}

export default Task;
