import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleNameChange(e) {
    setName(e.target.value);
  };

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  };

  const newItem = {
    id: uuid(),
    name: name,
    category: category,
  };

  console.log(newItem);

// up to working with onItemFormSubmit
  return (
    <form className="NewItem" onSubmit={(e) => {
      e.preventDefault();
      onItemFormSubmit(newItem);
    }}>
      <label>
        Name:
        <input value={name} onChange={handleNameChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
