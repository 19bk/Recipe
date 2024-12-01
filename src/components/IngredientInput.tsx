import { useState, KeyboardEvent } from 'react';
import { X, Plus } from 'lucide-react';

interface IngredientInputProps {
  ingredients: string[];
  onChange: (ingredients: string[]) => void;
  disabled?: boolean;
}

export default function IngredientInput({ 
  ingredients, 
  onChange,
  disabled = false 
}: IngredientInputProps) {
  const [input, setInput] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim() && !disabled) {
      const newIngredients = [...ingredients, input.trim()];
      onChange(newIngredients);
      setInput('');
    }
  };

  const removeIngredient = (indexToRemove: number) => {
    if (!disabled) {
      onChange(ingredients.filter((_, index) => index !== indexToRemove));
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          className="w-full px-4 py-3 rounded-xl border-2 border-violet-200 focus:border-violet-500 
          focus:ring focus:ring-violet-200 focus:ring-opacity-50 transition-all duration-300
          disabled:bg-gray-50 disabled:cursor-not-allowed pl-12"
          placeholder="Add ingredients and press Enter..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
        />
        <Plus className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-violet-400" />
      </div>

      <div className="flex flex-wrap gap-2">
        {ingredients.map((ingredient, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium
            bg-gradient-to-r from-violet-100 to-pink-100 text-gray-700 group hover:from-violet-200 
            hover:to-pink-200 transition-all duration-300"
          >
            {ingredient}
            <button
              type="button"
              className="ml-1 p-0.5 rounded-full hover:bg-violet-200 transition-colors"
              onClick={() => removeIngredient(index)}
              disabled={disabled}
            >
              <X className="h-3.5 w-3.5 text-violet-700" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}