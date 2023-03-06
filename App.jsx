import React, {useState} from 'react';
import HomeScreen from './src/HomeScreen';
// import Dashboard from './src/Dashboard';
import MyDrawer from "./src/MyDrawer";

import LoginScreen from './src/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Fruits from "./src/Fruits";
import { Provider } from "react-redux";
import store from "./src/redux/store.js";

const Stack = createNativeStackNavigator();

const App = () => {

  const [showLogin, setShowLogin] = useState(false);



//   return (
//
//     <NavigationContainer>
//     <Stack.Navigator>
//
//     <Stack.Screen
//           name="LOGIN"
//           component={LoginScreen} />
//
//     <Stack.Screen name="MYDRAWER" component={MyDrawer} />
//
//    </Stack.Navigator>
//    </NavigationContainer>
// );

return (

<Provider store={store}>
<Fruits />
</Provider>

)

};




export default App;
