"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="w-full bg-gray-100 p-0">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center p-4 rounded-lg shadow-md bg-white w-full"
      >
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item name"
          required
          className="w-full p-2 mb-2 border border-gray-300 rounded-md"
        />

        <div className="flex items-center justify-between w-full mb-2">
          <div className="flex items-center bg-gray-200 px-4 py-2 rounded-md">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 py-1 bg-gray-500 text-white rounded-md"
            >
              −
            </button>
            <span className="px-4">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(Math.min(20, quantity + 1))}
              className="px-2 py-1 bg-blue-500 text-white rounded-md"
            >
              +
            </button>
          </div>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md"
          >
            <option value="produce">Produce</option>
            <option value="meat">Meat</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
