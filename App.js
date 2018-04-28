import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './client/components/Auth';
import Navbar from './client/components/Navbar'
import Home from './client/components/Home'
import Insight from './client/components/Insight'
import Insights from './client/components/Insights'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Auth />
        <Navbar />
        <Home />
        <Insight />
        <Insights />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
