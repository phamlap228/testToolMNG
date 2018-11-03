import React, { Component } from 'react'
import { Header, Container, Body, Left,Tab,Tabs, TabHeading,Right } from 'native-base';
import {View,Text,StatusBar,Image,TouchableHighlight,TouchableOpacity,ScrollView,StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
import HeaderContainer from './headerContainer.js';
import DetailsItem from './detailsItem.js';
import DetaisUsing from './detailsUsing.js';
import DetaisNote from './detailsNote.js'


class DetailsScreen extends React.Component{
    constructor (props){
        super(props);
        this.state={
        }
    }
    static navigationOptions = () => {
        let drawerLabel = 'Details'
        let drawerIcon = () =>(
            <Icon name='align-center' type='font-awesome' size={24} color='rgb(255, 255, 153)' /> 
        );
        return{drawerLabel,drawerIcon};
    }
    render(){
       
        const info = this.props.navigation.state.params.data;
        return(
                <View style={{flex: 1}}>
                    <StatusBar backgroundColor="rgb(255, 77, 255)" barStyle="light-content" />
                    <TouchableOpacity style={{alignItems: 'flex-start',justifyContent: 'center',width:'100%',height:'8%', backgroundColor:'rgb(204, 0, 153)'}}  
                        onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrow-left" type='font-awesome' color="white" marginLeft={5}/>
                    </TouchableOpacity>
                    <Tabs tabBarPosition='bottom'>
                        <Tab  heading={<TabHeading style={{backgroundColor: 'rgb(204, 0, 153)',}}>
                        <Icon name="align-center" type='font-awesome' color='white' />
                        <Text style={{color:'white', marginLeft: 5}}>Chi tiết</Text></TabHeading>}>
                            <DetailsItem data={info} />
                        </Tab>
                        <Tab  heading={<TabHeading style={{backgroundColor: 'rgb(204, 0, 153)',}}>
                        <Icon name="align-center" type='font-awesome' color='white' />
                        <Text style={{color:'white', marginLeft: 5}}>Lưu ý</Text></TabHeading>}>
                            <DetaisNote/>
                        </Tab>
                        <Tab  heading={<TabHeading style={{backgroundColor: 'rgb(204, 0, 153)',}}>
                        <Icon name="align-center" type='font-awesome' color='white' />
                        <Text style={{color:'white', marginLeft: 5}}>Quá trình SD</Text></TabHeading>}>
                            <DetaisUsing/>
                    </Tab>
                </Tabs>
                
            </View>
        )
    }
}
styles = StyleSheet.create({
    plantText: {fontWeight:'bold',color:'rgb(255, 77, 255)',fontSize:14}
});
export default DetailsScreen;
