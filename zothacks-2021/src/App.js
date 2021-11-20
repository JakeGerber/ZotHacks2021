import React, { Component, useState } from 'react';
import Results from './Results.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    fetch('https://api.randomuser.me/')
      .then(res => res.json())
      .then(json => {
        console.log(json.results[0])
        this.setState({
          items: json.results[0],
        })
      })
  }

  render() {

    return (
      <div classname = "App">
        <Results/>
      </div>
    );
  }
}


export default App;
