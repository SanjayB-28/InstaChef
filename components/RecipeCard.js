export default function RecipeCard({ recipe, onClick }) {
  return (
    <li
      className="bg-gray-800/80 backdrop-blur-lg p-4 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 flex items-center space-x-4"
      onClick={onClick}
    >
      <div className="flex-shrink-0">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-16 h-16 rounded-lg object-cover md:w-24 md:h-24"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-semibold">{recipe.title}</h3>
        <p className="text-sm text-gray-400">Used ingredients: {recipe.usedIngredients.length}</p>
        <p className="text-sm text-gray-400">Missed ingredients: {recipe.missedIngredients.length}</p>
      </div>
    </li>
  );
}