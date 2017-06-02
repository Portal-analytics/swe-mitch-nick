import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state =
  {
    clicks: 0,
    totalClicks: 0,
    quotes: ["GET MONEY", "BE NICE TO OTHERS",
      "DONT BE EVIL", "STOP MESSING AROUND AND GET BACK TO WORK",
      "STOP WATCHING NETFLIX ALL DAY YOU COUCH POTATO",
      "JUST HIRE A LAWYER ALREADY",
      "CUT THE DEAD WEIGHT",
      "BE A LEARNING MACHINE "]
  }

  nextQuote = () => {
    if (this.state.clicks === this.state.quotes.length - 1) {
      this.setState({ clicks: 0 });
      this.setState({ totalClicks: this.state.totalClicks + 1 })
    }
    else {
      this.setState({ clicks: this.state.clicks + 1 });
      this.setState({ totalClicks: this.state.totalClicks + 1 })
    }
  }

  randomQuote = () => {
    var randNum = Math.floor((Math.random() * this.state.quotes.length));
    if (randNum == this.state.clicks) {
      this.randomQuote();
    }
    else {
      this.setState({ clicks: randNum });
      this.setState({ totalClicks: this.state.totalClicks + 1 })
    }

  }

  render() {
    return (
      <div >
        <div>
          <h1>Best Freaking Startup Advice</h1>
        </div>
        <div className='Next Quote Button'>
          <button type='button' onClick={e => this.nextQuote()}>Next Quote</button>
        </div>
        <div className='Random Quote Button'>
          <button type='button' onClick={e => this.randomQuote()}>Random Quote</button>
        </div>
        <div className='Quote'>
          <h2> {this.state.quotes[this.state.clicks]}</h2>
        </div>
        <div className='Clicks'>
          <h2> Total Clicks:{this.state.totalClicks}</h2>
        </div>
      </div>


    );
  }
}

export default App;
