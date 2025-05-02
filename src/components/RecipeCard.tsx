import { LuVegan } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function RecipeCard(recipe) {
  const navigate = useNavigate();
  const { apiKey } = useAppContext();

  const selectRecipe = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKey}`
      );
      const fullRecipe = await response.json();
      navigate(`/recipe/${recipe.id}`, { state: { recipe: fullRecipe } });
    } catch (error) {
      console.error("Failed to fetch full recipe:", error);
    }
  };

  return (
    <>
      <div
        className="flex gap-2 relative shadow-amber-950/20 shadow-sm border-amber-950/10 border-1 mx-2 cursor-pointer hover:bg-amber-50 active:scale-99"
        onClick={selectRecipe}
      >
        <div className="basis-1/4">
          <img
            src={recipe.image}
            onError={(e) => {
              e.target.src = "../../public/media/default-pic.jpg";
            }}
            alt={recipe.title}
            className="w-30"
          />
        </div>
        <div className="flex flex-col basis-3/4">
          <h3 className="font-semibold text-xl">{recipe.title}</h3>
          <span className="text-green-950 text-2xl absolute right-3 bottom-3">
            {recipe.vegan && <LuVegan />}
          </span>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
