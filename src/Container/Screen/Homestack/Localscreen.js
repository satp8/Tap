import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Localscreen extends Component {
  render() {
    const Data = [
      {
        id: 1,
        name: 'junior Leagues',
        avatar: './',
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
        name: 'junior Leagues',
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
        id: 4,
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
    ];
    
    return (
      <View style={styles.rootContainer}>
        <ScrollView>
          <View style={styles.appContainer}>
            <View style={styles.heroImageContainer}>
              <Image
                source={require('../../../../asset/call.jpg')}
                style={[styles.heroImage, styles.heroImageMain]}
              />
            </View>
            <Text style={styles.mainPostHead}>Call of duty WWII tournament</Text>
            <Text style={styles.mainPostBody}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>

          <FlatList
            horizontal={false}
            numColumns={2}
            data={Data}
            renderItem={({item}) => (
              <View style={styles.secondaryAppContainer}>
                <View
                  style={styles.appContainer}
                >
                  <View
                    style={styles.heroImageContainer}
                  >
                    <Image
                      source={require('../../../../asset/call.jpg')}
                      style={[styles.heroImage, styles.heroImageSecondary]}
                    />
                  </View>
                  <Text style={styles.secondaryPostHead}>Call of duty WWII tournament</Text>
                  <Text style={styles.secondaryPostBody}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          /> 

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Text style={{ color: '#1dd1a1', marginLeft: 20 }}>
              Top rated titles
            </Text>
            <TouchableOpacity>
              <Text style={{ color: '#747d8c', marginRight: 20 }}>See all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={[styles.container, { flexDirection: 'column', marginBottom: hp('5%'),marginRight: hp('5%') }]}>
              <FlatList
                numColumns={Data.length/2}
                ItemSeparatorComponent={this.renderdivider}
                key={Math.random()}
                data={Data}
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) => (
                  <View
                    style={styles.heroImageContainertertiary}>
                    <Image
                      source={require('../../../../asset/call.jpg')}
                      style={styles.heroImagetertiary}
                    />
                    <View style={{ marginTop: hp('2%') }}> 
                      <Text style={{ color: '#fff' }}>
                        Shadow of the Tomb Raider
                      </Text>
                      <Text style={{ color: '#747d8c' }}>Adventure</Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#2C3A47',
    height: hp('80%'),
  },
  appContainer: {
    borderColor: 'transparent',
    backgroundColor: '#2C3A47',
    elevation: 0,
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
  heroImageSecondary: {
    width: wp('40%')
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
  secondaryAppContainer: {
    flex: 1, 
    flexDirection: 'column', 
    margin: 1
  },
  secondaryPostHead: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    marginLeft: wp('5%'),
    marginTop: hp('2%'), 
  },
  secondaryPostBody: {
    textAlign: 'left',
    fontSize: 13,
    color: '#747d8c',
    marginLeft: wp('5%'),
    marginTop: hp('1.5%'), 
    marginRight: wp('5%') 
 },
  heroImageContainertertiary: {
    marginLeft: wp('5%'),
    flexDirection: 'row',
    marginTop: hp('2.5%'), 
  },
  heroImagetertiary: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: 15,
    marginRight: wp('2.5%'),
  }
});
export default Localscreen;
