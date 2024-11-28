# DishCraft 🍳

DishCraft is a simple and intuitive web application that generates recipe suggestions based on the ingredients you have on hand. Built with React and powered by the Gemini API, it helps users create delicious meals without the need to search through countless recipes online.

## Features

- **Ingredient Management:**  Easily add or remove ingredients you have at home.
- **Recipe Suggestions:** Get tailored recipes instantly based on your available ingredients.
- **Easy-to-Follow Instructions:** Each recipe includes clear preparation steps and cooking tips.
- **User-Friendly Interface:** Clean, responsive design for an effortless experience.

## Tech Stack

- **Frontend:** React.js
- **API:** Gemini API for recipe generation
- **Styling:** Tailwind CSS
- **State Management:** React's built-in state handling

## Getting Started

**Prerequisites**

Before running this project, ensure you have the following installed:

- Node.js (v16+)
- npm or yarn
- Gemini API key (obtain from the Gemini platform)

**Installation**

1. Clone the repository:
```bash
git clone https://github.com/TheGhossst/DishCraft
```
2. Navigate to the project directory
```bash
cd DishCraft
```
3. Install dependencies:
```bash
npm i
```
4. Create an .env file under Dishcraft directory and add your Gemini API key:
```md
VITE_GEMINI_API_KEY=YOUR_API_KEY
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:5173.

# Usage

1. **Add Ingredients:** Enter ingredients you have in the search bar and click "Add Ingredient."
2. **Generate Recipes:** Click the "Get a recipe" button to fetch a recipe suggestion based on the entered ingredients.
3. **Cook Your Meal:** Follow the provided step-by-step instructions and enjoy!