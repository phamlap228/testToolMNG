import React,{Comment} from 'react';
import {Container} from 'native-base';
import {View,StyleSheet,Text,ScrollView,Image} from 'react-native';
import { ListItem } from 'react-native-elements';
 
export default class DetaisNote extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
       const info= this.props.data
       
        return(
                <ScrollView style={{flex: 1}}>
                <View style={{flex: 1,backgroundColor: 'orange',}}>
                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbKwRN73esc3kQRZzzMv-brBh4Vf4CampkLNQBErrT8BiFNuzQg'}} style={{width:'100%',height:'30%'}} />
                    <Container style={{padding: 20}}>
                    
                        <Text style={{fontWeight:'bold',color:'rgb(255, 77, 255)',fontSize:16}}>Vấn đề cần lưu ý </Text>
                        <View style={{width:'100%',height:1,backgroundColor:'violet'}}/>
                        <Text style={styles.plantText}>NGuồn điện: </Text>
                        <Text style={styles.plantText}>Điều kiện môi trường:</Text>
                        <Text style={styles.plantText}>Nhiệt độ: </Text>
                        <Text style={styles.plantText}>Độ ẩm:</Text>
                        <Text style={styles.plantText}>Chu kỳ bảo dưỡng </Text>
                        <View style={{width:'100%',height:1,backgroundColor:'violet'}}/>
                        <Text style={{fontWeight:'bold',color:'rgb(0, 77, 0)', paddingTop:10, paddingBottom:10}}>Lưu ý:</Text>
                        <Text style={{fontWeight:'bold',color:'rgb(0, 77, 0)', paddingTop:10, paddingBottom:10}}>Đặc tính kỹ thuật khác:</Text>
                    </Container>
                </View>
            </ScrollView>
        )
    }
}
styles = StyleSheet.create({
    plantText: {fontWeight:'bold',color:'rgb(255, 77, 255)',fontSize:14}
});