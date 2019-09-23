import React from 'react';

function PokiCard(){
  return(
    <div class="card mb-3 pokicardParentDiv" >
      <div class="row no-gutters">
        <div class="col-md-4">
          <img width="50px" src="https://miro.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png" class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PokiCard;
