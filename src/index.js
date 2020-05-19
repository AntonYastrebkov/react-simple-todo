import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import ToDoList from './components/TodoList';

const App = () => {

  const todoData = [
    { label: "Drink Coffee", important: true },
    { label: "Make some apps", important: false },
    { label: "Procrastinate", important: false }
  ];
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList todos = { todoData }/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));