import React, {Component} from 'react';

import {View, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Input, Button } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class SignUp extends Component {
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
      <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={ styles.title }>Start by entering your email address below.</Text>
      </View>
     <View style={{marginTop: 50}}>
      <Input
        inputStyle={[styles.inputStyle, {borderTopLeftRadius: 20, borderTopRightRadius: 20 }]}
        inputContainerStyle={{borderColor:'#1f1f39'}}
        placeholder='Username'
        placeholderTextColor={'#616174'}
      />
      <View>
       <Input
        inputStyle={styles.inputStyle}
        inputContainerStyle={{borderColor:'#1f1f39'}}
        placeholder='Email'
        placeholderTextColor={'#616174'}
      />
      <Input
        inputStyle={[styles.inputStyle,{borderBottomRightRadius: 20, borderBottomLeftRadius: 20}]}
        inputContainerStyle={{borderColor:'#1f1f39'}}
        placeholder='Your Password'
        placeholderTextColor={'#616174'}
      />
      </View>
      </View>
      <Button
            buttonStyle={[styles.buttonStyle, {backgroundColor: '#7272fb'}]}
            TouchableComponent={TouchableOpacity}
            title="SIGN UP"
            titleStyle={{
              flex: 1,
              marginLeft: 30,
              fontWeight: 'bold',
              color: '#fff',
            }}
            icon={
              <Icon
                name="arrow-right"
                size={15}
                color="white"
                style={{
                  marginRight: 5,
                  borderRadius: Platform.OS === 'ios' ? 15 : 20,
                  backgroundColor: '#6969e5',
                  color: '#fff',
                  paddingHorizontal: 8,
                  paddingVertical: 6,
                  overflow: Platform.OS === 'ios' ? 'hidden' : 'visible',
                  
                }}
              />
            }
            iconRight
          />
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f1f39',
    flex: 1,
  },
  titleContainer: {
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: wp('10%'),
    marginTop: 10,
    lineHeight: 30,
    color: '#fff'
  },
  inputStyle: {
    // flex:1,
    alignItems: 'center',
    backgroundColor: '#35355d',
    borderColor: '#1f1f39',
    padding: 20,
    color: '#fff',
    marginHorizontal: wp('5%')
  },
  buttonStyle: {
    borderRadius: 15,
    marginHorizontal: 30,
    padding: 15,
    marginTop: 60,
  },
})