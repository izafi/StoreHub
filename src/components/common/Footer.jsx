import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400">
            StoreHub
          </h2>

          <p className="text-gray-300 mt-4">
            Discover amazing products and delicious recipes
            all in one place.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Quick Links
          </h3>
<ul className="space-y-3 text-gray-300">

  <li>
    <Link
      to="/"
      className="group flex items-center gap-2 w-fit hover:text-yellow-400 transition-colors duration-300"
    >
      <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        →
      </span>
      <span>Home</span>
    </Link>
  </li>

  <li>
    <Link
      to="/products"
      className="group flex items-center gap-2 w-fit hover:text-yellow-400 transition-colors duration-300"
    >
      <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        →
      </span>
      <span>Products</span>
    </Link>
  </li>

  <li>
    <Link
      to="/recipes"
      className="group flex items-center gap-2 w-fit hover:text-yellow-400 transition-colors duration-300"
    >
      <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        →
      </span>
      <span>Recipes</span>
    </Link>
  </li>

</ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Contact
          </h3>

          <p className="text-gray-300">
            Email: support@storehub.com
          </p>

          <p className="text-gray-300">
            Phone: +92 324 8808971
          </p>
        </div>

      </div>

      <div className="border-t border-slate-700 py-5 text-center text-gray-400">
        © 2026 StoreHub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;