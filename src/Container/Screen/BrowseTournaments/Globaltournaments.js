import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView, Image, Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/Ionicons'
import {Icon} from 'react-native-elements'

class GlobalTournaments extends Component {
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
              paddingBottom : 100,
            }}
            data={Data}
            renderItem={({item}) => (
              
                <View
                  style={styles.appContainer}>
                  <View style={{
                        flexDirection:'row',
                        borderRadius: 10,
                        // justifyContent:'space-between',
                        backgroundColor:'#35355d',
                        marginTop:30,
                        height:160,
                        width: '90%',
                        alignSelf:'center',
                        overflow:'hidden'
                        }}>
                    <View style={{width:'40%',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'60%'}}>
                      <Text style={{color:'white',fontSize:25,marginBottom:5,fontWeight:'bold'}}>19:32</Text>
                      <Text style={{fontSize:20,color:'#8292a7',fontWeight:'bold'}}>June 02 2017</Text>
                      <Icon
                      name="logo-game-controller-b"
                      size={30}
                      type='ionicon'
                      color='#6d6ded'
                      iconStyle={{alignSelf:'flex-start'}}
                      />
                      <View style={{flexDirection:'row'}}>
                      <Text style={{fontSize:20,color:'#07a97b',fontWeight:'bold'}}>
                        $ 100 /
                      </Text>
                      <Icon 
                        name="ios-person"
                        type='ionicon'
                        color='#fff'
                      />
                      </View>
                      </View>
                   
                    </View>
                    <View style={{width:'70%'}}>
                    <Image
                      source={item.avatar}
                      style={{height:160, width:'100%'}}
                    />
                    </View>
                  </View>
                  <View>
                  <Text style={styles.mainPostHead}>
                    Linkin Park,Papa Roach Rule Rock Album Charts...
                  </Text>
                  <Text style={styles.mainPostBody}>940 Howe Lake, chicago</Text>
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
    
    backgroundColor: '#1f1f39',
    height: hp('100%'),
    // marginTop: 10
  },
  appContainer: {
    borderColor: 'transparent',
    backgroundColor: '#1f1f39',
    elevation: 0,
    
  },
  mainPostHead: {
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
    color: '#fff',
    marginLeft: wp('5%'),
    marginTop: hp('2%'), 
    position:'relative'
  },
  mainPostBody: {
    // textAlign: 'left',
    fontSize: hp('2%'),
    color: '#07a97b',
    position:'absolute',
    right:0,
    bottom:0,
    marginRight:20
    // marginLeft: wp('5%'),
    // marginTop: hp('1%'), 
    // marginRight: wp('5%') 
  },
  heroImageContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    // borderRadius: 10, 
    // marginTop: hp('2%'),  
    height: hp('25%'), 
    marginLeft: 80,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  heroImageMain: {
    width: wp('50%')
  },
});
export default GlobalTournaments;
