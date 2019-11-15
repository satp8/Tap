import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Localscreen extends Component {
  static navigationOptions = {
    tabBarOptions: {
      style: {
        backgroundColor: '#2C3A47',
        elevation: 0,
        shadowOpacity: 0,
        width: '90%',
        alignSelf: 'center',
        height : 40,
        marginBottom: 5
        
      },
      indicatorStyle: {
        backgroundColor: '#fff',
        width: 60,
        marginLeft : 10,
        
      },
    },
  };
  renderSeparator = () => {  
    return (  
        <View  
            style={{  
                height: 1,  
                width: "100%",
                marginLeft : 10,  
                backgroundColor: "#000",  
                marginTop : 10
            }}  
        />  
    );  
};  
  render() { 
    const Data = [
      {
        id: 1,
        name: 'junior Leagues',
        avatar: require('../../../assets/red_dead.jpg'),
        subtitle: 'adventure',
      },
   
      {
        id: 2,
        name: 'junior Leagues',
        avatar: require('../../../assets/cod2.jpg'),
        subtitle: 'adventure',
      },
  
    ];
    const Data2 = [
      {
        id: 1,
        name: 'Shadow of the Tomb Raider',
        avatar: require('../../../assets/tomb_raider2.jpg'),
        subtitle: 'Action, Adventure',
      },
      {
        id: 2,
        name: 'Fallout76',
        avatar: require('../../../assets/fallout.jpg'),
        subtitle: 'RPG, Action, Adventure, Multiplayer',
      },
      {
        id: 3,
        name: 'Shadow of the Tomb Raider',
        avatar: require('../../../assets/tomb_raider2.jpg'),
        subtitle: 'Action, Adventure',
      },
      {
        id: 4,
        name: 'junior Leagues',
        avatar: require('../../../assets/cod2.jpg'),
        subtitle: 'adventure',
      },
      {
        id: 5,
        name: 'Fallout76',
        avatar: require('../../../assets/fallout.jpg'),
        subtitle: 'RPG, Action, Adventure, Multiplayer',
      },
      {
        id: 6,
        name: 'Fallout76',
        avatar: require('../../../assets/fallout.jpg'),
        subtitle: 'RPG, Action, Adventure, Multiplayer',
      },
      {
        id: 7,
        name: 'junior Leagues',
        avatar: require('../../../assets/red_dead.jpg'),
        subtitle: 'adventure',
      },
      {
        id: 8,
        name: 'junior Leagues',
        avatar: require('../../../assets/red_dead.jpg'),
        subtitle: 'adventure',
      },
      {
        id: 9,
        name: 'junior Leagues',
        avatar: require('../../../assets/red_dead.jpg'),
        subtitle: 'adventure',
      },
    ];

    const Data3 = [
    
      {
        id: 1,
        name: 'Fallout76',
        avatar: require('../../../assets/fallout.jpg'),
        subtitle: 'RPG, Action, Adventure, Multiplayer',
      },
      {
        id: 2,
        name: 'Fallout76',
        avatar: require('../../../assets/fallout.jpg'),
        subtitle: 'RPG, Action, Adventure, Multiplayer',
      },
      {
        id: 3,
        name: 'Fallout76',
        avatar: require('../../../assets/fallout.jpg'),
        subtitle: 'RPG, Action, Adventure, Multiplayer',
      },
     
    ];

    const Data4 = [
  
      {
        id: 1,
        name: 'Battlefield V',
        avatar: require('../../../assets/battle_field.jpg'),
        subtitle: 'Action, FPS, Multiplayer',
      },
      {
        id: 2,
        name: 'Shadow of the Tomb Raider',
        avatar: require('../../../assets/tomb_raider2.jpg'),
        subtitle: 'Action, Adventure',
      },
      {
        id: 3,
        name: 'Battlefield V',
        avatar: require('../../../assets/battle_field.jpg'),
        subtitle: 'Action, FPS, Multiplayer',
      },
  
    ];
    
    return (
      <View style={styles.rootContainer}>
        <ScrollView>
          <View style={styles.appContainer}>
            <View style={styles.heroImageContainer}>
              <Image
                source={require('../../../assets/call.jpg')}
                style={[styles.heroImage, styles.heroImageMain]}
              />
            </View>
            <Text style={styles.mainPostHead}>
              Call of duty WWII tournament
            </Text>
            <Text style={styles.mainPostBody}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>

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

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text style={{color: 'rgb(10,166,124)', marginLeft: 20}}>
              Top rated titles
            </Text> 
            <TouchableOpacity>
              <Text style={{color: '#747d8c', marginRight: 20, fontSize: 12}}>See all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginLeft:wp('5%')}}>
            <View
              style={[
                styles.container,
                {
                  // flexDirection: 'column',
                  marginBottom: hp('5%'),
                  // marginLeft: hp('2%'), 
                  // marginRight : hp("15%")
                  // width : "200%"
                },
              ]}>
              <FlatList
                numColumns={Data2.length/3}
                // ItemSeparatorComponent={this.renderSeparator}
                key={Math.random()}
                data={Data2}
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) => (
                  <View
                    style={styles.heroImageContainertertiary}>
                    <Image
                      source={item.avatar}
                      style={styles.heroImagetertiary}
                    />
                    <View style={{ marginTop: hp('2%') }}> 
                      <Text style={{ color: '#fff' }}>
                        Shadow of the Tomb Raider
                      </Text>
                      <Text style={{ color: '#747d8c' }}>Adventure</Text>
                      <View  style={{  
                height: 1,  
                width: "150%",
                marginLeft : -75,  
                backgroundColor: "#535c68",  
                marginTop : Platform.OS === 'ios' ? 35 : 25 
            }}  ></View>
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
    // marginTop: 10,
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
    marginTop: hp('2%'),
    resizeMode: 'cover',
    height: hp('25%'),
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
export default Localscreen;
