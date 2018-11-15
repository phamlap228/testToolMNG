import React,{Comment} from 'react';
import {Container,Card,CardItem} from 'native-base';
import { ListItem, Icon } from 'react-native-elements';
import {View,StyleSheet,Text,ScrollView,Image,TextInput,TouchableHighlight,} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
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
            useIn: '',
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
            selectedRoom:'',
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
        }
    }
    render(){
       const info= this.props.data
       var dateReceived = new Date(info.dateReceived);
       var dateUse = new Date(info.dateUse);
       var dateIn = new Date(info.dateIn);
        return(
                <View style={{width:'100%',height:'100%'}}>
                <Image style={{width:'100%',height:'40%' }} source={require('../images/icon_butchi.jpg')}/>
                <View style={{flex: 1,backgroundColor:'rgb(225, 225, 234)'}}>
                <ScrollView style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
                    <Card style={{alignItems: 'flex-start',width: '100%'}}>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Tên thiết bị: </Text>
                            <TextInput editable={this.state.enableEditName} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={info.name} ref={(name) => { this.TextInput1 = name }}
                             onChangeText={(name) => this.setState({name})}/>
                            {!this.state.showIconEditName? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditName:!this.state.showIconEditName,enableEditName:true},()=>{
                                        this.TextInput1.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    // this.addRoomEdit();
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Mã thiết bị: </Text>
                            <TextInput editable={this.state.enableEditCode} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'rgb(200, 203, 209)'}}
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
                                }}/>}
                        </View>
                    </Card>
                    <Card style={{alignItems: 'flex-start',}}>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Nơi sd: </Text>
                            <TextInput editable={this.state.enableEditUseIn} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={info.useIn} ref={(useIn) => { this.TextInput2 = useIn }}
                             onChangeText={(useIn) => this.setState({useIn})}/>
                            {!this.state.showIconEditUseIn? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditUseIn:!this.state.showIconEditUseIn,enableEditUseIn:true},()=>{
                                        this.TextInput3.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Ngày nhận:  </Text>
                            <Text style={{fontSize:14,color:'black',width:'45%'}}>{dateReceived.toLocaleDateString()}</Text>
                            <TouchableHighlight onPress={{}} style={{width:'10%'}}>
                            <Icon name='calendar' type='font-awesome' size={24} color='#007256' /> 
                            </TouchableHighlight>    
                                <DateTimePicker styles={{}}
                                    isVisible={this.state.visibleDateIn}
                                    onConfirm={this._handleDatePickedIn}
                                    onCancel={this._hideDateTimePickerIn}
                                />
                            
                        </View>
                        
                    </Card>
                    <Card style={{alignItems: 'flex-start',}}>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Ngày sd:  </Text>
                            <Text style={{fontSize:14,color:'black',width:'45%'}}>{dateUse.toLocaleDateString()}</Text>
                            <TouchableHighlight onPress={{}} style={{width:'10%'}}>
                            <Icon name='calendar' type='font-awesome' size={24} color='#007256' /> 
                            </TouchableHighlight>    
                                <DateTimePicker styles={{}}
                                    isVisible={this.state.visibleDateIn}
                                    onConfirm={this._handleDatePickedIn}
                                    onCancel={this._hideDateTimePickerIn}
                                />
                            
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Giá thiết bị:  </Text>
                            <TextInput editable={this.state.enableEditPrice} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={''+info.price} ref={(price) => { this.TextInput2 = price }}
                             onChangeText={(price) => this.setState({price})}/>

                            {!this.state.showIconEditPrice? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditPrice:!this.state.showIconEditPrice,enableEditPrice:true},()=>{
                                        this.TextInput3.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3",alignItems:'center'}}>
                            <Text style={{fontSize:14,color:'black',width:'20%',}}>Nguồn điện từ:  </Text>
                            
                            <TextInput editable={this.state.enableEditVoltageFrom} style={{fontSize:14,color:'black',width:'20%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={''+info.voltageFrom} ref={(voltageFrom) => { this.TextInput2 = voltageFrom }}
                             onChangeText={(voltageFrom) => this.setState({voltageFrom})}/>
                             {!this.state.showIconEditVoltageFrom? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditVoltageFrom:!this.state.showIconEditVoltageFrom,enableEditVoltageFrom:true},()=>{
                                        this.TextInput3.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                }}/>}
                             <Text style={{fontSize:14,color:'black',width:'20%',borderWidth:0.5}}> đến: </Text>
                             <TextInput editable={this.state.enableEditVoltageTo} style={{fontSize:14,color:'black',width:'20%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={''+info.voltageTo} ref={(voltageTo) => { this.TextInput2 = voltageTo }}
                             onChangeText={(voltageTo) => this.setState({voltageTo})}/>

                            {!this.state.showIconEditVoltageTo? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditVoltageTo:!this.state.showIconEditVoltageTo,enableEditVoltageTo:true},()=>{
                                        this.TextInput3.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                }}/>}
                        </View>
                    </Card>
                    <Card style={{alignItems: 'flex-start',}}>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Năm sx:  </Text>
                            <TextInput editable={this.state.enableEditMadeYear} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={''+info.madeYear} ref={(madeYear) => { this.TextInput2 = madeYear }}
                             onChangeText={(madeYear) => this.setState({madeYear})}/>
                            {!this.state.showIconEditMadeYear? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditMadeYear:!this.state.showIconEditMadeYear,enableEditMadeYear:true},()=>{
                                        this.TextInput3.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Điện áp:  </Text>
                            <TextInput editable={this.state.enableEditAmpe} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={''+info.ampe} ref={(ampe) => { this.TextInput2 = ampe }}
                             onChangeText={(ampe) => this.setState({ampe})}/>
                            {!this.state.showIconEditAmpe? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditAmpe:!this.state.showIconEditAmpe,enableEditAmpe:true},()=>{
                                        this.TextInput3.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Công suất:  </Text>
                            <TextInput editable={this.state.enableEditCapacity} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={''+info.capacity} ref={(capacity) => { this.TextInput2 = capacity }}
                             onChangeText={(capacity) => this.setState({capacity})}/>
                            {!this.state.showIconEditCapacity? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditCapacity:!this.state.showIconEditCapacity,enableEditCapacity:true},()=>{
                                        this.TextInput3.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                }}/>}
                        </View>
                    </Card>
                    <Card style={{alignItems: 'flex-start',}}>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Phụ tùng kèm theo:  </Text>
                            <TextInput editable={this.state.enableEditAccessory} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={info.accessory} ref={(accessory) => { this.TextInput2 = accessory }}
                             onChangeText={(accessory) => this.setState({accessory})}/>
                            {!this.state.showIconEditAccessory? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditAccessory:!this.state.showIconEditAccessory,enableEditAccessory:true},()=>{
                                        this.TextInput3.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Người nhận:  </Text>
                            <TextInput editable={this.state.enableEditReceiver} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={info.receiver} ref={(receiver) => { this.TextInput2 = receiver }}
                             onChangeText={(receiver) => this.setState({receiver})}/>
                            
                            {!this.state.showIconEditReceiver? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditReceiver:!this.state.showIconEditReceiver,enableEditReceiver:true},()=>{
                                        this.TextInput3.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Nguồn tiền:  </Text>
                            <TextInput editable={this.state.enableEditMoneySource} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={""+info.moneySource} ref={(moneySource) => { this.TextInput2 = moneySource }}
                             onChangeText={(moneySource) => this.setState({moneySource})}/>
                            {!this.state.showIconEditMoneySource? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditMoneySource:!this.state.showIconEditMoneySource,enableEditMoneySource:true},()=>{
                                        this.TextInput3.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                }}/>}
                        </View>
                    </Card>
                    <Card style={{alignItems: 'flex-start',}}>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Ngày nhập:  </Text>
                            <Text style={{fontSize:14,color:'black',width:'45%'}}>{dateIn.toLocaleDateString()}</Text>
                            <TouchableHighlight onPress={{}} style={{width:'10%'}}>
                            <Icon name='calendar' type='font-awesome' size={24} color='#007256' /> 
                            </TouchableHighlight>    
                                <DateTimePicker styles={{}}
                                    isVisible={this.state.visibleDateIn}
                                    onConfirm={this._handleDatePickedIn}
                                    onCancel={this._hideDateTimePickerIn}
                                />
                            
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Trạng thái:  </Text>
                            <TextInput editable={this.state.enableEditStatusReceipt} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={""+info.statusReceipt} ref={(statusReceipt) => { this.TextInput2 = statusReceipt }}
                             onChangeText={(statusReceipt) => this.setState({statusReceipt})}/>
                            {!this.state.showIconEditStatusReceipt? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditStatusReceipt:!this.state.showIconEditStatusReceipt,enableEditStatusReceipt:true},()=>{
                                        this.TextInput3.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Mức độ:  </Text>
                            <TextInput editable={this.state.enableEditLevelQuality} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={""+info.levelQuality} ref={(levelQuality) => { this.TextInput2 = levelQuality }}
                             onChangeText={(levelQuality) => this.setState({levelQuality})}/>
                            {!this.state.showIconEditLevelQuality? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditLevelQuality:!this.state.showIconEditLevelQuality,enableEditLevelQuality:true},()=>{
                                        this.TextInput3.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                }}/>}
                        </View>
                    </Card>
                    <Card>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Mô tả thiết bị: </Text>
                            <TextInput editable={this.state.enableEditDescription} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={info.description} ref={(description) => { this.TextInput2 = description }}
                             onChangeText={(description) => this.setState({description})}/>
                            {!this.state.showIconEditDescription? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditDescription:!this.state.showIconEditDescription,enableEditDescription:true},()=>{
                                        this.TextInput3.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Nơi sx: </Text>
                            <TextInput editable={this.state.enableEditMadeIn} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={info.madeIn} ref={(madeIn) => { this.TextInput2 = madeIn }}
                             onChangeText={(madeIn) => this.setState({madeIn})}/>
                            
                            {!this.state.showIconEditMadeIn? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditMadeIn:!this.state.showIconEditMadeIn,enableEditMadeIn:true},()=>{
                                        this.TextInput3.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                }}/>}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',borderWidth: 0.3,borderColor:"#45D0E3"}}>
                            <Text style={{fontSize:14,color:'black',width:'45%',}}>Số máy: </Text>
                            <TextInput editable={this.state.enableEditNumber} style={{fontSize:14,color:'black',width:'46%',backgroundColor:'rgb(200, 203, 209)'}}
                             placeholder={''+info.number} ref={(number) => { this.TextInput2 = number }}
                             onChangeText={(number) => this.setState({number})}/>
                            {!this.state.showIconEditNumber? 
                                (<Icon name='edit'  color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.setState({showIconEditNumber:!this.state.showIconEditNumber,enableEditNumber:true},()=>{
                                        this.TextInput3.focus();
                                    })
                                }}/>)
                                : <Icon name='check' color='rgb(200, 203, 209)' size={24} onPress={()=>{
                                    this.addRoomEdit();
                                }}/>}
                        </View>
                    </Card>
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