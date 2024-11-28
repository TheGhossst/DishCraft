export function RecipeSuggestion() {
    return (
        <div className="flex bg-[#F0EFEB] p-6 rounded-lg shadow-lg space-x-6 items-center">
            <div className="flex-1">
                <p className="text-xl font-semibold text-gray-800">Ready for a recipe?</p>
                <p className="text-gray-600">Generate a recipe from your list of ingredients.</p>
            </div>
            <button className="px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300">Get a recipe</button>
        </div>

    )
}