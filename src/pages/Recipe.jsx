import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

function Recipe({ stars }) {
  const [rating, setRating] = useState(-1);
  const [hover, setHover] = useState(-1);
  const { state: recipe } = useLocation();
  const { favorite, addToFavorite } = useAppContext();

  const handleClick = (currentIndex) => {
    setRating(currentIndex);
  };

  const handleMouseMove = (currentIndex) => {
    setHover(currentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  document.title = `${recipe.name}`;

  return (
    <>
      <Navbar />
      <main className="mt-13 flex flex-col justify-center items-center">
        <article className="max-w-3xl w-full flex flex-col items-center text-center">
          <header>
            <figure>
              <img src={recipe.image} alt={recipe.name} className="w-full" />
            </figure>
            <h1 className="font-bold text-4xl mt-6">{recipe.name}</h1>
          </header>
          <section className="flex gap-4">
            <p className="mt-2 text-sm text-gray-500">
              Servings: {recipe.servings}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Preparation time: {recipe.prepTimeMinutes}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Cooking time: {recipe.cookTimeMinutes}
            </p>
          </section>
          <section className="mt-6 flex gap-4">
            <button
              className={`text-lg cursor-pointer px-4 py-2 rounded-full text-white hover:brightness-110 active:scale-98 ${
                favorite ? "bg-red-700" : "bg-neutral-700"
              }`}
              onClick={() => addToFavorite(recipe)}
            >
              {favorite ? (
                <span>SAVED AS FAVORITE</span>
              ) : (
                <span>SAVE AS FAVORITE</span>
              )}
            </button>
          </section>
          <div className="mx-4">
            <section className="mt-6">
              <h2 className="font-semibold text-2xl mb-2">Ingredients</h2>
              <ul className="list-disc list-inside text-left">
                {recipe.ingredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </section>
            <section className="mt-6">
              <h2 className="font-semibold text-2xl mb-2">Instructions</h2>
              <ol className="list-decimal list-inside text-left space-y-2">
                {recipe.instructions.map((step) => (
                  <li>{step}</li>
                ))}
              </ol>
            </section>
          </div>
          <section className="mt-6">
            <h3 className="font-semibold text-2xl mb-2">Rate this recipe</h3>
            <div className="flex gap-1.5 cursor-pointer">
              {[...Array(stars)].map((_, index) => (
                <FaStar
                  key={index}
                  size={30}
                  className={`${
                    hover >= index ? "text-yellow-500" : "text-black"
                  }`}
                  onClick={() => handleClick(index)}
                  onMouseMove={() => handleMouseMove(index)}
                  onMouseLeave={() => handleMouseLeave()}
                />
              ))}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Recipe;
