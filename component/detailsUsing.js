import React,{Comment} from 'react';
import {Container} from 'native-base';
import {View,StyleSheet,FlatList,Text,ScrollView,Image,Dimensions} from 'react-native';
import { ListItem, Card } from 'react-native-elements';
 var {width,height} = Dimensions.get('window');
 const listData =[
    {
      level:'HP-5012T',
      subtitle: 'Vui lòng đọc kỹ hướng dẫn sử dụng trước khi dùng',
      received_date:'Thứ 2, Ngày 30/9/2015',
      user:'Human Place'
    },{
        level:'HP-5012T',
        subtitle: 'Vui lòng đọc kỹ hướng dẫn sử dụng trước khi dùng',
        received_date:'Thứ 2, Ngày 30/9/2015',
        user:'Human Place'
      },{
        level:'HP-5012T',
        subtitle: 'Vui lòng đọc kỹ hướng dẫn sử dụng trước khi dùng',
        received_date:'Thứ 2, Ngày 30/9/2015',
        user:'Human Place'
      },{
        level:'HP-5012T',
        subtitle: 'Vui lòng đọc kỹ hướng dẫn sử dụng trước khi dùng',
        received_date:'Thứ 2, Ngày 30/9/2015',
        user:'Human Place'
      },{
        level:'HP-5012T',
        subtitle: 'Vui lòng đọc kỹ hướng dẫn sử dụng trước khi dùng',
        received_date:'Thứ 2, Ngày 30/9/2015',
        user:'Human Place'
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
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>{item.level}</Text>
                            </View>
                            <View style={{flexDirection:'column',flex: 0.6,alignSelf: 'center',}}>
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>{item.user}</Text>
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
                                <Text style={{alignItems:'center',alignSelf:'center',justifyContent: 'center'}}>Level</Text>
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