import React,{Comment} from 'react';
import {Container} from 'native-base';
import {View,StyleSheet,Text,ScrollView,Image,FlatList,Button,TouchableHighlight,TouchableOpacity} from 'react-native';
import { ListItem } from 'react-native-elements';
 const timeUsing = [
    {
        datetime:'2/2/2018',
        content:'Nội dung nội dung ấy đây là cái nội dung sử dụng',
        user:'BS1',
    },
    {
        datetime:'2/1/2018',
        content:'Nội dung nội dung ấy đây là cái nội dung sử dụng',
        user:'BS1',
    },
    {
        datetime:'1/2/2018',
        content:'Nội dung nội dung ấy đây là cái nội dung sử dụng',
        user:'BS1',
    },
    
 ]
 let url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbKwRN73esc3kQRZzzMv-brBh4Vf4CampkLNQBErrT8BiFNuzQg';
 const params={
    datetime:'25/5/2018',
    content:'Nội dung nội dung ấy đây là cái nội dung sử dụng',
    user:'BS7',
}
export default class DetaisUsing extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading:false,
            newList:timeUsing
        }
    }
    _keyExtractor = (item, index) => item.index;
    appendObjTo=(newList, newObj)=> {
        const frozenObj = Object.freeze(newObj);
        return Object.freeze(newList.concat(frozenObj));
    }
    rederRow=({item})=>(
        <ListItem 
                    avatar={<View style={{width: 80, height: 80, backgroundColor: 'rgb(255, 77, 255)', borderRadius: 30, alignItems: 'center', justifyContent: 'center'}}>
                                <Image source={{uri:url }}
                                style={{width: '100%', height: '100%'}} />            
                            </View>}    
                    title={item.datetime}
                    subtitle={<View style={{flex: 1, margin:10}}><Text>{item.content}</Text><Text>{item.user}</Text></View>}
                    containerStyle={{backgroundColor: 'white'}}
                    rightIcon={<View/>}
                    
                />
    )
    thuchien=(params)=>{
        const a =  this.appendObjTo(this.state.newList, params);
        this.setState({
            newList:a
        });
       
    }
    render(){
    //    const param= this.props.data { this.thuchien( params)}
       
        return(
            <View style={{flex: 1,backgroundColor: 'orange',}}>
            <Button
                // onPress={()=>{this.thuchien( params),console.log('click: '+JSON.stringify(this.state.newList))}}
                onPress ={
                    ()=>{
                        alert('đang xây dựng')
                    }
                }
                title="Thêm"
                color="#841584"
                />
            <FlatList
                data={this.state.newList}
                renderItem={this.rederRow}
                keyExtractor={this._keyExtractor}
            />
            </View>
        )
    }
}
styles = StyleSheet.create({
    plantText: {fontWeight:'bold',color:'rgb(255, 77, 255)',fontSize:14}
});