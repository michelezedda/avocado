import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { LuVegan } from "react-icons/lu";

const Recipe = () => {
  const location = useLocation();
  const { recipe } = location.state || {};

  if (!recipe)
    return (
      <div className="mt-20 text-center">
        <h1 className="font-semibold text-4xl mb-6">
          This recipe doesn't exist!
        </h1>
      </div>
    );

  const { extendedIngredients = [], analyzedInstructions = [] } = recipe;

  return (
    <>
      <Navbar />
      <main className="mt-13 flex justify-center">
        <article className="max-w-3xl w-full flex flex-col items-center text-center">
          <header>
            <figure>
              <img src={recipe.image} alt={recipe.title} className="w-full" />
            </figure>
            <h1 className="font-semibold text-4xl mt-6">{recipe.title}</h1>
          </header>
          <section className="flex gap-4">
            <p className="mt-2 text-sm text-gray-500">
              Servings: {recipe.servings}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Ready in {recipe.readyInMinutes} minutes
            </p>
            <span className="text-green-950 text-2xl absolute right-3 bottom-3">
              {recipe.vegan && <LuVegan />}
            </span>
          </section>
          <section className="mt-6">
            <h2 className="font-semibold text-2xl mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-left">
              {extendedIngredients.length ? (
                extendedIngredients.map((ing) => (
                  <li key={ing.id}>{ing.original}</li>
                ))
              ) : (
                <p>No ingredients listed.</p>
              )}
            </ul>
          </section>
          <section className="mt-6">
            <h2 className="font-semibold text-2xl mb-2">Instructions</h2>
            <ol className="list-decimal list-inside text-left space-y-2">
              {analyzedInstructions.length &&
              analyzedInstructions[0].steps.length ? (
                analyzedInstructions[0].steps.map((step) => (
                  <li key={step.number}>{step.step}</li>
                ))
              ) : (
                <p>No instructions available.</p>
              )}
            </ol>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Recipe;
