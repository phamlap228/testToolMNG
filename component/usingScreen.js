import React, { Component } from 'react'
import { Header } from 'native-base';
import {View,Text,StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import HeaderContainer from './headerContainer.js';

class UsingScreen extends React.Component{
    constructor (props){
        super(props);
        this.state={
        }
    }
    static navigationOptions = () => {
        let drawerLabel = 'Using'
        let drawerIcon = () =>(
            <Icon name='align-center' type='font-awesome' size={24} color='#007256' /> 
        );
        return{drawerLabel,drawerIcon};
    }
    render(){
        //<StatusBar backgroundColor="rgb(255, 77, 255)" barStyle="light-content" />
        return(
            <View style={{flex: 1}}>
            
            <HeaderContainer {...this.props}/>
            <View style={{flex: 1,}}>
            <Text>use screen</Text></View>
            </View>
        )
    }
}
export default UsingScreen