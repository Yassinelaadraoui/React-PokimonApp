import React from 'react';
import './Loading.css'
import pokeball from './pokeball.png'
function Loading(props){
    return(
      <img width="250px" className="w3-display-topmiddle loader w3-spin" src={pokeball} />
    );
}
 export default Loading;
