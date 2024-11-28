import { RecipeResponse } from "../types/recipie";

interface RecipeProps {
    recipe: RecipeResponse;
}

export function Recipe({ recipe }: RecipeProps) {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <p className="text-lg font-semibold text-gray-700 mb-2">Suggested Recipe</p>
            <p className="text-2xl font-bold text-gray-900">{recipe.name}</p>
            <p className="mt-2">
                <strong className="text-gray-600">Difficulty:</strong>{" "}
                <span className="text-gray-800">{recipe.difficulty}</span>
            </p>
            <p className="mt-1">
                <strong className="text-gray-600">Preparation Time:</strong>{" "}
                <span className="text-gray-800">{recipe.preparationTime}</span>
            </p>
            <p className="mt-1">
                <strong className="text-gray-600">Cooking Time:</strong>{" "}
                <span className="text-gray-800">{recipe.cookingTime}</span>
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6">Ingredients</h2>
            <ul className="list-disc list-inside space-y-1 mt-2">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-700">
                        {ingredient}
                    </li>
                ))}
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6">Steps</h2>
            <ol className="list-decimal list-inside space-y-2 mt-2">
                {recipe.steps.map((step, index) => (
                    <li key={index} className="text-gray-700">
                        {step}
                    </li>
                ))}
            </ol>
            <p className="text-lg font-semibold text-gray-700 mt-4">Enjoy!!</p>
        </div>
    );
}
