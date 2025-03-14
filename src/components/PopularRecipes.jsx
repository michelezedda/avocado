import { useState, useEffect } from "react";
import axios from "axios";
import "ldrs/ring";
import RecipeCard from "./RecipeCard";
import { useAppContext } from "../context/AppContext";

function PopularRecipes() {
  const { apiKey, recipes, setRecipes } = useAppContext();

  const fetchRandomRecipes = async () => {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&diet=vegan`;

    try {
      const response = await axios.get(apiUrl);
      console.log("API Response:", response.data);
      return response.data.results || [];
    } catch (error) {
      console.error("Error fetching recipes:", error.response?.data || error);
      return [];
    }
  };

  useEffect(() => {
    fetchRandomRecipes().then(setRecipes);
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-2xl mb-4 font-semibold">POPULAR RECIPES</h2>
        <div className="flex flex-col">
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularRecipes;
