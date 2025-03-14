import React from "react";

function RecipeCard({ recipe }) {
  return (
    <>
      <div className="flex flex-col cursor-pointer hover:scale-101 duration-200 ease-in-out">
        <div className="flex">
          <img src={recipe.image} alt={recipe.name} className="w-50" />
          <div className="ml-2">
            <p className="text-lg">RECIPE CATEGORY</p>
            <h3 className="text-xl font-medium">{recipe.title}</h3>
          </div>
        </div>
        <div>
          <hr className="text-stone-300 w-full my-4" />
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
