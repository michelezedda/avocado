export type AppContextType = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  results: Result[];
  setResults: React.Dispatch<React.SetStateAction<Result[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  favoriteList: Result[];
  setFavoriteList: React.Dispatch<React.SetStateAction<Result[]>>;
  addToFavorite: (currentRecipe: Recipe) => void;
  fetchRecipes: () => void;
};

export type Result = {
  id: number;
  image: string;
  name: string;
  cuisine: string;
  rating: number;
};

export type Recipe = Result & {
  servings: number;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  ingredients: string[];
  instructions: string[];
};

export type CardProps = {
  title: string;
  pic: string;
  step: number;
  middle: boolean;
};
