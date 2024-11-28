import { useState } from 'react'
import { NavBar } from "./components/NavBar"
import { IngredientsForm } from './components/IngredientsForm'
import { Ingredient } from './types/Ingredients'
import { IngredientsList } from './components/IngredientsList'
import { RecipeSuggestion } from './components/RecipeSuggestion'
import { GoogleGenerativeAI } from "@google/generative-ai"
import { RecipeResponse } from './types/recipie'
import { Recipe } from './components/Recipe'


export function App() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [recipe, setRecipe] = useState<RecipeResponse | null>(null)
  const [lastRequestTime, setLastRequestTime] = useState<number | null>(null);


  const handleAddIngredient = (ingredient: Ingredient) => {
    setIngredients([...ingredients, ingredient])
  }

  const handleRemoveIngredient = (id: string) => {
    const ingredientToRemove = ingredients.find((i) => i.id === id)
    if (ingredientToRemove) {
      setIngredients(ingredients.filter((i) => i.id !== id))
      console.log(`Removed ${ingredientToRemove.name}`)
      setRecipe(null)
    } else {
      console.log(`Ingredient with id ${id} not found`)
    }
  }

  const handleRemoveAll = () => {
    setIngredients([])
    console.log("Removed all ingredients")
  }

  const generateRecipe = async () => {
    const now = Date.now();
    if (lastRequestTime && now - lastRequestTime < 30000) {
      alert("Please wait before requesting another recipe.");
      return;
    }
    setLastRequestTime(now);
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash-8b",
      })
      const ingredientNames = ingredients.map(ingredient => ingredient.name)

      const prompt = `Generate a recipe using these ingredients: ${ingredientNames.join(', ')}.
      Provide:
      - Recipe name
      - List of ingredients
      - Detailed cooking steps
      - Difficulty level
      - Preparation time
      - Cooking time

      Respond in strict JSON format:
      {
        "name": string,
        "ingredients": string[],
        "steps": string[],
        "difficulty": "Easy" | "Medium" | "Hard",
        "preparationTime": string,
        "cookingTime": string
      }`

      const result = await model.generateContent(prompt)
      const response = await result.response
      const text = response.text()

      const cleanedText = text.trim().replace(/`/g, '').replace(/^json\s*[{]/, '{')
      console.log(cleanedText)

      try {
        const generatedRecipe: RecipeResponse = JSON.parse(cleanedText)
        setRecipe(generatedRecipe)
        console.log(recipe)
      } catch (error) {
        console.error('Error parsing recipe response:', error)
      }
    } catch (error) {
      console.error('Error generating recipe:', error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="container mx-auto max-w-2xl space-y-8 p-4">
        <IngredientsForm onAdd={handleAddIngredient} />
        {ingredients.length > 0 && (
          <>
            <IngredientsList ingredients={ingredients} onRemove={handleRemoveIngredient} removeAll = {handleRemoveAll} />
            <RecipeSuggestion generateRecipie={generateRecipe} />
            {recipe && <Recipe recipe = {recipe}/>}
          </>
        )}
      </main>
    </div>
  )
}