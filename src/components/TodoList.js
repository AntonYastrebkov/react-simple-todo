import React from 'react';

import TodoListItem from './TodoListItem';

const ToDoList = () => {
  
    // const items = [ 'Learn React', 'Drink Coffee' ];
    return (
      <ul>
        <li><TodoListItem /></li>
        <li><TodoListItem /></li>
      </ul>
    );
};

export default ToDoList;