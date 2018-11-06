// let logoMenu = () =>(<Image style={{width: '100%',height: '100%', resizeMode:'cover'}} source={require('../images/logo_app.png')}/>)
import React, { Component } from 'react';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import {View,Text,Image,TouchableOpacity,StyleSheet,ScrollView,BackHandler } from 'react-native';
import { Icon } from 'react-native-elements';

const CustomDrawerContentComponent = (props) => (
    <View style={{flex: 1}}>
        <Image style={{width: '100%',height: '30%', resizeMode:'cover'}} source={require('../images/logo_app.png')}/>
        <ScrollView>
            <SafeAreaView style={styles.container} forceInset={{ flex:1 }}>
                <DrawerItems {...props} />
            </SafeAreaView>
    </ScrollView>
        <View style={{flex: 1,marginLeft:20,flexDirection:'column'}}>
            <TouchableOpacity style={{flex: 1}}>
            <View style={{height:'30%',flexDirection:'row',alignItems: 'center'}}>
            <Icon name='info-circle' type='font-awesome' style={{marginLeft:20}} size={24} color='#007256'/>
            <Text style={{fontWeight: 'bold',marginLeft:20}}> About</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={{flex: 1}} onPress={()=>{
                BackHandler.exitApp()
            }}>
            <View style={{height:'30%',flexDirection:'row',alignItems: 'center'}}>
            <Icon name='sign-out' type='font-awesome' style={{marginLeft:20}} size={24} color='#007256'/>
            <Text style={{fontWeight: 'bold',marginLeft:20}}> Exit</Text>
            </View>
            </TouchableOpacity>

        </View>
    </View>
 
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export {CustomDrawerContentComponent}