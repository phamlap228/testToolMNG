import React,{Comment} from 'react';
import {Container} from 'native-base';
import {View,StyleSheet,Text,ScrollView,Image} from 'react-native';
 
export default class DetaisItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
       const info= this.props.data
       
        return(
                <ScrollView style={{flex: 1}}>
                <View style={{flex: 1,backgroundColor: 'orange',}}>
                    <Image source={{uri:info.avatar_url}} style={{width:'100%',height:'50%'}} />
                    <Container style={{padding: 20}}>
                    <Text style={{fontWeight:'bold',color:'rgb(255, 77, 255)',fontSize:16}}>Tên: {info.name}</Text>
                    <View style={{width:'100%',height:1,backgroundColor:'violet'}}/>
                    <Text style={styles.plantText}>Mã hiệu: {info.keycode}</Text>
                    <Text style={styles.plantText}>Hãng sản xuất: {info.producer}</Text>
                    <Text style={styles.plantText}>Nước xuất xứ: {info.country}</Text>
                    <View style={{width:'100%',height:1,backgroundColor:'violet'}}/>
                    <Text style={styles.plantText}>Năm sản xuất: {info.emanufacture_date}</Text>
                    <Text style={styles.plantText}>Năm nhập: {info.received_date}</Text>
                    <Text style={styles.plantText}>Nguồn kinh phí: {info.source}</Text>
                    <View style={{width:'100%',height:1,backgroundColor:'violet'}}/>
                    <Text style={styles.plantText}>Tình trạng: {info.status}</Text>
                    <Text style={{fontWeight:'bold',color:'rgb(0, 77, 0)', paddingTop:10, paddingBottom:10}}>Chi tiết: {info.description}</Text>
                    <Text style={{fontWeight:'bold',color:'rgb(255, 77, 255)'}}>Ngày nhập: {info.emanufacture_date}</Text></Container>
                </View>
            </ScrollView>
        )
    }
}
styles = StyleSheet.create({
    plantText: {fontWeight:'bold',color:'rgb(255, 77, 255)',fontSize:14}
});