import React, {Component, createRef} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ScalingDrawer from 'react-native-scaling-drawer';
// import AppIntro from './AppIntro'
import Home from './Screen/Homestack/Home';
import Profile from './Screen/Profile';
import LeftMenu from './LeftMenu';
import NavigationService from './NavigationService';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

// const DrawerStack = createDrawerNavigator({
//     screen1 : {screen : AppIntro},
//     screen2 : {screen : AppIntro},
//     screen3 : {screen : AppIntro},
// }, {
//     drawerBackgroundColor : 'black',
//     drawerType: 'slide'
// })
// const AppNavigator = createStackNavigator({
//     Home: { screen: DrawerStack }
//   },
//     {
//         initialRouteName: 'Home',
//         headerMode: 'float',
//         /* The header config from HomeScreen is now here */
//         defaultNavigationOptions: {
//           headerStyle: {
//             backgroundColor: 'black',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         },
//       }
//   )
const AppStack = createStackNavigator(
  {
    Home :{
        screen: Home
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Home',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#2C3A47',
            elevation: 0
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    },
  },
);
export const drawer = createRef();

const defaultScalingDrawerConfig = {
  scalingFactor: 0.8,
  minimizeFactor: 0.6,
  swipeOffset: 20,
};

const MainStack = createAppContainer(AppStack);

class Navigator extends Component {
  render() {
    return (
      <ScalingDrawer
        ref={drawer}
        content={<LeftMenu drawer={drawer} />}
        {...defaultScalingDrawerConfig}
        onClose={() => console.log('close')}
        onOpen={() => console.log('open')}>
        <MainStack
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </ScalingDrawer>
    );
  }
}
export default Navigator;
