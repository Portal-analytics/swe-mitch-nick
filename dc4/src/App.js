import React, { Component } from "react";
import "./App.css";
import * as firebase from 'firebase';

let config = {
  apiKey: "AIzaSyAfueo83UF2FqlxXIfzl_tJo8T3W4lBb3I",
  authDomain: "daily-challenge-6.firebaseapp.com",
  databaseURL: "https://daily-challenge-6.firebaseio.com",
  projectId: "daily-challenge-6",
  storageBucket: "daily-challenge-6.appspot.com",
  messagingSenderId: "211076160675"
};
firebase.initializeApp(config);

var readFromFirebase = firebase.database().ref("firebase_list");

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      price: "",
      list: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange = e => {
    this.setState({
      ...this.state,
      name: e.target.value
    });
  };

  handleDescriptionChange = e => {
    this.setState({
      ...this.state,
      description: e.target.value
    });
  };

  handlePriceChange = e => {
    this.setState({
      ...this.state,
      price: e.target.value
    });
  };

  //COME BACK AND FUCK WITH THIS UNTIL IT WORKS. Tried adding temp_index to state in order to reference the index when editing.

  handleSubmit() {
    var temp_index = this.state.index || 0;
    const contract = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      index: temp_index
    };

    var tempList = this.state.list;
    tempList.push(contract);
    this.setState({
      ...this.state,
      list: tempList
    });
    firebase.database().ref('firebase_list').set(
      this.state.list
    );
  }

  componentWillMount() {
    readFromFirebase.on('value', (snapshot) => {
      const val = snapshot.val();
      debugger;
      this.setState({
        ...this.state,
        list: val || []
      })
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input type="text" onChange={e => this.handleNameChange(e)} />
          </label>
          <label>
            Description:
            <input
              type="text"
              onChange={e => this.handleDescriptionChange(e)}
            />
          </label>
          <label>
            Price:
            <input type="text" onChange={e => this.handlePriceChange(e)} />
          </label>
          <div>
            <button type="button" onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
        <Table list={this.state.list} onRowChange={(newName, newDescription, newPrice, index) => this.changeRow(newName, newDescription, newPrice, index)}
        />
      </div>
    );
  }
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: "",
      newDescription: "",
      newPrice: "",
      editing: false,
      newIndex: 0
    };
  }

  beginEdit(index) {
    this.setState({
      newName: "",
      newDescription: "",
      newPrice: "",
      editing: true,
      newIndex: index
    });
  }

  handleInputChange(field, e) {
    this.setState({
      ...this.state,
      [field]: e.target.value
    });
  }

  changeRow(newName, newDescription, newPrice, index) {
    const changedCell = {
      ...this.state,
      name: newName,
      description: newDescription,
      price: newPrice
    };
    var newContracts = this.state.list;
    newContracts[index] = changedCell;
    this.setState({
      ...this.state,
      list: newContracts
    });
    firebase.database().ref('list').set({
      list: newContracts
    });
  }

  handleResubmit() {
    this.onRowChange(
      this.state.newName,
      this.state.newDescription,
      this.state.newPrice,
      this.state.changeEdit
    );
    this.setState({
      ...this.state,
      editing: false
    });
  }

  render() {
    let contract_cells = this.props.list.map((x, index) => (
      <tbody>
        <tr>
          <td>{x.name}</td>
          <td>{x.description}</td>
          <td>{x.price}</td>
          <button type="button" onClick={e => this.beginEdit(index)}>
            {" "}Edit{" "}
          </button>
        </tr>
      </tbody>
    ));

    if (this.state.editing) {
      contract_cells[this.state.newIndex] = (
        <form>
          <input
            type="text"
            placeholder="New Name"
            onChange={e => this.handleInputChange("newName", e)}
          />
          <input
            type="text"
            placeholder="New Description"
            onChange={e => this.handleInputChange("newDescription", e)}
          />
          <input
            type="text"
            placeholder="New Price"
            onChange={e => this.handleInputChange("newPrice", e)}
          />
          <button type="button" onClick={this.handleResubmit}>Done</button>
        </form>
      );
    }
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th> Name </th>
              <th> Description </th>
              <th> Price </th>
              {contract_cells}
            </tr>
          </tbody>

        </table>
      </div>
    );
  }
}

export default App;