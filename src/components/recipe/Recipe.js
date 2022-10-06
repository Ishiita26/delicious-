import React from 'react'
import './recipe.css'
import {GiForkKnifeSpoon} from 'react-icons/gi'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
      <>
    <div className='card'>
      <div className='card__title' >
      <h3>{title} 
      <GiForkKnifeSpoon/>
      <p>Calories : {calories}</p>
      </h3>

      <img src={image} alt="" className='card__image'/>
     

      <div className='card__ingredient'>
      <button type="button" class="btn btn-light">Ingredients</button>

      <ol>{ingredients.map((ingredient)=>{
      return <li>{ingredient.text}</li>
      })}</ol>
      </div>
      </div>
    </div>
    </>
  )
}

export default Recipe
