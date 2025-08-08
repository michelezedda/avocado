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
};
