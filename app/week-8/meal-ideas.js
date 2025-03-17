"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState(null); // Store only selected meal ID
  const [mealIngredients, setMealIngredients] = useState([]); // Store selected meal ingredients

  // Fetch meal ideas when ingredient changes
  useEffect(() => {
    async function fetchMealIdeas() {
      if (!ingredient) return;

      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMeals(data.meals || []); // Ensure meals is an array
    }

    fetchMealIdeas();
  }, [ingredient]);

  // Fetch full meal details when a meal is clicked
  async function handleMealClick(mealId) {
    setSelectedMealId(mealId); // Update selected meal ID

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await response.json();

    // Extract ingredients
    const ingredients = Object.keys(data.meals[0])
      .filter((key) => key.startsWith("strIngredient") && data.meals[0][key])
      .map((key) => data.meals[0][key]);

    setMealIngredients(ingredients); // Store ingredients
  }

  return (
    <div className="p-4 border">
      <h2 className="text-2xl font-bold">Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal} className="mb-4">
            <p
              onClick={() => handleMealClick(meal.idMeal)}
              className="cursor-pointer text-blue-500 hover:underline"
            >
              {meal.strMeal}
            </p>


            {selectedMealId === meal.idMeal && (
              <ul className="mt-2 text-gray-700">
                <h4 className="font-bold">Ingredients:</h4>
                {mealIngredients.length > 0 ? (
                  mealIngredients.map((ingredient, index) => (
                    <li key={index} className="ml-4">
                      - {ingredient}
                    </li>
                  ))
                ) : (
                  <p>Loading ingredients...</p>
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
