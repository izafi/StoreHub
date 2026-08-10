import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // Main Navbar
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-yellow-400 tracking-wide"
        >
          StoreHub
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-lg">

          <Link
            to="/"
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-yellow-400 transition duration-300"
          >
            Products
          </Link>

          <Link
            to="/recipes"
            className="hover:text-yellow-400 transition duration-300"
          >
            Recipes
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;