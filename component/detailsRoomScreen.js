import React, { Component } from 'react'
import { Header, Container,Card, Body, Left,Tab,Tabs, TabHeading,Right } from 'native-base';
import {View,Text,StatusBar,BackHandler,Image,TouchableHighlight,TouchableOpacity,ScrollView,StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
import HeaderContainer from './headerContainer.js';
import DetailsItem from './detailsItem.js';
import DetaisUsing from './detailsUsing.js';
import DetaisNote from './detailsNote.js';
import ColorApp from '../config/ColorApp'
import ListDeviceRoom from './listDeviceRoom.js';
import DetailsRoom from './detailsRoom.js';


class DetailsRoomScreen extends React.Component{
    constructor (props){
        super(props);
        this.state={
        }
    }
    
    static navigationOptions = () => {
        let drawerLabel = 'DetailsRoomScreen'
        let drawerIcon = () =>(
            <Icon name='align-center' type='font-awesome' size={24} color='rgb(255, 255, 153)' /> 
        );
        return{drawerLabel,drawerIcon};
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
      }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
      }
    
    handleBackPress = () => {
        
            const { navigation } = this.props;
            navigation.state.params.refreshFunction(true);
            this.props.navigation.goBack();
        //this.goBack(); // works best when the goBack is async
        return true;
      }
    render(){
       // <StatusBar backgroundColor="rgb(255, 77, 255)" barStyle="light-content" />
        const info = this.props.navigation.state.params.data;
        console.log("qzz: "+ JSON.stringify(info));
        return(
                <View style={{flex: 1}}>
                <View style ={{backgroundColor:ColorApp.headerColor,width:'100%',flexDirection: 'row',
                    justifyContent:'center',alignItems: 'center',height:'8%',alignSelf: 'flex-start'}}>
                    <TouchableHighlight style={{left: 10,alignItems: 'center',position:'absolute'}}  
                            onPress={() => this.handleBackPress()}>
                            <Icon name="times" type='font-awesome' color="white" marginLeft={5}/>
                        </TouchableHighlight>
                    <Text style={{fontWeight: 'bold',fontSize: 16,alignItems: 'center',justifyContent:'center',color:'white'}}>
                        Chi tiết Khoa
                    </Text>
                    </View>
                    
                    <Tabs tabBarPosition='bottom'>
                        <Tab  heading={<TabHeading style={{backgroundColor: 'rgb(153, 0, 255)',flexDirection:'column'}}>
                        <Icon name="info" type='font-awesome' color='white' />
                        <Text style={{color:'white', marginLeft: 5}}>Chi tiết Khoa</Text></TabHeading>}>
                            <DetailsRoom data={info} />
                        </Tab>
                </Tabs>
                
            </View>
        )
    }
}
styles = StyleSheet.create({
    plantText: {fontWeight:'bold',color:'rgb(255, 77, 255)',fontSize:14}
});
export default DetailsRoomScreen;
