import { useAppContext } from "../context/AppContext";
import RecipeCard from "../components/RecipeCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Results = () => {
  const { results, inputValue } = useAppContext();

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-20">
        <h2 className="font-bold text-4xl mb-6">Results for "{inputValue}"</h2>
      </div>
      <div className="flex flex-col gap-2">
        {results.map((recipe) => (
          <div key={recipe.id}>
            <RecipeCard {...recipe} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Results;
