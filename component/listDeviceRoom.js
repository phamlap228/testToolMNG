import React,{Comment} from 'react';
import {Container, CardItem} from 'native-base';
import {View,StyleSheet,FlatList,Text,ScrollView,Image,Dimensions} from 'react-native';
import { ListItem, Card, List } from 'react-native-elements';

import {API} from '../network/API.js';
 var {width,height} = Dimensions.get('window');
 export default class ListDeviceRoom extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            id:this.props.data.id
        }
    }
    
    // _keyExtractor = (item) => {
    //     return item.id
    // }
    async componentWillMount(){
        await this.getDataFromServer();
    }
    getDataFromServer(){
       
        API.getDeviceRoom(0,20,this.state.id).then(
            res => {
                console.log('chạy res getDeviceRoom: '+JSON.stringify(res));
                this.setState({
                    data: res.data.content
                })
            },
            err => {
                console.log('chạy err: '+JSON.stringify(err));
            }
        );
    }
    _renderItem = ({item})=>{
        return(
            <ListItem 
                    title={
                        <View style={{flex: 1}}>
                            <CardItem style={{flexDirection:'row',flex: 1,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center',width:'50%'}}>Tên thiết bị: </Text>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center',width:'50%'}}>{item.name}</Text>
                            </CardItem>
                            <CardItem style={{flexDirection:'row',flex: 1,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center',width:'50%'}}>Mã thiết bị: </Text>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center',width:'50%'}}>{item.code}</Text>
                            </CardItem>
                            <CardItem style={{flexDirection:'row',flex: 1,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center',width:'50%'}}>Tên trưởng phòng: </Text>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center',width:'50%'}}>{this.props.data.manager}</Text>
                            </CardItem>
                        </View>
                    } 
                    rightIcon={<View/>}/>
        )
    }
    render(){
            {console.log("data: "+ JSON.stringify(this.state.data))}
         return(
            <View style={{width:'100%',height:'100%'}}>
            <Image style={{width:'100%',height:'40%' }} source={require('../images/icon_room.jpg')}/>
            <View style={{flex: 1,backgroundColor:'rgb(225, 225, 234)'}}>
            <ScrollView >
                        <View style={{height:'100%',width:'100%',}}>
                            <FlatList
                                data={this.state.data}
                                keyExtractor={this._keyExtractor}
                                renderItem={this._renderItem}
                            />  
                        </View>
                    </ScrollView>
             </View>
                
        </View>
         )
     }
 }
 styles = StyleSheet.create({
     plantText: {fontWeight:'bold',color:'rgb(255, 77, 255)',fontSize:14}
 });