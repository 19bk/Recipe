const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

console.log('API Key status:', {
  exists: !!OPENAI_API_KEY,
  length: OPENAI_API_KEY?.length,
  preview: OPENAI_API_KEY ? `${OPENAI_API_KEY.slice(0, 5)}...` : 'not found'
});

if (!OPENAI_API_KEY) {
  console.error('OpenAI API key is missing. Please check your environment variables.');
}

export async function getRecipeSuggestions(ingredients: string[]): Promise<Recipe[]> {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key is not configured. Please check your environment variables.');
  }

  try {
    console.log('Fetching recipes for ingredients:', ingredients);

    const prompt = `Given these ingredients: ${ingredients.join(', ')}, suggest 3 possible recipes.
    Each recipe should be realistic and possible to make with most of these ingredients.
    Format the response as a JSON array with this exact structure:
    [
      {
        "name": "Recipe Name",
        "ingredients": ["ingredient 1", "ingredient 2", ...],
        "instructions": ["step 1", "step 2", ...],
        "cookingTime": number (in minutes),
        "servings": number,
        "matchPercentage": number (calculate based on matching ingredients)
      }
    ]`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{
          role: "user",
          content: prompt
        }],
        temperature: 0.7,
        max_tokens: 1000,
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API Error:', errorData);
      throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    console.log('OpenAI Response:', data);

    if (!data.choices?.[0]?.message?.content) {
      throw new Error('Invalid response format from OpenAI');
    }

    const recipes = JSON.parse(data.choices[0].message.content);
    
    // Validate the response format
    if (!Array.isArray(recipes)) {
      throw new Error('Invalid recipe format received');
    }

    return recipes.map(recipe => ({
      ...recipe,
      matchPercentage: Math.round(recipe.matchPercentage || 0)
    }));

  } catch (error) {
    console.error('Recipe generation error:', error);
    throw new Error(
      error instanceof Error 
        ? error.message 
        : 'Failed to generate recipes. Please try again.'
    );
  }
} 