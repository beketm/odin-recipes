import React from 'react';

export default function RecipePreview(props) {
// console.log(props.key)
  return (
    <div className="RecipePreview">
        <h4>{props.name}</h4>
        <ul>
          {/* <img src={"./imgs/pasta.jpg"} alt={props.img}/> */}
          <img src={require("../imgs/"+props.img)} alt={props.img}/>
          <p>{props.short_description}</p>
        </ul>

    </div>
  );
}

