import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${input}`
      );
      const data = await response.json();

      setResults(data.recipes);
      setLoading(false);
    } catch (e) {
      console.log("error:", e);
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{ input, setInput, fetchRecipes, results, loading }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
