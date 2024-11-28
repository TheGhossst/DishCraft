import { useState } from "react"
import { Plus } from 'lucide-react'

export function IngredientsForm(){
    const [ingredient, setIngredient] = useState("")

    return (
    <form className="flex gap-2 my-5">
      <input
        type="text"
        value={ ingredient }
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Enter an ingredient"
        className="flex-1 border p-2 rounded-lg"
      />
      <button type="submit" className="border bg-black p-2 rounded-lg">
        <Plus className="h-4 w-4 text-white " />
      </button>
    </form>
  )}