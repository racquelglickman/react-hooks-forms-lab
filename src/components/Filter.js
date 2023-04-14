import React, { useState } from "react";


function Filter({ onCategoryChange, searchInput, onSearchChange }) {

  return (
    <div className="Filter">
      <input value={searchInput} onChange={onSearchChange} type="text" name="search" placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
