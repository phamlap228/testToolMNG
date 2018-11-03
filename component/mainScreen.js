import React, { Component } from 'react'
import {   Container,  Header, Switch,Title, 
    Content, Button,Footer, FooterTab,Left, Right, Body, Drawer} from 'native-base';
import {View,Text,TouchableHighlight,StyleSheet,Image,ScrollView,FlatList,TouchableOpacity,StatusBar } from 'react-native';
import HeaderContainer from './headerContainer.js';
import SearchInput, { createFilter } from 'react-native-search-filter';
import {AddScreen} from './ScreenName.js';
import { Icon,ListItem,List } from 'react-native-elements';
const KEYS_TO_FILTERS = ['name', 'receiver',];
import {list} from './data.js'
import {axios} from 'axios';
import {API} from '../network/API.js';
const backgroundColor='#fff';
// const  instance = axios.create({
//     baseURL: '171.244.4.48:6969/api/',
//     timeout: 1000,
//   });
//   return instance;


class MainScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            searchTerm: '',
            loading:true
        }
      }
      searchUpdated(term) {
        this.setState({ searchTerm: term })
      }
    static navigationOptions = () => {
        let drawerLabel = 'Main'
        let drawerIcon = () =>(
            <Icon name='home' type='font-awesome' size={24} color={backgroundColor} /> 
        );
        return{drawerLabel,drawerIcon};
    }
    async componentDidMount(){
        await this.getDataFromServer();
    }
    getDataFromServer(){
    
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
  render() {
    const filteredEmails = this.state.data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
        <View style={{flex: 1}}>
        <StatusBar backgroundColor="rgb(255, 77, 255)" barStyle="light-content" />
        <HeaderContainer {...this.props}/>
        <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Nhập để tìm kiếm..."
          ref = {this.refs.filterInput}
          />
        <ScrollView>
        {filteredEmails.map(email => {
            return (
                <View>
                    <ListItem
                        onPress={()=>{
                            this.gotoDetails(email)
                        }}
                        avatar={<View style={{width: 80, height: 80, backgroundColor: 'rgb(255, 77, 255)', borderRadius: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={{uri: email.avatar_url}}
                        style={{width: '100%', height: '100%'}} />            
                        </View>}
                        title={email.name}
                        titleStyle={{color: 'rgb(204, 0, 153)', fontSize: 18, fontWeight: 'bold'}}
                        containerStyle={{backgroundColor: 'white'}}
                        subtitle={
                        <View style={styles.subtitleView}>
                            <Text numberOfLines={2} style={{color: 'black',margin:5}}>{email.description}</Text>
                            <Text numberOfLines={1} style={{ marginTop: 10, color: 'rgb(204, 0, 153)'}}>{email.receiver}</Text>
                        </View>
                        }
                        rightIcon={<View/>}
                    />
                </View>
            )
          })}
        </ScrollView>
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
        backgroundColor: '#ececec',
        padding: 10
    }
  })
export default MainScreen