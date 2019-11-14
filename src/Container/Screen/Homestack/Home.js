import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopNavigator from './TopNavigator';
import {drawer, HomeTab} from '../../Navigator';
import {NavigationEvents} from 'react-navigation';


class Home extends Component {
  static navigationOptions = ({navigation}) => {
    return {
       headerTitle: (
        <Text style={{
          color : '#fff',
          fontWeight: 'bold',
          fontSize : 18
        }}>Home</Text>
       ),

      headerLeft: () => (
        <Icon.Button
          name="bars"
          backgroundColor="#2C3A47"
          color="rgb(10,166,124)"
          // style={{marginLeft : 5}}
          onPress={navigation.getParam('handleDrawer')}></Icon.Button>
      ),
      headerRight: () => (
        <Icon.Button name="search" backgroundColor="#2C3A47"></Icon.Button>
      ),
    };
  };
  componentDidMount() {
    this.props.navigation.setParams({handleDrawer: this._handleDrawer});
  }
  
  _handleDrawer = () => {
    console.log(drawer)
    drawer.current.open();
  };
 
  render() {
 
    return (

      <View style={styles.container}>
          <TopNavigator />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3A47',
    // alignItems : 'flex-start'
    
  },
});
