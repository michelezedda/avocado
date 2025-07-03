import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Favorites from "../components/Favorites";
import { useEffect } from "react";

function FavoritesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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
