import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Globalscreen extends Component {
  static navigationOptions = {
    tabBarOptions: {
      style : {
        backgroundColor: '#2C3A47',
        elevation: 0,
        shadowOpacity: 0, 
        width:'90%',
        alignSelf:'center',
        height : 40,
        marginBottom: 5

    },
     indicatorStyle: {
        backgroundColor: '#fff',
        marginLeft: Platform.OS === 'ios' ? 100  : 90,
        width: 60,
      },
    },
  };
  render() {
    const Data = [
      {
        id: 1,
        name: 'junior Leagues',
        avatar: require('../../../assets/call.jpg'),
        subtitle: 'adventure',
      },
      {
        id: 2,
        name: 'brynn',
        avatar: require('../../../assets/cod.jpg'),
        subtitle: 'adventure',
      },
      {
        id: 3,
        name: 'brynn',
        avatar: require('../../../assets/battle_field.jpg'),
        subtitle: 'adventure',
      },
      {
        id: 4,
        name: 'brynn',
        avatar: require('../../../assets/cod2.jpg'),
        subtitle: 'adventure',
      },
      {
        id: 5,
        name: 'brynn',
        avatar: require('../../../assets/red_dead2.jpg'),
        subtitle: 'adventure',
      },
    ];
    return (
      <View style={styles.container}>
          <FlatList
            contentContainerStyle={{
              paddingBottom : 20
            }}
            data={Data}
            renderItem={({item}) => (
              <View>
                <View
                  style={styles.appContainer}>
                  <View
                    style={styles.heroImageContainer}>
                    <Image
                      source={item.avatar}
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
    // marginTop: 10
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
    marginTop: hp('2%'), 
    resizeMode: 'cover', 
    height: hp('25%'), 
  },
  heroImageMain: {
    width: wp('90%')
  },
});
export default Globalscreen;
