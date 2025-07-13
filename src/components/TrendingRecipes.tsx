import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { RiLoader2Fill } from "react-icons/ri";
import { Recipe } from "../types/Types";
import { useAppContext } from "../context/AppContext";

function TrendingRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const { loading, setLoading } = useAppContext();

  const fetchTrendingRecipes = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://dummyjson.com/recipes?limit=10&skip=10"
      );
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
      <div className="flex flex-col items-center justify-center mt-20">
        <h2 className="font-bold text-3xl mb-6">Now Trending</h2>
        {loading ? (
          <RiLoader2Fill size={30} className="animate-spin" />
        ) : (
          <div className="flex flex-col gap-2">
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
