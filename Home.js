import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
const backGround = require("./assets/insight_background_2.jpg");

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={backGround}
          style={styles.image1}
          resizeMode="stretch"
        />
        <Text style={styles.logo}>Insights</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  image1: {
    height: 600,
    overflow: "hidden",
    alignSelf: "center",
    minWidth: 320,
    opacity: 1
  },
  logo: {
    backgroundColor: "transparent",
    top: 20.00,
    alignSelf: "center",
    position: "absolute",
    fontSize: 90,
    color: "rgba(63,11,103,1)",
  }
});
