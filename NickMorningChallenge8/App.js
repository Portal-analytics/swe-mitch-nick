import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import NavBar, { NavButton, NavButtonText, NavTitle } from "react-native-nav";
import * as firebase from "firebase";
import SideMenu from "react-native-side-menu";
import Home from "./home";
import Settings from "./settings";
import Profile from "./profile";
import Login from "./login";

//Firebase Setup
var config = {
  apiKey: "AIzaSyAXgmtVApPhL9tHz7M9ic1bFQ4YKaz9Lvs",
  authDomain: "react-native-chat-app-67434.firebaseapp.com",
  databaseURL: "https://react-native-chat-app-67434.firebaseio.com",
  projectId: "react-native-chat-app-67434",
  storageBucket: "react-native-chat-app-67434.appspot.com",
  messagingSenderId: "27458622395"
};
firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();

//Create Firebase object reference
var firebasePosts = firebase.database().ref("Posts");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      myUsername: "",
      message: {
        user: "",
        text: "",
        timestamp: ""
      },
      messages: []
    };
  }

  //Login/Logout Function
  handleLogInButton() {}

  //TextBox Funtions
  clearText(fieldName) {
    this.refs[fieldName].setNativeProps({ text: "" });
  }

  handleTextEditing = input => {
    this.setState({
      ...this.state,
      message: {
        user: this.state.myUsername,
        text: input,
        timestamp: new Date().toTimeString().slice(0, 5)
      }
    });
  };

  handleTextSubmit = messageText => {
    let newMessageList = this.state.messages;
    let newMessage = this.state.message;
    newMessageList.unshift(newMessage);
    firebase.database().ref("Posts").set(newMessageList);

    this.setState({
      ...this.state,
      message: {},
      messages: newMessageList
    });
    this.clearText(messageText);
  };

  //FIREBASE DATA RETRIEVAL IS CURRENTLY NONFUNCTIONAL

  //Retrieves current ratings list from Firebase
  componentWillMount() {
    firebasePosts.on("value", snapshot => {
      this.setState({
        ...this.state,
        messages: snapshot.val() || []
      });
    });
  }

  render() {
    return (
      <View>
        <NativeRouter>
          <View>
            <View>
              <NavBar>
                <View style={styles.topBarProfile}>
                  <Link to="/profile">
                    <Text>Profile</Text>
                  </Link>
                </View>
                <View style={styles.loginButton}>
                  <Login />
                </View>
                <View style={styles.topBarSettings}>
                  <Link to="/settings">
                    <Image
                      source={{
                        uri:
                          "http://iconshow.me/media/images/ui/ios7-icons/png/512/gear.png"
                      }}
                      style={{ width: 40, height: 40 }}
                    />
                  </Link>
                </View>
              </NavBar>
              <Route path="/settings" component={Settings} />
              <Route path="/profile" component={Profile} />
            </View>
          </View>
        </NativeRouter>
        <View>
          <TextInput
            ref={"messageText"}
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={input => this.handleTextEditing(input)}
            onSubmitEditing={() => this.handleTextSubmit("messageText")}
            returnKeyType="send"
            clearButtonMode="always"
            value={this.state.message}
          />
        </View>
        <View>
          {this.state.messages.map(message => <Text>{message.text}</Text>)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBarSettings: {
    flex: 1,
    alignItems: "flex-end"
  },
  topBarProfile: {
    flex: 1,
    alignItems: "flex-start"
  },
  loginButton: {
    flex: 1,
    alignItems: "center"
  }
});
