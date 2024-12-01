import React from 'react';
import { Clock, Users, ChefHat, Sparkles } from 'lucide-react';
import { Recipe } from '../types/Recipe';

interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, className = '' }) => {
  return (
    <div 
      className={`group bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl 
      transition-all duration-300 border border-violet-100 overflow-hidden ${className}`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start gap-4 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 leading-tight group-hover:text-violet-600 transition-colors">
            {recipe.name}
          </h3>
          <div className="shrink-0 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-violet-500" />
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-violet-100 text-violet-800">
              {recipe.matchPercentage}% match
            </span>
          </div>
        </div>
        
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600 text-sm">
          <div className="flex items-center px-3 py-1 rounded-full bg-pink-50">
            <Clock size={16} className="mr-1.5 text-pink-500" />
            <span>{recipe.cookingTime} mins</span>
          </div>
          <div className="flex items-center px-3 py-1 rounded-full bg-amber-50">
            <Users size={16} className="mr-1.5 text-amber-500" />
            <span>{recipe.servings} servings</span>
          </div>
          <div className="flex items-center px-3 py-1 rounded-full bg-violet-50">
            <ChefHat size={16} className="mr-1.5 text-violet-500" />
            <span className="capitalize">{recipe.difficulty || 'Medium'}</span>
          </div>
        </div>

        {/* Ingredients */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
            <span>Ingredients</span>
            <div className="h-px flex-1 bg-gray-200" />
          </h4>
          <div className="flex flex-wrap gap-2">
            {recipe.ingredients.map((ingredient, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-violet-50 to-pink-50 text-gray-700 border border-violet-100"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
            <span>Instructions</span>
            <div className="h-px flex-1 bg-gray-200" />
          </h4>
          <ol className="space-y-3">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="flex gap-3 text-gray-600 group/step">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-violet-100 to-pink-100 
                  text-violet-700 flex items-center justify-center text-sm font-medium group-hover/step:from-violet-200 
                  group-hover/step:to-pink-200 transition-all">
                  {index + 1}
                </span>
                <span className="flex-1 group-hover/step:text-gray-900 transition-colors">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};