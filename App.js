import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Auth from './app/modules/Auth';
// import Navbar from './app/modules/Navbar'
import Home from './Home'
// import Insight from './app/modules/Insight'
// import Insights from './app/modules/Insights'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
