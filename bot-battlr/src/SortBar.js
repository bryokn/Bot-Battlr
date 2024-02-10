import React from 'react';

function SortBar({ handleSort }) {
  return (
    <div className="sort-bar">
      <label>Sort by:</label>
      <select onChange={handleSort}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
}

export default SortBar;