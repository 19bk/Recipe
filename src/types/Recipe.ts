export interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: number;
  servings: number;
  matchPercentage: number;
}

export interface IngredientMatch {
  recipe: Recipe;
  matchPercentage: number;
}