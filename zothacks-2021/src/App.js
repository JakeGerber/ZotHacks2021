import React, { Component } from 'react';
import './App.css';

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
      <div className = "Credits">Credits: ZotHacks 2021 Team 11</div>
    );
  }
}


export default App;
