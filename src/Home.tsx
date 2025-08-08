import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TrendingRecipes from "./components/TrendingRecipes";
import Favorites from "./components/Favorites";
import { useEffect } from "react";
import Cards from "./components/Cards";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Cards />
        <div className="w-full mx-auto max-w-screen-2xl">
          <TrendingRecipes />
          <Favorites />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Home;
