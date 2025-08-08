import RecipeCard from "../components/RecipeCard";
import { useAppContext } from "../context/AppContext";
import type { Result } from "../types/Types";

function Favorites() {
  const { favoriteList } = useAppContext();

  return (
    <>
      <div className="w-full flex flex-col items-center mt-20">
        <h2 className="flex font-bold text-3xl lg:text-4xl mb-8 text-red-900">
          Your favorite meals
        </h2>
        {favoriteList.length ? (
          <>
            <div className="flex flex-col gap-4">
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
