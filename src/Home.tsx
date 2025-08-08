import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TrendingRecipes from "./components/TrendingRecipes";
import Favorites from "./components/Favorites";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <main>
        <Navbar />
        <div className="w-full container mx-auto max-w-screen-2xl">
          <TrendingRecipes />
          <Favorites />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Home;
