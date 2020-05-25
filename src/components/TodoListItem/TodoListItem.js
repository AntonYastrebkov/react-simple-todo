import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {

    state = {
        isEditing: false,
        label: ''
    }

    onChangeState = (label) => {
        this.setState({ 
            label: label,
            isEditing: true 
        });
    };

    onLabelChange = (event) => {
        this.setState({ label: event.target.value });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onEdited(this.state.label);
        this.setState({ isEditing: false });
    };
    
    render() {
        const { label, 
                onDeleted,
                onToggleImportant, 
                onToggleDone,
                important,
                done } = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';            
        }

        let element;
        if (this.state.isEditing) {
            element = (
                <form className="add-item-form d-flex"
                    onSubmit = { this.onSubmit }>
                    <input type="text"
                            className="form-control"
                            onChange={ this.onLabelChange }
                            placeholder="What need to be done?"
                            value={ this.state.label }/>
                </form>
            );
        } else {
            element = (
                <span
                    className="todo-list-item-label"
                    onClick={ onToggleDone }>
                    { label }
                </span>
            );
        }
    
        return (
            <span className = { classNames }>
                { element }
            
                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={ onDeleted }>
                    <i className="fa fa-trash-o"/>
                </button>
                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={ onToggleImportant }>
                    <i className="fa fa-exclamation"/>
                </button>
                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={() => this.onChangeState(label)}>
                    <i className="fa fa-edit"/>
                </button>
            </span>
        );
    }
}