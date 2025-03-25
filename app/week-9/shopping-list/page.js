"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) {
      router.push("/"); // Redirect to landing page if not logged in
    }
  }, [user, router]);

  if (!user) {
    return <p>Redirecting...</p>;
  }

  const cleanItemName = (itemName) => {
    return itemName
      .split(",")[0]
      .replace(/[\u{1F300}-\u{1FAD6}]/gu, "")
      .trim();
  };

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
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
