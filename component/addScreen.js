
import React, {  Component } from 'react';
import { Platform,StyleSheet,TouchableHighlight, Text, View,StatusBar,Dimensions,TextInput, Image} from 'react-native';
// import { Button, Input } from 'native-base';
import { Icon } from 'react-native-elements';
import HeaderContainer from './headerContainer.js';
import {Actions} from 'react-native-router-flux';

// var {height, width} = Dimensions.get('window');

const backgroundColor='#007256';
export default class AddScreen extends Component {
  constructor (props){
    super(props);
    this.state = {}
}
static navigationOptions = () => {
    let drawerLabel = 'Add'
    let drawerIcon = () =>(
        <Icon name='plus-circle' type='font-awesome' size={24} color={backgroundColor} /> 
    );
    return{drawerLabel,drawerIcon};
}

render(){
    {
        /*<TouchableHighlight
                style={{margin:20,width:200,height: 45,backgroundColor:'violet',padding:10,alignItems: 'center'}} onPress={
                    ()=>{
                        this.props.navigation.goBack()
                    }
                }>
                <Text>Navigation to Main</Text> </TouchableHighlight>*/
    }
    return(
        <View style={{flexDirection: 'column',flex: 1}}>
        <StatusBar backgroundColor="rgb(255, 77, 255)" barStyle="light-content" />
        <HeaderContainer {...this.props}/>
        <View style={{flex: 1,alignItems:'center',justifyContent:'center',backgroundColor:backgroundColor}}>
            <Text style={{color: 'white',fontWeight:'bold'}}>ADDS screen</Text>
            
        </View>
        </View>
        
    )
}
}