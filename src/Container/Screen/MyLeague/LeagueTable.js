import React, { Component } from 'react';
import { View, Text,TouchableOpacity, FlatList, StyleSheet,Image,ScrollView,TouchableWithoutFeedback,ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class LeagueTable extends Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={{
        color : 'white',
        fontWeight: 'bold',
      }}>My League</Text>
     ),
  };
  constructor(props) {
    super(props);
    this.state = {
      onactive: 1,
      name: 'Schedule'
    };
  }

  onactive = (id, name) => {
    console.log(id)
    this.setState({ onactive: id, name: name });
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
    console.log(this.state.name)
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
        <View style={{width:'90%',alignSelf:'center',overflow:'hidden'}}>
        <Image  source={require('../../../assets/battle_field.jpg')} resizeMode='cover'  style={{overflow:'hidden',width:'100%',height:150,opacity:0.5,borderRadius:15}}/>  
        <View style={{left:10,bottom:10}}>     
        <Image  
           source={require('../../../assets/tomb_raider2.jpg')} 
           resizeMode='cover'  
           style={{width:'100%',
                  height:50,
                  opacity:1,
                  borderRadius:25,
                  borderColor:'#6969e1',
                  borderWidth:1,
                  width:50,
                  alignSelf:'flex-start',
                  bottom:0,
                  position:'absolute'}}/>
        </View>
        <View style={{position:'absolute',alignSelf:'flex-end',bottom:0}}>
            <Text style={{borderBottomRightRadius:15,color:'#fff',paddingHorizontal:25,paddingVertical:5,backgroundColor:'#07a97b'}}>Public View</Text>
        </View>
        <TouchableOpacity style={{position:'absolute',alignSelf:'flex-end',right:20,top:20}}>
            <Text style={{borderBottomRightRadius:15,color:'#fff'}}>Edit Photo</Text>
        </TouchableOpacity>
        </View>
        <View style={{marginBottom:20,paddingLeft:20}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={Data}
          renderItem={({item}) => (
          <TouchableWithoutFeedback onPress={() => this.onactive(item.id, item.name)}>
          <View style={this.state.onactive === item.id ? styles.active : styles.inactive}>
          <Text style={{color:'#fff',fontWeight:'bold'}}>{item.name}</Text>
          </View>
          </TouchableWithoutFeedback>
          )}
          keyExtractor={item => item.id}
        />
        </View>
        </View>
        <View >
          { this.state.name === 'Players' && 
          <FlatList
          showsHorizontalScrollIndicator={false}
        //   ItemSeparatorComponent={this.renderSeparator}
          data={Data2}
          renderItem={({item}) => (
          <View style={{flexDirection:'row'}}>
          <View style={{width:1,
            height:'100%', 
            backgroundColor: "#8292a7",
            marginLeft:35,
            marginRight: 10
            }}>
          <View style={{padding:8,backgroundColor:'#07a97b',position:'absolute',alignSelf:'center',top:'50%',borderRadius:20}}>
          </View>
          <View style={{padding:4,backgroundColor:'#1f1f39',alignSelf:'center',top:'55.5%',borderRadius:20}}></View>
          </View>
          <View style={[styles.team,{flexDirection:'row'}]}>
          <Image source={item.imageUrl} style={{width:50,height:50,borderRadius:10}}/>
          <View style={{marginLeft:15,justifyContent:'center'}}>
          <Text style={{color:'#fff',fontWeight:'bold',marginBottom:5}}>{item.title}</Text>
          <Text style={{color:'grey',width:'60%',textAlign:'left',fontSize:12}}>{item.description}</Text>
          </View>
          </View>
          </View>
          )}
          keyExtractor={item => item.id}
        />
       
        }

        { this.state.name === 'Schedule' && 
        <View flexDirection='row'>
        <FlatList
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={this.renderSeparator}
          data={Data3}
          renderItem={({item}) => (
            <View style={{flexDirection:'row'}}>
            <View style={{marginLeft:20,marginTop:20}}>
                <Text style={{color:'#6969e1'}}>15</Text>
                <Text style={{color:'#fff'}}>Sept</Text>
            </View>
            <View style={{width:1,
                height:'50%', 
                backgroundColor: "#8292a7",
                marginLeft:30,
                marginRight: 10,
                top:35
                }}>
              <View style={{padding:5,backgroundColor:'#07a97b',position:'absolute',alignSelf:'center',borderRadius:20}}>
              <View style={{padding:3,backgroundColor:'#1f1f39',alignSelf:'center',borderRadius:20}}></View>
              </View>
              <View style={{padding:5,backgroundColor:'#07a97b',position:'absolute',alignSelf:'center',bottom:0,borderRadius:20}}>
              <View style={{padding:3,backgroundColor:'#1f1f39',alignSelf:'center',borderRadius:20,bottom:0}}></View>
              </View>
          </View>
          <View style={[styles.team,{flexDirection:'column'}]}>
          <View style={{flexDirection:'row',marginBottom:20}}>
          <Image source={item.avatar1} style={{width:40,height:40,borderRadius:10,marginLeft:15}}/>
          <View style={{marginLeft:15,justifyContent:'center'}}>
          <Text style={{color:'#fff',marginBottom:5,fontSize:16}}>{item.name1}</Text>
          </View>
          <View style={{justifyContent:'center',marginLeft:50}}>
          <Text style={{color:'#8292a7',fontSize:15}}>5</Text>
          </View>
          </View>

          <View style={{flexDirection:'row'}}>
          <Image source={item.avatar2} style={{width:40,height:40,borderRadius:10,marginLeft:15}}/>
          <View style={{marginLeft:15,justifyContent:'center'}}>
          <Text style={{color:'#fff',marginBottom:5,fontSize:16}}>{item.name2}</Text>
          </View>
          <View style={{justifyContent:'center',marginLeft:50}}>
          <Text style={{color:'#07a97b',fontSize:15}}>6</Text>
          </View>
          </View>
          <View style={{flexDirection:'row',marginLeft:15,marginTop:10}}>
           <Text style={{color:'#8292a7',fontSize:13}}>ESL Pro League 57</Text>
          </View>
          </View>
          </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
         }
        {this.state.name === 'League matches' && 
        <View flexDirection='row'>
        <FlatList
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={this.renderSeparator}
          data={Data3}
          renderItem={({item}) => (
          <View style={[styles.team,{flexDirection:'column'}]}>
          {/* <Timeline data={Data3} innerCircle={'dot'} /> */}
          <View style={{flexDirection:'row',marginBottom:20}}>
          <Image source={item.avatar1} style={{width:40,height:40,borderRadius:10,marginLeft:15}}/>
          <View style={{marginLeft:15,justifyContent:'center'}}>
          <Text style={{color:'#fff',marginBottom:5,fontSize:18}}>{item.name1}</Text>
          </View>
          <View style={{justifyContent:'center',left:120}}>
          <Text style={{color:'#8292a7',fontSize:15}}>5</Text>
          </View>
          </View>

          <View style={{flexDirection:'row'}}>
          <Image source={item.avatar2} style={{width:40,height:40,borderRadius:10,marginLeft:15}}/>
          <View style={{marginLeft:15,justifyContent:'center'}}>
          <Text style={{color:'#fff',marginBottom:5,fontSize:18}}>{item.name2}</Text>
          </View>
          <View style={{justifyContent:'center',left:120}}>
          <Text style={{color:'#07a97b',fontSize:15}}>6</Text>
          </View>
          </View>
          </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      }
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