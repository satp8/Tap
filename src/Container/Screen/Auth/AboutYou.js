import React, {Component} from 'react';

import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Text,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input, Button, CheckBox} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class AboutYou extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yeschecked : true,
      nochecked : false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {' '}
            Before Continuing tell us more about you!
          </Text>
        </View>
        <View style={{marginTop: 50}}>
          <Input
            inputStyle={[
              styles.inputStyle,
              {borderTopLeftRadius: 20, borderTopRightRadius: 20},
            ]}
            inputContainerStyle={{borderColor: '#1f1f39'}}
            placeholder="Medical Conditions"
            placeholderTextColor={'#616174'}
          />
          <Input
            inputStyle={[styles.inputStyle]}
            inputContainerStyle={{borderColor: '#1f1f39'}}
            placeholder="Mega Near You"
            placeholderTextColor={'#616174'}
          />
          <Input
            inputStyle={[styles.inputStyle]}
            inputContainerStyle={{borderColor: '#1f1f39'}}
            placeholder="Interested Games"
            placeholderTextColor={'#616174'}
          />
          <View style={styles.accessories}>
            <Text style={styles.accesstext}>Your Accessories</Text>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              {/* <Icon2 name="checkbox-blank" size={20} color="#07a97b"/>
            <Text style={styles.yes_text_style}>Yes</Text> */}
              <CheckBox
                checkedIcon={<Icon2 name="checkbox-blank" size={20} 
                color="#07a97b"/>}
                uncheckedIcon={<Icon2 name="checkbox-blank" size={20} color="#616174"/>}
                checked={this.state.yeschecked}
                onPress={() => this.setState({
                  yeschecked: !this.state.yeschecked,
                  nochecked : !this.state.nochecked
                })}
                title='Yes'
                textStyle={this.state.yeschecked ? styles.selected_textstyle : styles.unselected_textstyle}
                containerStyle={styles.checkbox_container1}
              />
               <CheckBox
                checkedIcon={<Icon2 name="checkbox-blank" size={20} color="#07a97b"/>}
                uncheckedIcon={<Icon2 name="checkbox-blank" size={20} color="#616174"/>}
                checked={this.state.nochecked}
                onPress={() => this.setState({
  
                  yeschecked: !this.state.yeschecked,
                  nochecked : !this.state.nochecked
                })}
                title='No'
                textStyle={this.state.nochecked ? styles.selected_textstyle : styles.unselected_textstyle}
                containerStyle={styles.checkbox_container2}
              />
            </View>
          </View>
          {/* <View
            style={[
              styles.inputStyle,
              {borderBottomLeftRadius: 20, borderBottomRightRadius: 20},
            ]} */}
          {/* // inputContainerStyle={{borderColor: '#1f1f39'}}
            // ="Your Accessories"
            // placeholderTextColor={'#616174'} */}
          {/* /> */}
          {/* <CheckBox
            center
            title="Click Here to Remove This Item"
            iconRight
            iconType="material"
            checkedIcon="clear"
            uncheckedIcon="add"
            checkedColor="red"
            checked={this.state.checked}
          /> */}
        </View>
        <Button
          TouchableComponent={TouchableOpacity}
          containerStyle={styles.shadow}
          buttonStyle={[styles.buttonStyle, {backgroundColor: '#07a97b'}]}
          title="CONTINUE"
          titleStyle={{
            flex: 1,
            marginLeft: 30,
            fontWeight: 'bold',
          }}
          onPress={() => this.props.navigation.navigate('Home')}
          icon={
            <Icon
              name="arrow-right"
              size={15}
              color="white"
              style={{
                marginRight: 5,
                borderRadius: Platform.OS === 'ios' ? 15 : 20,
                backgroundColor: '#078b66',
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
    backgroundColor: '#1f1f39',
    flex: 1,
  },
  titleContainer: {
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: wp('10%'),
    marginTop: 10,
    lineHeight: 30,
    color: '#fff',
  },

  inputStyle: {
    // flex:1,
    alignItems: 'center',
    backgroundColor: '#35355d',
    borderColor: '#1f1f39',
    padding: 20,
    color: '#fff',
    marginHorizontal: wp('5%'),
  },
  accessories: {
    paddingTop: wp('4.3%'),
    paddingLeft: wp('4.5%'),
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20,
    backgroundColor: '#35355d',
    color: '#fff',
    marginHorizontal: wp('7.4%'),
  },
  accesstext: {
    fontSize: 20,
    color: '#616174',
    marginBottom: 10,
  },
  selected_textstyle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
  unselected_textstyle : {
    fontSize: 16,
    color: '#616174',
    fontWeight: 'bold',
  },
  checkbox_container1 : {
    backgroundColor : '#35355d',
    borderColor : '#35355d',
    marginLeft : wp('-2%')
  },
  checkbox_container2 : {
    backgroundColor : '#35355d',
    borderColor : '#35355d',
    marginLeft : wp('10%')
  },
  buttonStyle: {
    borderRadius: 15,
    marginHorizontal: 30,
    padding: 15,
    marginTop: 60,
  },
});
