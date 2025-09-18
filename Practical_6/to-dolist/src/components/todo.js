import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faClock, faRepeat } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const isOverdue =
    task.dueDate && !task.completed && new Date(task.dueDate) < new Date();

  return (
    <div
      className={`Todo ${
        task.completed ? 'completed-task' : 'incompleted-task'
      } ${isOverdue ? 'overdue-task' : ''}`}
    >
      <div onClick={() => toggleComplete(task.id)} className="flex-1 cursor-pointer">
        <p className="task-text">
          {task.task}
          {task.dueDate && (
            <span className="due-date">
              <FontAwesomeIcon icon={faClock} className="ml-2 text-gray-500" />{' '}
              {new Date(task.dueDate).toLocaleDateString()}
              {isOverdue && (
                <span className="overdue-warning text-red-600 ml-1">Increment</span>
              )}
            </span>
          )}
        </p>
        {task.recurrence && (
          <p className="recurrence text-blue-500 text-sm">
            <FontAwesomeIcon icon={faRepeat} /> Repeats: {task.recurrence}
          </p>
        )}
      </div>

      <div className="icons">
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
