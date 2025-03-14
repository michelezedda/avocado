import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Results from "./pages/Results";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </>
  );
}

export default App;
