import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const RecipePreview = () => {

    


  const [recipes, setRecipes] = useState([]);


  const fetchAllRecipes = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      setRecipes(data.recipes);

    } catch (error) {

      console.error("Error fetching recipes:", error);
    }
  }


  useEffect(() => {

    fetchAllRecipes();

  }, [])
  return (
    <div>
       {/* Recipe Preview */}

      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-4xl font-bold">
              Popular Recipes
            </h2>

            <button className="text-blue-600 font-semibold">
              <Link to={"/recipes"}>View</Link>
            </button>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {recipes.slice(0, 3).map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col"
              >

                <div className="h-75 overflow-hidden">
                  <img src={recipe.image} alt={recipe.name} className="h-full w-full object-cover hover:scale-110 transition duration-300" />

                </div>

                <div className="p-5">

                  <h3 className="text-2xl font-semibold">
                    {recipe.name}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {recipe.ingredients.slice(0, 3).join(", ")}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>
    </div>
  )
}

export default RecipePreview
