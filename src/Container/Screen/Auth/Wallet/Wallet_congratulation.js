import React, {Component} from 'react';

import {View, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Input, Button } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Wallet_congratulation extends Component {
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
        <Text style={ [styles.title,{color:'#07a97b'}] }>Congratulations</Text>
        <Text style={ styles.title }>Your wallet has been</Text>
        <Text style={ styles.title }>successfully created.</Text>
      </View>
      <Button
            TouchableComponent={TouchableOpacity}
            containerStyle={styles.shadow}
            buttonStyle={[styles.buttonStyle, {backgroundColor: '#07a97b'}]}
            title="GET STARTED"
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
    marginTop: 20
  },
  title: {
    fontSize: 20,
    marginHorizontal: wp('10%'),
    marginTop: 10,
    lineHeight: 30,
    color: '#fff',
    fontWeight: 'bold'
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