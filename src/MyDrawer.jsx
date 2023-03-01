import React from 'react'
import { Image, TextInput, ImageBackground, View, Text,TouchableOpacity } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import Dashboard from './Dashboard';


const Drawer = createDrawerNavigator();
const MyDrawer=({route})=> {
  const {name} = route.params;

  return (
    <Drawer.Navigator>
    <Drawer.Screen name="DASHBOARD" component={Dashboard} options={{headerShown:false}} />
    <Drawer.Screen name="SETTINGS" component={HomeScreen} />
  </Drawer.Navigator>
  )
}

export default MyDrawer
