import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

var quotes = ["GET FUCKING MONEY", "BE FUCKING NICE TO OTHERS", "DONT BE FUCKING EVIL"];


const AppBarExampleIcon = () => (
  <AppBar
    title='Great Fucking Startup Advice'
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

const FlatButtonExampleSimple = () => (
  <div>
    <FlatButton label="Next Quote" />
    <br />
    <br />
  </div>
);




class App extends Component {
  state =
  {
    clicks: 0
  }




  nextQuote = () => {

    this.setState({ clicks: this.state.clicks + 1 });
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
          <FlatButtonExampleSimple>
          </FlatButtonExampleSimple>
        </MuiThemeProvider>

        <h1 className="App-quotes" >
          {quotes[this.state.clicks]}
        </h1>

      </div>


    );
  }
}

export default App;
