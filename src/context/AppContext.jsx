import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);

  const addToFavorite = (currentRecipe) => {
    setFavorite(!favorite);

    const cpyFavList = [...favoriteList];

    const index = cpyFavList.findIndex(
      (recipe) => recipe.id === currentRecipe.id
    );

    if (index === -1) {
      cpyFavList.push(currentRecipe);
    } else {
      cpyFavList.splice(index);
    }

    setFavoriteList(cpyFavList);

    console.log(favoriteList);
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
        favorite,
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
