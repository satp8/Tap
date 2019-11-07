import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import LocalScreen from './Localscreen'
import GlobalScreen from './Globalscreen'
import { createAppContainer } from 'react-navigation';

const TabNavigator = createMaterialTopTabNavigator({
    LocalEvent : {
        screen : LocalScreen,
        navigationOptions : {
            tabBarLabel : 'Local Events'
        }
    },
    GlobalEvent : {
        screen : GlobalScreen,
        navigationOptions : {
            tabBarLabel : 'Global Events'
        }
    },
}, {
    tabBarOptions : {
        activeTintColor : 'green',
        style : {
            backgroundColor : '#2C3A47',
            
        },
        indicatorStyle : {
            backgroundColor: 'white',
        }
    }
}) 

const TopNavigator = createAppContainer(TabNavigator);


export default TopNavigator;