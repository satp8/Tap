import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class PlayerLocating extends Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={{
        color : 'white',
        fontWeight: 'bold',
      }}>PlayerLocating</Text>
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
        <Text> PlayerLocating </Text>
      </View>
    );
  }
}
