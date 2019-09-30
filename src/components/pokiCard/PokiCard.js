import React from 'react';
import './PokiCard.css'
import pokeball from '../../assets/img/pokeball-red.png'
function PokiCard(props){

  return(
    <div  onClick={()=>{ props.impelementState(props.url)} } className="card mb-3 pokicardParentDiv w3-card" >
      <div className="w3-row no-gutters">
        <div className="w3-col s3  w3-center">
          <img width="100px" src={pokeball} className="card-img" alt="..." />
        </div>
        <div className="w3-col s3  w3-center">

            <h2 className="card-title">{props.name}</h2>


        </div>
      </div>
    </div>
  );
}
export default PokiCard;
