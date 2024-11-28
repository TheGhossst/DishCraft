import { useState } from 'react'
import { NavBar } from "./components/NavBar"
import { IngredientsForm } from './components/IngredientsForm'
import { Ingredient } from './types/Ingredients'

export function App(){
  const [ingredients, setIngredients] = useState<Ingredient[]>([])

  const handleAddIngredient = (ingredient: Ingredient) => {
    setIngredients([...ingredients, ingredient])
  }
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="container mx-auto max-w-2xl space-y-8 p-4">
        <IngredientsForm  onAdd={handleAddIngredient}/>
      </main>
    </div>
  )
}