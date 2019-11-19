import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet,Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class PlayerLocating extends Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={{
        color : 'white',
        fontWeight: 'bold',
      }}>PlayerLocating</Text>
     ),
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Data = [
      {
        id: 1,
        name: 'Fallout 6',
        avatar: require('../../../assets/red_dead.jpg'),
        subtitle: 'adventure',
      },
   
      {
        id: 2,
        name: 'Battlefield V',
        avatar: require('../../../assets/cod2.jpg'),
        subtitle: 'adventure',
      },
      {
        id: 3,
        name: 'Fallout 6',
        avatar: require('../../../assets/red_dead.jpg'),
        subtitle: 'adventure',
      },
   
      {
        id: 4,
        name: 'Battlefield',
        avatar: require('../../../assets/cod2.jpg'),
        subtitle: 'adventure',
      },
      {
        id: 5,
        name: 'Fallout 6',
        avatar: require('../../../assets/red_dead.jpg'),
        subtitle: 'adventure',
      },
   
      {
        id: 6,
        name: 'Battlefield V',
        avatar: require('../../../assets/cod2.jpg'),
        subtitle: 'adventure',
      },
  
    ];
   
    return (
      <View style={styles.rootContainer}>
        <FlatList
            horizontal={false}
            numColumns={2}
            data={Data}
            columnWrapperStyle={{marginHorizontal:10}}
            renderItem={({item}) => (
              <View style={styles.secondaryAppContainer}>
                <View style={styles.appContainer}>
                  <View style={styles.heroImageContainer}>
                    <Image
                      source={item.avatar}
                      style={[styles.heroImage, styles.heroImageSecondary]}
                    />
                  </View>
                  <Text style={styles.secondaryPostHead}>
                   {item.name}
                  </Text>
                  <View style={{flexDirection:'row',marginLeft: wp('2.5%'),marginTop: hp('1.5%')}}>
                  <Text style={{color:'#07a97b',marginRight:10}}>
                   6
                   <Text style={{color:'#8292a7'}}> Coaches</Text>
                  </Text>
                  <Text style={{color:'#07a97b'}}>
                  15
                   <Text style={{color:'#8292a7'}}> Players</Text>
                  </Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#1f1f39',
    height: hp('100%'),
    paddingBottom: 100
  },
  appContainer: {
    borderColor: 'transparent',
    backgroundColor: '#1f1f39',
    elevation: 0,
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
    height: hp('35%'),
  },
  heroImageMain: {
    width: wp('90%'),
  },
  heroImageSecondary: {
    width: wp('42%'),
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
    fontSize: 13,
    color: '#747d8c',
    marginLeft: wp('5%'),
    marginTop: hp('1%'),
    marginRight: wp('5%'),
  },
  secondaryAppContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  secondaryPostHead: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    marginLeft: wp('2.5%'),
    marginTop: hp('2.5%'),
  },
  secondaryPostBody: {
    textAlign: 'left',
    fontSize: 13,
    color: '#747d8c',
    marginLeft: wp('2.5%'),
    marginTop: hp('1.5%'),
    marginRight: wp('5%'),
  },
  heroImageContainertertiary: {
    // marginLeft: wp('2%'),
    marginRight: wp('10%'),
    flexDirection: 'row',
    marginTop: hp('2.5%'),
    
  },
  heroImagetertiary: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: 15,
    marginRight: wp('2.5%'),
  },
});