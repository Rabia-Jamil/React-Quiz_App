import React, { Component } from 'react';
import './App.css';
import Router from './router';


class App extends Component {
  constructor(props){
    super(props)
  }
  //category(index) { this.setState({ currentCategory: this.state.quiz[index] }) }

  render() {
    return (
      <div className="App">
       <Router/>
      </div>
    );
  }
}

export default App;
