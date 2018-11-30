import React,{Comment} from 'react';
import {Container} from 'native-base';
import {View,StyleSheet,TextInput,FlatList,Text,ScrollView,Image,Dimensions} from 'react-native';
import { ListItem, Card, Icon } from 'react-native-elements';
import {DeviceEventEmitter} from 'react-native'
import {API} from '../network/API.js';
 var {width,height} = Dimensions.get('window');
 export default class DetaisRoom extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            name:'',
            code:'',
            manager:'',
            reload:false,
            showIconEditName:true,
            showIconEditCode:true,
            showIconEditManager:true,
            showInputName:false,
            showInputCode:false,
            showInputmanager:false,
            // id:this.props.data.id
        }
    }
    

    async componentWillMount(){
        // await this.getDataFromServer();
    }
    getDataFromServer(){
       
        API.getRepairDevice(0,20,this.state.id).then(
            res => {
                console.log('chạy res: '+JSON.stringify(res));
                this.setState({
                    data: res.data.content
                })
            },
            err => {
                console.log('chạy err: '+JSON.stringify(err));
            }
        );
    }
    // _renderIconSua = ()=>{
    //     if(this.state.showIconEdit){
    //         return <Icon name='edit'  color='rgb(200, 203, 209)' size={24}/>
    //     }
    //     else {
    //       return <Icon name='check' type='font-awesome' color='rgb(200, 203, 209)' size={24} />
    //     }
        
    // }
    addRoomEdit=()=>{
        const params={
            id:this.props.data.id,
            name: this.state.name===""? this.props.data.name :this.state.name,
            code: this.state.code===""? this.props.data.code :this.state.code,
            manager:this.state.manager===""? this.props.data.manager :this.state.manager,
        }
        //console.log("params:"+ JSON.stringify(params));
        API.addRoom(params).then(
            res=>{
                if(res.data==='SUCCESS'){
                    this.setState({
                        reload:!this.state.reload,
                        showInputName:false,
                        showInputCode:false,
                        showInputmanager:false,
                    },()=>{Alert.alert("Xong!","Thêm thành công!");})
                    
                    
                }
                else return Alert.alert("Lỗi!","Thêm không thành công!");
                
            },
            err=>{
                console.log(
                    "err"
                );
            });
    }
    render(){
        const info = this.props.data
         return(
            <View style={{width:'100%',height:'100%'}}>
            <Image style={{width:'100%',height:'40%' }} source={require('../images/icon_room.jpg')}/>
            <View style={{flex: 1,backgroundColor:'rgb(225, 225, 234)'}}>
            <ScrollView style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
                <Container style={{flexDirection: 'column',flex:1}}>
                    <Card style={{alignItems: 'flex-start',width: '100%'}}>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'46%',alignSelf:'center'}}>Tên Khoa: </Text>
                            <TextInput editable={this.state.showInputName} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={info.name} ref={(name) => { this.TextInput1 = name }}
                             onChangeText={(name) => this.setState({name})}/>
                            {this.state.showIconEditName? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditName:!this.state.showIconEditName,showInputName:true},()=>{
                                        this.TextInput1.focus();
                                        
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditName:!this.state.showIconEditName,showInputName:false})
                                }}/>}
                        </View>
                    </Card>
                    <Card>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'46%',alignSelf:'center'}}>Mã Khoa: </Text>
                            <TextInput editable={this.state.showInputCode} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={info.code} ref={(code) => { this.TextInput2 = code }}
                             onChangeText={(code) => this.setState({code})}/>
                            {this.state.showIconEditCode? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditCode:!this.state.showIconEditCode,showInputCode:true},()=>{
                                        this.TextInput2.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditCode:!this.state.showIconEditCode,showInputCode:false})
                                }}/>}
                        </View>
                    </Card>
                    <Card style={{alignItems: 'flex-start',}}>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'46%',alignSelf:'center'}}>Trưởng Khoa: </Text>
                            <TextInput editable={this.state.showInputmanager} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={info.manager} ref={(manager) => { this.TextInput3 = manager }}
                             onChangeText={(manager) => this.setState({manager})}/>
                            {this.state.showIconEditManager? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditManager:!this.state.showIconEditManager,showInputmanager:true},()=>{
                                        this.TextInput3.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditManager:!this.state.showIconEditManager,showInputmanager:false})
                                }}/>}
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
     plantText: {fontWeight:'bold',color:'rgb(255, 77, 255)',fontSize:14}
 });