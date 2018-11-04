import React,{Comment} from 'react';
import {Container} from 'native-base';
import {View,StyleSheet,FlatList,Text,ScrollView,Image,Dimensions} from 'react-native';
import { ListItem, Card } from 'react-native-elements';
 var {width,height} = Dimensions.get('window');
 const listData =[
    {
      name: 'Máy đo nhiệt 1',
      keycode:'HP-5012T',
      producer:'Hanshin Medical',
      country:'Korea',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbKwRN73esc3kQRZzzMv-brBh4Vf4CampkLNQBErrT8BiFNuzQg',
      subtitle: 'Vui lòng đọc kỹ hướng dẫn sử dụng trước khi dùng',
      emanufacture_date: 'Thứ 3, ngày 3/3/2003',
      received_date:'Thứ 2, Ngày 30/9/2015',
      source:'Trên cấp',
      status:'Mới hoàn toàn'
    },{
      name: 'Máy đo nhiệt 2',
      keycode:'HP-5012T',
      producer:'Hanshin Medical',
      country:'Korea',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbKwRN73esc3kQRZzzMv-brBh4Vf4CampkLNQBErrT8BiFNuzQg',
      subtitle: 'Vui lòng đọc kỹ hướng dẫn sử dụng trước khi dùng',
      emanufacture_date: 'Thứ 3, ngày 3/3/2003',
      received_date:'Thứ 2, Ngày 30/9/2015',
      source:'Trên cấp',
      status:'Mới hoàn toàn'
    },{
      name: 'Máy đo nhiệt 3',
      keycode:'HP-5012T',
      producer:'Hanshin Medical',
      country:'Korea',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbKwRN73esc3kQRZzzMv-brBh4Vf4CampkLNQBErrT8BiFNuzQg',
      subtitle: 'Vui lòng đọc kỹ hướng dẫn sử dụng trước khi dùng',
      emanufacture_date: 'Thứ 3, ngày 3/3/2003',
      received_date:'Thứ 2, Ngày 30/9/2015',
      source:'Trên cấp',
      status:'Mới hoàn toàn'
    },{
      name: 'Máy đo nhiệt 4',
      keycode:'HP-5012T',
      producer:'Hanshin Medical',
      country:'Korea',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbKwRN73esc3kQRZzzMv-brBh4Vf4CampkLNQBErrT8BiFNuzQg',
      subtitle: 'Vui lòng đọc kỹ hướng dẫn sử dụng trước khi dùng',
      emanufacture_date: 'Thứ 3, ngày 3/3/2003',
      received_date:'Thứ 2, Ngày 30/9/2015',
      source:'Trên cấp',
      status:'Mới hoàn toàn'
    },{
        name: 'Máy đo nhiệt 4',
        keycode:'HP-5012T',
        producer:'Hanshin Medical',
        country:'Korea',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbKwRN73esc3kQRZzzMv-brBh4Vf4CampkLNQBErrT8BiFNuzQg',
        subtitle: 'Vui lòng đọc kỹ hướng dẫn sử dụng trước khi dùng',
        emanufacture_date: 'Thứ 3, ngày 3/3/2003',
        received_date:'Thứ 2, Ngày 30/9/2015',
        source:'Trên cấp',
        status:'Mới hoàn toàn'
      },{
      name: 'Máy đo nhiệt 7',
      keycode:'END_TT',
      producer:'Hanshin Medical',
      country:'Korea',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbKwRN73esc3kQRZzzMv-brBh4Vf4CampkLNQBErrT8BiFNuzQg',
      subtitle: 'Vui lòng đọc kỹ hướng dẫn sử dụng trước khi dùng',
      emanufacture_date: 'Thứ 3, ngày 3/3/2003',
      received_date:'Thứ 2, Ngày 30/9/2015',
      source:'Trên cấp',
      status:'Mới hoàn toàn'
    },   
    ]
export default class DetaisNote extends React.Component{
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
    
    _renderItem = ({item})=>{
        return(
            <ListItem
                title={
                    <Container style={{borderWidth: 0.7,flexDirection: 'row',height:'7%', width:width,}}>
                            <View style={{flexDirection:'column',flex: 0.6,alignSelf: 'center',}} >
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>{item.received_date}</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 1,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>{item.subtitle}</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 0.6,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>{item.keycode}</Text>
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