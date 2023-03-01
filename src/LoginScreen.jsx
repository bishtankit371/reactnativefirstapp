import {View, Text, SafeAreaView,Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { Component, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '../components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {useWindowDimensions} from 'react-native';


const LoginScreen = ({navigation}) => {

  const {height, width} = useWindowDimensions();
  const [inputValue, setInputValue] = useState("");



const styles = StyleSheet.create({
  image: {
    width: width,
    height: height,
    position: 'absolute',
    zIndex: -2
  },
  safeViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 18
  },
  view4: {
      alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
text: {
  fontSize: 16,
  color: 'red',
  marginBottom: 24,
  fontWeight: 'bold',
  textAlign: 'right'
},
button: {
   alignItems: 'center',
    borderRadius: 40,
   justifyContent: 'center',
   paddingHorizontal: 30,
    paddingVertical: 14,
   backgroundColor: '#3b5998',
 },
 buttonG: {
   backgroundColor: "#db3236",
   alignItems: 'center',
   justifyContent: 'center',
   paddingVertical: 14,
   paddingHorizontal: 30,
   borderRadius: 40
 },
 inputView: {
     width: width * 0.8,
     borderRadius: 20
   },
  inputText: {
     fontSize: 18,
       marginBottom: 4,
     fontWeight: 'bold',
     color: 'rgba(255,105,105,1)',
   },
   textInputview: {
     width: width * 0.8,
     height: height * 0.05,
     borderBottomColor: 'red',
     marginBottom: 20,
     backgroundColor: 'rgba(255,255,255,0)',
     borderBottomWidth: 2,
     fontSize: 18
   }

});

  return (

    <>

      <Image source={require('../asset/bg.jpg')} style={styles.image} />

      <SafeAreaView
        style={styles.safeViewStyle}>


        <View style={styles.view1}>





        <View style={styles.inputView}>
        <Text
          style={styles.inputText}>
          Email
        </Text>

          <TextInput
          onChangeText={(text)=> setInputValue(text)}
          style={styles.textInputview}
          placeholder="Email"
          />
        </View>





          <Input
            label="PASSWORD"
            placeholder="Password"
            width={width}
            height={height}
          />

          <Text

            style={styles.text}>

            Forgot Password?

          </Text>

          <TouchableOpacity title="HOME" onPress={() =>
              navigation.navigate('MYDRAWER', {name: inputValue})
            }>

            <Text

        style={{

          fontSize: 18,
          color: "black",
          marginLeft: 10,
          textAlign: 'center',

        }}>

       LOGIN

      </Text>

            </TouchableOpacity>


          <View
            style={styles.view3}>

            <Text
              style={styles.text}>

              --------------------

            </Text>

            <Text
              style={styles.text}>

              OR CONNECT WITH

            </Text>

            <Text
              style={styles.text}>

              --------------------

            </Text>

          </View>





<View style={{flexDirection:"row"}}>

          <TouchableOpacity title="facebook" style={styles.button} >

            <Text

      style={{

           backgroundColor: "#3b5998",
            fontSize: 22,
            color: "white",
            textAlign: 'center',

          }}>

        facebook

        </Text>

            </TouchableOpacity>






            <TouchableOpacity title="google" style={styles.buttonG} >

              <Text

          style={{
            backgroundColor: '#db3236',
            fontSize: 22,
            color: "white",

            textAlign: 'center',

          }}>

         google

        </Text>

              </TouchableOpacity>
</View>


        </View>

      </SafeAreaView>

    </>

  );

};




export default LoginScreen;
