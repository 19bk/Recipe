import { Recipe } from '../types/Recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Vegetable Soup',
    ingredients: ['potatoes', 'onions', 'carrots', 'water', 'salt', 'pepper'],
    instructions: [
      'Dice the vegetables into small chunks',
      'Sauté onions until translucent',
      'Add carrots and potatoes',
      'Add water and bring to boil',
      'Simmer for 20 minutes',
      'Season with salt and pepper'
    ],
    cookingTime: 30,
    difficulty: 'easy',
    servings: 4
  },
  {
    id: '2',
    name: 'Roasted Root Vegetables',
    ingredients: ['potatoes', 'carrots', 'onions', 'olive oil', 'rosemary', 'thyme'],
    instructions: [
      'Preheat oven to 400°F (200°C)',
      'Cut vegetables into similar sizes',
      'Toss with olive oil and herbs',
      'Spread on baking sheet',
      'Roast for 25-30 minutes'
    ],
    cookingTime: 35,
    difficulty: 'easy',
    servings: 4
  }
];