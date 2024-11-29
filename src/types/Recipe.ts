export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
}

export interface IngredientMatch {
  recipe: Recipe;
  matchPercentage: number;
}