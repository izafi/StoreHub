import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  // State for mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Main Navbar
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* Navbar Top Row */}
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-bold text-yellow-400 tracking-wide"
          >
            StoreHub
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-lg">

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
            <Link 
              to="/contact"
              className="hover:text-yellow-400 transition duration-300"
            >
                Contact
              </Link>

          </div>

          {/* Add to Cart  */}

          <div className="hidden w-8 h-8 border-[2px] border-white rounded-full md:flex items-center justify-center cursor-pointer hover:border-[#FDC700] hover:text-[#FDC700] hover:scale-[1.10] transition ease-in-out duration-200 ">
                < FaCartShopping />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl text-white"
          >
            {menuOpen ? <RxCross1 /> : <GiHamburgerMenu />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {
        
        menuOpen && (
          <div className="md:hidden mt-4 border-t border-slate-700 pt-4">

            <div className="flex flex-col gap-2">

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg hover:bg-slate-800 hover:text-yellow-400 transition"
              >
                Home
              </Link>

              <Link
                to="/products"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg hover:bg-slate-800 hover:text-yellow-400 transition"
              >
                Products
              </Link>

              <Link
                to="/recipes"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg hover:bg-slate-800 hover:text-yellow-400 transition"
              >
                Recipes
              </Link>
              <Link 
              to="/contact"
               onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-lg hover:bg-slate-800 hover:text-yellow-400 transition"
            >
                Contact
              </Link>
              <div onClick={() => setMenuOpen(false)} className=" flex items-center justify-center cursor-pointer px-4 py-3 rounded-lg hover:bg-slate-800 hover:text-yellow-400 transition">
                < FaCartShopping className="text-[20px]  " />
          </div>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
};

export default Navbar;