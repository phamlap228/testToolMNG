import React,{Comment} from 'react';
import {Container} from 'native-base';
import {View,StyleSheet,FlatList,Text,ScrollView,Image,Dimensions} from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import {API} from '../network/API.js';
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
            screenHeight:0
        }
    }
    onSizeChange = (contentWidth,contentHeight)=>{
        this.setState({screenHeight:contentHeight})
    }
    _keyExtractor = (item) => {
        return item.id
    }
    async componentWillMount(){
        // await this.getDataFromServer();
    }
    getDataFromServer(){   
        API.getListDevice(0,20).then(
            res => {
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
        return(
            <ListItem
                title={
                    <Container style={{borderWidth: 0.7,flexDirection: 'row',height:'7%', width:width,}}>
                            <View style={{flexDirection:'column',flex: 0.6,alignSelf: 'center',}} >
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>{item.dateTime}</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 1,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>{item.content}</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 0.6,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>{item.follower}</Text>
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
                        <View style={{height:'100%',width}}>
                            <FlatList
                                data={listData}
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