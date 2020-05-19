import React from 'react';

import TodoListItem from './TodoListItem';

const ToDoList = ({ todos }) => {
  
    // const items = [ 'Learn React', 'Drink Coffee' ];

    const elements = todos.map((item) => {
        return (
            <li><TodoListItem { ...item }/></li>
        );
    });
    return (
      <ul>
        { elements }
      </ul>
    );
};

export default ToDoList;