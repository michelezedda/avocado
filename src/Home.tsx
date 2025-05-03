import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuickSelection from "./components/QuickSelection";
import Trending from "./components/Trending";

const Home = () => {
  document.title = `Avocado - Tasty meals with ease`;

  return (
    <>
      <Navbar />
      <div className="w-full container mx-auto max-w-screen-2xl">
        <QuickSelection />
        <Trending />
      </div>
      <Footer />
    </>
  );
};

export default Home;
