import { useAppContext } from "../context/AppContext";
import RecipeCard from "../components/RecipeCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Orbit } from "ldrs/react";
import "ldrs/react/Orbit.css";
import { Recipe } from "../Types/types";

const Results = () => {
  const { results, inputValue, isLoading, loadMore } = useAppContext();

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center mt-20">
        <h2 className="font-bold text-3xl mb-8">Results for "{inputValue}"</h2>
        <div className="flex flex-col gap-2">
          {isLoading ? (
            <div className="text-center">
              <Orbit size="35" speed="1.5" color="black" />
            </div>
          ) : (
            results.map((recipe: Recipe) => (
              <div key={recipe.id}>
                <RecipeCard {...recipe} />
              </div>
            ))
          )}
        </div>
        <button
          className="border-2 mt-4 border-amber-950 bg-white hover:bg-amber-950 text-amber-950 hover:text-white active:scale-99 ease-in-out duration-200 cursor-pointer py-2 px-20 font-semibold"
          onClick={loadMore}
        >
          More Recipes
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Results;
