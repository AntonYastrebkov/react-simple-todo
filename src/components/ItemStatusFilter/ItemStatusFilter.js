import React, { Component } from 'react';

import './ItemStatusFilter.css'

export default class ItemStatusFilter extends Component {

    buttons = [
        { name: "all", label: "All" },
        { name: "done", label: "Done" },
        { name: "active", label: "Active" }
    ];

    render() {
        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;
            const clazz = isActive ? "btn-info" : "btn-outline-secondary";
            return (
                <button type="button"
                    key={ name }
                    className={ `btn ${ clazz }` }
                    onClick={ () => onFilterChange(name) }>
                        { label }
                </button>
            );
        });
        return (
            <div className="btn-group">
                { buttons }
            </div>
        );
    }
}