import RecipeCard from "../components/RecipeCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";
import type { Recipe } from "../types/Types";

function Results() {
  const { input, results } = useAppContext();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col items-center mt-30 md:mt-20">
        {results.length >= 1 ? (
          <>
            <h2 className="font-bold text-3xl lg:text-4xl">
              Results for "{input}"
            </h2>
            <img src="/media/highlight.png" className="h-6 w-100 mb-6 mt-1" />
            <div className="flex flex-col gap-4">
              {results.map((recipe: Recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </>
        ) : (
          <h2 className="font-bold text-3xl mb-8">No recipes found</h2>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Results;
