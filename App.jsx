import React, {useState} from 'react';

import HomeScreen from './src/HomeScreen';

import LoginScreen from './src/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

  const [showLogin, setShowLogin] = useState(false);



  return (

    <NavigationContainer>
    <Stack.Navigator>

    <Stack.Screen
          name="LOGIN"
          component={LoginScreen} />

    <Stack.Screen name="HOME" component={HomeScreen} />

   </Stack.Navigator>
   </NavigationContainer>
);

};




export default App;
