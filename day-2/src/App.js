import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Person from 'react-icons/lib/md/person-pin'
import Info from 'react-icons/lib/md/info'
import Language from 'react-icons/lib/md/language'



injectTapEventPlugin();


var quotes = ["GET FUCKING MONEY", "BE FUCKING NICE TO OTHERS", 
"DONT BE FUCKING EVIL", "STOP FUCKING AROUND AND GET BACK TO WORK", 
"STOP WATCHING FUCKING NETFLIX ALL DAY YOU FUCKER",
"JUST HIRE A FUCKING LAWYER ALREADY",
"CUT THE FUCKING DEAD WEIGHT",
"BE A FUCKING LEARNING MACHINE "];


const AppBarExampleIcon = () => (
  <AppBar
    title='Great Fucking Startup Advice'
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

const FlatButtonExampleSimple = () => (
  <div>
    <FlatButton label="Next Quote" />
  </div>
);

const FlatButtonExampleRand = () => (
  <div>
    <FlatButton label="Random Quote" />
  </div>
);




class App extends Component {
  state =
  {
    clicks: 0,
    totalClicks: 0
  }


  nextQuote = () => {

    if (this.state.clicks === quotes.length - 1) {
      this.setState({ clicks: 0 });
      this.setState({ totalClicks: this.state.totalClicks + 1 })
    }
    else {
      this.setState({ clicks: this.state.clicks + 1 });
      this.setState({ totalClicks: this.state.totalClicks + 1 })
    }
  }

  nextRand = () => {
    var randNum = Math.floor((Math.random() * quotes.length));
    if(randNum==this.state.clicks)
    {
      this.nextRand();
    }
    else{
     this.setState({ clicks: randNum });
      this.setState({ totalClicks: this.state.totalClicks + 1 })
    }

  }


  render() {
    return (

      <div className='App'>

        <div className='App-header'>
          <MuiThemeProvider>
            <AppBarExampleIcon >
            </AppBarExampleIcon>
          </MuiThemeProvider>
        </div>


        <MuiThemeProvider>
          <div onClick={this.nextQuote}  >
            <FlatButtonExampleSimple />
          </div>

        </MuiThemeProvider>

        <MuiThemeProvider>

          <div onClick={this.nextRand} >
            <FlatButtonExampleRand />
          </div>
        </MuiThemeProvider>




        <h1 className="App-quotes" >
          {quotes[this.state.clicks]}
        </h1>

        <h2 className="Click-Counter">
          Number of Clicks: {this.state.totalClicks}
        </h2>

        <div className="social-media">
        <ul>
         <li><Person/></li> <li><Info/></li> <li><Language/></li>
        </ul>
        </div>

      </div>


    );
  }
}

export default App;
