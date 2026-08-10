import React from 'react'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[url('/storeImages.webp')] object-cover object-center to-slate-900 text-white">

       <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

          <div className="max-w-2xl">

            <h1 className="text-6xl text-white font-bold leading-tight">
              Shop Smart.
              <br />
              Eat Better.
            </h1>

            <p className="text-gray-300 mt-6 text-lg">
              Browse thousands of products and explore tasty
              recipes from around the world.
            </p>

            <Link
              to="/products"
              className="inline-block mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition"
            >
              Explore Products
            </Link>

          </div>

        </div>

      </section>
    </div>
  )
}

export default Hero
