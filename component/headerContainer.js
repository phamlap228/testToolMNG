
import React, { Component } from 'react'
import {   Container,  Header, Title, Content, Button, Icon,Footer, FooterTab,Left, Right, Body, Drawer} from 'native-base';
import {View,Text,TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

class HeaderContainer extends React.Component{
    constructor (props){
        super(props); 
    }
    render(){
        return(
            <View style ={{backgroundColor:'rgb(204, 0, 153)',width:'100%',flexDirection: 'row',
            justifyContent:'flex-start',alignItems: 'center',height:'8%',alignSelf: 'flex-start'}}>
                <TouchableHighlight style={{marginLeft: 10,alignItems: 'center'}}  
                    onPress={() => this.props.navigation.openDrawer()}>
                    <Icon name="ios-menu" style={{width: 24,height: 24,color: "white"}}/>
                </TouchableHighlight>
            </View>
        )
    }
}
export default HeaderContainer