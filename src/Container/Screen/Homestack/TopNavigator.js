import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import LocalScreen from './Localscreen';
import GlobalScreen from './Globalscreen';
import {createAppContainer} from 'react-navigation';
import {Platform, Text, StyleSheet, Dimensions, PixelRatio} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height
export const calcHeight = x => PixelRatio.roundToNearestPixel((deviceHeight * x) / 100)
export const calcWidth = x => PixelRatio.roundToNearestPixel((deviceWidth * x) / 100)
const TabNavigator = createMaterialTopTabNavigator(
  {
    LocalEvent: {
      screen: LocalScreen,
      navigationOptions: {
        tabBarLabel: ({focused}) => (
          <Text
            style={[
              styles.tabBarLabel1,
              focused ? styles.tabBarLabelActive : {},
            ]}>
            Local Events
          </Text>
        ),
        // tabBarLabel : 'LocalEvents'
      },
    },
    GlobalEvent: {
      screen: GlobalScreen,
      navigationOptions: {
        tabBarLabel: ({focused}) => (
          <Text
            style={[
              styles.tabBarLabel2,
              focused ? styles.tabBarLabelActive : {},
            ]}>
            Global Events
          </Text>
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'white',
      upperCaseLabel: false,
      showLabel: true,
    },
  },
);

const TopNavigator = createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  tabBarLabel1: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft : Platform.OS === 'ios' ? calcWidth(-22) : calcWidth(-22.5)
    
  },
  tabBarLabel2: {
    color: '#fff',
    marginRight: calcWidth(-30),
    fontWeight: 'bold',
  },
  tabBarLabelActive: {
    color: 'rgb(10,166,124)',
  },
});

export default TopNavigator;
