import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const list = [];





class App extends Component {
  



  handleSubmitClick = () => {
    const name = this._name.value;
    const description = this._description.value;
    const price = this._price.value;
    list.push(name,description,price);
    console.log(list);
    // do something with `name`
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" ref={input => this._name = input} />
        </div>
        <div>
          <input type="text" ref={input => this._description = input} />
        </div>
        <div>
          <input type="text" ref={input => this._price = input} />
        </div>
        <div>
          <button onClick={this.handleSubmitClick}>Sign up</button>
        </div>
        <div>
          <h3> {this.list} </h3>
        </div>
      </div>
    );
  }
}

export default App;
