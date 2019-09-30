import React from 'react';
import './PokimonDetailsCard.css'
import Async from 'react-async';
import Loading from '../loading/Loading'
function PokimonDetailsCard(props){
  var apiResults={

  };
const loadData = () =>
    fetch(props.ClickedUrl)
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())






  return(

    <Async promiseFn={loadData}>
      <Async.Loading><Loading /></Async.Loading>
      <Async.Fulfilled>
        {data => {
                console.log(data);
                return (


                  <div className=" PokimonDetailsCard card w3-display-bottommiddle " >
                    <img  src={data.sprites.front_default} className="card-img-top pokimonImg"  />
                    <img  src={data.sprites.back_default} className="card-img-top pokimonImg"  />
                    <div className="card-body">

                      <h3 className="card-title">{data.name}</h3>
                      <div className="w3-row">

                        <p className="card-text w3-col m4 l3"><strong>weight:</strong> {data.weight/10}Kg <br/> <strong>height:</strong> {data.height*10}cm <br/> <strong>Experience:</strong> {data.base_experience}</p>
                        <p className="card-text w3-col m4 l3"><strong>Types:</strong>
                            {
                              data.types.map((type, index) =>{
                                return(
                                  <span> {type.type.name} </span>
                                );
                              })
                            }
                        </p>
                      </div>
                    </div>
                    <ul className="list-group list-group-flush">
                    {
                      data.stats.map((stat, index) =>{
                          return(
                            <li key={index} className="list-group-item">

                              <div className="w3-row">
                                <div className="w3-col m2 l1 "><h4  >{stat.stat.name}</h4></div>
                                <div  className="progress w3-col m4 l1 statbar" style={{width:300}}>

                                  <div  className="progress-bar  progress-bar-striped " role="progressbar" style={{width : stat.base_stat *3, top:1}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                            </li>
                          );

                      })
                    }


                    </ul>
                    <div className="card-body">
                      <button onClick={()=> {props.closeCard()} } type="button" class="btn btn-primary btn-lg btn-block">Close</button>
                    </div>
                  </div>
                );
        }}

        </Async.Fulfilled>
             <Async.Rejected>

               {error => `Something went wrong: ${error.message}`}
             </Async.Rejected>
         </Async>


  );


}
export default PokimonDetailsCard;
