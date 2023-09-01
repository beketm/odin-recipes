import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'      

export default function FullRecipe(props) {
  const { state } = useLocation();
  const navigate = useNavigate()


  return (
    <div className="full-recipe">
      <button onClick={() => navigate('/odin-recipes')}>Go Back</button>
      <img src={require("../imgs/"+state.img)} alt={state.img}/>
      <p id="ingredients">
      {state.ingredients.map(txt => <p>* {txt}</p>)}
      </p>
      <p id="instructions">
        {state.instructions}
      </p>

    </div>
  );
}
