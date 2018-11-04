
import React, {  Component } from 'react';
import { Platform,Alert,StyleSheet,ScrollView,TouchableHighlight,Button, Text, View,StatusBar,Dimensions,TextInput, Image} from 'react-native';
// import { Button, Input } from 'native-base';
import { Icon } from 'react-native-elements';
import HeaderContainer from './headerContainer.js';
import {Actions} from 'react-native-router-flux';
import {list} from './data.js';
import axios from 'axios';
import {API} from '../network/API.js';

// var {height, width} = Dimensions.get('window');

const backgroundColor='#007256';
export default class AddScreen extends Component {
  constructor (props){
    super(props);
    this.state = {
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
        newList:[]
    }
}
static navigationOptions = () => {
    let drawerLabel = 'Add'
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
    }
    API.addDevice(params).then(
        res=>{
            if(res.data==='ADD DONE!'){
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
    return(
        <View style={{flexDirection: 'column',flex: 1}}>
        
        <HeaderContainer {...this.props}/>
        <ScrollView >
        <View style={{flex: 1,backgroundColor:'white',padding:2,}}>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>Name:</Text>    
            <TextInput style={styles.textInput} value={this.state.name}
            onChangeText={(name) => this.setState({name})}
            />
        </View>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>MadeYear:</Text>    
            <TextInput style={styles.textInput} value={this.state.madeYear}
            onChangeText={(madeYear) => this.setState({madeYear})}
            />
        </View>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>Code:</Text>    
            <TextInput style={styles.textInput} value={this.state.code}
            onChangeText={(code) => this.setState({code})}
            />
        </View>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>MadeIn:</Text>    
            <TextInput style={styles.textInput} value={this.state.madeIn}
            onChangeText={(madeIn) => this.setState({madeIn})}
            />
        </View>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>useIn:</Text>    
            <TextInput style={styles.textInput} value={this.state.useIn}
            onChangeText={(useIn) => this.setState({useIn})}
            />
        </View>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>DateReceived:</Text>    
            <TextInput style={styles.textInput} value={this.state.dateReceived}
            onChangeText={(dateReceived) => this.setState({dateReceived})}
            />
        </View>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>DateUse:</Text>    
            <TextInput style={styles.textInput} value={this.state.dateUse}
            onChangeText={(dateUse) => this.setState({dateUse})}
            />
        </View>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>price:</Text>    
            <TextInput style={styles.textInput} value={this.state.price}
            onChangeText={(price) => this.setState({price})}
            />
        </View>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>description:</Text>    
            <TextInput style={styles.textInput} value={this.state.description}
            onChangeText={(description) => this.setState({description})}
            />
        </View>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>voltageFrom:</Text>    
            <TextInput style={styles.textInput} value={this.state.voltageFrom}
            onChangeText={(voltageFrom) => this.setState({voltageFrom})}
            />
        </View>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>voltageTo:</Text>    
            <TextInput style={styles.textInput} value={this.state.voltageTo}
            onChangeText={(voltageTo) => this.setState({voltageTo})}
            />
        </View>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>ampe:</Text>    
            <TextInput style={styles.textInput} value={this.state.ampe}
            onChangeText={(ampe) => this.setState({ampe})}
            />
        </View>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>capacity:</Text>    
            <TextInput style={styles.textInput} value={this.state.capacity}
            onChangeText={(capacity) => this.setState({capacity})}
            />
        </View>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>accessory:</Text>    
            <TextInput style={styles.textInput} value={this.state.accessory}
            onChangeText={(accessory) => this.setState({accessory})}
            />
        </View>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>receiver:</Text>    
            <TextInput style={styles.textInput} value={this.state.receiver}
            onChangeText={(receiver) => this.setState({receiver})}
            />
        </View>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>moneySource:</Text>    
            <TextInput style={styles.textInput} value={this.state.moneySource}
            onChangeText={(moneySource) => this.setState({moneySource})}
            />
        </View>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>dateIn:</Text>    
            <TextInput style={styles.textInput} value={this.state.dateIn}
            onChangeText={(dateIn) => this.setState({dateIn})}
            />
        </View>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>statusReceipt:</Text>    
            <TextInput style={styles.textInput} value={this.state.statusReceipt}
            onChangeText={(statusReceipt) => this.setState({statusReceipt})}
            />
        </View>
        <View style={styles.containerTextInput}>
            <Text style={{flex: 0.4,borderWidth: 1}}>levelQuality:</Text>    
            <TextInput style={styles.textInput} value={this.state.levelQuality}
            onChangeText={(levelQuality) => this.setState({levelQuality})}
            />
        </View>
           <Button title='Thêm' onPress ={()=>{
               this.addItem()
           }}/>
           </View>
        </ScrollView>
        </View>
        
        )
    }
    
}

const styles = StyleSheet.create({
    textInput:{flex:0.6,backgroundColor:'white',width: '100%',height: '100%'},
    containerTextInput:{height:'5%',flexDirection: 'row',alignItems:'center',borderWidth:0.8}
})