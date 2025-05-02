export type Recipe = {
  id: number;
  title: string;
  image: string;
  vegan?: boolean;
};

export type RecipeCardProps = {
  recipe?: Recipe;
};

export type Ingredient = {
  id: number;
  original: string;
};

export type Step = {
  number: number;
  step: string;
};

export type RecipeData = {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  vegan: boolean;
  vegetarian: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  extendedIngredients: Ingredient[];
  analyzedInstructions: { steps: Step[] }[];
};
