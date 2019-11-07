import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import bgimg from '../../../../asset/pub.jpg';

class Signup extends Component {
  render() {
    return (
      <ImageBackground
        source={bgimg}
        style={{ width: '100%', height: '100%', color: '#000' }}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <View style={styles.overlay} />
        <View style={styles.container}>
          <Button
            buttonStyle={[styles.inputStyle, { backgroundColor: '#1dd1a1' }]}
            title="LOG IN"
            titleStyle={{
              marginLeft: 30,
              fontWeight: 'bold',
            }}
            icon={
              <Icon
                name="arrow-right"
                size={15}
                color="white"
                style={{
                  marginRight: 5,
                  borderRadius: 20,
                  backgroundColor: '#10ac84',
                  paddingHorizontal: 8,
                  paddingVertical: 6,
                }}
              />
            }
            iconRight
          />
          <Button
            buttonStyle={[styles.inputStyle, { backgroundColor: '#fff' }]}
            title="SIGN UP"
            titleStyle={{
              flex: 1,
              marginLeft: 30,
              fontWeight: 'bold',
              color: '#1dd1a1',
            }}
            icon={
              <Icon
                name="arrow-right"
                size={15}
                color="white"
                style={{
                  marginRight: 5,
                  borderRadius: 20,
                  backgroundColor: '#f5f6fa',
                  color: '#10ac84',
                  paddingHorizontal: 8,
                  paddingVertical: 6,
                }}
              />
            }
            iconRight
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 400,
  },
  inputStyle: {
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
export default Signup;
