type Result = {
  id: number;
  image: string;
  name: string;
  cuisine: string;
  rating: number;
};

type Recipe = Result & {
  servings: number;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  ingredients: string[];
  instructions: string[];
};

export { Result, Recipe };
