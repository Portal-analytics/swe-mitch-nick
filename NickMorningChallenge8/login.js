import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";

export default class Login extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.handleLogInButton()}>
        {!this.state.loggedIn && <Text>Log In</Text>}
        {this.state.loggedIn && <Text>Log Out</Text>}
      </TouchableOpacity>
    );
  }
}
