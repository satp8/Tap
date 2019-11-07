import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import NavigationService from './NavigationService';
import Icon from 'react-native-vector-icons/FontAwesome';

class LeftMenu extends Component {
  render() {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.headerbar}>
          <Icon.Button
            name="bars"
            backgroundColor="#2C3A47"
            color="green"
            onPress={() => this.props.drawer.current.close()}></Icon.Button>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              NavigationService.navigate('Home');
              this.props.drawer.current.close();
            }}>
            <Text style={styles.txt}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              NavigationService.navigate('BrowseTournaments');
              this.props.drawer.current.close();
            }}>
            <Text style={styles.txt}>Browse tournaments</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              NavigationService.navigate('PulseEsports');
              this.props.drawer.current.close();
            }}>
            <Text style={styles.txt}>Pulse Esports League</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              NavigationService.navigate('PlayerLocating');
              this.props.drawer.current.close();
            }}>
            <Text style={styles.txt}>Player/Coach Locating</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              NavigationService.navigate('TokenWallet');
              this.props.drawer.current.close();
            }}>
            <Text style={styles.txt}>Token Wallet</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              NavigationService.navigate('Profile');
              this.props.drawer.current.close();
            }}>
            <Text style={styles.txt}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              NavigationService.navigate('Settings');
              this.props.drawer.current.close();
            }}>
            <Text style={styles.txt}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              NavigationService.navigate('Logout');
              this.props.drawer.current.close();
            }}>
            <Text style={styles.txt}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LeftMenu;

const styles = StyleSheet.create({
  maincontainer : {
    flex : 1,
    backgroundColor: '#2C3A47',
  },

  container: {
    flex: 1,
     justifyContent : 'flex-start',
  
 
  },
  headerbar :{
    flex : 0.2,
    justifyContent : 'center',
    width: "20%",
    paddingLeft: 20
    
    
  },
  btn: {
    height: 40,
    // alignItems: 'center',
    paddingLeft: 50,
    marginBottom: 10,
    // justifyContent: 'center',
  },
  txt: {
    color: 'white',
    fontSize: 16.5,
    fontWeight: 'bold',
  },
});
