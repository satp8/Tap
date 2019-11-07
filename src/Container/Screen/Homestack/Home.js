import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopNavigator from './TopNavigator';
import {drawer, HomeTab} from '../../Navigator';

class Home extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Home',

      headerLeft: () => (
        <Icon.Button
          name="bars"
          backgroundColor="#2C3A47"
          color="green"
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
   
  },
});
