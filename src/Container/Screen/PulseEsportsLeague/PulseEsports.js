import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class PulseEsports extends Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={{
        color : 'white',
        fontWeight: 'bold',
      }}>PulseEsports</Text>
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
        <Text> PulseEsports </Text>
      </View>
    );
  }
}
