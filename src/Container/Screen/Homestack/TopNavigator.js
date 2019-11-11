import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import LocalScreen from './Localscreen';
import GlobalScreen from './Globalscreen';
import {createAppContainer} from 'react-navigation';
import {Platform, Text, StyleSheet} from 'react-native';

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
      
      // indicatorStyle: {
      //   backgroundColor: '#fff',
      //   // marginLeft: Platform.OS === 'ios' ? 62 : 52,
      //   width: 80,
      // },
    },
  },
);

const TopNavigator = createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  tabBarLabel1: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft : Platform.OS === 'ios' ? -90 : -80
    
  },
  tabBarLabel2: {
    color: '#fff',
    marginRight: -75,
    fontWeight: 'bold',
  },
  tabBarLabelActive: {
    color: 'green',
  },
});

export default TopNavigator;
