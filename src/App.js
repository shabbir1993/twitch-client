import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//let status = "";
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
    
  }


  getInitialState(){
    return {
      result:bulkResults
    }
  }

  fetchChannel(username){
    fetch(`${CHANNEL}${username}${CLIENT_ID}`).then(
      response => response.json()
    ).then(data =>
      {
        bulkResults.push(data)
        this.setState({
          result:bulkResults
        })
      }
      )
  }
  
  componentWillMount(){
    users.map(item => this.fetchChannel(item));
    console.log("Before Render")
    console.log(bulkResults);
  }   

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Twitch Streamers</h2>
        </div>
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
        
      </div>
    );
  }
}

export default App;
