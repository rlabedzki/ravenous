import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Business from '../Business/Business';
import BusinessList from '../BusinessList/BusinessList';

class App extends React.Component{
  render(){
    return(
      <div className="App">
      <h1>ravenous</h1>
      <Business />
      <BusinessList />
    </div>
    );
  }
}

export default App;
