import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { RiLoader2Fill } from "react-icons/ri";
import type { Recipe } from "../types/Types";
import Pagination from "./Pagination";
import { useAppContext } from "../context/AppContext";

function TrendingRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [recipesPerPage, setRecipesPerPage] = useState<number>(16);

  const { loading, setLoading } = useAppContext();

  // Fetch trending recipes from API
  const fetchTrendingRecipes = async (getUrl: string) => {
    try {
      setLoading(true);

      const response = await fetch(getUrl);
      const data = await response.json();

      setRecipes(data.recipes);
      setLoading(false);
    } catch (e) {
      console.log("error:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingRecipes("https://dummyjson.com/recipes?limit=60");
  }, []);

  const lastRecipeIndex = currentPage * recipesPerPage;
  const firstRecipeIndex = lastRecipeIndex - recipesPerPage;

  const recipesDisplayed = recipes.slice(firstRecipeIndex, lastRecipeIndex);

  return (
    <>
      <section
        id="trending-recipes"
        className="flex flex-col items-center justify-center mt-30"
      >
        <h2 id="now-trending" className="font-bold text-3xl lg:text-4xl">
          Now Trending
        </h2>
        <img src="/media/highlight.png" className="h-6 w-80 mb-6 mt-1" />
        {loading ? (
          <RiLoader2Fill size={30} className="animate-spin" />
        ) : (
          <div className="grid xl:grid-cols-2 gap-4">
            {recipesDisplayed.map((recipe: Recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
        <Pagination
          totalRecipes={recipes.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          recipesPerPage={recipesPerPage}
        />
      </section>
    </>
  );
}

export default TrendingRecipes;
