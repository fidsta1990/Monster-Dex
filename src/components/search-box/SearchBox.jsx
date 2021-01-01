import React from "react";
import "../search-box/searchbox.css";

function SearchBox({ placeholder, onChangeHandler }) {
  return (
    <div>
      <input
        type='search'
        onChange={onChangeHandler}
        placeholder={placeholder}
        className='search'
      />
    </div>
  );
}

export default SearchBox;
