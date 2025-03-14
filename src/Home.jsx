import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularRecipes from "./components/PopularRecipes";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <main className="text-stone-800 h-screen">
        <Navbar />
        <div className="container mx-auto px-4 max-w-screen-lg">
          <Hero />
          <PopularRecipes />
        </div>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
