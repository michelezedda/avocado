import { LuVegan } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function RecipeCard(recipe) {
  const navigate = useNavigate();

  const selectRecipe = () => {
    navigate(`/recipe/${recipe.id}`, { state: { recipe } });
  };

  return (
    <>
      <div
        className="flex gap-2 relative shadow-amber-950/10 shadow-sm border-amber-950/10 border-1 mx-2 cursor-pointer hover:bg-neutral-100 active:scale-99"
        onClick={selectRecipe}
      >
        <div className="basis-1/4">
          <img
            src={
              recipe.image ? recipe.image : "../../public/media/default-pic.jpg"
            }
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
