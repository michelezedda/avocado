import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppContext } from "../context/AppContext";
import RecipeCard from "../components/RecipeCard";

function Results() {
  const { searchedRecipes } = useAppContext();

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center bg-amber-600">
        <h2>Results for //results//</h2>
        {searchedRecipes.map((recipe) => (
          <div key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Results;
