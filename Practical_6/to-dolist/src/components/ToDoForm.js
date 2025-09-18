import React, { useState } from 'react';

export const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [recurrence, setRecurrence] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      // Pass task text, due date, and recurrence to addTodo
      addTodo(value, dueDate, recurrence);
      setValue('');
      setDueDate('');
      setRecurrence('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="What is the task today?"
      />
      
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="todo-input"
      />

      <select
        value={recurrence}
        onChange={(e) => setRecurrence(e.target.value)}
        className="todo-input"
      >
        <option value="">No Repeat</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>

      <button type="submit" className="todo-btn">Add Task</button>
    </form>
  );
};

export default ToDoForm;
