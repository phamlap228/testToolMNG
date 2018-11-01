import React, { Component } from 'react'
import { Header, Container, Body, Left, Right } from 'native-base';
import {View,Text,StatusBar,Image,TouchableHighlight,TouchableOpacity,ScrollView,StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
import HeaderContainer from './headerContainer.js';

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
    componentWillMount(){
    }
    // renderImg=()=>(
    //     // <Image source={{uri:this.state.item.avatar_url}} style={{width:'70%',height:'30%'}} />
    // )
    render(){
       
        const info = this.props.navigation.state.params.data;
        return(
                <View style={{flex: 1}}>
                <StatusBar backgroundColor="rgb(255, 77, 255)" barStyle="light-content" />
                
                <TouchableOpacity style={{alignItems: 'flex-start',justifyContent: 'center',width:'100%',height:'8%', backgroundColor:'rgb(204, 0, 153)'}}  
                    onPress={() => this.props.navigation.goBack()}>
                    <Icon name="arrow-left" type='font-awesome' color="white" marginLeft={5}/>
                </TouchableOpacity>
                <ScrollView style={{flex: 1}}>
                <View style={{flex: 1,backgroundColor: 'orange',}}>
                    <Image source={{uri:info.avatar_url}} style={{width:'100%',height:'50%'}} />
                    <Container style={{padding: 20}}>
                    <Text style={{fontWeight:'bold',color:'rgb(255, 77, 255)',fontSize:16}}>Tên: {info.name}</Text>
                    <Text style={styles.plantText}>Mã hiệu: {info.keycode}</Text>
                    <Text style={styles.plantText}>Hãng sản xuất: {info.producer}</Text>
                    <Text style={styles.plantText}>Nước xuất xứ: {info.country}</Text>
                    <Text style={styles.plantText}>Năm sản xuất: {info.emanufacture_date}</Text>
                    <Text style={styles.plantText}>Năm nhập: {info.received_date}</Text>
                    <Text style={styles.plantText}>Nguồn kinh phí: {info.source}</Text>
                    <Text style={styles.plantText}>Tình trạng: {info.status}</Text>
                    <Text style={{fontWeight:'bold',color:'rgb(0, 77, 0)', paddingTop:10, paddingBottom:10}}>Chi tiết: {info.subtitle}</Text>
                    <Text style={{fontWeight:'bold',color:'rgb(255, 77, 255)'}}>Ngày nhập: {info.emanufacture_date}</Text></Container>
                </View>
            </ScrollView>
            </View>
        )
    }
}
styles = StyleSheet.create({
    plantText: {fontWeight:'bold',color:'rgb(255, 77, 255)',fontSize:14}
});
export default DetailsScreen;
