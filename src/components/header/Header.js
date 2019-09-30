import React from 'react';
import './Header.css';
import pokeball from '../../assets/img/pokeball-white.png'

class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchInput : ''
    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event){

    this.setState({ searchInput: event.target.value});
    this.sendData()

  }
  sendData = () =>  {

         this.props.parentCallback(this.state.searchInput);
  }
  render(){
    return(

      <nav className="navbar crimson w3-cell-row ">
          <img  src={pokeball}  className="navbar-brand w3-display-middle w3-container w3-cell logo" />
          <form className="form-inline w3-display-right w3-container w3-cell">
            <input value={this.state.searchInput}  onChange={this.handleChange} className="form-control mr-sm-2 align-middle" type="text" placeholder="Search" aria-label="Search" />

          </form>
      </nav>

    )
  }


}

export default Header;
