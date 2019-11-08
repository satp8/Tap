import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TokenWallet extends Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={{
        color : 'white',
        fontWeight: 'bold',
      }}>TokenWallet</Text>
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
        <Text> TokenWallet </Text>
      </View>
    );
  }
}
