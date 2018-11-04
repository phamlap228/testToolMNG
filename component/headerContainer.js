
import React, { Component } from 'react'
import {   Container,  Header, Title, Content, Button, Icon,Footer, FooterTab,Left, Right, Body, Drawer} from 'native-base';
import {View,Text,TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ColorApp from '../config/ColorApp.js';

class HeaderContainer extends React.Component{
    constructor (props){
        super(props); 
    }
    render(){
        return(
            <View style ={{backgroundColor:ColorApp.headerColor,width:'100%',flexDirection: 'row',
            justifyContent:'center',alignItems: 'center',height:'8%',alignSelf: 'flex-start'}}>
            <TouchableHighlight style={{left: 10,alignItems: 'center',position:'absolute'}}  
                    onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name="ios-menu" style={{width: 24,height: 24,color: "white"}}/>
                </TouchableHighlight>
            <Text style={{fontWeight: 'bold',fontSize: 16,alignItems: 'center',justifyContent:'center',color:'white'}}>
                {this.props.header}
            </Text>
            </View>
        )
    }
}
export default HeaderContainer