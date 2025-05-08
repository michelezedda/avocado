import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { Recipe } from "../Types/types";

type AppContextType = {
  inputValue: string;
  setInputValue: (value: string) => void;
  findRecipes: () => Promise<void>;
  results: Recipe[];
  setResults: (value: any[]) => void;
  isLoading: boolean;
  number: number;
  loadMore: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [inputValue, setInputValue] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState<number>(10);

  const findRecipes = async () => {
    if (!inputValue) return;
    setIsLoading(true);

    try {
      const response = await fetch(
        `/api/recipes/recipes?query=${inputValue}&number=${number}`
      );
      if (!response.ok) throw new Error(`Error status: ${response.status}`);
      const json = await response.json();
      setResults(json.results);
    } catch (error: unknown) {
      error instanceof Error && console.error(error.message);
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
        isLoading,
        number,
        loadMore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
