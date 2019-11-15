import React, {Component} from 'react';

import {View, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Input, Button } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
      <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={ styles.title }> Enter your login details to access your account </Text>
      </View>
     <View style={{marginTop: 50}}>
      <Input
        inputStyle={[styles.inputStyle, {borderTopLeftRadius: 20, borderTopRightRadius: 20 }]}
        inputContainerStyle={{borderColor:'#1f1f39'}}
        placeholder='Your E-mail'
        placeholderTextColor={'#616174'}
      />
      <View>
       <Input
        inputStyle={[styles.inputStyle,{borderBottomRightRadius: 20, borderBottomLeftRadius: 20}]}
        inputContainerStyle={{borderColor:'#1f1f39'}}
        placeholder='Your Password'
        placeholderTextColor={'#616174'}
      />
      <TouchableOpacity style={{position:'absolute', alignSelf:'flex-end', top: 25, right: 50}}>
      <Text style={{color:'#616174', fontWeight: 'bold'}}>FORGOT</Text>
      </TouchableOpacity>
      </View>
      </View>
      <Button
            TouchableComponent={TouchableOpacity}
            containerStyle={styles.shadow}
            buttonStyle={[styles.buttonStyle, {backgroundColor: '#07a97b'}]}
            title="LOG IN"
            titleStyle={{
              flex: 1,
              marginLeft: 30,
              fontWeight: 'bold',
            }}
            onPress={() => this.props.navigation.navigate('AppStack')}
            icon={
              <Icon
                name="arrow-right"
                size={15}
                color="white"
                style={{
                  marginRight: 5,
                  borderRadius: Platform.OS === 'ios' ? 15 : 20,
                  backgroundColor: '#078b66',
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