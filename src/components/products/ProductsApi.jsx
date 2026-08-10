import React, { useEffect, useState } from "react";

const Products = () => {
  // Store products
  const [products, setProducts] = useState([]);

  // Fetch all products
  const fetchAllProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch when component loads
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-[url('./randomProductsImage.webp')] object-cover object-center text-white py-20">
<div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-4">
            Explore Our Products
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Browse our collection of electronics, fashion,
            groceries, beauty products, furniture and much more.
          </p>

        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          All Products
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {
            
          products.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col"
            >

              {/* Product Image */}
              <div className="h-60 overflow-hidden">

                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-full w-full object-cover hover:scale-110 transition duration-500"
                />

              </div>

              {/* Product Details */}
              <div className="p-5 flex flex-col flex-grow">

                {/* Category */}
                <span className="text-sm bg-blue-100 text-blue-700 w-fit px-3 py-1 rounded-full mb-3 capitalize">
                  {product.category}
                </span>

                {/* Product Name */}
                <h2 className="text-xl font-bold mb-2">
                  {product.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {product.description.slice(0, 70)}...
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">

                  <h3 className="text-2xl font-bold text-green-600">
                    ${product.price}
                  </h3>

                  <span className="text-red-500 font-semibold">
                    -{product.discountPercentage.toFixed(0)}%
                  </span>

                </div>

                {/* Information */}
                <div className="grid grid-cols-2 gap-3 text-sm mb-5">

                  <div className="bg-gray-100 rounded-lg p-2">
                    ⭐ {product.rating}
                  </div>

                  <div className="bg-gray-100 rounded-lg p-2">
                    📦 {product.stock} Left
                  </div>

                  <div className="bg-gray-100 rounded-lg p-2 col-span-2">
                    🏷 Brand: {product.brand || "N/A"}
                  </div>

                </div>

                {/* Button */}
                <button className="mt-auto cursor-pointer bg-slate-900 hover:bg-slate-700 text-white py-3 rounded-lg transition">
                  View Product
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default Products;