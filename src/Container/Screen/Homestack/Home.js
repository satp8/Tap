import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopNavigator from './TopNavigator';
import {drawer, HomeTab} from '../../Navigator';
import {NavigationEvents} from 'react-navigation';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
    };
  }
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    console.log('drawer...', params.isDrawerOpen);
    if (params.isDrawerOpen) {
      return {
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false,
        },
      };
    } else {
      return {
        headerTitle: (
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Home
          </Text>
        ),

        headerLeft: () => (
          <Icon.Button
            name="bars"
            backgroundColor="#2C3A47"
            color="rgb(10,166,124)"
            // style={{marginLeft : 20}}
            onPress={navigation.getParam('handleDrawer')}></Icon.Button>
        ),
        headerRight: () => (
          <Icon.Button name="search" backgroundColor="#2C3A47"></Icon.Button>
        ),
      };
    }
  };
  componentDidMount() {
    this.props.navigation.setParams({
      handleDrawer: this._handleDrawer,
      isDrawerOpen: false,
    });
  }
  componentDidUpdate() {
    if (this.props.navigation.getParam('close') === true) {
      this.props.navigation.setParams({close: false});
      this.props.navigation.setParams({isDrawerOpen: false});
      this.setState({
        isDrawerOpen: false,
      });
    }
  }
  _handleDrawer = () => {
 
    this.setState(
      {
        isDrawerOpen: true,
      },
      () => {
        this.props.navigation.setParams({isDrawerOpen : true})
        drawer.current.open();
      },
    );
  };

  render() {
    if (this.state.isDrawerOpen === false) {
      return (
        <View style={styles.container}>
          <TopNavigator />
        </View>
      );
    } else if (this.state.isDrawerOpen === true) {
      return <View pointerEvents={'none'} style={{flex: 1, backgroundColor: '#2C3A47'}}></View>;
    }
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
