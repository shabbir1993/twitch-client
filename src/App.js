import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let USER_ID = 0;

class App extends Component {
  constructor(props){
    super(props);

    this.fetchStreams = this.fetchStreams.bind(this);
  }

  fetchStreams(){
      fetch("https://api.twitch.tv/kraken/users/dallas?client_id=rcfc26iizksue4oaw9o3zl5b61m5k9")
    .then(response => response.json()).then(response => 
      {
        USER_ID = response._id;
        console.log(response);
        //console.log(USER_ID);
        fetch("https://api.twitch.tv/kraken/streams/"+USER_ID+"?&client_id=rcfc26iizksue4oaw9o3zl5b61m5k9")
        .then(response => response.json)
        .then(response => 
              {
                console.log(response);
                response.stream ?
                  console.log("User Online"):console.log("User Offline")
              }
            )
      })
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
