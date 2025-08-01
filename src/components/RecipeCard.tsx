import { useNavigate } from "react-router-dom";
import { Recipe } from "../types/Types";

function RecipeCard({ recipe }: { recipe: Recipe }) {
  const navigate = useNavigate();

  // Navigate to recipe detail page, passing recipe in location state
  const getRecipe = () => {
    navigate(`/recipe/${recipe.id}`, { state: recipe });
  };

  return (
    <>
      <div
        className="flex gap-2 relative shadow-amber-950/20 shadow-sm rounded-2xl border-amber-950/10 border-1 mx-2 cursor-pointer bg-amber-800/10 hover:border-amber-950/30 active:scale-99 w-100 md:w-140 duration-300"
        onClick={getRecipe}
      >
        {/* Recipe image */}
        <div className="basis-1/4">
          <img src={recipe.image} alt="Recipe" className="rounded-l-2xl" />
        </div>
        {/* Recipe info */}
        <div className="flex flex-col basis-3/4">
          <h3 className="font-semibold text-xl">{recipe.name}</h3>
          <span>Cuisine: {recipe.cuisine}</span>
          <span>Rating: {recipe.rating}</span>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
