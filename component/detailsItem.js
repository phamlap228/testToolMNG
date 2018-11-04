import React,{Comment} from 'react';
import {Container,Card,CardItem} from 'native-base';
import {View,StyleSheet,Text,ScrollView,Image} from 'react-native';
 
export default class DetaisItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
       const info= this.props.data
       
        return(
                <View style={{width:'100%',height:'100%'}}>
                <Image style={{width:'100%',height:'40%' }} source={require('../images/icon_butchi.png')}/>
                <View style={{flex: 1,backgroundColor:'rgb(225, 225, 234)'}}>
                <ScrollView>
                <Container style={{flexDirection: 'column',flex:1}}>
                    <Card style={{alignItems: 'flex-start',}}>
                        <Text style={{fontSize:14,color:'black',}}>Tên thiết bị: {info.name}</Text>
                        <Text style={{fontSize:14,color:'black'}}>Mã thiết bị:</Text>
                    </Card>
                    <Card style={{alignItems: 'flex-start',}}>
                        
                        <Text style={{fontSize:14,color:'black',}}>Nơi sd:</Text>
                        <Text style={{fontSize:14,color:'black',}}>Ngày nhận:</Text>
                    </Card>
                    <Card style={{alignItems: 'flex-start',}}>
                        <Text style={{fontSize:14,color:'black'}}>Ngày sd:</Text>
                        <Text style={{fontSize:14,color:'black'}}>Giá thiết bị:</Text>
                        <Text style={{fontSize:14,color:'black'}}>Nguồn điện từ: {} đến: {}</Text>
                    </Card>
                    <Card style={{alignItems: 'flex-start',}}>
                        <Text style={{fontSize:14,color:'black'}}>Năm sx:</Text>
                        <Text style={{fontSize:14,color:'black'}}>Điện áp:</Text>
                        <Text style={{fontSize:14,color:'black'}}>Sức chứa:</Text>
                    </Card>
                    <Card style={{alignItems: 'flex-start',}}>
                        <Text style={{fontSize:14,color:'black'}}>Phụ tùng kèm theo:</Text>
                        <Text style={{fontSize:14,color:'black'}}>Người nhận: {info.receiver}</Text>
                        <Text style={{fontSize:14,color:'black'}}>Nguồn tiền:</Text>
                    </Card>
                    <Card style={{alignItems: 'flex-start',}}>
                        <Text style={{fontSize:14,color:'black'}}>Ngày nhận tiền:</Text>
                        <Text style={{fontSize:14,color:'black'}}>Trạng thái: </Text>
                        <Text style={{fontSize:14,color:'black'}}>Mức độ:</Text>
                    </Card>
                    <Card>
                        <Text style={{fontSize:14,color:'black'}}>Mô tả thiết bị: {info.description}</Text>
                        <Text style={{fontSize:14,color:'black',}}>Nơi sx:</Text>
                    </Card>
                </Container>
                </ScrollView>
                </View>
                </View>
        )
    }
}
styles = StyleSheet.create({
    plantText: {fontWeight:'bold',fontSize:14,flex:1,color:'black',alignItems: 'center',height:'33.33%'},
    containerStyle:{borderWidth: 1, flexDirection: 'row',flex:1}
});