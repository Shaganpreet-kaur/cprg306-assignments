"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return a.category.localeCompare(b.category);
  });

  return (
    <main>
      <div>
        <button
          onClick={() => setSortBy("name")}
          style={{ backgroundColor: sortBy === "name" ? "lightblue" : "white" }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          style={{ backgroundColor: sortBy === "category" ? "lightblue" : "white" }}
        >
          Sort by Category
        </button>
      </div>
      {sortedItems.map((item) => (
        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
      ))}
    </main>
  );
}
