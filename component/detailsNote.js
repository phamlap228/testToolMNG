import React,{Comment} from 'react';
import {Container} from 'native-base';
import {View,StyleSheet,FlatList,Text,ScrollView,Image,Dimensions} from 'react-native';
import { ListItem, Card } from 'react-native-elements';

import {API} from '../network/API.js';
 var {width,height} = Dimensions.get('window');


export default class DetaisNote extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            screenHeight:0,
            id:this.props.data.id
        }
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
    _renderItem = ({item})=>{
        var date = new Date(item.dateTime);
        
        return(
            <ListItem
                title={
                    <Container style={{flexDirection: 'row',height:'10%',flex: 1,}}>
                            <View style={{flexDirection:'column',flex: 0.5,alignSelf: 'center',}} >
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>{date.toLocaleDateString()}</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 1,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center',backgroundColor:'red'}}>{item.content}</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 0.5,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'flex-start',justifyContent: 'flex-start'}}>{item.follower}</Text>
                            </View>

                    </Container>}
                    rightIcon={<View/>}
            />
        )
    }
    render(){
       const scrollEnable = this.state.screenHeight>height
       
        return(
            <View style={{width,height}}>
                    <View style={{borderWidth: 0.7,flexDirection: 'row',height:'7%', width:width,}}>
                            <View style={{flexDirection:'column',flex: 0.6,alignSelf: 'center',}} >
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>Ngày tháng</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 1,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>Nội dung</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 0.6,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>Người theo dõi</Text>
                            </View>

                    </View>
                    <ScrollView  scrollEnabled={scrollEnable}  onContentSizeChange={this.onContentSizeChange}>
                        <View style={{height:'100%',width,}}>
                            <FlatList
                                data={this.state.data}
                                keyExtractor={this._keyExtractor}
                                renderItem={this._renderItem}
                            />  
                        </View>
                    </ScrollView>
                    
            </View>
            
        )
    }
}
styles = StyleSheet.create({
    plantText: {fontWeight:'bold',color:'rgb(255, 77, 255)',fontSize:14}
});