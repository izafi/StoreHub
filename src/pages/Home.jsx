import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import ProductPreview from "../components/home/ProductPreview";
import RecipePreview from "../components/home/RecipePreview";

const Home = () => {

  return (
    <div>

      <Hero/>

      <Categories/>

     <ProductPreview/>
      
     <RecipePreview/>

    </div>
  );
};

export default Home;