import React from 'react'

const Categories = () => {
  return (
    <div>
       {/* Categories */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          What You'll Find
        </h2>

        <div className="grid md:grid-cols-3 gap-8 justify-center">

          {/* Card */}

          <div className="shadow-lg rounded-xl p-8 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4">
              Products
            </h3>

            <p className="text-gray-600">
              Explore electronics, fashion,
              groceries, furniture and more.
            </p>
          </div>

          <div className="shadow-lg rounded-xl p-8 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4">
              Recipes
            </h3>

            <p className="text-gray-600">
              Find delicious recipes from every cuisine.
            </p>
          </div>

          <div className="shadow-lg rounded-xl p-8 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4">
              Fast Search
            </h3>

            <p className="text-gray-600">
              Easily search your favourite products
              and recipes.
            </p>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Categories
