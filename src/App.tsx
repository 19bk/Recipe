import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';
import { IngredientInput } from './components/IngredientInput';
import { RecipeCard } from './components/RecipeCard';
import { findMatchingRecipes } from './utils/recipeMatch';
import { IngredientMatch } from './types/Recipe';

function App() {
  const [matchingRecipes, setMatchingRecipes] = useState<IngredientMatch[]>([]);

  const handleIngredientsChange = (ingredients: string[]) => {
    if (ingredients.length > 0) {
      const matches = findMatchingRecipes(ingredients);
      setMatchingRecipes(matches);
    } else {
      setMatchingRecipes([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <ChefHat className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">
              Pantry to Plate
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            What's in your kitchen?
          </h2>
          <p className="text-gray-600">
            Enter the ingredients you have, and we'll show you what you can make!
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <IngredientInput onIngredientsChange={handleIngredientsChange} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {matchingRecipes.map(({ recipe, matchPercentage }) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              matchPercentage={matchPercentage}
            />
          ))}
        </div>

        {matchingRecipes.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            Add some ingredients to see matching recipes!
          </div>
        )}
      </main>
    </div>
  );
}

export default App;