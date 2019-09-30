import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import Header from '../header/Header';
import ContentTable from '../contentTable/ContentTable';
import PokimonDetailsCard from '../PokimonDetailsCard/PokimonDetailsCard';
import Loading from '../loading/Loading';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchInput:'',
      pokimons: [],
      stateOfPokimonDetailsCard : false,
      ClickedUrl: ''

    };
    this.urlToGetAllPokimons = "https://pokeapi.co/api/v2/pokemon/?limit=811";
  }

  CallApi(Url){

    fetch(Url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({

            pokimons: result.results
          });

        },

        (error) => {
          this.setState({error});
        }
      )
  };
  componentDidMount() {
    this.CallApi(this.urlToGetAllPokimons);

  }

  SetSearchInputIntoState = (childData) => {
      this.setState({searchInput: childData})
      console.log(this.state)
  }
  GetUrlOfClickedPokimonAndShowPokemonDetails = (childData) => {

      this.setState({
        ClickedUrl: childData,
        stateOfPokimonDetailsCard: true
      });

  }
  ClosePokimonDetailsCard = () => {

      this.setState({

        stateOfPokimonDetailsCard: false
      });

  }

  render() {
    return(

      <React.Fragment>
          <Header searchInput={this.state.searchInput} parentCallback = {this.SetSearchInputIntoState} />

         { this.state.stateOfPokimonDetailsCard ?  <PokimonDetailsCard closeCard={this.ClosePokimonDetailsCard} ClickedUrl={this.state.ClickedUrl}  stateOfPokimonDetailsCard={this.state.stateOfPokimonDetailsCard}  /> : null }
         { !this.state.stateOfPokimonDetailsCard ?  <ContentTable searchInput = {this.state.searchInput} parentCallback={this.GetUrlOfClickedPokimonAndShowPokemonDetails} results={this.state.pokimons}  /> : null }

      </React.Fragment>
    );
  }
}

export default App;
