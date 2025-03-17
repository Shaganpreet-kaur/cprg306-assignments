"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas"; // Import MealIdeas component
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(""); // State to hold selected item name

  // Function to clean up item name for API compatibility
  const cleanItemName = (itemName) => {
    return itemName
      .split(",")[0] // Remove quantity part
      .replace(/[\u{1F300}-\u{1FAD6}]/gu, "") // Remove emojis
      .trim(); // Trim whitespace
  };

  // Event handler to update selected item name
  const handleItemSelect = (item) => {
    setSelectedItemName(cleanItemName(item.name));
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">Shopping List</h1>
      <div className="flex w-full gap-4">
      
        <div className="w-1/2 flex flex-col gap-2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} /> {/* Pass onItemSelect */}
        </div>

   
        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} /> {/* Pass selected ingredient */}
        </div>
      </div>
    </main>
  );
}
