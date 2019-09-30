import React from 'react';
import './PokiCard.css'
function PokiCard(props){

  return(
    <div  onClick={()=>{ props.impelementState(props.url)} } className="card mb-3 pokicardParentDiv w3-card" >
      <div className="w3-row no-gutters">
        <div className="w3-col s3  w3-center">
          <img width="100px" src="https://miro.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png" className="card-img" alt="..." />
        </div>
        <div className="w3-col s3  w3-center">

            <h2 className="card-title">{props.name}</h2>


        </div>
      </div>
    </div>
  );
}
export default PokiCard;
