import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState('');
  const [itemsList, setItemsList] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(e) {
    setSearchInput(e.target.value);
  }

  console.log(itemsList);

  function handleFormSubmit (newItem) {
    setItemsList(
      [
        ...itemsList, 
        newItem,
      ]
    );
  };

  const itemsToDisplay = itemsList.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
    .filter((item) => {
      if (searchInput === '') return true;
      return item.name.toLowerCase().startsWith(searchInput.toLowerCase());
    })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} searchInput={searchInput} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
