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
import BrowseTournaments from './Screen/BrowseTournaments/Globaltournaments';
import LeftMenu from './LeftMenu';
import Auth from './Screen/Auth/Authscreen';
import Login from './Screen/Auth/Login';
import ResetPassword from './Screen/Auth/ResetPassword';
import ForgotPassword from './Screen/Auth/ForgotPassword';
import AboutYou from './Screen/Auth/AboutYou';
import SignUp from './Screen/Auth/SignUp';
import OtpCode from './Screen/Auth/OtpCode';
import NavigationService from './NavigationService';
import Create_Wallet from './Screen/Auth/Wallet/Ceate_wallet';
import Wallet_initial from './Screen/Auth/Wallet/Wallet_initial';
import Create_new_wallet from './Screen/Auth/Wallet/Create_new_wallet';
import Wallet_congratulation from './Screen/Auth/Wallet/Wallet_congratulation';


import Icon from 'react-native-vector-icons/FontAwesome5'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const AuthStack = createStackNavigator(
  {
    AuthMain: {
      screen: Auth,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Log In',
      },
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions : {
        title : 'Forgot Password'
      }
    },
    OtpCode: {
      screen: OtpCode,
      navigationOptions : {
        title : 'Enter Code'
      }
    },
    ResetPassword: {
      screen: ResetPassword,
      navigationOptions : {
        title : 'Reset Password'
      }
    },
    AboutYou: {
      screen: AboutYou,
      navigationOptions : {
        title : 'About You'
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions : {
        title : 'Sign Up'
      }
    },
    Wallet_initial: {
      screen: Wallet_initial
    },
    Create_Wallet: {
      screen: Create_Wallet
    },
    Create_new_wallet: {
      screen: Create_new_wallet
    },
    Wallet_congratulation: {
      screen: Wallet_congratulation
    }
  },
  {
    initialRouteName: 'Wallet_congratulation',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: ({navigation})  => ({
      headerLeft: () => {
        //   return <Icon name="arrow-left-box" size={35}  color="#fff"/>;
        return (
          <Icon
            name="arrow-left"
            size={16}
            color="white"
            onPress={() => navigation.goBack()}
            style={{
              marginRight: 5,
              borderRadius: Platform.OS === 'ios' ? 15 : 10,
              backgroundColor: 'rgb(97,97,116)',
              paddingHorizontal: 8,
              paddingVertical: 6,
              overflow: Platform.OS === 'ios' ? 'hidden' : 'visible',
            }}
          />
        );
      },
      headerStyle: {
        backgroundColor: '#1f1f39',
        height: 80,
        elevation: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        marginTop: '18%',
      },
      headerLeftContainerStyle: {
        width: 80,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginHorizontal: wp('2%'),
      },
    }),
  },
);
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
    initialRouteName: 'PlayerLocating',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1f1f39',
        elevation: 0,
        borderBottomWidth: 0,
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
      screen: AuthStack,
    },
    AppStack: {
      screen: AppStack,
    },
  },
  {
    initialRouteName: 'AppStack',
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
  }
  render() {
    return (
      <ScalingDrawer
        ref={drawer}
        onOpen={e => {}}
        onClose={() => {}}
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
          borderTopLeftRadius: 80,
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
