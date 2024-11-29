import { Recipe, IngredientMatch } from '../types/Recipe';

export function findMatchingRecipes(availableIngredients: string[]): IngredientMatch[] {
  const normalizedUserIngredients = availableIngredients.map(i => i.toLowerCase().trim());

  return recipes.map(recipe => {
    const matchingIngredients = recipe.ingredients.filter(ingredient =>
      normalizedUserIngredients.includes(ingredient.toLowerCase())
    );

    const matchPercentage = (matchingIngredients.length / recipe.ingredients.length) * 100;

    return {
      recipe,
      matchPercentage
    };
  })
  .filter(match => match.matchPercentage > 50)
  .sort((a, b) => b.matchPercentage - a.matchPercentage);
}