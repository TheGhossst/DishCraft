import { RecipeResponse } from '../types/recipie'

interface RecipeProps {
    recipe: RecipeResponse;
}

export function Recipe({ recipe }: RecipeProps) {
    return (
        <div>
            <h1>{recipe.name}</h1>
            
        </div>
    )
}