"use client";
import {useState} from "react";
export default function Newtem(){
    const [quantity, setQuantity]=useState(1);
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
    
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md w-64">
            <p className="text-2xl font-semibold text-gray-700 mb-4">{quantity}</p>
            <div className="flex gap-4">
                <button
                    onClick={increment}
                    disabled={quantity === 20}
                    className={`px-4 py-2 rounded-lg shadow-md font-bold transition duration-300 
                        ${quantity === 20 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white"}`}
                >
                    +
                </button>
                <button
                    onClick={decrement}
                    disabled={quantity === 1}
                    className={`px-4 py-2 rounded-lg shadow-md font-bold transition duration-300 
                        ${quantity === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-400 active:bg-red-600 text-white"}`}
                >
                    -
                </button>
            </div>
        </div>
    );

    

    
}