import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const Trending = () => {
  const [randomResults, setRandomResults] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&addRecipeInformation=true&addRecipeInstructions=true`;

  const fetchRandomRecipes = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setRandomResults(json.results);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center mt-20">
        <h2 className="font-semibold text-4xl mb-6">NOW TRENDING</h2>
      </div>
      <div className="flex flex-col gap-2">
        {randomResults.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </>
  );
};

export default Trending;
