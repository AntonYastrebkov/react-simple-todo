import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ToDoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import AddItemForm from '../AddItemForm';

import './App.css'

export default class App extends Component {

  maxId = 100;

  state = {
      todoData: [
      this.createItem("Drink Coffee"),
      this.createItem("Write code"),
      this.createItem("Procrastinate")
    ]
  };

  createItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

  toggleProperty(arr, id, propertyName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];

    return [
        ...arr.slice(0, idx), 
        { ...oldItem, [propertyName]: !oldItem[propertyName] },
        ...arr.slice(idx + 1)
    ];
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      
      return {
        todoData: [
          ...todoData.slice(0, idx), 
          ...todoData.slice(idx + 1)
        ]
      };
    });
  };

  addItem = (text) => {
    this.setState(({todoData}) => {
      return {
        todoData: [...todoData, this.createItem(text)]
      };
    });
  };

  toggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  toggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData
                .filter((el) => el.done)
                .length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount}/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList 
          todos = { todoData }
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.toggleImportant }
          onToggleDone={ this.toggleDone }/>
        <AddItemForm 
          onAddItem={ this.addItem }/>
      </div>
    );
  }
}