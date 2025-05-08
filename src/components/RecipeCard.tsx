import { LuVegan } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { Recipe } from "../Types/types";

function RecipeCard({ id, title, image, vegan }: Recipe) {
  const navigate = useNavigate();

  const selectRecipe = async () => {
    try {
      const response = await fetch(`/api/recipe?id=${id}`);
      if (!response.ok) throw new Error("Errore nel fetch della ricetta");
      const fullRecipe = await response.json();
      navigate(`/recipe/${id}`, { state: { recipe: fullRecipe } });
    } catch (error) {
      console.error("Failed to fetch full recipe:", error);
    }
  };

  return (
    <>
      <div
        className="flex gap-2 relative shadow-amber-950/20 shadow-sm border-amber-950/10 border-1 mx-2 cursor-pointer hover:bg-amber-800/10 active:scale-99"
        onClick={selectRecipe}
      >
        <div className="basis-1/4">
          <img
            src={image}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/media/default-pic.jpg";
            }}
            alt="Recipe"
            className="w-30"
          />
        </div>
        <div className="flex flex-col basis-3/4">
          <h3 className="font-semibold text-xl">{title}</h3>
          <span className="text-green-950 text-2xl absolute right-3 bottom-3">
            {vegan && <LuVegan />}
          </span>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
