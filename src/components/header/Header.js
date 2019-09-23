import React from 'react';
//import './Header.css';

function Header() {
  return (
    
    <nav class="navbar crimson">
        <a href=""  class="navbar-brand align-middle">Navbar</a>
        <form class="form-inline align-middle">
          <input class="form-control mr-sm-2 align-middle" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0 align-middle" type="submit">Search</button>
        </form>
    </nav>

  );
}

export default Header;
