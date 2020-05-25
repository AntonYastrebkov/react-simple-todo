import React, { Component } from 'react';
import './SearchPanel.css'

export default class SearchPanel extends Component {
  
  render() {
    const { onFilterChange } = this.props;
    const placeholder = "search here";
    const searchStyle = {
      fontSize: '25px'
    };
    return (
      <input type="text"
        className="form-control search-panel"
        style = {searchStyle}
        placeholder = {placeholder} 
        onChange={ (event) => onFilterChange(event.target.value) }/>
    );
  };
};