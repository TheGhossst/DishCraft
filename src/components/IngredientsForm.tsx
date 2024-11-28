import { useState } from "react"
import { Plus } from 'lucide-react'

export function IngredientsForm(){
    const [ingredient, setIngredient] = useState("")

    return (
    <form className="flex gap-2 my-5">
        <input
            type="text"
            value={ ingredient }
            onChange={ (e) => setIngredient(e.target.value) }
            pattern="/^[a-zA-Z ]*$/"
            placeholder="Enter an ingredient"
            className="flex-1 border p-2 rounded-lg shadow-sm transition duration-200 ease-in-out border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 hover:shadow-md hover:border-purple-400"
        />

        <button type="submit" className="flex border bg-black p-2 rounded-lg">
            <Plus className="my-auto h-4 w-4 text-white mx-2" />
            <span className="text-white text-sm my-auto mx-2 font-inter">Add Ingredient</span>
        </button>
    </form>
  )}