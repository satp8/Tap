import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
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
        height : 40
      },
      indicatorStyle: {
        backgroundColor: '#fff',
        width: 60,
        marginLeft : 10
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
            columnWrapperStyle={{marginHorizontal:15}}
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
              <Text style={{color: '#747d8c', marginRight: 20}}>See all</Text>
            </TouchableOpacity>
          </View>

          {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
            <View
              style={[
                styles.container,
                {
                  // flexDirection: 'column',
                  marginBottom: hp('5%'),
                  // marginRight: hp('5%'),
                },
              ]}>
          {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
              <FlatList
                // numColumns={Data2.length / 2}
                // ItemSeparatorComponent={this.renderSeparator}
                key={Math.random()}
                data={Data2}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => item.id} 
                renderItem={({item}) => (
                  <View>
                  <View  style={{marginRight:26}}>
                  <View style={[styles.heroImageContainertertiary]}>
                    <Image
                      source={item.avatar}
                      style={styles.heroImagetertiary}
                    />
                    <View style={{marginTop: hp('2%')}}>
                      <Text style={{color: '#fff'}}>
                        {item.name}
                      </Text>
                      <Text style={{color: '#747d8c',fontSize:12}}>{item.subtitle}</Text>
                    </View>
                  </View>
                </View>
                <View style={{               
                    height: 1,  
                    width: "100%",
                    marginLeft : 25,  
                    backgroundColor: "#535c68",  
                    marginTop : 10}}>
                  </View>
                </View>
                  
                )}
              />
                    <FlatList
                // numColumns={Data2.length / 2}
                // ItemSeparatorComponent={this.renderSeparator}
                horizontal
                showsHorizontalScrollIndicator={false}
                key={Math.random()}
                data={Data3}
                keyExtractor={(item, index) => item.id} 
                renderItem={({item}) => (
                  <View>
                  <View  style={{marginRight:10}}>
                  <View style={styles.heroImageContainertertiary}>
                    <Image
                      source={item.avatar}
                      style={styles.heroImagetertiary}
                    />
                    <View style={{marginTop: hp('2%')}}>
                      <Text style={{color: '#fff'}}>
                        {item.name}
                      </Text>
                      <Text style={{color: '#747d8c',fontSize:12}}>{item.subtitle}</Text>
                    </View>
                  </View>
                  </View>
                  <View style={{               
                    height: 1.2,  
                    width: "100%",
                    marginLeft : 25,  
                    backgroundColor: "#535c68",  
                    marginTop : 10}}>
                  </View>
                  </View>
                )}
              />
                    <FlatList
                // numColumns={Data2.length / 2}
                // ItemSeparatorComponent={this.renderSeparator}
                horizontal
                showsHorizontalScrollIndicator={false}
                key={Math.random()}
                data={Data4}
                keyExtractor={(item, index) => item.id} 
                renderItem={({item}) => (
                  <View>
                  <View  style={{marginRight:74}}>
                  <View style={styles.heroImageContainertertiary}>
                    <Image
                      source={item.avatar}
                      style={styles.heroImagetertiary}
                    />
                    <View style={{marginTop: hp('2%')}}>
                      <Text style={{color: '#fff'}}>
                        {item.name}
                      </Text>
                      <Text style={{color: '#747d8c',fontSize:12}}>{item.subtitle}</Text>
                    </View>
                  </View>
                  </View>
                  <View style={{               
                    height: 1,  
                    width: "100%",
                    marginLeft : 25,  
                    backgroundColor: "#535c68",  
                    marginTop : 10}}>
                  </View>
                  </View>
                )}
              />
            </View>
          {/* </ScrollView> */}
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
    width: wp('85%'),
  },
  heroImageSecondary: {
    width: wp('40%'),
  },
  mainPostHead: {
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
    color: '#fff',
    marginLeft: wp('7.5%'),
    marginTop: hp('2%'),
  },
  mainPostBody: {
    textAlign: 'left',
    fontSize: hp('2%'),
    color: '#747d8c',
    marginLeft: wp('7.5%'),
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
    marginTop: hp('2%'),
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
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
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
