import React,{Comment} from 'react';
import {Container} from 'native-base';
import {View,StyleSheet,FlatList,Text,Button,ScrollView,Alert,Image,TextInput,Modal,TouchableHighlight,TouchableOpacity,Dimensions} from 'react-native';
import { ListItem,Icon, Card } from 'react-native-elements';
import {API} from '../network/API.js';
import DateTimePicker from 'react-native-modal-datetime-picker';
import ColorApp from '../config/ColorApp';
 var {width,height} = Dimensions.get('window');
 const listData =[
    {
      dateTime:'Thứ 2, Ngày 20/9/2015',
      content: 'Sử dụng lần 1',
      follower:'Human Place',
      deviceId:3,
    },{
        dateTime:'Thứ 2, Ngày 30/9/2015',
        content: 'Sử dụng lần 2',
        follower:'Human Place',
        deviceId:3,
      },{
        dateTime:'Thứ 2, Ngày 30/11/2015',
        content: 'Sử dụng lần 3',
        follower:'Human Place',
        deviceId:3,
      },{
        dateTime:'Thứ 2, Ngày 10/12/2015',
        content: 'Sử dụng lần 4',
        follower:'Human Place',
        deviceId:3,
      },{
        dateTime:'Thứ 2, Ngày 12/12/2015',
        content: 'Sử dụng lần 5',
        follower:'Human Place',
        deviceId:3,
      }, 
    ]
export default class DetaisUsing extends React.Component{
    constructor(props){
        super(props)
        this.state={
            dateTime:'',data:[],
            dateConverted:'',
            modalVisible:false,
            id:this.props.data.id,
            showDateTime:false
            
        }
    }
   
    _keyExtractor = (item) => {
        return item.id
    }
    async componentWillMount(){
        await this.getDataFromServer();
    }
    getDataFromServer(){   
        API.getUseHistory(0,100,this.state.id).then(
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
    _renderItem = ({item})=>{
        var date = new Date(item.dateTime);
        datetime= date.toLocaleDateString();
        return(
            <ListItem
                title={
                    <Container style={{flexDirection: 'row',height:'7%',flex:2, margin:5}}>
                            <View style={{flexDirection:'column',flex: 0.5,alignSelf: 'center',}} >
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>{datetime}</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 1,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>{item.content}</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 0.5,alignSelf: 'center',}}>
                                <Text style={{}}>{item.follower}</Text>
                            </View>

                    </Container>}
                    rightIcon={<View/>}
            />
        )
    }
    _hideDateTimePicker=()=>{this.setState({showDateTime:false})}
    _handleDatePicked=(date)=>{
        var date2 = new Date(date).getTime();
        this.setState({
            dateTime:date2,
            dateConverted:date.toLocaleDateString(),
            showDateTime:false,
        });
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    addRepair(){
        const params={
            deviceId:this.state.id,
            dateTime:this.state.dateTime,
            content:this.state.content,
            follower:this.state.follower,
        }
        if(params.content||params.dateTime||params.follower !=""){
            return(
                API.addUse(params).then(
                    res =>{
                        if(res.data==="SUCCESS"){
                            // console.log(JSON.stringify(res));
                            // console.log("\n params" +JSON.stringify(params));
                            Alert.alert('Done','Thêm thành công!')
                            this.getDataFromServer();
                            this.setModalVisible(false);
                            this.setState({
                                dateTime:'',
                                content:'',
                                follower:'',
                            });
                        }
                        else{
                            Alert.alert('Failed','Thêm không thành công!')
                            
                        // console.log("\n params" +JSON.stringify(params));
                        }
                        
                    },
                    err=>{
                        // console.log('lỗi:'+err)
                        Alert.alert('Failed','Thêm không thành công!')
                    }
                )
            )
        }
        if(params.content||params.dateTime||params.follower ===""){
            return(
                Alert.alert('Chú ý',"Không được để trống")
            )
        }
        
    }
    render(){
       const scrollEnable = this.state.screenHeight>height
       
        return(
            <View style={{width,height}}>
                    <View style={{borderWidth: 0.7,flexDirection: 'row',height:'7%', width:width,}}>
                            <View style={{flexDirection:'column',flex: 0.5,alignSelf: 'center',}} >
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>Ngày tháng</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 1,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>Nội dung</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 0.5,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>Người theo dõi</Text>
                            </View>

                    </View>
                    <TouchableOpacity style={{position:'absolute',right: 40, bottom:40+(height/5),alignItems:'center',zIndex:2, 
                        width:50,height:50,borderRadius: 25,backgroundColor:ColorApp.fabsColor}}
                        onPress={()=>{
                            this.setModalVisible(true);
                        }}
                        ><View style={{flex:1}}>
                            <Text style={{fontSize: 36,color:'white',alignItems:'center',justifyContent:'center'}}>+</Text>
                        </View>
                
                    </TouchableOpacity>
                    <View style={{flex:1}}>
                    <ScrollView style={{position: 'absolute', top: 0, left: 0, right: 0, bottom:'20%'}}>
                        <View style={{flex:1,height:'80%'}}>
                            <FlatList
                                data={this.state.data}
                                keyExtractor={this._keyExtractor}
                                renderItem={this._renderItem}
                            />  
                        </View>
                    </ScrollView>
                    <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisible}
                            >
                            
                            <View style={{width:'100%',height:'100%',backgroundColor:'smoke'}}>
                              <View>
                              <View style ={{backgroundColor:ColorApp.headerColor,width:'100%',flexDirection: 'row',
                              justifyContent:'center',alignItems: 'center',height:'8%',alignSelf: 'flex-start'}}>
                              <TouchableHighlight style={{left: 10,alignItems: 'center',position:'absolute'}}  
                                      onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                                      <Icon name="times" type='font-awesome' color="white" marginLeft={5}/>
                                  </TouchableHighlight>
                                  <Text style={{fontWeight: 'bold',fontSize: 16,alignItems: 'center',justifyContent:'center',color:'white'}}>
                                      Thêm lần sử dụng
                                  </Text>
                              </View>
                              <View style={{width:'100%',height:'100%',}}>
                              <ScrollView>
                                
                                <View style={{flex:1}}>
                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',margin:5,borderWidth:0.5,borderTopRightRadius:10,borderBottomRightRadius:10,
                                    borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:'rgb(230, 230, 230)'}}>
                                        <View  style={{flex:0.4,alignItems:'center'}}>
                                            <Text>Ngày tháng </Text>
                                        </View>
                                        
                                        <View style={{flex:0.6,backgroundColor:'rgb(249, 250, 252)',flexDirection:'row',borderLeftWidth:0.5,borderBottomRightRadius:10,borderTopRightRadius:10}}>
                                            
                                            <TextInput style={{width:'80%',alignItems:'center'}}
                                                placeholder={""+this.state.dateConverted} value={this.state.dateTime} ref={(input) => { this.TextInput1 = input }}
                                                editable={false}
                                                />
                                            <TouchableHighlight onPress={()=>{
                                                this.setState({showDateTime:true})
                                            }} style={{width:'20%',marginTop:5}}>
                                            <Icon name='calendar' type='font-awesome' size={36} color='#007256' /> 
                                            </TouchableHighlight>    
                                                <DateTimePicker styles={{}}
                                                    isVisible={this.state.showDateTime}
                                                    onConfirm={this._handleDatePicked}
                                                    onCancel={()=>{this.setState({showDateTime:false})}}
                                                />
                                        </View>
                                        
                                    </View>
                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',margin:5,borderWidth:0.5,borderTopRightRadius:10,borderBottomRightRadius:10,
                                    borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:'rgb(230, 230, 230)'}}>
                                        <View  style={{flex:0.4,alignItems:'center'}}>
                                            <Text>Nội dung </Text>
                                        </View>
                                        <View style={{flex:0.6,backgroundColor:'rgb(249, 250, 252)',borderLeftWidth:0.5,borderBottomRightRadius:10,borderTopRightRadius:10}}>
                                            <TextInput 
                                            placeholder={'click để nhập...'}value={this.state.parameter} ref={(content) => { this.TextInput4 = content }}
                                            onChangeText={(content) => this.setState({content})} 
                                            />
                                        </View>
                                        
                                    </View>
                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',margin:5,borderWidth:0.5,borderTopRightRadius:10,borderBottomRightRadius:10,
                                    borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:'rgb(230, 230, 230)'}}>
                                        <View style={{flex:0.4,alignItems:'center',}}>
                                            <Text >Người theo dõi </Text>
                                        </View>
                                        <View style={{flex:0.6,backgroundColor:'rgb(249, 250, 252)',borderLeftWidth:0.5,borderBottomRightRadius:10,borderTopRightRadius:10}}>
                                            <TextInput 
                                            placeholder={'click để nhập...'}value={this.state.follower} ref={(follower) => { this.TextInput4 = follower }}
                                            onChangeText={(follower) => this.setState({follower})}
                                            />
                                        </View>
                                        
                                    </View>
                                    <View style={{width: '30%',alignItems:'center',alignSelf:'center'}}>
                                        <Button
                                            onPress={()=>{
                                                this.addRepair();
                                            }}
                                            title="Thêm"
                                            color="#841584"
                                        />
                                    </View>
                                    
                                
                                </View>
                                
                                </ScrollView>
                                </View>
                              </View>
                            </View>
                          </Modal>
                    </View>
            </View>
            
        )
    }
}
styles = StyleSheet.create({
    plantText: {fontWeight:'bold',color:'rgb(255, 77, 255)',fontSize:14}
});