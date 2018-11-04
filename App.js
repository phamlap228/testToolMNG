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
// import DrawerScreen from './component/drawerScreen.js';
// import SplashScreen from './component/splashScreen.js';
import {Login,Main,Add,Using,Splash} from './component/ScreenName'
import UsingScreen from './component/usingScreen.js';
import {CustomDrawerContentComponent} from './component/logoMenu.js'
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
  Using:{
    path:'/using',
    screen:UsingScreen,
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
    Details:{ screen:DetailsScreen, navigationOptions:() => ({ header:null}) },
  }
);
export default  App;