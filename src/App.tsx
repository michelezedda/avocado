import { Routes, Route } from "react-router";
import Home from "./Home";
import Results from "./pages/Results";
import Recipe from "./pages/Recipe";
import Favorites from "./pages/FavoritesPage";
import AvocadoPic from "./components/Avocados";

function App() {
  return (
    <>
      <AvocadoPic />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/recipe/:id" element={<Recipe stars={5} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
