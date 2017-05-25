import React, { Component } from 'react';
import './App.css';


var quotes=["GET FUCKING MONEY","BE FUCKING NICE TO OTHERS","DONT BE FUCKING EVIL"];

class App extends Component {
  state=
  {
    clicks: 0
  }

nextQuote = () => {

  this.setState({clicks:this.state.clicks+1});
  }


  render(){ 
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>
          Great Fucking
          <br></br>
          Startup Advice 
          </h2>
        </div>
        <button 
            className="button"
            onClick={(e) => {this.nextQuote(this)}}>    
            Click4Quotes!
        </button>
        <h1 className="App-quotes" >
          {quotes[this.state.clicks]}
        </h1>
      </div>
    );
  }
}

export default App;
