import React, { Component } from 'react';
import { View,Button, Text, FlatList, StyleSheet,Image,ScrollView,TouchableWithoutFeedback,ImageBackground } from 'react-native';
import Timeline from 'react-native-timeline-flatlist'

export default class PulseEsports extends Component {
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
      onactive: 2,
      name: 'League matches'
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
                marginTop : 10
            }}  
        />  
    );  
};  
  render() {
    console.log(this.state.name)
    const Data = [
      {
        id: 1,
        name: 'Esports teams',
      },
      {
        id: 2,
        name: 'League standings',
      },
      {
        id: 3,
        name: 'League matches',
      },
    ];

    const Data2 = [
      {
        id: 1,
        name: 'Atlas Gamers',
        avatar: require('../../../assets/battle_field.jpg'),
      
      },
      {
        id: 2,
        name: 'Atlas Gamers',
        avatar: require('../../../assets/tomb_raider2.jpg'),
      },
      {
        id: 3,
        name: 'Atlas Gamers',
        avatar: require('../../../assets/battle_field.jpg'),
      },
      {
        id: 4,
        name: 'Atlas Gamers',
        avatar: require('../../../assets/battle_field.jpg'),
      
      },
      {
        id: 5,
        name: 'Atlas Gamers',
        avatar: require('../../../assets/tomb_raider2.jpg'),
      },
      {
        id: 6,
        name: 'Atlas Gamers',
        avatar: require('../../../assets/battle_field.jpg'),
      },
      {
        id: 7,
        name: 'Atlas Gamers',
        avatar: require('../../../assets/battle_field.jpg'),
      },
      {
        id: 8,
        name: 'Atlas Gamers',
        avatar: require('../../../assets/tomb_raider2.jpg'),
      },
      {
        id: 9,
        name: 'Atlas Gamers',
        avatar: require('../../../assets/battle_field.jpg'),
      },
      {
        id: 10,
        name: 'Atlas Gamers',
        avatar: require('../../../assets/battle_field.jpg'),
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
        <View style={{position:'absolute',top:20}}>
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
        <View>
          { this.state.name === 'Esports teams' && 
          <FlatList
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={this.renderSeparator}
          data={Data2}
          renderItem={({item}) => (
          <View style={[styles.team,{flexDirection:'row'}]}>
          <Image source={item.avatar} style={{width:50,height:50,borderRadius:10}}/>
          <View style={{marginLeft:15,justifyContent:'center'}}>
          <Text style={{color:'#fff',fontWeight:'bold',marginBottom:5}}>{item.name}</Text>
          <Text style={{color:'#07a97b',fontWeight:'bold'}}>15<Text style={{color:'#8292a7'}}> Players</Text></Text>
          </View>
          </View>
          )}
          keyExtractor={item => item.id}
        />}

        { this.state.name === 'League standings' && <FlatList
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={this.renderSeparator}
          data={Data2}
          renderItem={({item}) => (
          <View style={[styles.team,{flexDirection:'row'}]}>
          <View style={{justifyContent:'center'}}>
          <Text style={{color:'#8292a7',fontSize:20,fontWeight:'bold'}}>{item.id}</Text>
          </View>
          <Image source={item.avatar} style={{width:50,height:50,borderRadius:10,marginLeft:15}}/>
          <View style={{marginLeft:15,justifyContent:'center'}}>
          <Text style={{color:'#fff',fontWeight:'bold',marginBottom:5}}>{item.name}</Text>
          <View style={{flexDirection: 'row',flex:1}}>
          <Text style={{color:'#07a97b',fontWeight:'bold',marginRight:20}}>
            15
           <Text style={{color:'#8292a7'}}> win</Text>
          </Text>
          <Text style={{color:'#07a97b',fontWeight:'bold',marginRight:20}}>
            3
           <Text style={{color:'#8292a7'}}> lose</Text>
          </Text>
          <Text style={{color:'#07a97b',fontWeight:'bold'}}>
            15-3-0
           <Text style={{color:'#8292a7'}}> w-l-t</Text>
          </Text>
          </View>
          </View>
          </View>
          )}
          keyExtractor={item => item.id}
        />}
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
    flex:1
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
    marginTop: 20
  }
})