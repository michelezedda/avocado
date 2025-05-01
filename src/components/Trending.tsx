import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { useAppContext } from "../context/AppContext";

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
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <h2 className="font-bold text-4xl mb-6">Now Trending</h2>
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
