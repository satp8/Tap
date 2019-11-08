import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Settings extends Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={{
        color : 'white',
        fontWeight: 'bold',
      }}>Settings</Text>
     ),
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Settings </Text>
      </View>
    );
  }
}
