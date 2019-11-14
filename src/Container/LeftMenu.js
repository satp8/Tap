import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
} from 'react-native';
import NavigationService from './NavigationService';
import Icon from 'react-native-vector-icons/FontAwesome';

class LeftMenu extends Component {
  render() {
    return (
      <SafeAreaView style={styles.maincontainer}>
        <View style={styles.headerbar}>
          <Icon.Button
            name="bars"
            backgroundColor="rgb(29, 32, 47)"
            color="rgb(10,166,124)"
            style={{paddingLeft: 0, paddingTop: 10}}
            onPress={() => this.props.drawer.current.close()}></Icon.Button>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              NavigationService.navigate('Home',{
                close : true
              });
              this.props.drawer.current.close();
            }}>
            <Text style={styles.txt}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              NavigationService.navigate('BrowseTournaments', {
                close : true
              });
              this.props.drawer.current.close();
            }}>
            <Text style={styles.txt}>Browse tournaments</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              NavigationService.navigate('PulseEsports', {
                close : true
              });
              this.props.drawer.current.close();
            }}>
            <Text style={styles.txt}>Pulse Esports League</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              NavigationService.navigate('PlayerLocating', {
                close : true
              });
              this.props.drawer.current.close();
            }}>
            <Text style={styles.txt}>Player/Coach Locating</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              NavigationService.navigate('TokenWallet' , {
                close : true
              });
              this.props.drawer.current.close();
            }}>
            <Text style={styles.txt}>Token Wallet</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              NavigationService.navigate('Profile' , {
                close: true
              });
              this.props.drawer.current.close();
            }}>
            <Text style={styles.txt}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              NavigationService.navigate('Settings', {
                close: true
              });
              this.props.drawer.current.close();
            }}>
            <Text style={styles.txt}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              NavigationService.navigate('Logout', {
                close: true
              });
              this.props.drawer.current.close();
            }}>
            <Text style={styles.txt}>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default LeftMenu;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'rgb(29, 32, 47)',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft: Platform.OS === 'ios' ? 20 : 0,
  },
  headerbar: {
    flex: 0.2,
    paddingLeft: Platform.OS === 'ios' ? 20 : 0,
  },
  btn: {
    height: 40,
    marginBottom: 10,
  },
  txt: {
    color: 'white',
    fontSize: 16.5,
    fontWeight: 'bold',
  },
});
