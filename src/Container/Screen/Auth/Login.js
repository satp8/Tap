import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  static navigationOptions = {
    // headerTitle instead of title
    headerLeft: () => {
      //   return <Icon name="arrow-left-box" size={35}  color="#fff"/>;
      return (
        <Icon
          name="arrow-left"
          size={16}
          color="white"
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
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#1f1f39'}}>
        <Text> Login </Text>
      </View>
    );
  }
}
