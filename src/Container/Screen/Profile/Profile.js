import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Profile extends Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={{
        color : 'white',
        fontWeight: 'bold',
      }}>Profile</Text>
     ),
  };
  render() {
    return <View style={styles.container} />;
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow'
  }
});