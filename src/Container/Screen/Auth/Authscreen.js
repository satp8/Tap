import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView, Platform} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import bgimg from '../../../assets/pub.jpg';

class AuthMain extends Component {

  render() {
    return (
      <ImageBackground
        source={bgimg}
        style={{width: '100%', height: '100%', color: '#000'}}
        imageStyle={{resizeMode: 'cover'}}>
        <View style={styles.overlay} />
        <SafeAreaView style={styles.container}>
        
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
            onPress={() => this.props.navigation.navigate('Login')}
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
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  buttonStyle: {
    borderRadius: 15,
    marginHorizontal: 30,
    padding: 15,
    marginTop: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
});
export default AuthMain;
