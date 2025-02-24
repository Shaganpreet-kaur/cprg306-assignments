"use client";

import { useState } from "react";

export default function Counter() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let item = { name, category, quantity };

    alert(`Added item: ${name}, Category: ${category}, Quantity: ${quantity}`);
    console.log(item);

    setName("");
    setCategory("Produce");
    setQuantity(1);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center p-6 rounded-xl shadow-lg w-[380px] bg-white"
      >
        
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item name"
          required
          className="w-full p-3 mb-4 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

       
        <div className="flex items-center justify-between w-full mb-4">
          
          <div className="flex items-center bg-gray-200 px-4 py-2 rounded-md w-[160px] justify-between">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="w-10 h-8 flex items-center justify-center bg-gray-500 text-white rounded-md disabled:bg-gray-300"
            >
              −
            </button>
            <span className="text-gray-800 font-semibold">{quantity}</span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className={`w-10 h-8 flex items-center justify-center rounded-md ${
                quantity === 20 ? "bg-gray-300" : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
            >
              +
            </button>
          </div>

          
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 w-[150px] text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Produce">Produce</option>
            <option value="Meat">Meat</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>

       
        <button
          type="submit"
          className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
