export interface RecipeResponse {
    name: string;
    ingredients: string[];
    steps: string[];
    difficulty: 'Easy' | 'Medium' | 'Hard';
    preparationTime: string;
    cookingTime: string;
  }