import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

var quotes = ["FIRE UNDER-FUCKING-PERFORMERS", "BE FUCKING 10X BETTER THAN THE ALTERNATIVE", "SKIP THE FUCKING CONFERENCE", "ACT LIKE YOU KNOW WHAT THE FUCK YOU'RE DOING", "QUIT FUCKING TWEETING", "MAKE SURE EVERYONE'S ON THE SAME FUCKING PAGE", "GET THE LITTLE FUCKING THINGS RIGHT"];

const AppBarExampleIcon = () => (
  <AppBar
    title="Great Fucking Startup Advice"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);
const style = {
  margin: 12,
};
const RaisedButtonExample = () => (
  <div>
    <RaisedButton label="Fucking Click Me!" primary={true} style={style} />
  </div>
);


class App extends Component {
  state = {
    clicks: 0,
    num_clicks: 0
  }
  next_quote = () => {
    this.setState({
        num_clicks: this.state.num_clicks + 1
      })
    if (this.state.clicks === quotes.length - 1) {
      this.setState({
        clicks: 0
      })
    }
    else {
      this.setState({
        clicks: this.state.clicks + 1
      })
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <MuiThemeProvider>
            <AppBarExampleIcon></AppBarExampleIcon>
          </MuiThemeProvider>
        </div>
        <MuiThemeProvider>
            <RaisedButtonExample></RaisedButtonExample>
          </MuiThemeProvider>
        {/*<button
          className="button"
          onClick={(e) => this.next_quote(e)}>
          Fucking Click Me!
        </button>*/}
        <h1 className="App-quotes">
          {quotes[this.state.clicks]}
        </h1>
      </div>
    );
  }
}

export default App;
