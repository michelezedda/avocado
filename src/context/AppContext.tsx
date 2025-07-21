import { createContext, useContext, useState } from "react";
import useLocalStorage from "../localStorage/useLocalStorage";
import { Result, Recipe } from "../types/Types";

const AppContext = createContext(undefined);

export function AppProvider({ children }: any) {
  const [input, setInput] = useState<string>("");
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [favoriteList, setFavoriteList] = useLocalStorage<Result[]>(
    "favorites",
    []
  );

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
        fetchRecipes,
        results,
        loading,
        setLoading,
        favoriteList,
        addToFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
