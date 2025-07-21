import { useNavigate } from "react-router-dom";
import { Recipe } from "../types/Types";

function RecipeCard({ recipe }: { recipe: Recipe }) {
  const navigate = useNavigate();

  const getRecipe = () => {
    navigate(`/recipe/${recipe.id}`, { state: recipe });
  };

  return (
    <>
      <div
        className="flex gap-2 relative shadow-amber-950/20 shadow-sm rounded-2xl border-amber-950/10 border-1 mx-2 cursor-pointer bg-amber-800/10 hover:scale-101 active:scale-99 w-100 md:w-140"
        onClick={getRecipe}
      >
        <div className="basis-1/4">
          <img src={recipe.image} alt="Recipe" className="rounded-l-2xl" />
        </div>
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
