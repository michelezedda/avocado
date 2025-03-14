import React from "react";

function RecipeCard({ recipe }) {
  return (
    <>
      <div className="bg-white border-stone-300 border-1 cursor-pointer hover:scale-101 duration-200 ease-in-out shadow-md h-full text-center">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="h-80 max-h-60 bg-cover bg-center"
        />
        <h3 className="ml-2 py-2 text-xl font-medium">{recipe.title}</h3>
      </div>
    </>
  );
}

export default RecipeCard;
