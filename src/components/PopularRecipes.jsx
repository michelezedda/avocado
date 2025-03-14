import { useState, useEffect } from "react";
import axios from "axios";
import "ldrs/ring";
import RecipeCard from "./RecipeCard";

function PopularRecipes() {
  const [recipes, setRecipes] = useState([]);

  const fetchRandomRecipes = async () => {
    const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=2`;

    try {
      const response = await axios.get(apiUrl);
      return response.data.recipes;
    } catch (error) {
      console.error("error:", error);
      return [];
    }
  };

  useEffect(() => {
    fetchRandomRecipes().then(setRecipes);
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-6">
        <h2 className="text-2xl mb-4 font-semibold">POPULAR RECIPES</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
