import React from 'react'
import './index.css';

function BeerCard(props) {
    return (
        <li>
            <img src={props.image_url} alt="cervejas" ></img>
            <div class="div-principal">
            <h3> {props.name} <span>{props.firstbrew}</span></h3>
            <h4>{props.tagline}</h4>

            <p><span>{props.abv}</span>{props.descriptionn}</p>
            <button onClick={()=>{props.handleClick(props.index)}}>fav</button>
              
            
            </div>
            
          
        </li>
    )
}

export default BeerCard