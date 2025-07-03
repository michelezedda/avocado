import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TrendingRecipes from "./components/TrendingRecipes";
import Favorites from "./components/Favorites";

function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full container mx-auto max-w-screen-2xl">
        <TrendingRecipes />
        <Favorites />
      </div>
      <Footer />
    </>
  );
}

export default Home;
