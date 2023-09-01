import './App.css';
import RecipePreview from './components/RecipePreview';
import recipes from './recipes.json'

function App() {

  const recipesList = recipes.map(recipe => 
     <RecipePreview  
      key={recipe.id}  
      name={recipe.name} 
      img={recipe.img}
      short_description={recipe.short_description}
      ingredients = {recipe.ingredients}
      instructions = {recipe.instructions}
    />
  )
  
  return (
    <div className="App">
      <h1>My recipes</h1>
      <div className='recipesList'>
        {recipesList}
      </div>
    </div>
  );
}

export default App;
