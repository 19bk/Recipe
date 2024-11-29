import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Recipe } from '../types/Recipe';

interface RecipeCardProps {
  recipe: Recipe;
  matchPercentage: number;
}

export function RecipeCard({ recipe, matchPercentage }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{recipe.name}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
            {Math.round(matchPercentage)}% match
          </span>
        </div>
        
        <div className="flex items-center gap-4 mb-4 text-gray-600">
          <div className="flex items-center">
            <Clock size={18} className="mr-1" />
            <span>{recipe.cookingTime} mins</span>
          </div>
          <div className="flex items-center">
            <Users size={18} className="mr-1" />
            <span>{recipe.servings} servings</span>
          </div>
          <div className="flex items-center">
            <ChefHat size={18} className="mr-1" />
            <span className="capitalize">{recipe.difficulty}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">Ingredients:</h4>
          <div className="flex flex-wrap gap-2">
            {recipe.ingredients.map((ingredient, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-2">Instructions:</h4>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}