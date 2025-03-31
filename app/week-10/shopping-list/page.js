"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service.js";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) {
      router.push("/"); 
    } else {
      loadItems();
    }
  }, [user, router]);

  const loadItems = async () => {
    if (user) {
      try {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error loading items: ", error);
      }
    }
  };

  if (!user) {
    return <p>Redirecting...</p>;
  }

  const cleanItemName = (itemName) => {
    return itemName
      .split(",")[0]
      .replace(/[🌀-🫖]/gu, "")
      .trim();
  };

  const handleItemSelect = (item) => {
    setSelectedItemName(cleanItemName(item.name));
  };

  const handleAddItem = async (newItem) => {
    if (user) {
      try {
        const newItemId = await addItem(user.uid, newItem);
        setItems([...items, { id: newItemId, ...newItem }]);
      } catch (error) {
        console.error("Error adding item: ", error);
      }
    }
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
