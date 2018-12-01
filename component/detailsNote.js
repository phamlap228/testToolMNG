import React,{Comment} from 'react';
import {Container} from 'native-base';
import {View,StyleSheet,FlatList,Text,Button,ScrollView,Alert,Image,TextInput,Modal,TouchableHighlight,TouchableOpacity,Dimensions} from 'react-native';
import { ListItem, Card,Icon } from 'react-native-elements';
import ColorApp from '../config/ColorApp.js';
import {API} from '../network/API.js';
import DateTimePicker from 'react-native-modal-datetime-picker';
 var {width,height} = Dimensions.get('window');


export default class DetaisNote extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            screenHeight:0,
            id:this.props.data.id,
            modalVisible: false,
            //
            showDateTime:false,
            dateTime:'',
            content: '',
            level:'',
            follower:'',
            dateConverted:'',
            deviceId:null,
        }
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
    onSizeChange = (contentWidth,contentHeight)=>{
        this.setState({screenHeight:contentHeight})
    }
    _keyExtractor = (item) => {
        return item.id
    }
    async componentWillMount(){
        await this.getDataFromServer();
    }
    getDataFromServer(){
       
        API.getRepairDevice(0,100,this.state.id).then(
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
        this.setState({deviceId:item.deviceId});
        return(
            <ListItem
                title={
                    <Container style={{flexDirection: 'row',height:'10%',flex: 1,margin:5}}>
                            <View style={{flexDirection:'column',flex: 0.4,alignSelf: 'center',}} >
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>{date.toLocaleDateString()}</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 1,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>{item.content}</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 0.5,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>{item.level}</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 0.6,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'flex-start',justifyContent: 'flex-start'}}>{item.follower}</Text>
                            </View>

                    </Container>}
                    rightIcon={<View/>}
            />
        )
    }
    addRepair(){
        const params={
            deviceId:this.state.id,
            dateTime:this.state.dateTime,
            content:this.state.content,
            level:this.state.level,
            follower:this.state.follower,
        }
        if(params.content||params.dateTime||params.level||params.follower !=""){
            return(
                API.addRepair(params).then(
                    res =>{
                        if(res.data==="SUCCESS"){
                            // console.log(JSON.stringify(res));
                            // console.log("\n params" +JSON.stringify(params));
                            Alert.alert('Done','Thêm thành công!')
                            this.getDataFromServer();
                            this.setModalVisible(false);
                            this.setState({
                                dateTime:'',
                                level:'',
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
        if(params.content||params.dateTime||params.level||params.follower ===""){
            return(
                Alert.alert('Chú ý',"Không được để trống")
            )
        }
        
    }
    render(){
       const scrollEnable = this.state.screenHeight>height
       console.log(JSON.stringify(this.props.data));
        return(
            <View style={{width,height}}>
                    <View style={{borderWidth: 0.7,flexDirection: 'row',height:'7%', width:width,margin:5}}>
                            <View style={{flexDirection:'column',flex: 0.6,alignItems:'center',alignSelf:'center',justifyContent: 'center',}} >
                                <Text style={{}}>Ngày tháng</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 1,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>Nội dung</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 0.7,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>Level</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 0.7,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>Người theo dõi</Text>
                            </View>

                    </View>
                    
                    <View style={{flex:1}}>
                    <ScrollView style={{position: 'absolute', top: 0, left: 0, right: 0, bottom:'20%'}}>
                        <View style={{flex:1,height: '80%',margin:5}}>
                            <FlatList
                                data={this.state.data}
                                keyExtractor={this._keyExtractor}
                                renderItem={this._renderItem}
                            />  
                        </View>
                       
                            <View>
  {/*/modal*/}
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
                                      Thêm lần sửa chữa
                                  </Text>
                              </View>
                              <View style={{width:'100%',height:'100%',}}>
                              <ScrollView>
                                
                                <View style={{flex:1}}>
                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',borderTopRightRadius:10,borderBottomRightRadius:10,
                                    borderTopLeftRadius:10,borderBottomLeftRadius:10,
                                    backgroundColor:'rgb(230, 230, 230)',margin:5,borderWidth:0.5,borderBottomRightRadius:10,borderTopRightRadius:10}}>
                                        <View style={{flex:0.4,alignItems:'center'}}>
                                            <Text>Ngày tháng </Text>
                                        </View>
                                        <View style={{flex:0.6,backgroundColor:'rgb(249, 250, 252)',flexDirection:'row',borderLeftWidth:0.5,borderBottomRightRadius:10,borderTopRightRadius:10}}>
                                        
                                            <View style={{width:'80%',alignItems:'center',borderBottomRightRadius:10,borderTopRightRadius:10}}>
                                            <TextInput 
                                                placeholder={""+this.state.dateConverted} value={this.state.dateTime} ref={(input) => { this.TextInput1 = input }}
                                                editable={false}
                                                />
                                            </View>
                                            <View style={{width:'20%',marginTop:5}}>
                                                <TouchableHighlight onPress={()=>{
                                                    this.setState({showDateTime:true})
                                                }} style={{}}>
                                                <Icon name='calendar' type='font-awesome' size={36} color='#007256' /> 
                                                </TouchableHighlight>    
                                                    <DateTimePicker styles={{}}
                                                        isVisible={this.state.showDateTime}
                                                        onConfirm={this._handleDatePicked}
                                                        onCancel={()=>{this.setState({showDateTime:false})}}
                                                    />
                                            </View>
                                            
                                            
                                        </View>
                                        
                                    </View>
                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',borderTopRightRadius:10,borderBottomRightRadius:10,
                                    borderTopLeftRadius:10,borderBottomLeftRadius:10,
                                    backgroundColor:'rgb(230, 230, 230)',margin:5,borderWidth:0.5}}>
                                        <View style={{flex:0.4,alignItems:'center'}}>
                                            <Text >Nội dung </Text>
                                        </View>
                                        <View  style={{flex:0.6,backgroundColor:'rgb(249, 250, 252)',borderLeftWidth:0.5,borderBottomRightRadius:10,borderTopRightRadius:10}}>
                                            <TextInput
                                                placeholder={'click để nhập...'}value={this.state.parameter} ref={(content) => { this.TextInput4 = content }}
                                                onChangeText={(content) => this.setState({content})} 
                                            />
                                        </View>
                                        
                                    </View>
                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',margin:5,borderWidth:0.5,borderTopRightRadius:10,borderBottomRightRadius:10,
                                    borderTopLeftRadius:10,borderBottomLeftRadius:10,
                                    backgroundColor:'rgb(230, 230, 230)',}}>
                                        <View  style={{flex:0.4,alignItems:'center'}}>
                                             <Text>Level </Text>
                                        </View>
                                        <View style={{flex:0.6,backgroundColor:'rgb(249, 250, 252)',borderLeftWidth:0.5,borderBottomRightRadius:10,borderTopRightRadius:10}}>
                                        <TextInput
                                        placeholder={'click để nhập...'}value={this.state.level}  ref={(level) => { this.TextInput4 = level }}
                                        onChangeText={(level) => this.setState({level})}
                                        />
                                        </View>
                                        
                                    </View>
                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',borderTopRightRadius:10,borderBottomRightRadius:10,
                                    borderTopLeftRadius:10,borderBottomLeftRadius:10,
                                    backgroundColor:'rgb(230, 230, 230)',margin:5,borderWidth:0.5}}>
                                        <View style={{flex:0.4,alignItems:'center'}}>
                                        <Text >Người theo dõi </Text>
                                        </View>
                                        <View  style={{flex:0.6,backgroundColor:'rgb(249, 250, 252)',borderBottomRightRadius:10,borderTopRightRadius:10,borderLeftWidth:0.5}}>
                                        <TextInput
                                        placeholder={'click để nhập...'}value={this.state.follower} ref={(follower) => { this.TextInput4 = follower }}
                                        onChangeText={(follower) => this.setState({follower})}
                                        />
                                        </View>
                                        
                                    </View>
                                    <View style={{width:'30%',alignItems:'center',alignSelf:'center'}}>
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
                    </ScrollView>
                    <TouchableOpacity style={{position:'absolute',right: 20, bottom:30+(height/5),alignItems:'center',zIndex:999, //30+(height/5)
                    width:50,height:50,borderRadius: 25,backgroundColor:ColorApp.fabsColor}}
                    onPress={()=>{
                        this.setModalVisible(true);
                    }}
                    ><View style={{flex:1}}>
                        <Text style={{fontSize: 36,color:'white',alignItems:'center',justifyContent:'center'}}>+</Text>
                    </View>
            
                </TouchableOpacity>
                    </View>
                    
                    
                   
            </View>
            
        )
    }
}
styles = StyleSheet.create({
    plantText: {fontWeight:'bold',color:'rgb(255, 77, 255)',fontSize:14}
});