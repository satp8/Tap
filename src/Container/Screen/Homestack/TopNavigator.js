import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import LocalScreen from './Localscreen'
import GlobalScreen from './Globalscreen'
import { createAppContainer } from 'react-navigation';
import {Platform} from 'react-native'



const TabNavigator = createMaterialTopTabNavigator({
    LocalEvent : {
        screen : LocalScreen,
        navigationOptions : {
            tabBarLabel : 'Local Events',
             
        }
    },
    GlobalEvent : {
        screen : GlobalScreen,
        navigationOptions : {
            tabBarLabel : 'Global Events',
           
        }
    },
}, {
    tabBarOptions : {
        activeTintColor : 'green',
        inactiveTintColor : 'white',
        upperCaseLabel : false,
        style : {
            backgroundColor: '#2C3A47',
            
            elevation: 0,
        },
        labelStyle : {
           fontWeight : 'bold',
           fontSize : 15,
           
        },
        indicatorStyle : {
            backgroundColor: '#fff',
            marginLeft: Platform.OS === 'ios' ? 62 : 52,
            width : 70,
        },
    }
}) 

const TopNavigator = createAppContainer(TabNavigator);


export default TopNavigator;