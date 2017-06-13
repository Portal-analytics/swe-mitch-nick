import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import NavBar, { NavButton, NavButtonText, NavTitle } from "react-native-nav";
import Home from "./home";
import Settings from "./settings";
import Profile from "./profile";

export default class App extends React.Component {
  render() {
    return (
      <View>

        <View>
          <NavBar>
            <View style={styles.topBar}>
              <NavButton onPress={() => alert("hi")}>
                <NavButtonText>
                  {"Settings"}
                </NavButtonText>
              </NavButton>
            </View>
          </NavBar>
        </View>

        <View>
          <NativeRouter>
            <View>
              <View>
                <Link to="/home">
                  <Text>Home</Text>
                </Link>
                <Link to="/settings">
                  <Text>Settings</Text>
                </Link>
                <Link to="/profile">
                  <Text>Profile</Text>
                </Link>
              </View>

              <Route exact path="/home" component={Home} />
              <Route path="/settings" component={Settings} />
              <Route path="/profile" component={Profile} />
            </View>
          </NativeRouter>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    flex: 1,
    alignItems: "flex-end"
  }
});
