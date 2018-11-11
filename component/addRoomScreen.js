
import React, {  Component } from 'react';
import { Platform,Alert,StyleSheet,ScrollView,Keyboard,TextInput,TouchableOpacity,Button, Text, View,StatusBar,Dimensions, Image} from 'react-native';
// import { Button, Input } from 'native-base';
import { Icon, Card } from 'react-native-elements';
import HeaderContainer from './headerContainer.js';
import ColorApp from '../config/ColorApp.js';
import {Actions} from 'react-native-router-flux';
import {list} from './data.js';
import axios from 'axios';
import {API} from '../network/API.js';
// import { Input } from 'native-base';

var {height, width} = Dimensions.get('window');

const backgroundColor='#007256';
export default class AddRoomScreen extends Component {
  constructor (props){
    super(props);
    this.state = {
        name: '',
        code:'',
        manager:'',
    }
}
static navigationOptions = () => {
    let drawerLabel = 'Thêm phòng'
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
addItem(){
    const params={
        name: this.state.name,
        code: this.state.code,
        type:this.state.manager,
    }
    API.addRoom(params).then(
        res=>{
            if(res.data==='Save DONE!'){
                // console.log("Params"+JSON.stringify(params)+ " \n"+ res.data );
                alert("Thêm thành công!");
                this.props.navigation.goBack() 
            }
            else return alert("Chưa thêm được!");
            
        },
        err=>{
            console.log(
                "err"
            );
        });
   
}
render(){
    //<StatusBar backgroundColor="rgb(255, 77, 255)" barStyle="light-content" />
    //<TextInput style={{flex: 1}} value={this.state.name}  onChangeText={(name) => this.setState({name})} placeholder='click để nhập..' />
    return(
        <View style={{flexDirection: 'column',flex: 1}}>
        <StatusBar backgroundColor={ColorApp.statusBarColor} barStyle="light-content" />
        <HeaderContainer {...this.props} header='Thêm mới thiết bị'/>
        <ScrollView style={{backgroundColor:'white',}}>
        <View style={{flex: 1,backgroundColor:'white',}}>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.4,marginLeft:5}}>Tên phòng: </Text>    
                <TextInput style={styles.textInput} value={this.state.name} ref={(input) => { this.TextInput1 = input }}
                onChangeText={(name) => this.setState({name})} placeholder='click để nhập..' 
                onSubmitEditing={() => { this.TextInput2.focus(); }}
                />
            </View>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.4,marginLeft:5}}>Trường phòng: </Text>    
                <TextInput style={styles.textInput} value={this.state.manager} ref={(input) => { this.TextInput2 = input }}
                onChangeText={(manager) => this.setState({manager})} placeholder='click để nhập..' 
                onSubmitEditing={() => { this.TextInput3.focus(); }}
                />
            </View>
            <View style={styles.containerTextInput}>
                <Text style={{flex: 0.4,marginLeft:5}}>Mã phòng: </Text>    
                <TextInput style={styles.textInput} value={this.state.code} ref={(input) => { this.TextInput3 = input }}
                onChangeText={(code) => this.setState({code})} placeholder='click để nhập..' 
                onSubmitEditing={() => { Keyboard.dismiss(); }}
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
        
        )
    }
    
}

const styles = StyleSheet.create({
    textInput:{flex:0.6,backgroundColor:'white',width: '100%',height: '100%',
        borderWidth:0.5,borderTopRightRadius:10,borderBottomRightRadius:10,
    },
    containerTextInput:{
        margin:5,borderTopRightRadius:10,borderBottomRightRadius:10,
        borderTopLeftRadius:10,borderBottomLeftRadius:10,
        backgroundColor:'rgb(230, 230, 230)',height:'20%',
        flexDirection: 'row',alignItems:'center',borderWidth:0.5
    }
})