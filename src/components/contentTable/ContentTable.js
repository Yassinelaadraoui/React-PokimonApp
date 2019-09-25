import React from 'react';
import PokiCard from '../pokiCard/PokiCard';
function ContentTable(props) {
    const pokimons = props.results;



          return(

            <div className="card text-center">
                <div className="card-header">
                  <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                  </ul>
                </div>
                <div className="card-body cardContainer h-100 d-inline-block">
                {  pokimons.map((pokimon, index) => {
                  return(
                    <PokiCard key={index} name={pokimon.name} />
                  );
                })
                }




                </div>
            </div>




          );


}
export default ContentTable;
