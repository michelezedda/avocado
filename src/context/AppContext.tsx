import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [inputValue, setInputValue] = useState<string>("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState<number>(10);

  const apiKey: string = import.meta.env.VITE_API_KEY;
  const url: string = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=${number}&addRecipeInformation=true&addRecipeInstructions=true&query=${inputValue}`;

  const findRecipes = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error status: ${error.status}`);
      }
      const json = await response.json();
      setResults(json.results);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    setNumber((prevNumber) => prevNumber + 5);
  };

  useEffect(() => {
    findRecipes();
  }, [number]);

  return (
    <AppContext.Provider
      value={{
        inputValue,
        setInputValue,
        findRecipes,
        results,
        setResults,
        apiKey,
        isLoading,
        number,
        loadMore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
