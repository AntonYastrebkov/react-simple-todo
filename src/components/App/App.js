import React from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ToDoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';

import './App.css'

const App = () => {

  const todoData = [
    { label: "Drink Coffee", important: true, id: 1 },
    { label: "Make some apps", important: false, id: 2 },
    { label: "Procrastinate", important: false, id: 3 }
  ];
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3}/>
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ToDoList todos = { todoData }/>
    </div>
  );
};

export default App;