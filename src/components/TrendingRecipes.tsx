import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { RiLoader2Fill } from "react-icons/ri";
import type { Recipe } from "../types/Types";
import { useAppContext } from "../context/AppContext";

function TrendingRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const { loading, setLoading } = useAppContext();

  // Fetch trending recipes from API
  const fetchTrendingRecipes = async () => {
    try {
      setLoading(true);

      const response = await fetch("https://dummyjson.com/recipes?limit=20");
      const data = await response.json();

      setRecipes(data.recipes);
      setLoading(false);
    } catch (e) {
      console.log("error:", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingRecipes();
  }, []);

  return (
    <>
      <div
        id="trending-recipes"
        className="flex flex-col items-center justify-center mt-20"
      >
        <h2 className="font-bold text-3xl lg:text-4xl">Now Trending</h2>
        <img src="/media/highlight.png" className="h-6 w-80 mb-6 mt-1" />
        {loading ? (
          <RiLoader2Fill size={30} className="animate-spin" />
        ) : (
          <div className="grid xl:grid-cols-2 gap-4">
            {recipes.map((recipe: Recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default TrendingRecipes;
