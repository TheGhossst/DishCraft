import { Ingredient } from "../types/Ingredients"
import { X } from 'lucide-react'

interface IngredientsListProps {
    ingredients: Ingredient[]
}

export function IngredientsList({ ingredients }: IngredientsListProps) {
    return (
        <div className="space-y-4">
            <div className=" bg-yellow-200 py-2 px-4 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 ">
                <p className="text-3xl font-extrabold text-indigo-600 mb-5">Ingredients on hand:</p>
                <ol className="space-y-2 pl-5 text-black-500">
                    {ingredients.map((ingredient) => (
                        <li key={ingredient.id} className="flex items-center justify-between">
                            <span>• {ingredient.name}</span>
                            <button className="bg-transparent text-gray-600 border-0 font-semibold py-2 px-2 rounded-lg hover:text-black hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out">
                                <X className="h-4 w-4" />
                                <span className="sr-only">Remove {ingredient.name}</span>
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}