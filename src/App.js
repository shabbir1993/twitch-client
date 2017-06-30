import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let status = "";
const CHANNEL = "https://api.twitch.tv/kraken/channels/";
//const STREAM = "https://api.twitch.tv/kraken/streams/";
const CLIENT_ID = "?&client_id=rcfc26iizksue4oaw9o3zl5b61m5k9";
let users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
let bulkResults = [];

 

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      result: null
    }

    this.fetchChannel = this.fetchChannel.bind(this);
    this.randomOnCheck = this.randomOnCheck.bind(this);
    //this.fetchStream = this.fetchStream.bind(this);
    //this.fetchStreams = this.fetchStreams.bind(this);
    //this.getUserStreaming = this.getUserStreaming.bind(this);
    //this.bulkfetch = this.bulkfetch.bind(this);
  }

  fetchChannel(username){
    fetch(`${CHANNEL}${username}${CLIENT_ID}`).then(
      response => response.json()
    ).then(data =>
      bulkResults.push(data)
      )
  }

  /*fetchStream(username){
    fetch(`${STREAM}${username}${CLIENT_ID}`).then(
      response => response.json()
    ).then(
      data=> {
        data.stream ?
          console.log(data)
          :
          status = "This user is Offline"

      }
    )
  }*/
  
  randomOnCheck(){
    users.map(item => this.fetchChannel(item));
    console.log(bulkResults);
    this.setState({
      result:bulkResults
    })
    console.log("Button Clicked")
  }

  /*fetchStreams(){
      fetch(`${CHANNEL}${USERNAME}${CLIENT_ID}`)
      .then(response => response.json()).then(response =>
      {
        console.log(response);
        this.getUserStreaming(USERNAME);
      });    
  }
*/
  /*getUserStreaming(USERNAME){ 
    fetch(`${STREAM}${USERNAME}${CLIENT_ID}`)
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
  }       */    

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Twitch Streamers</h2>
        </div>
        <p className="App-intro">
          
          <button onClick = {this.randomOnCheck}> Get Streams </button>
          {
            this.state.result ?
            this.state.result.map(item =>
            <div key = {item._id}>
              <ul>
                <li>
                  <img src={item.logo} width = "50px" height = "50px" alt=""/>
                  <a target="blank" href={item.url}>{item.display_name}</a>
                </li>
              </ul>
              </div>
            )
            : ""
          }
        </p>
      </div>
    );
  }
}

export default App;
