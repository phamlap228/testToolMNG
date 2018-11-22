import React, { Component } from 'react'
import { Header, Container, Body, Left,Tab,Tabs, TabHeading,Right } from 'native-base';
import {View,Text,StatusBar,Image,TouchableHighlight,TouchableOpacity,ScrollView,StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
import HeaderContainer from './headerContainer.js';
import DetailsItem from './detailsItem.js';
import DetaisUsing from './detailsUsing.js';
import DetaisNote from './detailsNote.js';
import ColorApp from './../config/ColorApp'


class DetailsScreen extends React.Component{
    constructor (props){
        super(props);
        this.state={
        }
    }
    static navigationOptions = () => {
        let drawerLabel = 'Details'
        let drawerIcon = () =>(
            <Icon name='align-center' type='font-awesome' size={24} color='rgb(255, 255, 153)' /> 
        );
        return{drawerLabel,drawerIcon};
    }
    render(){
       // <StatusBar backgroundColor="rgb(255, 77, 255)" barStyle="light-content" />
        const info = this.props.navigation.state.params.data;
        // console.log(JSON.stringify(this.props.navigation.state.params))
        return(
                <View style={{flex: 1}}>
                    <View style ={{backgroundColor:ColorApp.headerColor,width:'100%',flexDirection: 'row',
                    justifyContent:'center',alignItems: 'center',height:'8%',alignSelf: 'flex-start'}}>
                    <TouchableHighlight style={{left: 10,alignItems: 'center',position:'absolute'}}  
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon name="times" type='font-awesome' color="white" marginLeft={5}/>
                        </TouchableHighlight>
                        <Text style={{fontWeight: 'bold',fontSize: 16,alignItems: 'center',justifyContent:'center',color:'white'}}>
                            Chi tiết sản phẩm
                        </Text>
                    </View>
                    <Tabs tabBarPosition='bottom'>
                        <Tab  heading={<TabHeading style={{backgroundColor: 'rgb(153, 0, 255)',flexDirection:'column'}}>
                        <Icon name="align-center" type='font-awesome' color='white' />
                        <Text style={{color:'white', marginLeft: 5}}>Chi tiết</Text></TabHeading>}>
                            <DetailsItem data={info} />
                        </Tab>
                        <Tab  heading={<TabHeading style={{backgroundColor: 'rgb(153, 0, 255)',flexDirection:'column'}}>
                        <Icon name="info" type='font-awesome' color='white' />
                        <Text style={{color:'white', marginLeft: 5}}>Lịch sử sửa chữa</Text></TabHeading>}>
                            <DetaisNote data={info}/>
                        </Tab>
                        <Tab  heading={<TabHeading style={{backgroundColor: 'rgb(153, 0, 255)',flexDirection:'column'}}>
                        <Icon name="table" type='font-awesome' color='white' />
                        <Text style={{color:'white', marginLeft: 5}}>Quá trình SD</Text></TabHeading>}>
                            <DetaisUsing data={info}/>
                    </Tab>
                </Tabs>
                
            </View>
        )
    }
}
styles = StyleSheet.create({
    plantText: {fontWeight:'bold',color:'rgb(255, 77, 255)',fontSize:14}
});
export default DetailsScreen;
