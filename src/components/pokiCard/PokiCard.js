import React from 'react';

function PokiCard(props){

  return(
    <div className="card mb-3 pokicardParentDiv" >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img width="50px" src="https://miro.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png" className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PokiCard;
