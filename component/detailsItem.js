import React,{Comment} from 'react';
import {Container,Card,CardItem} from 'native-base';
import { ListItem, Icon } from 'react-native-elements';
import {View,StyleSheet,Text,ScrollView,Image,TextInput,Alert,TouchableHighlight,Picker} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {API} from '../network/API.js';
// import { Icon } from 'react-native-elements';



export default class DetaisItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showIconEdit:false,
            //
            name: '',
            madeYear:'',
            code:'',
            madeIn:'',
            useIn: this.props.data.useIn,
            dateReceived:'',
            dateUse:'',
            price:'',
            description:'',
            voltageFrom:'',
            voltageTo:'',
            ampe:'',
            capacity:'',
            accessory:'',
            receiver:'',
            moneySource:'',
            dateIn:'',
            statusReceipt:'',
            levelQuality:'',
            department:'',
            selectedRoom:'',
            number:null,
            nameRoom:[],
            //
            showIconEditName:false,
            enableEditName:false,
            showIconEditMadeYear:false,
            enableEditMadeYear:false,
            showIconEditCode:false,
            enableEditCode:false,
            showIconEditMadeIn:false,
            enableEditMadeIn:false,
            showIconEditUseIn:false,
            enableEditUseIn:false,
            showIconEditDepartment:false,
            enableDepartment:false,
            // "dateReceived": null, Ngày nhận - Timestamp
            // "dateUse": null, Ngày sử dụng - timestamp
            showIconEditPrice:false,
            enableEditPrice:false,
            showIconEditDescription:false,
            enableEditDescription:false,
            showIconEditVoltageFrom:false,
            enableEditVoltageFrom:false,
            showIconEditVoltageTo:false,
            enableEditVoltageTo:false,
            showIconEditAmpe:false,
            enableEditAmpe:false,
            showIconEditCapacity:false,
            enableEditCapacity:false,
            showIconEditAccessory:false,
            enableEditAccessory:false,
            showIconEditReceiver:false,
            enableEditReceiver:false,
            showIconEditMoneySource:false,
            enableEditMoneySource:false,
            // "dateIn": null, Ngày nhập - timestamp
            showIconEditStatusReceipt:false,
            enableEditStatusReceipt:false,
            showIconEditLevelQuality:false,
            enableEditLevelQuality:false,
            showIconEditNumber:false,
            enableEditNumber:false,
            //
            visibleDateIn:false,
            visibleDateUse:false,
            visibleDateRe:false,
        }
    }
    addRoomEdit=()=>{
        const params={
            id:this.props.data.id,
            name: this.state.name===''?this.props.data.name:this.state.name,
            madeYear:this.state.madeYear===''?this.props.data.madeYear:this.state.madeYear,
            code:this.state.code===''?this.props.data.code:this.state.code,
            madeIn:this.state.madeIn===''?this.props.data.madeIn:this.state.madeIn,
            useIn:this.state.useIn===''?this.props.data.useIn:this.state.useIn,
            dateReceived:this.state.dateReceived===''?this.props.data.dateReceived:this.state.dateReceived,
            dateUse:this.state.dateUse===''?this.props.data.dateUse:this.state.dateUse,
            price:this.state.price===''?this.props.data.price:this.state.price,
            description:this.state.description===''?this.props.data.description:this.state.description,
            voltageFrom:this.state.voltageFrom===''?this.props.data.voltageFrom:this.state.voltageFrom,
            voltageTo:this.state.voltageTo===''?this.props.data.voltageTo:this.state.voltageTo,
            ampe:this.state.ampe===''?this.props.data.ampe:this.state.ampe,
            //
            capacity:this.state.capacity===''?this.props.data.capacity:this.state.capacity,
            accessory:this.state.accessory===''?this.props.data.accessory:this.state.accessory,
            receiver:this.state.receiver===''?this.props.data.receiver:this.state.receiver,
            moneySource:this.state.moneySource===''?this.props.data.moneySource:this.state.moneySource,
            dateIn:this.state.dateIn===''?this.props.data.dateIn:this.state.dateIn,
            statusReceipt:this.state.statusReceipt===''?this.props.data.statusReceipt:this.state.statusReceipt,
            levelQuality:this.state.levelQuality===''?this.props.data.levelQuality:this.state.levelQuality,
            number:this.state.name===null?this.props.data.number:this.state.number,
            department:this.state.department===null?this.props.data.department:this.state.department,
            //f
        }
        API.addDevice(params).then(
            res => {
                if(res.data==='SUCCESS')return Alert.alert('Sửa','Thành công!');
                else{
                    Alert.alert('Sửa','Không thành công!')
                    this.forceUpdate();
                }
            },
            err => {
                console.log('chạy err: '+JSON.stringify(err));
            }
        );
    }
    async componentDidMount(){
        await this.getRoomFromServer();
    }
    getRoomFromServer(){
    
        API.getListRoom(0,20).then(
            res => {
                this.setState({
                    nameRoom: res.data.content,
                })
            },
            err => {
                console.log('chạy err: '+JSON.stringify(err));
            }
        );
    }
    _hideDateTimePickerRe=()=>{this.setState({visibleDateRe:false})}
    _hideDateTimePickerUse=()=>{this.setState({visibleDateUse:false})}
    _hideDateTimePickerIn=()=>{this.setState({visibleDateIn:false})}
    _handleDatePickedRe=(date)=>{
        var date = new Date(date).getTime();
        this.setState({dateReceived:date});
        this._hideDateTimePickerRe();
    }
    _handleDatePickedUse=(date)=>{
        var date = new Date(date).getTime();
        this.setState({dateUse:date})
        this._hideDateTimePickerUse();
    }
    _handleDatePickedIn=(date)=>{
        var date = new Date(date).getTime();
        this.setState({dateIn:date});
        this._hideDateTimePickerIn();
    }
    render(){
       const info= this.props.data
       var dateReceived = new Date(info.dateReceived);
       var dateUse = new Date(info.dateUse);
       var dateIn = new Date(info.dateIn);
       var dateReceivedNew = new Date(this.state.dateReceived).toLocaleDateString();
       var dateUseNew = new Date(this.state.dateUse).toLocaleDateString();
       var dateInNew = new Date(this.state.dateIn).toLocaleDateString();
       let roomItems = this.state.nameRoom.map( (s, i) => {
        return <Picker.Item key={i} value={s.name} label={s.name} />
    });
    //<Image style={{width:'100%',height:'40%' }} source={require('../images/icon_butchi.jpg')}/>backgroundColor:'rgb(230, 230, 230)',
        return(
                <View style={{width:'100%',height:'100%'}}>
                <View style={{flex: 1,backgroundColor:'white'}}>
                <ScrollView style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
                        <View style={{flexDirection:'row',width:'100%',borderWidth:1,borderColor:"#45D0E3",borderRadius:5,margin:5,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Tên thiết bị: </Text>
                            <TextInput editable={this.state.enableEditName} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'white',borderWidth:0.5}}
                             placeholder={info.name} ref={(name) => { this.TextInput1 = name }}
                             onChangeText={(name) => this.setState({name})}/>
                            {!this.state.showIconEditName? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditName:!this.state.showIconEditName,enableEditName:true},()=>{
                                        this.TextInput1.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditName:!this.state.showIconEditName,enableEditName:false})
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,justifyContent:'center'
                        ,alignItems:'center',borderColor:"#45D0E3",borderRadius:5,margin:5}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Mã thiết bị: </Text>
                            <TextInput editable={this.state.enableEditCode} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'white',borderWidth:0.5}}
                             placeholder={info.code} ref={(code) => { this.TextInput2 = code }}
                             onChangeText={(code) => this.setState({code})}/>

                            {!this.state.showIconEditCode? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditCode:!this.state.showIconEditCode,enableEditCode:true},()=>{
                                        this.TextInput2.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditCode:!this.state.showIconEditCode,enableEditCode:false})
                                }}/>}
                        </View>
                    
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,justifyContent:'center'
                        ,alignItems:'center',borderColor:"#45D0E3",borderRadius:5,margin:5}}>
                            <Text style={{fontSize:14,color:'black',width:'45%'}}>Nơi sd: </Text>
                            <View style={{width:'46%',backgroundColor:'white',borderWidth:0.5,alignSelf:'flex-start'}}>
                            <Picker
                                selectedValue={this.state.useIn}
                                onValueChange={ (room) => {this.setState({useIn:room}),()=>{this.addRoomEdit()}}  } >
                                {roomItems}
                            </Picker>
                            </View>
                            <View style={{width:"6%"}}/>
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,borderColor:"#45D0E3",padding:5,justifyContent:'center',alignItems:'center',borderRadius:5,margin:5}}>
                            <Text style={{fontSize:14,color:'black',width:'47%'}}>Ngày nhận:  </Text>
                            <TextInput style={{fontSize:14,backgroundColor:'white',width:'45%',borderWidth:0.5}} 
                            editable = {false} placeholder={this.state.dateReceived===''?dateReceived.toLocaleDateString():dateReceivedNew} />
                            <TouchableHighlight onPress={()=>{
                                this.setState({visibleDateRe:true})
                            }} style={{width:'10%'}}>
                            <Icon name='calendar' type='font-awesome' size={36} color='#007256' /> 
                            </TouchableHighlight>    
                                <DateTimePicker styles={{}}
                                    isVisible={this.state.visibleDateRe}
                                    onConfirm={this._handleDatePickedRe}
                                    onCancel={this._hideDateTimePickerRe}
                                />
                            
                        </View>
                        
                    
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,borderColor:"#45D0E3",padding:5,alignItems:'center',borderRadius:5,margin:5}}>
                            <Text style={{fontSize:14,color:'black',width:'47%',}}>Ngày sd:  </Text>
                            <TextInput style={{fontSize:14,backgroundColor:'white',width:'45%',borderWidth:0.5}} 
                            editable = {false} placeholder={this.state.dateUse===''?dateUse.toLocaleDateString():dateUseNew} />
                            <TouchableHighlight onPress={()=>{
                                this.setState({visibledateUse:true})
                            }} style={{width:'10%'}}>
                            <Icon name='calendar' type='font-awesome' size={36} color='#007256' /> 
                            </TouchableHighlight>    
                                <DateTimePicker styles={{}}
                                    isVisible={this.state.visibledateUse}
                                    onConfirm={this._handleDatePickedUse}
                                    onCancel={this._hideDateTimePickerUse}
                                />
                            
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,borderColor:"#45D0E3",justifyContent:'center',alignItems:'center',borderRadius:5,margin:5}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Giá thiết bị:  </Text>
                            <TextInput editable={this.state.enableEditPrice} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'white',borderLeftWidth: 0.5,borderRightWidth:0.5}}
                             placeholder={''+info.price} ref={(price) => { this.TextInput4 = price }}
                             onChangeText={(price) => this.setState({price})} keyboardType='numeric'/>

                            {!this.state.showIconEditPrice? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditPrice:!this.state.showIconEditPrice,enableEditPrice:true},()=>{
                                        this.TextInput4.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditPrice:!this.state.showIconEditPrice,enableEditPrice:false})
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,borderColor:"#45D0E3",justifyContent:'center',alignItems:'center',borderRadius:5,margin:5}}>
                            <Text style={{fontSize:14,color:'black',width:'20%',}}>Nguồn điện từ:  </Text>
                            
                            <TextInput editable={this.state.enableEditVoltageFrom} style={{fontSize:14,color:'black',width:'20%',backgroundColor:'white',borderLeftWidth: 0.5,borderRightWidth:0.5}}
                             placeholder={''+info.voltageFrom} ref={(voltageFrom) => { this.TextInput5 = voltageFrom }}
                             onChangeText={(voltageFrom) => this.setState({voltageFrom})}keyboardType='numeric'/>
                             {!this.state.showIconEditVoltageFrom? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditVoltageFrom:!this.state.showIconEditVoltageFrom,enableEditVoltageFrom:true},()=>{
                                        this.TextInput5.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditVoltageFrom:!this.state.showIconEditVoltageFrom,enableEditVoltageFrom:false})
                                }}/>}
                             <Text style={{fontSize:14,color:'black',width:'20%',borderWidth:0.5}}> đến: </Text>
                             <TextInput editable={this.state.enableEditVoltageTo} style={{fontSize:14,color:'black',width:'20%',backgroundColor:'white',borderLeftWidth: 0.5,borderRightWidth:0.5}}
                             placeholder={''+info.voltageTo} ref={(voltageTo) => { this.TextInput6 = voltageTo }}
                             onChangeText={(voltageTo) => this.setState({voltageTo})} keyboardType='numeric'/>

                            {!this.state.showIconEditVoltageTo? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditVoltageTo:!this.state.showIconEditVoltageTo,enableEditVoltageTo:true},()=>{
                                        this.TextInput6.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditVoltageTo:!this.state.showIconEditVoltageTo,enableEditVoltageTo:false})
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,borderColor:"#45D0E3",justifyContent:'center',alignItems:'center',borderRadius:5,margin:5}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Năm sx:  </Text>
                            <TextInput editable={this.state.enableEditMadeYear} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'white',borderLeftWidth: 0.5,borderRightWidth:0.5}}
                             placeholder={''+info.madeYear} ref={(madeYear) => { this.TextInput7 = madeYear }}
                             onChangeText={(madeYear) => this.setState({madeYear})} keyboardType='numeric'/>
                            {!this.state.showIconEditMadeYear? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditMadeYear:!this.state.showIconEditMadeYear,enableEditMadeYear:true},()=>{
                                        this.TextInput7.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditMadeYear:!this.state.showIconEditMadeYear,enableEditMadeYear:false})
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,borderColor:"#45D0E3",justifyContent:'center',alignItems:'center',borderRadius:5,margin:5}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Điện áp:  </Text>
                            <TextInput editable={this.state.enableEditAmpe} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'white',borderLeftWidth: 0.5,borderRightWidth:0.5}}
                             placeholder={''+info.ampe} ref={(ampe) => { this.TextInput8 = ampe }}
                             onChangeText={(ampe) => this.setState({ampe})} keyboardType='numeric'/>
                            {!this.state.showIconEditAmpe? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditAmpe:!this.state.showIconEditAmpe,enableEditAmpe:true},()=>{
                                        this.TextInput8.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditAmpe:!this.state.showIconEditAmpe,enableEditAmpe:false})
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,borderColor:"#45D0E3",justifyContent:'center',alignItems:'center',borderRadius:5,margin:5}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Công suất:  </Text>
                            <TextInput editable={this.state.enableEditCapacity} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'white',borderLeftWidth: 0.5,borderRightWidth:0.5}}
                             placeholder={''+info.capacity} ref={(capacity) => { this.TextInput9 = capacity }}
                             onChangeText={(capacity) => this.setState({capacity})}/>
                            {!this.state.showIconEditCapacity? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditCapacity:!this.state.showIconEditCapacity,enableEditCapacity:true},()=>{
                                        this.TextInput9.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditCapacity:!this.state.showIconEditCapacity,enableEditCapacity:false})
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,borderColor:"#45D0E3",justifyContent:'center',alignItems:'center',borderRadius:5,margin:5}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Phụ tùng kèm theo:  </Text>
                            <TextInput editable={this.state.enableEditAccessory} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'white',borderLeftWidth: 0.5,borderRightWidth:0.5}}
                             placeholder={info.accessory} ref={(accessory) => { this.TextInput10 = accessory }}
                             onChangeText={(accessory) => this.setState({accessory})}/>
                            {!this.state.showIconEditAccessory? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditAccessory:!this.state.showIconEditAccessory,enableEditAccessory:true},()=>{
                                        this.TextInput10.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditAccessory:!this.state.showIconEditAccessory,enableEditAccessory:false})
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,borderColor:"#45D0E3",justifyContent:'center',alignItems:'center',borderRadius:5,margin:5}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Người nhận:  </Text>
                            <TextInput editable={this.state.enableEditReceiver} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'white',borderLeftWidth: 0.5,borderRightWidth:0.5}}
                             placeholder={info.receiver} ref={(receiver) => { this.TextInput11 = receiver }}
                             onChangeText={(receiver) => this.setState({receiver})}/>
                            
                            {!this.state.showIconEditReceiver? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditReceiver:!this.state.showIconEditReceiver,enableEditReceiver:true},()=>{
                                        this.TextInput11.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditReceiver:!this.state.showIconEditReceiver,enableEditReceiver:false})
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,borderColor:"#45D0E3",justifyContent:'center',alignItems:'center',borderRadius:5,margin:5}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Nguồn tiền:  </Text>
                            <TextInput editable={this.state.enableEditMoneySource} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'white',borderLeftWidth: 0.5,borderRightWidth:0.5}}
                             placeholder={""+info.moneySource} ref={(moneySource) => { this.TextInput12 = moneySource }}
                             onChangeText={(moneySource) => this.setState({moneySource})}/>
                            {!this.state.showIconEditMoneySource? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditMoneySource:!this.state.showIconEditMoneySource,enableEditMoneySource:true},()=>{
                                        this.TextInput12.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditMoneySource:!this.state.showIconEditMoneySource,enableEditMoneySource:false})
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,borderColor:"#45D0E3",justifyContent:'center',alignItems:'center',borderRadius:5,margin:5,padding:5}}>
                            <Text style={{fontSize:14,color:'black',width:'47%',}}>Ngày nhập:  </Text>
                            <TextInput style={{fontSize:14,backgroundColor:'white',width:'45%',borderWidth:0.5}} 
                            editable = {false} placeholder={this.state.dateIn===''?dateIn.toLocaleDateString():dateInNew} />
                            
                            <TouchableHighlight onPress={()=>{
                                this.setState({visibleDateIn:true})
                            }} style={{width:'10%'}}>
                            <Icon name='calendar' type='font-awesome' size={36} color='#007256' /> 
                            </TouchableHighlight>    
                                <DateTimePicker styles={{}}
                                    isVisible={this.state.visibleDateIn}
                                    onConfirm={this._handleDatePickedIn}
                                    onCancel={this._hideDateTimePickerIn}
                                />
                            
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,borderColor:"#45D0E3",justifyContent:'center',alignItems:'center',borderRadius:5,margin:5}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Trạng thái:  </Text>
                            <TextInput editable={this.state.enableEditStatusReceipt} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'white',borderLeftWidth: 0.5,borderRightWidth:0.5}}
                             placeholder={""+info.statusReceipt} ref={(statusReceipt) => { this.TextInput13 = statusReceipt }}
                             onChangeText={(statusReceipt) => this.setState({statusReceipt})}/>
                            {!this.state.showIconEditStatusReceipt? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditStatusReceipt:!this.state.showIconEditStatusReceipt,enableEditStatusReceipt:true},()=>{
                                        this.TextInput13.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditStatusReceipt:!this.state.showIconEditStatusReceipt,enableEditStatusReceipt:false})
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,borderColor:"#45D0E3",justifyContent:'center',alignItems:'center',borderRadius:5,margin:5}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Chất lượng:  </Text>
                            <TextInput editable={this.state.enableEditLevelQuality} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'white',borderLeftWidth: 0.5,borderRightWidth:0.5}}
                             placeholder={""+info.levelQuality} ref={(levelQuality) => { this.TextInput14 = levelQuality }}
                             onChangeText={(levelQuality) => this.setState({levelQuality})}/>
                            {!this.state.showIconEditLevelQuality? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditLevelQuality:!this.state.showIconEditLevelQuality,enableEditLevelQuality:true},()=>{
                                        this.TextInput14.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditLevelQuality:!this.state.showIconEditLevelQuality,enableEditLevelQuality:false})
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,borderColor:"#45D0E3",justifyContent:'center',alignItems:'center',borderRadius:5,margin:5 }}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Mô tả thiết bị: </Text>
                            <TextInput editable={this.state.enableEditDescription} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'white',borderLeftWidth: 0.5,borderRightWidth:0.5}}
                             placeholder={info.description} ref={(description) => { this.TextInput15 = description }}
                             onChangeText={(description) => this.setState({description})}/>
                            {!this.state.showIconEditDescription? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditDescription:!this.state.showIconEditDescription,enableEditDescription:true},()=>{
                                        this.TextInput15.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditDescription:!this.state.showIconEditDescription,enableEditDescription:false})
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,borderColor:"#45D0E3",justifyContent:'center',alignItems:'center',borderRadius:5,margin:5}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Nơi sx: </Text>
                            <TextInput editable={this.state.enableEditMadeIn} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'white',borderLeftWidth: 0.5,borderRightWidth:0.5}}
                             placeholder={info.madeIn} ref={(madeIn) => { this.TextInput16 = madeIn }}
                             onChangeText={(madeIn) => this.setState({madeIn})}/>
                            
                            {!this.state.showIconEditMadeIn? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditMadeIn:!this.state.showIconEditMadeIn,enableEditMadeIn:true},()=>{
                                        this.TextInput16.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditMadeIn:!this.state.showIconEditMadeIn,enableEditMadeIn:false})
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,borderColor:"#45D0E3",justifyContent:'center',alignItems:'center',borderRadius:5,margin:5}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Khoa: </Text>
                            <TextInput editable={this.state.enableDepartment} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'white',borderLeftWidth: 0.5,borderRightWidth:0.5}}
                             placeholder={''+info.department} ref={(department) => { this.TextInput17 = department }}
                             onChangeText={(department) => this.setState({department})} keyboardType='numeric'/>
                            {!this.state.showIconEditDepartment? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditDepartment:!this.state.showIconEditDepartment,enableDepartment:true},()=>{
                                        this.TextInput17.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                    this.setState({showIconEditDepartment:!this.state.showIconEditDepartment,enableDepartment:false})
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 1,borderColor:"#45D0E3",justifyContent:'center',alignItems:'center',borderRadius:5,margin:5}}>
                        <Text style={{fontSize:14,color:'black',width:'45%',}}>Số máy: </Text>
                        <TextInput editable={this.state.enableEditNumber} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'white',borderLeftWidth: 0.5,borderRightWidth:0.5}}
                         placeholder={''+info.number} ref={(number) => { this.TextInput17 = number }}
                         onChangeText={(number) => this.setState({number})} keyboardType='numeric'/>
                        {!this.state.showIconEditNumber? 
                            (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                this.setState({showIconEditNumber:!this.state.showIconEditNumber,enableEditNumber:true},()=>{
                                    this.TextInput17.focus();
                                })
                            }}/>)
                            : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                this.addRoomEdit();
                                this.setState({showIconEditNumber:!this.state.showIconEditNumber,enableEditNumber:false})
                            }}/>}
                    </View>
                    
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