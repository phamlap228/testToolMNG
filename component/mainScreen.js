import React, { Component } from 'react'
import {   Container,  Header, Switch,Title, 
    Content, Button,Footer, FooterTab,Left, Right, Body, Drawer} from 'native-base';
import {View,Text,TouchableHighlight,StyleSheet,Image,ScrollView,FlatList,Picker,TouchableOpacity,StatusBar } from 'react-native';
import HeaderContainer from './headerContainer.js';
import SearchInput, { createFilter } from 'react-native-search-filter';
import {AddScreen} from './ScreenName.js';
import { Icon,ListItem,List } from 'react-native-elements';
import ColorApp from '../config/ColorApp.js';
import {list} from './data.js'
import {axios} from 'axios';
import {API} from '../network/API.js';
import _ from 'lodash';
import {listDevice} from './data.js'
const backgroundColor='#007256';

class MainScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            searchTerm: '',
            searchType:'name',
            loading:true
        }
      }
      searchUpdated(term) {
        this.setState({ searchTerm: term })
      }
    static navigationOptions = () => {
        let drawerLabel = 'Quản lí hiết bị'
        let drawerIcon = () =>(
            <Icon name='home' type='font-awesome' size={24} color={backgroundColor} /> 
        );
        return{drawerLabel,drawerIcon};
    }
    async componentWillMount(){
        await this.getDataFromServer();
    }
    getDataFromServer(){    
        // this.setState({
        //     data:listDevice
        // })
        // if(this.props.newItem!=''||this.props.newItem!=null){
        //     var array= this.state.listDevice;
        //     var newItem=this.props.newItem;
        //     var newArr=_(array).push(newItem)
        //     newArr=newArr.commit();
        //     console.log('====================================');
        //     console.log("new list: "+ JSON.stringify(newArr));
        //     console.log('====================================');
        // }
       
        API.getListDevice(0,20).then(
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
    gotoDetails=(item)=>{
        this.props.navigation.navigate('Details', {data:item});
    }
    _renderIconSua = ()=>{
        if(this.state.showIconEdit){
            return <Icon name='edit'  color='rgb(200, 203, 209)' size={24}/>
        }
        else {
          return <Icon name='check' type='font-awesome' color='rgb(200, 203, 209)' size={24} />
        }
        
    }
  render() {
    const KEYS_TO_FILTERS =this.state.searchType;
    //listDevice
    const filteredEmails = this.state.data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    // const filteredEmails = listDevice.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    
    return (
        <View style={{flex:1}}>
        <StatusBar backgroundColor={ColorApp.statusBarColor} barStyle="light-content" />
        <HeaderContainer {...this.props} header='Danh sách thiết bị'/>
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
                <Picker.Item label="Người nhận" value="receiver" />
                <Picker.Item label="Tên" value="name" />
            </Picker>
        </View>
        <ScrollView>
            {filteredEmails.map(email => {
            return (
                <View>
                    {console.log(this.state.searchType)}
                    <ListItem
                        key={email.id}
                        onPress={()=>{
                            this.gotoDetails(email)
                        }}
                        avatar={<View style={{width: 80, height: 80, backgroundColor: 'rgb(179, 102, 255)', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('./../images/icon_butchi.jpg')}
                        style={{width: '100%', height: '100%'}} />            
                        </View>}
                        title={email.name}
                        titleStyle={{ fontSize: 18, fontWeight: 'bold'}}
                        containerStyle={{backgroundColor: 'white'}}
                        subtitle={
                        <View style={styles.subtitleView}>
                            <Text numberOfLines={2} style={{color: 'black',margin:5}}>{email.description}</Text>
                            <Text numberOfLines={1} style={{ marginTop: 10,}}>{email.receiver}</Text>
                        </View>
                        }
                        rightIcon={<View/>}
                    />
                </View>
                )
            })}
        </ScrollView>
        <TouchableOpacity style={{position:'absolute',right: 20, bottom:20,alignItems:'center', 
        width:50,height:50,borderRadius: 25,backgroundColor:ColorApp.fabsColor}}
        onPress={()=>{
            this.props.navigation.navigate('Add')
        }}
        >
            <Text style={{fontSize: 36,color:'white',alignItems:'center',justifyContent:'center'}}>+</Text>
        </TouchableOpacity>
        <View>

</View>
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
export default MainScreen