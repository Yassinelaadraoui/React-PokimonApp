import React from 'react';
//import './Header.css';

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
          <a href=""  className="navbar-brand w3-center w3-container w3-cell">Navbar</a>
          <form className="form-inline  w3-right w3-container w3-cell">
            <input value={this.state.searchInput}  onChange={this.handleChange} className="form-control mr-sm-2 align-middle" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0 align-middle" type="submit">Search</button>
          </form>
      </nav>

    )
  }


}

export default Header;
