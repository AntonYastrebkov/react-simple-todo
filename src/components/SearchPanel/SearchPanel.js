import React from 'react';
import './SearchPanel.css'

const SearchPanel = () => {
  
    const placeholder = "search here";
    const searchStyle = {
      fontSize: '25px'
    };
    return (
      <input type="text"
        className="form-control search-panel"
        style = {searchStyle}
        placeholder = {placeholder} />
    );
};

export default SearchPanel;