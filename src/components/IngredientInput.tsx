import React, { useState } from 'react';
import { X } from 'lucide-react';

interface IngredientInputProps {
  onIngredientsChange: (ingredients: string[]) => void;
}

export function IngredientInput({ onIngredientsChange }: IngredientInputProps) {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');

  const addIngredient = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim()) {
      const newIngredients = [...ingredients, currentInput.trim()];
      setIngredients(newIngredients);
      onIngredientsChange(newIngredients);
      setCurrentInput('');
    }
  };

  const removeIngredient = (index: number) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
    onIngredientsChange(newIngredients);
  };

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={addIngredient} className="mb-4">
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          placeholder="Enter an ingredient..."
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>
      <div className="flex flex-wrap gap-2">
        {ingredients.map((ingredient, index) => (
          <span
            key={index}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
          >
            {ingredient}
            <button
              onClick={() => removeIngredient(index)}
              className="ml-2 focus:outline-none"
            >
              <X size={14} />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}