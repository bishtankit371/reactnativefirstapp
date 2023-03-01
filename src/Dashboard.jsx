import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native';

import React, { Component } from 'react';
  import {useWindowDimensions} from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';

// import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'



const Dashboard = ({navigation}) => {

  const {height, width} = useWindowDimensions();


  const styles = StyleSheet.create({
    imageStyle: {
      position: 'absolute',
      zIndex: -2,
      width: width,
      height: height,

    },
    SafeAreaStyle: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'rgba(255,100,255,0.8)',
      justifyContent: 'center',
    },
    view1: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 50
    },
    view2: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
       alignItems: 'center',
        borderRadius: 40,
       justifyContent: 'center',
       paddingVertical: 12,
       paddingHorizontal: 32,
       backgroundColor: 'white',
     }
  })



  return (

    <>

      <SafeAreaView
        style={styles.SafeAreaStyle}>
        <View
          style={styles.view1}>

          <Text
            style={styles.text}>
            Hello, Ankit! This is Dashboard
          </Text>
        </View>

        <View  style={styles.view2}>

    <TouchableOpacity title="LOGOUT" style={styles.button} onPress={() =>
        navigation.navigate('LOGIN')
      }>

      <Text

  style={{

    fontSize: 18,

    color: "black",

    marginLeft: 10,

    textAlign: 'center',

  }}>

 LOGOUT

</Text>

      </TouchableOpacity>

        </View>

      </SafeAreaView>

    </>

  );

};




export default Dashboard;
