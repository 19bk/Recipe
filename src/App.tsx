import { useState } from 'react';
import { ChefHat, Search, Loader2, Sparkles } from 'lucide-react';
import { Recipe } from './types/Recipe';
import { getRecipeSuggestions } from './services/openai';
import IngredientInput from './components/IngredientInput';
import { RecipeCard } from './components/RecipeCard';

function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [matchingRecipes, setMatchingRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleIngredientsChange = async (newIngredients: string[]) => {
    setIngredients(newIngredients);
    
    if (newIngredients.length === 0) {
      setMatchingRecipes([]);
      return;
    }

    if (newIngredients.length < 2) {
      setError('Please add at least 2 ingredients to get recipe suggestions.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const recipes = await getRecipeSuggestions(newIngredients);
      setMatchingRecipes(recipes);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch recipes. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-amber-50">
      <header className="bg-white/70 backdrop-blur-lg shadow-sm sticky top-0 z-10 border-b border-violet-100">
        <div className="max-w-5xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-violet-500 to-pink-500 p-2 rounded-lg">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 text-transparent bg-clip-text">
                Pantry to Plate
              </h1>
            </div>
            <Sparkles className="h-5 w-5 text-violet-500 animate-pulse" />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Welcome Message */}
        {ingredients.length === 0 && !loading && (
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-violet-600 to-pink-600 text-transparent bg-clip-text">
              Transform Your Ingredients
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              ✨ Enter what you have in your kitchen, and let AI magic create delicious recipes for you!
            </p>
          </div>
        )}

        {/* Ingredient Input */}
        <div className="mb-12 max-w-2xl mx-auto">
          <IngredientInput 
            ingredients={ingredients}
            onChange={handleIngredientsChange}
            disabled={loading}
          />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-16">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-violet-200 border-t-violet-500 rounded-full animate-spin" />
              </div>
              <Loader2 className="h-16 w-16 text-violet-500 animate-pulse mx-auto" />
            </div>
            <p className="text-gray-600 mt-6 text-lg">Cooking up some ideas...</p>
            <p className="text-sm text-gray-500 mt-2">Our AI chef is working their magic</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center py-8 px-6 rounded-2xl bg-red-50 border border-red-100">
              <p className="text-red-600">{error}</p>
              <button 
                onClick={() => handleIngredientsChange(ingredients)}
                className="mt-4 px-6 py-2 bg-red-100 hover:bg-red-200 rounded-full transition-all duration-300 text-red-700"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Results */}
        {!loading && !error && ingredients.length > 0 && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-violet-600 to-pink-600 text-transparent bg-clip-text">
                {matchingRecipes.length 
                  ? `✨ ${matchingRecipes.length} Delicious Possibilities`
                  : 'No matching recipes found'}
              </h2>
              <Search className="h-5 w-5 text-violet-400" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {matchingRecipes.map((recipe, index) => (
                <RecipeCard 
                  key={index} 
                  recipe={recipe}
                  className={`opacity-0 animate-fade-in delay-${index * 100}`}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="mt-auto py-8 text-center">
        <p className="text-gray-500 text-sm">
          Powered by OpenAI • Made with 
          <span className="mx-1 text-pink-500">❤️</span> 
          and a sprinkle of magic
        </p>
      </footer>
    </div>
  );
}

export default App;