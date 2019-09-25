import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import Header from '../header/Header';
import ContentTable from '../contentTable/ContentTable';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchInput:'',
      pokimons: []

    };
  }

  componentDidMount() {

   fetch("https://pokeapi.co/api/v2/pokemon/?limit=811")
     .then(res => res.json())
     .then(
       (result) => {
         this.setState({

           pokimons: result.results
         });

       },
       // Note: it's important to handle errors here
       // instead of a catch() block so that we don't swallow
       // exceptions from actual bugs in components.
       (error) => {
         this.setState({

           error
         });
       }
     )
  }

  callbackFunction = (childData) => {
      this.setState({searchInput: childData})
  }

  render() {
    return(

      <React.Fragment>
          <Header searchInput={this.state.searchInput} parentCallback = {this.callbackFunction} />
          <ContentTable  results={this.state.pokimons} />
      </React.Fragment>
    );
  }
}

export default App;
