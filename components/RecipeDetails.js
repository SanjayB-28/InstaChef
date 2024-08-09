export default function RecipeDetails({ recipe }) {
    return (
      <div className="p-4 md:p-8 space-y-8 text-gray-200">
        <h2 className="text-3xl font-extrabold mb-6 tracking-wide">{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} className="w-full rounded-lg shadow-lg mb-8"/>
        
        <h3 className="text-2xl font-semibold mb-4">Ingredients</h3>
        <ul className="list-disc list-inside space-y-3 leading-relaxed">
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
  
        <h3 className="text-2xl font-semibold mb-4 mt-6">Instructions</h3>
        <div className="leading-relaxed tracking-wide">
          {recipe.instructions ? (
            <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
          )}
        </div>
      </div>
    );
  }