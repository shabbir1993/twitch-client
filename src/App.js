import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let status = "";
const USER = "https://api.twitch.tv/kraken/channels/";
const STREAM_URL = "https://api.twitch.tv/kraken/streams/";
let USERNAME = "dota2ruhub";
const CLIENT_ID = "?&client_id=rcfc26iizksue4oaw9o3zl5b61m5k9";
let users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
//let user_results; 

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      status: status
    }


    this.fetchStreams = this.fetchStreams.bind(this);
    this.getUserStreaming = this.getUserStreaming.bind(this);
  }
  

  fetchStreams(){
      fetch(`${USER}${USERNAME}${CLIENT_ID}`)
      .then(response => response.json()).then(response =>
      {
        console.log(response);
        this.getUserStreaming(USERNAME);
      });    
  }

  getUserStreaming(USERNAME){ 
    fetch(`${STREAM_URL}${USERNAME}${CLIENT_ID}`)
        .then(response => response.json())
        .then(response => 
          {
            alert(response);
            console.log(response);
            response.stream ? 
              status = response 
              :console.log("User Offline")
              console.log(status);
          }  
        )
  }           

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <button onClick = {this.fetchStreams}> Get Results </button>
        </p>
      </div>
    );
  }
}

export default App;
