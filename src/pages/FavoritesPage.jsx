import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Favorites from "../components/Favorites";

function FavoritesPage() {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <Favorites />
      </div>
      <Footer />
    </>
  );
}

export default FavoritesPage;
