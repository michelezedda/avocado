import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { useAppContext } from "../context/AppContext";
import { Recipe } from "../Types/types";

const Trending = () => {
  const { apiKey } = useAppContext();
  const [randomResults, setRandomResults] = useState([]);

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&addRecipeInformation=true&addRecipeInstructions=true`;

  const fetchRandomRecipes = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setRandomResults(json.results);
    } catch (error: unknown) {
      error instanceof Error && console.error(error.message);
    }
  };

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <h2 className="font-bold text-3xl mb-6">Now Trending</h2>
        <div className="flex flex-col gap-2">
          {randomResults.map((recipe: Recipe) => (
            <RecipeCard key={recipe.id} {...(recipe as Recipe)} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Trending;
