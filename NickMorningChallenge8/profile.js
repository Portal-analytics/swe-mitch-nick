import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Profile extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.profileOutput}>Profile</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  profileOutput: {
    textAlign: "center"
  }
});
