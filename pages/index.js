import { useState } from 'react';
import { fetchRecipesByIngredients, fetchRecipeDetails } from './api/spoonacular';
import RecipeCard from '../components/RecipeCard';
import RecipeDetails from '../components/RecipeDetails';

export default function Home() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = async () => {
    const ingredientList = ingredients.split(',').map(item => item.trim());
    const results = await fetchRecipesByIngredients(ingredientList);
    setRecipes(results);
    setSelectedRecipe(null);
  };

  const handleRecipeClick = async (id) => {
    const recipeDetails = await fetchRecipeDetails(id);
    setSelectedRecipe(recipeDetails);
  };

  const handleCloseDetails = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse md:space-x-6 relative">
        {/* Recipe Details Section */}
        {selectedRecipe && (
          <div className="md:flex-1 md:ml-6 bg-gray-800/90 backdrop-blur-lg shadow-2xl p-4 md:p-6 rounded-lg overflow-auto z-10 mb-4 md:mb-0">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={handleCloseDetails}
            >
              ✕
            </button>
            <RecipeDetails recipe={selectedRecipe} />
          </div>
        )}

        {/* Recipe List Section */}
        <div
          className={`w-full md:w-[45%] flex flex-col justify-center transition-all duration-500`}
        >
          <h1 className="text-4xl font-extrabold text-left mb-8 tracking-wide">
          <span className="text-[#ffd194]">🍎InstaChef</span>
          </h1>
          <div className="flex items-center space-x-4 mb-6 justify-center">
            <input
              type="text"
              placeholder="Enter ingredients (comma separated)"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full px-6 py-3 bg-white/10 border border-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-lg placeholder-gray-400 transition-all duration-300 hover:shadow-lg backdrop-blur-md"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 hover:shadow-2xl transition-all duration-300 text-lg font-semibold transform hover:-translate-y-1"
            >
              Search
            </button>
          </div>

          <div className="space-y-4">
            {recipes.length > 0 && (
              <ul className="space-y-4">
                {recipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} onClick={() => handleRecipeClick(recipe.id)} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}