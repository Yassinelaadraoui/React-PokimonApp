import React from 'react';
import PokiCard from '../pokiCard/PokiCard';
function ContentTable() {
    return(

      <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-pills card-header-pills">
              <li class="nav-item">
                <a class="nav-link active" href="#">Active</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
          <div class="card-body cardContainer h-100 d-inline-block">
            <PokiCard />
            <PokiCard />
            <PokiCard />


          </div>
      </div>




    );
}
export default ContentTable;
