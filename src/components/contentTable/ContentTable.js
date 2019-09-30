import React from 'react';
import PokiCard from '../pokiCard/PokiCard';

class ContentTable extends React.Component {

    constructor(props){
      super(props);

      this.searchInput = this.props.searchInput;

    }


     sendData(url)  {
            console.log(this.props.searchInput);
           this.props.parentCallback(url);
    }
    render(){
          return(

            <div className="card text-center">

                <div className="card-body cardContainer h-100 d-inline-block">
                {

                    this.props.results.filter(pokimon => new RegExp(this.props.searchInput , 'i').test(pokimon.name)).map((pokimon, index) => {

                        return(
                          <PokiCard impelementState={()=> {this.sendData(pokimon.url)} }  url={pokimon.url} key={index} name={pokimon.name} />
                        );
                    })


                }




                </div>
            </div>




          );
    }


}
export default ContentTable;
