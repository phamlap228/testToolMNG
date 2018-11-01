
import React, {  Component } from 'react';
import { Platform,StyleSheet,Button, Text, View,StatusBar,Dimensions,TextInput, Image} from 'react-native';
// import { Button, Input } from 'native-base';
var {height, width} = Dimensions.get('window');
import { Icon } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:'admin',
      pass:'admin',
    }
  }
 onPressLogin=()=>{
   Actions.main();
 }
  render() {
    return ( 
      <View style = {styles.container}>
      <View style={{width:width,height:height,alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
      {/*<Image source={require('../images/logo_app.png')} style={{width: '80%',height: '25%',marginBottom:20}}/>*/}
        
        <View style={{alignItems: 'center',flexDirection:'row',width: '80%',height:'9%',backgroundColor:'rgb(153, 255, 153)',borderWidth:1,borderRadius:20 }}>
            <Icon type='font-awesome' name='user' size={35}/>
            <TextInput style={{marginLeft:5,width:'80%', height: '100%', borderColor: 'gray',}} />
        </View>
        <View style={{width,height:'2%'}}></View>
        <View style={{alignItems: 'center',flexDirection:'row',width: '80%',height:'9%',backgroundColor:'rgb(153, 255, 153)',borderWidth:1,borderRadius:20 }}>
            <Icon type='font-awesome' name='unlock-alt' size={40}/>
            <TextInput style={{marginLeft:5,width:'80%', height: '100%', borderColor: 'gray', }} secureTextEntry={true} />
        </View>
        <View style={{width: '30%',height:'15%',marginTop: 20}}>
          <Button
            onPress={this.onPressLogin}
            title="Login"
            color="rgba(0, 255, 0,0.7)"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:width,height:height,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});