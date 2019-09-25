import React from 'react';
//import './Header.css';

function Header(props) {
    var searchInput='';

      console.log(props.searchInput);



//
//  props.searchInput = '';
  const handleChange = function (event){
    searchInput = event.target.value;

  }
    const sendData = () => {
         props.parentCallback(searchInput);
    }
    return(

      <nav className="navbar crimson">
          <a href=""  className="navbar-brand align-middle">Navbar</a>
          <form className="form-inline align-middle">
            <input value={searchInput}  onChange={sendData} className="form-control mr-sm-2 align-middle" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0 align-middle" type="submit">Search</button>
          </form>
      </nav>

    )


}

export default Header;
