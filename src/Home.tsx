import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuickSelection from "./components/QuickSelection";
import Trending from "./components/Trending";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-screen-2xl">
        <QuickSelection />
        <Trending />
      </div>
      <Footer />
    </>
  );
};

export default Home;
