import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularRecipes from "./components/PopularRecipes";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <main className="text-stone-800">
        <Navbar />
        <div className="container mx-auto px-4 max-w-screen-lg">
          <Hero />
          <PopularRecipes />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
