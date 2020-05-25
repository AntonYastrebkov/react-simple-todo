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
    ],
    search: '',
    filter: 'all'
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

  editItem = (id, text) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      return {
        todoData: [
          ...todoData.slice(0, idx),
          {
            label: text,
            important: todoData[idx].important,
            done: todoData[idx].done,
            id: id
          },
          ...todoData.slice(idx + 1)
        ]
      };
    });
  };

  onSearchChange = (text) => {
    this.setState({ search: text });
  }

  onFilterChange = (newFilter) => {
    this.setState({ filter: newFilter });
  }

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

  filterItems(items, search, filter) {
    const afterSearch = items.filter((item) => item.label
          .toLowerCase() 
          .includes(search.toLowerCase()));
    
    switch(filter) {
      case 'all':
        return afterSearch;
      case 'active':
        return afterSearch.filter((item) => !item.done);
      case 'done':
        return afterSearch.filter((item) => item.done);
      default:
        return afterSearch;
    }
  }

  render() {
    const { todoData, filter, search } = this.state;
    const doneCount = todoData
                .filter((el) => el.done)
                .length;
    const todoCount = todoData.length - doneCount;
    const todoListItems = this.filterItems(todoData, search, filter);

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount}/>
        <div className="top-panel d-flex">
          <SearchPanel 
            onFilterChange={ this.onSearchChange } />
          <ItemStatusFilter 
            onFilterChange={ this.onFilterChange } 
            filter={ this.state.filter }/>
        </div>
        <ToDoList 
          todos = { todoListItems }
          onDeleted={ this.deleteItem }
          onEdited={ this.editItem }
          onToggleImportant={ this.toggleImportant }
          onToggleDone={ this.toggleDone }/>
        <AddItemForm 
          onAddItem={ this.addItem }/>
      </div>
    );
  }
}