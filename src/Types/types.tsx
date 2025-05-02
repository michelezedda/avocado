export type Recipe = {
  id: number;
  title: string;
  image: string;
  vegan?: boolean;
};

export type Ingredient = {
  id: number;
  original: string;
};

export type Step = {
  number: number;
  step: string;
};
