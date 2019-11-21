import React, { Component } from 'react';
import { View, Text,TouchableOpacity, FlatList, StyleSheet,Image,ScrollView,TouchableWithoutFeedback,ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class ReserveCoach extends Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={{
        color : 'white',
        fontWeight: 'bold',
      }}>PulseEsports</Text>
     ),
  };
  constructor(props) {
    super(props);
    this.state = {
      onactive: 1,
      name: 'Coach'
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
                // marginTop : 10
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
        name: 'Coach',
      },
      {
        id: 2,
        name: 'Players',
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
        <Image blurRadius={5} source={require('../../../assets/battle_field.jpg')} resizeMode='cover'  style={{width:'100%',height:150,opacity:0.2}}/>
        <View style={{position:'absolute',top:50}}>
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
          { this.state.name === 'Coach' && 
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
      <Button
            buttonStyle={[styles.buttonStyle, {backgroundColor: '#7272fb'}]}
            onPress={() => this.props.navigation.navigate('AboutYou')}
            TouchableComponent={TouchableOpacity}
            title={this.state.name === 'Coach'? "RESERVE COACH" : "REQUEST TO TEAM"}
            titleStyle={{
              flex: 1,
              marginLeft: 30,
              fontWeight: 'bold',
              color: '#fff',
            }}
            icon={
              <Icon
                name="arrow-right"
                size={15}
                color="white"
                style={{
                  marginRight: 5,
                  borderRadius: Platform.OS === 'ios' ? 15 : 20,
                  backgroundColor: '#6969e5',
                  color: '#fff',
                  paddingHorizontal: 8,
                  paddingVertical: 6,
                  overflow: Platform.OS === 'ios' ? 'hidden' : 'visible',
                  
                }}
              />
            }
            iconRight
          />
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
    marginHorizontal:10,
    marginTop: 20,
    backgroundColor:'#07a97b',
    paddingVertical:15,
    paddingHorizontal: 25,
    borderRadius: 25,
    borderWidth: 1,
    borderColor:'transparent'

  },
  inactive: {
    marginHorizontal:10,
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
  buttonStyle: {
    borderRadius: 15,
    marginHorizontal: 25,
    padding: 15,
    position:'absolute',
    bottom: 10,
  },
})