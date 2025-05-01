import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [inputValue, setInputValue] = useState<string>("");
  const [results, setResults] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&addRecipeInformation=true&addRecipeInstructions=true&query=${inputValue}`;

  const findRecipes = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error status: ${error.status}`);
      }
      const json = await response.json();
      setResults(json.results);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <AppContext.Provider
      value={{
        inputValue,
        setInputValue,
        findRecipes,
        results,
        setResults,
        apiKey,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
