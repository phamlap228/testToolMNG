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
                <Image style={{width:'100%',height:'40%' }} source={require('../images/icon_butchi.jpg')}/>
                <View style={{flex: 1,backgroundColor:'rgb(225, 225, 234)'}}>
                <ScrollView>
                <Container style={{flexDirection: 'column',flex:1}}>
                    <Card style={{alignItems: 'flex-start',width: '100%'}}>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Tên thiết bị: </Text>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>{info.name}</Text>
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Mã thiết bị: </Text>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>{info.code}</Text>
                        </View>
                    </Card>
                    <Card style={{alignItems: 'flex-start',}}>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Nơi sd: </Text>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>{info.useIn}</Text>
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Ngày nhận:  </Text>
                            <Text style={{fontSize:14,color:'black',}}>{info.dateReceived}</Text>
                        </View>
                        
                    </Card>
                    <Card style={{alignItems: 'flex-start',}}>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Ngày sd:  </Text>
                            <Text style={{fontSize:14,color:'black',}}>{info.dateUse}</Text>
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Giá thiết bị:  </Text>
                            <Text style={{fontSize:14,color:'black',}}>{info.price}</Text>
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Nguồn điện từ:  </Text>
                            <Text style={{fontSize:14,color:'black',}}>{info.voltageFrom} đến:  {info.voltageTo}</Text>
                        </View>
                    </Card>
                    <Card style={{alignItems: 'flex-start',}}>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Năm sx:  </Text>
                            <Text style={{fontSize:14,color:'black',}}>{info.madeYear}</Text>
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Điện áp:  </Text>
                            <Text style={{fontSize:14,color:'black',}}>{info.ampe}</Text>
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Công suất:  </Text>
                            <Text style={{fontSize:14,color:'black',}}>{info.capacity}</Text>
                        </View>
                    </Card>
                    <Card style={{alignItems: 'flex-start',}}>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Phụ tùng kèm theo:  </Text>
                            <Text style={{fontSize:14,color:'black',}}>{info.accessory}</Text>
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Người nhận:  </Text>
                            <Text style={{fontSize:14,color:'black',}}>{info.receiver}</Text>
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Nguồn tiền:  </Text>
                            <Text style={{fontSize:14,color:'black',}}>{info.moneySource}</Text>
                        </View>
                    </Card>
                    <Card style={{alignItems: 'flex-start',}}>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Ngày nhập:  </Text>
                            <Text style={{fontSize:14,color:'black',}}>{info.dateIn}</Text>
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Trạng thái:  </Text>
                            <Text style={{fontSize:14,color:'black',}}>{info.statusReceipt}</Text>
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Mức độ:  </Text>
                            <Text style={{fontSize:14,color:'black',}}>{info.levelQuality}</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Mô tả thiết bị: </Text>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>{info.description}</Text>
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Nơi sx: </Text>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>{info.madeIn}</Text>
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>Số máy: </Text>
                            <Text style={{fontSize:14,color:'black',width:'50%',}}>{info.madeIn}</Text>
                        </View>
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