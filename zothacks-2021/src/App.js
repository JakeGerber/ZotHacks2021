import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Results from './Results.js';
import Home from './Home.js';
import Question_Page from './Questions/Question_single_test';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    /*
    fetch('https://api.randomuser.me/')
      .then(res => res.json())
      .then(json => {
        //console.log(json.results[0])
        this.setState({
          items: json.results[0],
        })
      })
      */

      //add a .catch
      //fetch('/2.0/?method=tag.getsimilar&tag=disco&api_key={c6a890028d9da98b544e2809c3ce7758}&format=json'
      var apikey = "c6a890028d9da98b544e2809c3ce7758"
      var url = `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco&api_key=${apikey}&format=json`
      fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json.albums.album)
        this.setState({
          items: json.albums.album,
        })
        console.log(this.state.items[0])
      })
  }



//}
//look into destructing the values
  render() {
    return (
      <div classname = "App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/question">
              <Question_Page />
            </Route>
            <Route path="/result">
              <Results />
            </Route>
          </Switch>
        </Router>
        <div className = "Credits">Credits: ZotHacks 2021 Team 11</div>
      </div>
    );
  }
}


export default App;


// Old render code:
/* render() {


    if (this.state.items.length === 0)
    {return null}
    const {name, artist, image} = this.state.items[0]
    const artistname = artist.name
    const imageURL = image[2]["#text"]


    return (
      <div classname = "App">
        Data has been loaded!
        Here^^
        {name}
        {artistname}
        <img src= {imageURL} />
        {JSON.stringify(this.state.items[0], null, 4)}
        <Home />
      

      
      <div className = "Credits">Credits: ZotHacks 2021 Team 11</div>
      </div>
    );
  } */ 