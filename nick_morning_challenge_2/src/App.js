import React, { Component } from 'react';
import './App.css';

var quotes = ["FIRE UNDER-FUCKING-PERFORMERS","BE FUCKING 10X BETTER THAN THE ALTERNATIVE","SKIP THE FUCKING CONFERENCE","ACT LIKE YOU KNOW WHAT THE FUCK YOU'RE DOING","QUIT FUCKING TWEETING","MAKE SURE EVERYONE'S ON THE SAME FUCKING PAGE","GET THE LITTLE FUCKING THINGS RIGHT"];


class App extends Component {
  state = {
    clicks: 0
  }
  next_quote = () => {
    if (this.state.clicks === quotes.length -1) {
      this.setState({
      clicks: 0
    })
  }
  else {this.setState({
      clicks: this.state.clicks +1
    })
   } 
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Great Fucking <br></br> Startup Advice</h3>
        </div>
        <button 
        className = "button"
        onClick={(e) => this.next_quote(e)}>
        Fucking Click Me!
        </button>  
        <h1 className="App-quotes">
          {quotes[this.state.clicks]}
        </h1>
      </div>
    );
  }
}

export default App;
