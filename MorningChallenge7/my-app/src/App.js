import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexNum: 0,
      numClicks: 0,
      quotes: [
        "Be kind, rewind",
        "Dont hate, appriciate",
        "Only you can prevent forest fires",
        "Be kind to others",
        "Don't annoy the UVA honor commitee"
      ]
    };
  }

  // getNextQuote = e => {
  //   return(
  //   e.setState()({
  //     ...this.state,
  //     indexNum: this.indexNum + 1,
  //     numClicks: this.numClicks + 1
  //   });
  //   )
  //   console.log("its working!");
  // };

  render() {
    return (
      <div className="App">
        <h1>The best darn tootin motivational site!</h1>

        <div className="quotes-area">
          <button
            onClick={() =>
              this.setState({
                ...this,
                numClicks: this.state.numClicks + 1,
                indexNum: this.state.indexNum + 1
              })}
          >
            {" "}Click Me :){" "}
          </button>
          <h1>
            {this.state.quotes[this.state.indexNum]} {this.state.indexNum}
          </h1>

        </div>

      </div>
    );
  }
}

export default App;
