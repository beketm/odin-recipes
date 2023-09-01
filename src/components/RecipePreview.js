import React from 'react';
import { useNavigate } from 'react-router-dom'      

export default function RecipePreview(props) {
// console.log(props.key)
const navigate = useNavigate()
  return (
    <div className="RecipePreview">
        <button className="recipe" onClick={() => navigate("/full-recipe", {state: props})}>{props.name}</button>
        <ul>

          <img src={require("../imgs/"+props.img)} alt={props.img}/>
          <p>{props.short_description}</p>
        </ul>

    </div>
  );
}

