# Pantry to Plate 🥘

A modern, minimalistic recipe finder application that helps you discover recipes based on ingredients you already have in your kitchen. Built with React, TypeScript, and Tailwind CSS.

![Main Interface](https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2000)

## Features

- 🔍 **Smart Recipe Matching**: Find recipes based on ingredients you have
- 🏷️ **Interactive Ingredient Input**: Easy-to-use tag-based ingredient management
- 📊 **Match Percentage**: See how well recipes match your available ingredients
- ⏱️ **Cooking Information**: View cooking time, servings, and difficulty level
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices

## Screenshots

### Main Interface
[Screenshot of the main interface showing the ingredient input and recipe cards]

### Recipe Cards
[Screenshot showing detailed recipe cards with match percentage]

### Ingredient Input
[Screenshot of the ingredient input system with tags]

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite

## Project Structure

```
src/
├── components/
│   ├── IngredientInput.tsx    # Ingredient input component
│   └── RecipeCard.tsx         # Recipe display component
├── data/
│   └── recipes.ts             # Recipe database
├── types/
│   └── Recipe.ts              # TypeScript interfaces
├── utils/
│   └── recipeMatch.ts         # Recipe matching logic
└── App.tsx                    # Main application component
```

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Enter Ingredients**:
   - Type an ingredient into the input field
   - Press Enter to add it to your list
   - Click the X button to remove ingredients

2. **View Recipes**:
   - Matching recipes appear automatically
   - Each recipe shows:
     - Match percentage with your ingredients
     - Complete ingredient list
     - Step-by-step instructions
     - Cooking time and servings

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/)
- Styling powered by [Tailwind CSS](https://tailwindcss.com/)
- Built with [Vite](https://vitejs.dev/)