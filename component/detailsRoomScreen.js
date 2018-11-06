import React, { Component } from 'react'
import { Header, Container,Card, Body, Left,Tab,Tabs, TabHeading,Right } from 'native-base';
import {View,Text,StatusBar,Image,TouchableHighlight,TouchableOpacity,ScrollView,StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
import HeaderContainer from './headerContainer.js';
import DetailsItem from './detailsItem.js';
import DetaisUsing from './detailsUsing.js';
import DetaisNote from './detailsNote.js';
import ColorApp from '../config/ColorApp'


class DetailsRoomScreen extends React.Component{
    constructor (props){
        super(props);
        this.state={
        }
    }
    static navigationOptions = () => {
        let drawerLabel = 'DetailsRoomScreen'
        let drawerIcon = () =>(
            <Icon name='align-center' type='font-awesome' size={24} color='rgb(255, 255, 153)' /> 
        );
        return{drawerLabel,drawerIcon};
    }
    render(){
       // <StatusBar backgroundColor="rgb(255, 77, 255)" barStyle="light-content" />
        const info = this.props.navigation.state.params.data;
        return(
                <View style={{flex: 1}}>
                <View style ={{backgroundColor:ColorApp.headerColor,width:'100%',flexDirection: 'row',
                    justifyContent:'center',alignItems: 'center',height:'8%',alignSelf: 'flex-start'}}>
                    <TouchableHighlight style={{left: 10,alignItems: 'center',position:'absolute'}}  
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon name="times" type='font-awesome' color="white" marginLeft={5}/>
                        </TouchableHighlight>
                    <Text style={{fontWeight: 'bold',fontSize: 16,alignItems: 'center',justifyContent:'center',color:'white'}}>
                        Chi tiết phòng
                    </Text>
                    </View>
                    <View style={{width:'100%',height:'100%'}}>
                    <Image style={{width:'100%',height:'40%' }} source={require('../images/icon_room.png')}/>
                    <View style={{flex: 1,backgroundColor:'rgb(225, 225, 234)'}}>
                    <ScrollView>
                    <Container style={{flexDirection: 'column',flex:1}}>
                        <Card style={{alignItems: 'flex-start',width: '100%'}}>
                            <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                                <Text style={{fontSize:14,color:'black',width:'50%',}}>Tên phòng: </Text>
                                <Text style={{fontSize:14,color:'black',width:'50%',}}>{info.name}</Text>
                            </View>
                        </Card>
                        <Card>
                            <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                                <Text style={{fontSize:14,color:'black',width:'50%',}}>Mã phòng: </Text>
                                <Text style={{fontSize:14,color:'black',width:'50%',}}>{info.code}</Text>
                            </View>
                        </Card>
                        <Card style={{alignItems: 'flex-start',}}>
                            <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                                <Text style={{fontSize:14,color:'black',width:'50%',}}>Trưởng phòng: </Text>
                                <Text style={{fontSize:14,color:'black',width:'50%',}}>{info.manager}</Text>
                            </View>
                            
                        </Card>
                    </Container>
                    </ScrollView>
                    </View>
                    </View>
                
            </View>
        )
    }
}
styles = StyleSheet.create({
    plantText: {fontWeight:'bold',color:'rgb(255, 77, 255)',fontSize:14}
});
export default DetailsRoomScreen;
