import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Logout extends Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={{
        color : 'white',
        fontWeight: 'bold',
      }}>Logout</Text>
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
        <Text> Logout </Text>
      </View>
    );
  }
}
