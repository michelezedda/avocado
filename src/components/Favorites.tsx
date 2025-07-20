import RecipeCard from "../components/RecipeCard";
import { useAppContext } from "../context/AppContext";
import { Result } from "../types/Types";
import { IoMdHeart } from "react-icons/io";

function Favorites() {
  const { favoriteList } = useAppContext();

  return (
    <>
      <div className="w-full flex flex-col items-center mt-20">
        <h2 className="flex font-bold text-3xl mb-8 text-red-900">
          Your favorite recipes
        </h2>
        {favoriteList.length ? (
          <>
            <div className="flex flex-col gap-2">
              {favoriteList.map((favRecipe: Result) => (
                <RecipeCard key={favRecipe.id} recipe={favRecipe} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-xl mb-8 text-neutral-500">
            You haven't saved any recipes yet
          </p>
        )}
      </div>
    </>
  );
}

export default Favorites;
