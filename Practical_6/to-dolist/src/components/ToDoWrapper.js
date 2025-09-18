import React, { useState } from "react";
import { Todo } from "./todo";
import ToDoForm from './ToDoForm';
import { v4 as uuidv4 } from "uuid";
import { EditToDoForm } from "./EditToDoForm";

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [score, setScore] = useState(0); // 🎯 Gamification: Track user points

  // Add new todo with optional dueDate and recurrence
  const addTodo = (task, dueDate, recurrence) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task,
        completed: false,
        isEditing: false,
        dueDate,        // 📅 Save due date
        recurrence,     // 🔁 Save recurrence info
      },
    ]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);

    const updatedTodo = updatedTodos.find((todo) => todo.id === id);
    if (updatedTodo.completed) {
      setScore(score + 10); // 🎯 +10 points for completing
      handleRecurringTask(updatedTodo); // 🔁 Handle recurrence
    } else {
      setScore(score - 10); // 🎯 -10 points for unchecking
    }
  };

  const handleRecurringTask = (todo) => {
    if (!todo.recurrence) return;

    let nextDueDate = new Date(todo.dueDate);
    if (todo.recurrence === "daily") nextDueDate.setDate(nextDueDate.getDate() + 1);
    if (todo.recurrence === "weekly") nextDueDate.setDate(nextDueDate.getDate() + 7);
    if (todo.recurrence === "monthly") nextDueDate.setMonth(nextDueDate.getMonth() + 1);

    addTodo(todo.task, nextDueDate.toISOString().split("T")[0], todo.recurrence);
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id, dueDate, recurrence) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task, dueDate, recurrence, isEditing: false }
          : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done! (Score: {score})</h1>
      <ToDoForm addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditToDoForm
            key={todo.id}
            editTodo={editTask}
            task={todo}
          />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
