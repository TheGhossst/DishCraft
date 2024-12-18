import { useState } from "react"
import { Plus } from 'lucide-react'
import { Ingredient } from "../types/Ingredients"

interface IngredientProps {
    onAdd: (ingredient: Ingredient) => void
}

export function IngredientsForm({ onAdd }: IngredientProps){
    const [ingredient, setIngredient] = useState("")

    function generateRandomString(length = 8) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let result = ''
        const charactersLength = characters.length
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    }
      
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        if (ingredient.trim() && ingredient.match(/^[A-Za-z ]+$/)) {
            const newIngredient: Ingredient = {
                name: ingredient,
                id: generateRandomString(10)
            };
            console.log("Ingredient added:", newIngredient)
            onAdd(newIngredient)
            setIngredient("")
        }
        else{
            alert("Please enter a valid ingredient name")
        }
    } 
    return (
        <form onSubmit={ handleSubmit } className="flex gap-2 my-5">
            <input
                type="text"
                value={ ingredient }
                onChange={ (e) => setIngredient(e.target.value) }
                placeholder="Enter an ingredient"
                className="flex-1 border p-2 rounded-lg shadow-sm transition duration-200 ease-in-out border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 hover:shadow-md hover:border-purple-400"
            />

            <button type="submit" className="flex border bg-black p-2 rounded-lg">
                <Plus className="my-auto h-4 w-4 text-white mx-2" />
                <span className="text-white text-sm my-auto mx-2 font-inter">Add Ingredient</span>
            </button>
        </form>
    )}