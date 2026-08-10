import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductPreview = () => {

    const [products, setProducts] = useState([]);
    
    
      const fetchAllProducts = async () => {
        try {
          const response = await fetch("https://dummyjson.com/products");
          const data = await response.json();
          setProducts(data.products);
    
        } catch (error) {
    
          console.error("Error fetching products:", error);
        }
      }
    
    
      useEffect(() => {
    
        fetchAllProducts();
  
    
      }, [])
  return (
    <div>
      {/* Product Preview */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-4xl font-bold">
            Random Products
          </h2>

          <button className="text-blue-600 font-semibold">
            <Link to={"/products"}>View All →</Link>
          </button>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="rounded-xl shadow-lg overflow-hidden flex flex-col"
            >

              <div className="h-60 overflow-hidden">
                <img src={product.images} alt={product.title} className="h-full w-full object-cover hover:scale-110 transition duration-300" />
              </div>

              <div className="p-5 flex flex-col flex-grow">

                <h3 className="font-semibold text-xl">
                  {product.title}
                </h3>

                <p className="text-gray-500 mt-2 line-clamp-2">
                  {product.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  )
}

export default ProductPreview
