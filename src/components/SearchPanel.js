import React from 'react';
const SearchPanel = () => {
  
    const placeholder = "search here";
    const searchStyle = {
      fontSize: '25px'
    };
    return (<input 
      style = {searchStyle}
      placeholder = {placeholder} />)
};

export default SearchPanel;