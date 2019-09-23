import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Header from '../header/Header';
import ContentTable from '../contentTable/ContentTable';


function App() {
  return(

    <React.Fragment>
        <Header />
        <ContentTable />
    </React.Fragment>
  );
}

export default App;
