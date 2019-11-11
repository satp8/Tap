import React, {Component, createRef} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ScalingDrawer from 'react-native-scaling-drawer';
// import AppIntro from './AppIntro'
import Home from './Screen/Homestack/Home';
import Profile from './Screen/Profile/Profile';
import Logout from './Screen/Logout/Logout';
import PlayerLocating from './Screen/PlayerLocating/PlayerLocating';
import Settings from './Screen/Settings/Settings';
import TokenWallet from './Screen/TokenWallet/TokenWallet';
import PulseEsports from './Screen/PulseEsportsLeague/PulseEsports';
import BrowseTournaments from './Screen/BrowseTournaments/BrowseTournaments';
import LeftMenu from './LeftMenu';
import Auth from './Screen/Auth/Authscreen';
import NavigationService from './NavigationService';

import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import {View} from 'react-native';


const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    BrowseTournaments: {
      screen: BrowseTournaments,
    },
    PulseEsports: {
      screen: PulseEsports,
    },
    PlayerLocating: {
      screen: PlayerLocating,
    },
    TokenWallet: {
      screen: TokenWallet,
    },
    Profile: {
      screen: Profile,
    },
    Settings: {
      screen: Settings,
    },
    Logout: {
      screen: Logout,
    },
    
  },
  {
    initialRouteName: 'Home',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2C3A47',
        elevation: 0,
      },
      headerLeftContainerStyle: {
        paddingLeft: 10,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
const AppSwitch = createSwitchNavigator(
  {
    Auth: {
      screen: Auth,
    },
    AppStack: {
      screen: AppStack,
    },
  },
  {
    initialRouteName: 'Auth',
  },
);
export const drawer = createRef();

const defaultScalingDrawerConfig = {
  scalingFactor: 0.8,
  minimizeFactor: 0.6,
  swipeOffset: 20,
};

const MainStack = createAppContainer(AppSwitch);

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen : false
    }
 
  }
  render() {
    return (
      <ScalingDrawer
        ref={drawer}
        onOpen={() => {
          this.setState({
            isOpen : true
          })
        }}
        onClose={() => {
          this.setState({
            isOpen : false
          })
        }}
        content={<LeftMenu drawer={drawer} />}
        {...defaultScalingDrawerConfig}
        frontStyle={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 7,
          },
          
          shadowOpacity: 0.43,
          shadowRadius: 9.51,
          backgroundColor: 'rgb(31, 37 , 63)',
          // opacity : this.state.isOpen ? 0 : 1,
          // borderTopLeftRadius: 40,
          // borderBottomLeftRadius: 40,
          elevation: 15,
        }}>
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
