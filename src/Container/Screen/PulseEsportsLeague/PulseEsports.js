import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

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
    const Data = [
      {
        id: 1,
        name: 'Esports teams',
      },
      {
        id: 2,
        name: 'League standings',
      },
      {
        id: 3,
        name: 'League matches',
      },
    ];

    return (
      <View style={{flex:1}}>
        <FlatList
          horizontal
          data={Data}
          renderItem={({item}) => (
          <Text>{item.name}</Text>
          )}
          keyExtractor={item => item.id}

        />
      </View>
    );
  }
}
