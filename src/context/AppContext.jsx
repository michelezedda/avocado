import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [searchedRecipes, setSearchedRecipes] = useState("");

  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

  const fetchSearchedRecipes = async () => {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searched}&number=10&diet=vegan`;

    try {
      const response = await axios.get(apiUrl);
      console.log("API Response:", response.data);
      return response.data.results || [];
    } catch (error) {
      console.log("Error fetching recipes:", error.response?.data || error);
      return [];
    }
  };

  return (
    <AppContext.Provider
      value={{
        apiKey,
        recipes,
        setRecipes,
        searchedRecipes,
        setSearchedRecipes,
        fetchSearchedRecipes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

// DARK MODE
// const [darkMode, setDarkMode] = useState(
//   localStorage.getItem("theme") === "dark"
// );
// useEffect(() => {
//   if (darkMode) {
//     document.documentElement.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   }
// }, [darkMode]);
