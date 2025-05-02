import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Recipe = () => {
  const location = useLocation();
  const { recipe } = location.state || {};

  if (!recipe)
    return (
      <>
        <Navbar />
        <div className="mt-20 text-center">
          <h3 className="font-semibold text-3xl mb-6">
            This recipe doesn't exist!
          </h3>
        </div>
        <Footer />
      </>
    );

  const { extendedIngredients = [], analyzedInstructions = [] } = recipe;

  return (
    <>
      <Navbar />
      <main className="mt-13 flex flex-col justify-center">
        <article className="max-w-3xl w-full flex flex-col items-center text-center">
          <header>
            <figure>
              <img src={recipe.image} alt={recipe.title} className="w-full" />
            </figure>
            <h1 className="font-bold text-4xl mt-6">{recipe.title}</h1>
          </header>
          <section className="flex gap-4">
            <p className="mt-2 text-sm text-gray-500">
              Servings: {recipe.servings}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Ready in {recipe.readyInMinutes} minutes
            </p>
          </section>
          <section className="mt-6 flex gap-4">
            {recipe.vegan && (
              <span className="text-green-600 flex items-center gap-1">
                🌱 Vegan
              </span>
            )}
            {recipe.vegetarian && (
              <span className="text-green-600 flex items-center gap-1">
                🌿 Vegetarian
              </span>
            )}
            {recipe.glutenFree && (
              <span className="text-blue-600 flex items-center gap-1">
                🌾 Gluten-Free
              </span>
            )}
            {recipe.dairyFree && (
              <span className="text-orange-600 flex items-center gap-1">
                🥛 Dairy-Free
              </span>
            )}
          </section>
          <div className="mx-4">
            <section className="mt-6">
              <h2 className="font-semibold text-2xl mb-2">Ingredients</h2>
              <ul className="list-disc list-inside text-left">
                {extendedIngredients && extendedIngredients.length > 0 ? (
                  extendedIngredients.map((ing) => (
                    <li key={ing.id}>{ing.original}</li>
                  ))
                ) : (
                  <li>No ingredients listed.</li>
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
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Recipe;
