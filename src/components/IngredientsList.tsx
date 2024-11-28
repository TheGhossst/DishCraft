import { Ingredient } from "../types/Ingredients"

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
                        </li>
                    ))}
                </ol>


            </div>
        </div>
    )
}