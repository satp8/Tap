import React, { Component } from 'react';
import { View, Text,TouchableOpacity, FlatList, StyleSheet,Image,ScrollView,TouchableWithoutFeedback,ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Profile extends Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={{
        color : 'white',
        fontWeight: 'bold',
      }}>Profile</Text>
     ),
  };
  constructor(props) {
    super(props);
    this.state = {
      onactive: 1,
      name: 'Schedule'
    };
  }
  renderSeparator = () => {  
    return (  
        <View  
            style={{  
                height: 1,  
                width: "100%", 
                backgroundColor: "#8292a7",  
                left: '40%',
                marginTop : 20
            }}  
        />  
    );  
};  
renderDetail(rowData, sectionID, rowID) {
    let title = (
        <View style={{marginLeft:10}}>
         <Text style={{color:'#fff'}}>{rowData.title}</Text>
         <Text style={{color:'grey'}}>{rowData.description}</Text>
        </View>
       )
    var image = null
    if(rowData.description && rowData.imageUrl)
      image = (
        <View>   
          <Image source={rowData.imageUrl} style={{width: 50,height: 50,borderRadius: 10}}/>
        </View>
      )
    
    return (
      <View style={{flex:1,flexDirection:'row',marginRight:50}}>
        {image}
        {title}
      </View>
    )
  }
  render() {
    const Data = [
      {
        id: 1,
        name: 'Players',
      },
      {
        id: 2,
        name: 'Schedule',
      },
      {
        id: 3,
        name: 'Chats',
      },
    
    ];

    const Data2 = [
      {
        id: 1,
        title: 'Nellie Cook',
        imageUrl: require('../../../assets/battle_field.jpg'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
      
      },
      {
        id: 2,
        title: 'Gordon Oliver',
        imageUrl: require('../../../assets/tomb_raider2.jpg'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'

      },
      {
        id: 3,
        title: 'Seth Walker',
        imageUrl: require('../../../assets/fallout.jpg'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'

      },
      {
        id: 4,
        title: 'Lettie Sherman',
        imageUrl: require('../../../assets/battle_field.jpg'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'

      },
      {
        id: 5,
        title: 'Lettie Sherman',
        imageUrl: require('../../../assets/tomb_raider2.jpg'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'

      },
      {
        id: 6,
        title: 'Lettie Sherman',
        imageUrl: require('../../../assets/fallout.jpg'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'

      },
      
    ]

    const Data3 = [ 
        {
          id: 1,
          date: '15 sept',
          name1: 'Atlas Gamers',
          avatar1: require('../../../assets/battle_field.jpg'),
          name2: 'Atlas Gamers',
          avatar2: require('../../../assets/tomb_raider2.jpg'),
        },
        {
          id: 2,
          date: '15 sept',
          name1: 'Atlas Gamers',
          avatar2: require('../../../assets/tomb_raider2.jpg'),
          name2: 'Atlas Gamers',
          avatar1: require('../../../assets/battle_field.jpg'),

        },
      {
        id: 3,
        date: '15 sept',
        name1: 'Atlas Gamers',
        avatar2: require('../../../assets/tomb_raider2.jpg'),
        name2: 'Atlas Gamers',
        avatar1: require('../../../assets/battle_field.jpg'),

      },
    ]
    
    return (
      <View style={styles.container}>
        <ScrollView>
        <View>
        <View>
        <Image  source={require('../../../assets/battle_field.jpg')} resizeMode='cover'  style={{overflow:'hidden',width:'100%',height:150,opacity:0.2,borderRadius:15}}/>  
        <View style={{left:10,bottom:10,flexDirection:'row',position:'absolute'}}>     
        <Image  
           source={require('../../../assets/profile.jpeg')} 
           resizeMode='cover'  
           style={{width:'100%',
                  height:100,
                  opacity:1,
                  borderRadius:50,
                  borderColor:'#fff',
                  borderWidth:1,
                  width:100,
                  alignSelf:'flex-start',
                  bottom:10,
                  position:'absolute'}}/>
        </View>
        <View style={{position:'absolute',alignSelf:'center',top:'30%'}}>
            <Text style={{color:'#fff'}}>James Borton</Text>
        </View>
        <View style={{position:'absolute',alignSelf:'center',top:'45%',left:'37%'}}>
            <Text style={{color:'grey'}}>emily_hermiston@janice.com</Text>
        </View>
        <View style={{position:'absolute',alignSelf:'center',top:'57%',left:'37%'}}>
            <Text style={{color:'#6362d1',fontWeight:'bold'}}>1983.45<Text style={{color:'#fff',fontSize:11}}> TTT</Text></Text>
        </View>
        <View style={{position:'absolute',alignSelf:'flex-end',right:30,bottom:40}}>
        <Text style={{color:'#fff',fontSize:12}}>+L2</Text>
        </View>
        <View style={{width:'55%',height:4,borderRadius:20,overflow:'hidden',backgroundColor:'#fff',position:'absolute',bottom:30,right:30,}}>
          <View style={[StyleSheet.absoluteFill,{backgroundColor:'#06a47f',width:'60%'}]}></View>
        </View>
        <View style={{position:'absolute',alignSelf:'flex-end',right:30,bottom:10}}>
        <Text style={{color:'#fff',fontSize:12,fontWeight:'bold',color:'#6362d1'}}>+543XP<Text style={{color:'grey',fontWeight:'normal'}}> remaining</Text></Text>
        </View>
        </View>
        </View>
       
      </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#1f1f39',
    flex:1,
    paddingBottom:40
  },
  active: {
    // marginHorizontal:10,
    marginRight:10,
    marginTop: 20,
    backgroundColor:'#07a97b',
    paddingVertical:15,
    paddingHorizontal: 25,
    borderRadius: 25,
    borderWidth: 1,
    borderColor:'transparent'

  },
  inactive: {
    // marginHorizontal:10,
    marginRight:10,
    marginTop: 20,
    backgroundColor:'#1f1f39',
    paddingVertical:15,
    paddingHorizontal: 25,
    borderRadius: 25,
    borderWidth: 1,
    borderColor:'#6969e1'
  },
  team: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
 
})
export default Profile
