import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Globalscreen extends Component {
  render() {
    const Data = [
      {
        id: 1,
        name: 'junior Leagues',
        avatar: '../../../../asset/call.jpg',
        subtitle: 'adventure',
      },
      {
        id: 2,
        name: 'brynn',
        avatar: '../../../../asset/call.jpg',
        subtitle: 'adventure',
      },
      {
        id: 3,
        name: 'brynn',
        avatar: '../../../../asset/call.jpg',
        subtitle: 'adventure',
      },
      {
        id: 4,
        name: 'brynn',
        avatar: '../../../../asset/call.jpg',
        subtitle: 'adventure',
      },
      {
        id: 5,
        name: 'brynn',
        avatar: '../../../../asset/call.jpg',
        subtitle: 'adventure',
      },
      {
        id: 6,
        name: 'brynn',
        avatar: '../../../../asset/call.jpg',
        subtitle: 'adventure',
      },
      {
        id: 7,
        name: 'brynn',
        avatar: '../../../../asset/call.jpg',
        subtitle: 'adventure',
      },
      {
        id: 8,
        name: 'brynn',
        avatar: '../../../../asset/call.jpg',
        subtitle: 'adventure',
      },
    ];
    return (
      <View style={styles.container}>
          <FlatList
            data={Data}
            renderItem={({item}) => (
              <View>
                <View
                  style={styles.appContainer}>
                  <View
                    style={styles.heroImageContainer}>
                    <Image
                      source={require('../../../../asset/call.jpg')}
                      style={[styles.heroImageMain, styles.heroImage]}
                    />
                  </View>
                  <Text style={styles.mainPostHead}>
                    Call of duty WWII tournament
                  </Text>
                  <Text style={styles.mainPostBody}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
            horizontal={false}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C3A47',
    height: hp('80%'),
    marginBottom: 300
  },
  appContainer: {
    borderColor: 'transparent',
    backgroundColor: '#2C3A47',
    elevation: 0
  },
  mainPostHead: {
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
    color: '#fff',
    marginLeft: wp('5%'),
    marginTop: hp('2%'), 
  },
  mainPostBody: {
    textAlign: 'left',
    fontSize: hp('2%'),
    color: '#747d8c',
    marginLeft: wp('5%'),
    marginTop: hp('1%'), 
    marginRight: wp('5%') 
  },
  heroImageContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    borderRadius: 10, 
    marginTop: hp('5%'), 
    resizeMode: 'cover', 
    height: hp('25%'), 
  },
  heroImageMain: {
    width: wp('90%')
  },
});
export default Globalscreen;
