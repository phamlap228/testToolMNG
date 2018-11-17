
import React, {  Component } from 'react';
import { Platform,Alert,StyleSheet,ScrollView,TouchableHighlight,Button,
     Text, View,StatusBar,Dimensions,Keyboard,TextInput, Picker,Image} from 'react-native';
// import { Button, Input } from 'native-base';
import { Icon } from 'react-native-elements';
import ColorApp from '../config/ColorApp.js';
import HeaderContainer from './headerContainer.js';
import {Actions} from 'react-native-router-flux';
import {list} from './data.js';
import axios from 'axios';

import DateTimePicker from 'react-native-modal-datetime-picker';
import {API} from '../network/API.js';

// var {height, width} = Dimensions.get('window');

const backgroundColor='#007256';
export default class AddScreen extends Component {
  constructor (props){
    super(props);
    this.state = {
        isDateTimePickerVisibleIn: false,
        isDateTimePickerVisibleUse: false,
        isDateTimePickerVisibleReceived: false,
        name: '',
        madeYear:'',
        code:'',
        madeIn:'',
        useIn: 'Phòng sét nghiệm',
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
        number:null,
        nameRoom:[],
        selectedRoom:'',
        validate:true,
        //
        checkname:true,
        checkmadeYear: true,
        checkcode:true,
        checkmadeIn:true,
        checkuseIn: true,
        checkdateReceived:true,
        checkdateUse:true,
        checkprice:true,
        checkdescription:true,
        checkvoltageFrom:true,
        checkvoltageTo:true,
        checkreceiver:true,
        checkmoneySource:true,
        checkdateIn:true,
        checkstatusReceipt:true,
        checklevelQuality:true,
    }
}
static navigationOptions = () => {
    let drawerLabel = 'Thêm thiết bị'
    let drawerIcon = () =>(
        <Icon name='plus-circle' type='font-awesome' size={24} color={backgroundColor} /> 
    );
    return{drawerLabel,drawerIcon};
}
appendObjTo=(list, newObj)=> {
    const frozenObj = Object.freeze(newObj);
    return Object.freeze(list.concat(frozenObj));
}
quaylai=()=>{
    Alert.alert(
        'Thêm thành công',
        "Bấm Yes để về màn hình main",
        [
          { text:'No', onPress: () => { } },
          { text: 'Yes', onPress: () => this.props.navigation.goBack() },
        ],
        { cancelable: false }
      )
};
/*
            "id": 3,
            "accessory": null,
            "ampe": 5,
            "capacity": 500,
            "code": "MSA",
            "createdAt": 1541512994627,
            "name": "Máy siêu âm",
            "dateUse": 1541514967,
            "dateReceived": 1541511367,
            "dateIn": null,
            "description": null,
            "levelQuality": 1,
            "madeIn": "Japan",
            "madeYear": 2018,
            "moneySource": "Từ bệnh viện",
            "useIn": null,
            "departmentId": 5,
            "price": 20000000,
            "statusReceipt": "Mới",
            "voltageFrom": 200,
            "voltageTo": 220,
            "receiver": "Nguyễn Văn Dũng"

            //

            var date = new Date(item.dateTime);
            date.getTime();
            {console.log("giây: "+date.getTime())}
*/
addItem(){
    const params={
        name: this.state.name,
        madeYear: this.state.madeYear,
        code:this.state.code,
        madeIn:this.state.madeIn,
        useIn: this.state.useIn,
        dateReceived:this.state.dateReceived,
        dateUse:this.state.dateUse,
        price:this.state.price,
        description:this.state.description,
        voltageFrom:this.state.voltageFrom,
        voltageTo:this.state.voltageTo,
        ampe:this.state.ampe,
        capacity:this.state.capacity,
        accessory:this.state.accessory,
        receiver:this.state.receiver,
        moneySource:this.state.moneySource,
        dateIn:this.state.dateIn,
        statusReceipt:this.state.statusReceipt,
        levelQuality:this.state.levelQuality,
        number:this.state.number,
    }
    if(params.name===""){
        return  (
            this.setState({checkname:false,validate:false}),Alert.alert("Chú ý",'Có trường nhập sai, hoặc để trống!')
            )
    }if(params.madeYear===""){
        this.setState({checkmadeYear:false,validate:false}),Alert.alert("Chú ý",'Có trường nhập sai, hoặc để trống!')
    }if(params.code===""){
        return  this.setState({checkcode:false,validate:false}),Alert.alert("Chú ý",'Có trường nhập sai, hoặc để trống!')
    }if(params.madeIn===""){
        return  this.setState({checkmadeIn:false,validate:false}),Alert.alert("Chú ý",'Có trường nhập sai, hoặc để trống!')
    }if(params.useIn===""){
        return  this.setState({checkuseIn:false,validate:false}),Alert.alert("Chú ý",'Có trường nhập sai, hoặc để trống!')
    }if(params.dateReceived===""){
        return  this.setState({checkdateReceived:false,validate:false}),Alert.alert("Chú ý",'Có trường nhập sai, hoặc để trống!')
    }if(params.dateUse===""){
        return  this.setState({checkdateUse:false,validate:false}),Alert.alert("Chú ý",'Có trường nhập sai, hoặc để trống!')
    }if(params.voltageFrom===""){
        return this.setState({checkvoltageFrom:false,validate:false}),Alert.alert("Chú ý",'Có trường nhập sai, hoặc để trống!')
    }if(params.voltageTo===""){
        return this.setState({checkvoltageTo:false,validate:false}),Alert.alert("Chú ý",'Có trường nhập sai, hoặc để trống!')
    }if(params.receiver===""){
        return  this.setState({checkreceiver:false,validate:false}),Alert.alert("Chú ý",'Có trường nhập sai, hoặc để trống!')
    }if(params.dateIn===""){
        return  this.setState({checkdateIn:false,validate:false}),Alert.alert("Chú ý",'Có trường nhập sai, hoặc để trống!')
    }if(params.statusReceipt===""){
        return this.setState({checkstatusReceipt:false,validate:false}),Alert.alert("Chú ý",'Có trường nhập sai, hoặc để trống!')
    }if(params.levelQuality===""){
        return this.setState({checklevelQuality:false,validate:false}),Alert.alert("Chú ý",'Có trường nhập sai, hoặc để trống!')
    }
    else{
        API.addDevice(params).then(
            res=>{
                if(res.data==='SUCCESS'){
                    alert("Thêm thành công!");
                    this.props.navigation.goBack();
                }
                else return (
                    alert("Chưa thêm được!")
                )
                
            },
            err=>{
                console.log(
                    "err"
                );
            });
    }
    

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
//IN
_showDateTimePickerIn = () => this.setState({ isDateTimePickerVisibleIn: true });

_hideDateTimePickerIn = () => this.setState({ isDateTimePickerVisibleIn: false });

_handleDatePickedIn = (date) => {
    var date = new Date(date).getTime();
    this.setState({
        dateIn:date
    });
  this._hideDateTimePickerIn();
};
//_handleDateUsePicked
_showDateTimePickerUse = () => this.setState({ isDateTimePickerVisibleUse: true });

_hideDateTimePickerUse = () => this.setState({ isDateTimePickerVisibleUse: false });
_handleDateUsePicked = (date) => {
    var date = new Date(date).getTime();
    this.setState({
        dateUse:date
    });
  this._hideDateTimePickerUse();
};
//_handleDateReceivedPicked
_showDateTimePickerReceived = () => this.setState({ isDateTimePickerVisibleReceived: true });

_hideDateTimePickerReceived = () => this.setState({ isDateTimePickerVisibleReceived: false });
_handleDateReceivedPicked = (date) => {
    var date = new Date(date).getTime();
    this.setState({
        dateReceived:date
    });
  this._hideDateTimePickerReceived();
};
render(){
    {console.log(JSON.stringify(this.state.nameRoom))}
    let roomItems = this.state.nameRoom.map( (s, i) => {
        return <Picker.Item key={i} value={s.name} label={s.name} />
    });
    //<StatusBar backgroundColor="rgb(255, 77, 255)" barStyle="light-content" />
    return(
        <View style={{flexDirection: 'column',flex: 1}}>
        <StatusBar backgroundColor={ColorApp.statusBarColor} barStyle="light-content" />
        <HeaderContainer {...this.props} header='Thêm mới thiết bị'/>
        <View style={{flex:1}}>
        <ScrollView style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
        <View style={{flex: 1,backgroundColor:'white',}}>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.4,marginLeft:5}}>Tên thiết bị: </Text>    
                <TextInput style={[styles.textInput,{borderColor:this.state.checkname===true?"black":"red"}]} value={this.state.name} ref={(input) => { this.TextInput1 = input }}
                onChangeText={(name) => this.setState({name})} placeholder='click để nhập..' 
                onSubmitEditing={() => { this.TextInput2.focus(); }}
                />
            </View>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.4,marginLeft:5}}>Năm sản xuất </Text>    
                <TextInput style={[styles.textInput,{borderColor:this.state.checkmadeYear===true?"black":"red"}]} value={this.state.madeYear} ref={(input) => { this.TextInput2 = input }}
                onChangeText={(madeYear) => this.setState({madeYear})} placeholder='click để nhập..' keyboardType='numeric'
                onSubmitEditing={() => { this.TextInput3.focus(); }}
                />
            </View>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.4,marginLeft:5}}>Mã thiết bị: </Text>    
                <TextInput style={[styles.textInput,{borderColor:this.state.checkcode===true?"black":"red"}]} value={this.state.code} ref={(input) => { this.TextInput3 = input }}
                onChangeText={(code) => this.setState({code})} placeholder='click để nhập..' 
                onSubmitEditing={() => { this.TextInput4.focus(); }}
                />
            </View>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.4,marginLeft:5}}>Nơi sản xuất: </Text>    
                <TextInput style={[styles.textInput,{borderColor:this.state.checkmadeIn===true?"black":"red"}]} value={this.state.madeIn} ref={(input) => { this.TextInput4 = input }}
                onChangeText={(madeIn) => this.setState({madeIn})} placeholder='click để nhập..' 
                onSubmitEditing={() => { Keyboard.dismiss()}}
                />
            </View>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.4,marginLeft:5}}>Nơi sử dụng: </Text> 
                <View style={styles.textInput}>
                    <Picker
                    selectedValue={this.state.useIn}
                    onValueChange={ (room) => ( this.setState({useIn:room}) ) } >
                    {roomItems}
                </Picker>
                </View>
            </View>
            <View style={[styles.containerTextInput,{borderColor:this.state.checkmadeYear===true?"black":"red"}]}>
                <Text style={{flex: 0.4,marginLeft:5}}>Ngày Nhận: </Text>    
                <TouchableHighlight onPress={this._showDateTimePickerReceived} style={styles.timePicker}>
                <Icon name='calendar' type='font-awesome' size={24} color={backgroundColor} /> 
                </TouchableHighlight>    
                <DateTimePicker styles={{}}
                    isVisible={this.state.isDateTimePickerVisibleReceived}
                    onConfirm={this._handleDateReceivedPicked}
                    onCancel={this._hideDateTimePickerReceived}
                />
            </View>
            <View style={[styles.containerTextInput,{borderColor:this.state.checkmadeYear===true?"black":"red"}]}>
                <Text style={{flex: 0.4,marginLeft:5}}>Ngày sử dụng:</Text>    
                
                <TouchableHighlight onPress={this._showDateTimePickerUse} style={styles.timePicker}>
                <Icon name='calendar' type='font-awesome' size={24} color={backgroundColor} /> 
                </TouchableHighlight>    
                <DateTimePicker styles={{}}
                    isVisible={this.state.isDateTimePickerVisibleUse}
                    onConfirm={this._handleDateUsePicked}
                    onCancel={this._hideDateTimePickerUse}
                />
            </View>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.4,marginLeft:5}}>Giá:</Text>    
                <TextInput style={styles.textInput} value={this.state.price} ref={(input) => { this.TextInput8 = input }}
                onChangeText={(price) => this.setState({price})} placeholder='click để nhập..' keyboardType='numeric' 
                onSubmitEditing={() => { this.TextInput9.focus(); }}
                />
            </View>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.4,marginLeft:5}}>Mô tả: </Text>    
                <TextInput style={styles.textInput} value={this.state.description} ref={(input) => { this.TextInput9 = input }}
                onChangeText={(description) => this.setState({description})} placeholder='click để nhập..' 
                onSubmitEditing={() => { this.TextInput10.focus(); }}
                />
            </View>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.39,marginLeft:5}}>Dòng viện - từ: </Text>
                <View style={{flex:0.61,flexDirection:'row',borderWidth:0.5,justifyContent:'center',alignItems: 'center',borderColor:this.state.checkvoltageFrom===true||this.state.checkvoltageTo===true?"black":"red"}}>
                    <TextInput style={{flex:0.4,borderWidth: 0.5,backgroundColor: 'white'}} value={this.state.voltageFrom} ref={(input) => { this.TextInput10 = input }}
                onChangeText={(voltageFrom) => this.setState({voltageFrom})} placeholder='nhập..' keyboardType='numeric'
                onSubmitEditing={() => { this.TextInput11.focus(); }}/>
                    <Text style={{flex: 0.2,alignItems:'center'}}> đến :</Text> 
                    <TextInput style={{flex:0.4,borderWidth: 0.5,backgroundColor: 'white',borderTopRightRadius:10,borderBottomRightRadius:10}} value={this.state.voltageTo} ref={(input) => { this.TextInput11 = input }}
                onChangeText={(voltageTo) => this.setState({voltageTo})} placeholder='nhập..' keyboardType='numeric'
                onSubmitEditing={() => { this.TextInput12.focus(); }}
                />
                </View>
            </View>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.4,marginLeft:5}}>Ampe: </Text>    
                <TextInput style={styles.textInput} value={this.state.ampe} ref={(input) => { this.TextInput12 = input }}
                onChangeText={(ampe) => this.setState({ampe})} placeholder='click để nhập..' keyboardType='numeric'
                onSubmitEditing={() => { this.TextInput13.focus(); }}
                />
            </View>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.4,marginLeft:5}}>Công suất: </Text>    
                <TextInput style={styles.textInput} value={this.state.capacity} ref={(input) => { this.TextInput13 = input }}
                onChangeText={(capacity) => this.setState({capacity})} placeholder='click để nhập..' 
                onSubmitEditing={() => { this.TextInput14.focus(); }}
                />
            </View>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.4,marginLeft:5}}>Phụ kiện: </Text>    
                <TextInput style={styles.textInput} value={this.state.accessory} ref={(input) => { this.TextInput14 = input }}
                onChangeText={(accessory) => this.setState({accessory})} placeholder='click để nhập..' 
                onSubmitEditing={() => { this.TextInput15.focus(); }}
                />
            </View>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.4,marginLeft:5}}>Người nhận: </Text>    
                <TextInput style={[styles.textInput,{borderColor:this.state.checkreceiver===true?"black":"red"}]} value={this.state.receiver} ref={(input) => { this.TextInput15 = input }}
                onChangeText={(receiver) => this.setState({receiver})} placeholder='click để nhập..' 
                onSubmitEditing={() => { this.TextInput16.focus(); }}
                />
            </View>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.4,marginLeft:5}}>Nguồn tiền: </Text>    
                <TextInput style={[styles.textInput,{borderColor:this.state.checkmoneySource===true?"black":"red"}]} value={this.state.moneySource} ref={(input) => { this.TextInput16 = input }}
                onChangeText={(moneySource) => this.setState({moneySource})} placeholder='click để nhập..' 
                onSubmitEditing={() => { Keyboard.dismiss() }}
                />
            </View>
            <View style={[styles.containerTextInput,{borderColor:this.state.checkdateIn===true?"black":"red"}]}>
                <Text style={{flex: 0.4,marginLeft:5}}>Ngày nhập: </Text>
                <TouchableHighlight onPress={this._showDateTimePickerIn} style={styles.timePicker}>
                <Icon name='calendar' type='font-awesome' size={24} color={backgroundColor} /> 
                </TouchableHighlight>    
                    <DateTimePicker styles={{}}
                        isVisible={this.state.isDateTimePickerVisibleIn}
                        onConfirm={this._handleDatePickedIn}
                        onCancel={this._hideDateTimePickerIn}
                    />
            </View>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.4,marginLeft:5}}>Trạng thái tiếp nhận: </Text>    
                <TextInput style={[styles.textInput,{borderColor:this.state.checkstatusReceipt===true?"black":"red"}]} value={this.state.statusReceipt} ref={(input) => { this.TextInput18 = input }}
                onChangeText={(statusReceipt) => this.setState({statusReceipt})} placeholder='click để nhập..' 
                onSubmitEditing={() => { this.TextInput19.focus(); }}
                />
            </View>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.4,marginLeft:5}}>Chất lượng: </Text>    
                <TextInput style={[styles.textInput,{borderColor:this.state.checklevelQuality===true?"black":"red"}]} value={this.state.levelQuality} ref={(input) => { this.TextInput19 = input }}
                onChangeText={(levelQuality) => this.setState({levelQuality})} placeholder='click để nhập..' 
                onSubmitEditing={() => { this.TextInput20.focus(); }}
                />
            </View>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.4,marginLeft:5}}>Số máy: </Text>    
                <TextInput style={styles.textInput} value={this.state.levelQuality} ref={(input) => { this.TextInput20 = input }}
                onChangeText={(levelQuality) => this.setState({levelQuality})} placeholder='click để nhập..' 
                onSubmitEditing={() => { Keyboard.dismiss()}}
                />
            </View>
            <View style={{width: '40%',height: '10%',borderRadius: 10,alignSelf:'center',marginTop:5}}>
            <Button title='Thêm' onPress ={()=>{
                this.addItem();
                Keyboard.dismiss();
            }} />
            </View>
           
        </View>
        </ScrollView>
        </View>
        </View>
        
        )
    }
    
}

const styles = StyleSheet.create({
    textInput:{flex:0.6,backgroundColor:'white',width: '100%',height: '100%',borderWidth:0.5,
                borderTopRightRadius:10,borderBottomRightRadius:10,
    },
    containerTextInput:{
        margin:5,borderTopRightRadius:10,borderBottomRightRadius:10,
        borderTopLeftRadius:10,borderBottomLeftRadius:10,
        backgroundColor:'rgb(230, 230, 230)',height:'4.2%',
        flexDirection: 'row',alignItems:'center',borderWidth:0.5
    },
    timePicker:{flex:0.6,backgroundColor:'white',width: '100%',height: '100%',borderWidth:0.5,
        borderTopRightRadius:10,borderBottomRightRadius:10,justifyContent: 'center'
    }
})