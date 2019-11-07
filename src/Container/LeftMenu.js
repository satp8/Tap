import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import NavigationService from './NavigationService';

class LeftMenu extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => {
          NavigationService.navigate('Home');
          this.props.drawer.current.close();
        }}>
          <Text style={styles.txt}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {
          NavigationService.navigate('Profile');
          this.props.drawer.current.close();
        }}>
          <Text style={styles.txt}>Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LeftMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3A47',
    paddingTop: 100,
  },
  btn: {
    height: 40,
    // alignItems: 'center',
    paddingLeft: 50,
    justifyContent: 'center'
  },
  txt : {
     color: 'white',
     fontSize: 20,
     fontWeight: 'bold'
  }
});