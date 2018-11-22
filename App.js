/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {  Component } from 'react';
import { Platform,StyleSheet, Text,Dimensions, View} from 'react-native';
import { Scene, ActionConst, Stack, Router, Tabs } from 'react-native-router-flux';
import {DrawerNavigator,StackNavigator} from 'react-navigation';
// import LoginScreen from './component/loginScreen.js';
import MainScreen from './component/mainScreen.js';
import AddScreen from './component/addScreen.js';
import DetailsScreen from './component/detailsScreen.js';
import AddRoomScreen from './component/addRoomScreen.js';
import DetailsRoomScreen from './component/detailsRoomScreen';
import {Login,Main,Add,Using,Splash} from './component/ScreenName'
import RoomScreen from './component/roomScreen.js';
import {CustomDrawerContentComponent} from './component/logoMenu.js'
import AddRepair from './component/addRepair.js'
var {height, width} = Dimensions.get('window');
let routerConfigs = {
  Main: {
    path:'/',
    screen: MainScreen,
  },
  Add: {
    path:'/add',
    screen: AddScreen,
  },
  Room:{
    path:'/room',
    screen:RoomScreen,
  },
  
};
let drawerNavigatorConfig = {
  initialRouterName:Main,
  drawerWidth:3/4*width,
  drawerPosition:'left',
  contentComponent:CustomDrawerContentComponent,
  contentOptions:{
  }
}
const Drawer = DrawerNavigator(routerConfigs,drawerNavigatorConfig);
const App = StackNavigator(
  {
    Drawer: { screen: Drawer, navigationOptions:() => ({ header:null}) },
    AddRoom:{screen: AddRoomScreen, navigationOptions:() => ({ header:null})},
    Details:{ screen:DetailsScreen, navigationOptions:() => ({ header:null}) },
    DetailsRoomScreen:{ screen:DetailsRoomScreen, navigationOptions:() => ({ header:null}) },
    AddRepair:{screen:AddRepair, navigationOptions:()=>({header:null})},
  }
);
export default  App;