import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Navigator from './src/Container/Navigator'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
     <Navigator />
    );
  }
}
