import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavBar, { NavButton, NavButtonText, NavTitle } from "react-native-nav";

export default class Settings extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.settingsOutput}>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settingsOutput: {
    textAlign: "center"
  }
});
