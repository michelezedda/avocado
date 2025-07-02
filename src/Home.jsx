import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TrendingRecipes from "./components/TrendingRecipes";

function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full container mx-auto max-w-screen-2xl">
        <TrendingRecipes />
      </div>
      <Footer />
    </>
  );
}

export default Home;
