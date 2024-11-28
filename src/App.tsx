import { useState } from 'react'
import { NavBar } from "./components/NavBar"
import { IngredientsForm } from './components/IngredientsForm'
import { Ingredient } from './types/Ingredients'
import { IngredientsList } from './components/IngredientsList'

export function App() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])

  const handleAddIngredient = (ingredient: Ingredient) => {
    setIngredients([...ingredients, ingredient])
  }
  const handleRemoveIngredient = (id: string) => {
    const ingredientToRemove = ingredients.find((i) => i.id === id);
    if (ingredientToRemove) {
      setIngredients(ingredients.filter((i) => i.id !== id));
      console.log(`Removed ${ingredientToRemove.name}`);
    }
    else {
      console.log(`Ingredient with id ${id} not found`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="container mx-auto max-w-2xl space-y-8 p-4">
        <IngredientsForm onAdd={handleAddIngredient} />
        {ingredients.length > 0 && (
          <>
            <IngredientsList ingredients={ingredients} onRemove={handleRemoveIngredient} />
          </>
        )}
      </main>
    </div>
  )
}