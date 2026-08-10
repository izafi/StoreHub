import React, { useEffect, useState } from "react";

const Recipes = () => {
  // Store recipes from API
  const [recipes, setRecipes] = useState([]);

  // Fetch Recipes
  const fetchAllRecipes = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();

      setRecipes(data.recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchAllRecipes();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-[url('/fastFoodImage.webp')] object-cover object-center text-white py-20">
      <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10  max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-5">
            Delicious Recipes
          </h1>

          <p className="text-lg text-orange-100 max-w-2xl mx-auto">
            Discover delicious recipes from around the world.
            Browse your favorite meals and start cooking today.
          </p>

        </div>
      </section>

      {/* Recipe Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          All Recipes
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {recipes.map((recipe) => (

            <div
              key={recipe.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 flex flex-col"
            >

              {/* Image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="h-full w-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">

                <h3 className="text-2xl font-bold mb-2">
                  {recipe.name}
                </h3>

                {/* Cuisine & Difficulty */}
                <div className="flex justify-between text-sm text-gray-500 mb-3">
                  <span>🍽 {recipe.cuisine}</span>
                  <span>{recipe.difficulty}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  <strong>Ingredients:</strong>{" "}
                  {recipe.ingredients.slice(0, 3).join(", ")}...
                </p>

                {/* Info */}
                <div className="grid grid-cols-2 gap-3 text-sm mb-5">

                  <div className="bg-gray-100 rounded-lg p-3">
                    ⏱ {recipe.prepTimeMinutes} min
                  </div>

                  <div className="bg-gray-100 rounded-lg p-3">
                    ⭐ {recipe.rating}
                  </div>

                  <div className="bg-gray-100 rounded-lg p-3">
                    🍴 {recipe.servings} Servings
                  </div>

                  <div className="bg-gray-100 rounded-lg p-3">
                    🔥 {recipe.caloriesPerServing} kcal
                  </div>

                </div>

                {/* Button */}
                <button className="mt-auto bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition">
                  View Recipe
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default Recipes;