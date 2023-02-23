import {View, Text, SafeAreaView,Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '../components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const {width, height} = Dimensions.get('window');


const LoginScreen = ({navigation}) => {

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
    borderRadius: width,
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
   borderRadius: width
 }

});

  return (

    <>

      <Image source={require('../asset/bg.jpg')} style={styles.image} />

      <SafeAreaView
        style={styles.safeViewStyle}>


        <View style={styles.view1}>

          <Input
            label="USERNAME"
            placeholder="Email"
            width={width}
            height={height}
          />

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
              navigation.navigate('HOME')
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
