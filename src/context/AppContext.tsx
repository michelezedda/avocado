import { createContext, use, ReactNode, useState } from "react";
import useLocalStorage from "../localStorage/useLocalStorage";
import type { Result, Recipe, AppContextType } from "../types/Types";

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [input, setInput] = useState<string>("");
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [favoriteList, setFavoriteList] = useLocalStorage<Result[]>(
    "favorites",
    []
  );

  // Toggle recipe in favorites list
  const addToFavorite = (currentRecipe: Recipe) => {
    const cpyFavList = [...favoriteList];

    const index = cpyFavList.findIndex(
      (recipe) => recipe.id === currentRecipe.id
    );

    if (index === -1) {
      cpyFavList.push(currentRecipe);
    } else {
      cpyFavList.splice(index, 1);
    }

    setFavoriteList(cpyFavList);
  };

  // Fetch recipes from API based on input
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
      value={{
        input,
        setInput,
        results,
        setResults,
        loading,
        setLoading,
        favoriteList,
        setFavoriteList,
        addToFavorite,
        fetchRecipes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = use(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
