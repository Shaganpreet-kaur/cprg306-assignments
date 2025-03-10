"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">Shopping List</h1>
      <div className="w-1/2 flex flex-col gap-2">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
