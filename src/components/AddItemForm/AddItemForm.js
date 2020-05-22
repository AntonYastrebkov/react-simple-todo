import React, { Component } from 'react';

import './AddItemForm.css'

export default class AddItemForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({ label: '' });
    };

    render() {
        return (
            <form className="add-item-form d-flex"
                onSubmit = { this.onSubmit }>
                <input type="text"
                        className="form-control"
                        onChange={ this.onLabelChange }
                        placeholder="What need to be done?"
                        value={ this.state.label }/>
                <button 
                    className="btn btn-outline-secondary">
                    Add
                </button>
            </form>
        );
    }
}