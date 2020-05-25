import React from 'react';

import TodoListItem from '../TodoListItem';
import './TodoList.css';

const ToDoList = ({ todos, onDeleted, onEdited,
                    onToggleImportant, onToggleDone }) => {
  
    const elements = todos.map((item) => {
      const { id, ...itemProps } = item;
      return (
          <li key={ id } className="list-group-item">
            <TodoListItem 
              { ...itemProps }
              onEdited={(text) => onEdited(id, text)}
              onDeleted={() => onDeleted(id)}
              onToggleImportant={() => onToggleImportant(id)}
              onToggleDone={() => onToggleDone(id)}/>
          </li>
          );
    });
    
    return (
      <ul className="list-group todo-list">
        { elements }
      </ul>
    );
};

export default ToDoList;