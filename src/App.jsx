import { Routes, Route } from "react-router";
import Home from "./Home";
import Results from "./pages/Results";
import Recipe from "./pages/Recipe";
import Favorites from "./pages/FavoritesPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
