import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import NavBar, { NavButton, NavButtonText, NavTitle } from "react-native-nav";
import SideMenu from "react-native-side-menu";
import Home from "./home";
import Settings from "./settings";
import Profile from "./profile";

export default class App extends React.Component {
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
  }
});

/*<Link to="/home">
  <Text>{}</Text>
</Link>;*/
