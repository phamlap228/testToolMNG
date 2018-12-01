import React, { Component } from 'react'
import {   Container,  Header, Switch,Title, 
    Content, Button,Footer, FooterTab,Left, Right, Body, Drawer} from 'native-base';
import {View,Text,TouchableHighlight,StyleSheet,Image,ScrollView,Alert,FlatList,Picker,TouchableOpacity,StatusBar } from 'react-native';
import HeaderContainer from './headerContainer.js';
import SearchInput, { createFilter } from 'react-native-search-filter';
import {AddScreen} from './ScreenName.js';
import { Icon,ListItem,List } from 'react-native-elements';
import ColorApp from '../config/ColorApp.js';
import {list} from './data.js'
import {axios} from 'axios';
import {API} from '../network/API.js';
import Swipeout from 'react-native-swipeout';
import {NavigationActions}from 'react-navigation';

const backgroundColor='#007256';
class RoomScreen extends React.Component{
    constructor (props){
        super(props);
        this.state={
            data:[],
            searchTerm: '',
            searchType:'name',
            loading:false,
            keyItem:null,
            updateRoom:false,
        }
        this.refreshFunction=this.refreshFunction.bind(this)
    }
    searchUpdated(term) {
        this.setState({ searchTerm: term })
      }
    static navigationOptions = () => {
        let drawerLabel = 'Khoa'
        let drawerIcon = () =>(
            <Icon name='align-center' type='font-awesome' size={24} color='#007256' /> 
        );
        return{drawerLabel,drawerIcon};
    }
    async componentDidMount(){
        await this.getDataFromServer();
    }
    getDataFromServer(){
    
        API.getListRoom(0,50).then(
            res => {
                this.setState({
                    data: res.data.content
                })
            },
            err => {
                console.log('chạy err: '+JSON.stringify(err));
            }
        );
    }
    refreshFunction = updateRoom => {
            if(updateRoom===true){
                this.getDataFromServer()
            }
          };
    gotoDetails=(item)=>{
        //this.props.navigation.setParams({refreshFunction:this.refreshFunction.bind(this)});
        this.props.navigation.navigate('DetailsRoomScreen', {data:item});
        // this.props.navigation.reset([NavigationActions.navigate('DetailsRoomScreen', {data:item},{refresh: refreshFunction})], 0)
    }

    render(){
        const KEYS_TO_FILTERS =this.state.searchType;
        const filteredEmails = this.state.data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
        <View style={{flex:1}}>
        <StatusBar backgroundColor={ColorApp.statusBarColor} barStyle="light-content" />
        <HeaderContainer {...this.props} header='Danh sách Khoa'/>
        <View style={{width:'100%',height:50,flexDirection:'row'}}>
            <SearchInput 
                onChangeText={(term) => { this.searchUpdated(term) }} 
                style={styles.searchInput}
                placeholder="Nhập để tìm kiếm..."
                ref = {this.refs.filterInput}
                
            />
            <Picker
                selectedValue={this.state.searchType}
                style={{width:'40%',end:0,position:'absolute'}}
                onValueChange={(itemValue, itemIndex) => this.setState({searchType: itemValue})}>
                <Picker.Item label="Trưởng khoa" value="manager" />
                <Picker.Item label="Tên" value="name" />
            </Picker>
        </View>
        <ScrollView>
            {filteredEmails.map(email => {
            return (
                <Swipeout rowId={email.id}  autoClose={true}
            onClose={()=>{this.setState({keyItem:null})}}
            onOpen={()=>{this.setState({keyItem:email.id})}}
            right={[
                { onPress: ()=>{
                    Alert.alert(
                        "Xác nhận","Xóa Khoa này ?",[
                            {text:'No',onPress:()=>{}},
                            {text:'Yes',onPress:()=>{
                                API.deleteRoom(email.id).then(
                                    res => {
                                        if (res.data==="SUCCESS"){
                                            Alert.alert("Xong!",'Đã xóa');
                                            this.getDataFromServer()
                                            
                                        }
                                        else Alert.alert("Lỗi",'Chưa xóa được!');
                                        
                                    },
                                    err => {
                                        // console.log('chạy err: '+JSON.stringify(err));
                                        Alert.alert("Lỗi",'Chưa xóa được!');
                                    }
                                );
                            }}
                        ]
                    );
                },
                  text: 'Xóa'
                }
              ]}>
                <View>
                    {console.log(this.state.searchType)}
                    <ListItem
                        key={email.id}
                        onPress={()=>{
                            this.gotoDetails(email)
                        }}
                        avatar={<View style={{width: 80, height: 80, backgroundColor: 'rgb(179, 102, 255)', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('./../images/icon_room.jpg')}
                        style={{width: '100%', height: '100%'}} />            
                        </View>}
                        title={email.name}
                        titleStyle={{ fontSize: 18, fontWeight: 'bold'}}
                        containerStyle={{backgroundColor: 'white'}}
                        subtitle={
                        <View style={styles.subtitleView}>
                            <Text numberOfLines={2} style={{color: 'black',margin:5}}>{email.manager}</Text>
                            <Text numberOfLines={1} style={{ marginTop: 10,}}>{email.code}</Text>
                        </View>
                        }
                        rightIcon={<View/>}
                    />
                </View>
                </Swipeout>
                )
            })}
        </ScrollView>
        <TouchableOpacity style={{position:'absolute',right: 20, bottom:20,alignItems:'center', 
            width:50,height:50,borderRadius: 25,backgroundColor:ColorApp.fabsColor}}
            onPress={()=>{
                this.props.navigation.navigate('AddRoom',{refreshFunction:this.refreshFunction.bind(this)})
            }}>
            <Text style={{fontSize: 36,color:'white',alignItems:'center',justifyContent:'center'}}>+</Text>
        </TouchableOpacity>
    </View>
    );
  }
}
styles = StyleSheet.create({
    subtitleView: {
      paddingLeft: 10
    },
    ratingText: {
      color: 'black'
    },
    searchInput:{
        width:'70%',
        backgroundColor: '#ececec',
        padding: 10
    }
  })
export default RoomScreen