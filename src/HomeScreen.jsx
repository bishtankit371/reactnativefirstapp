import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native';

import React from 'react';
  import {useWindowDimensions} from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';

// import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'







const LandingScreen = ({navigation}) => {

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
      backgroundColor: 'rgba(255,65,65,0.7)',
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
      <Image
        source={require('../asset/bg.jpg')}
        style={styles.imageStyle}
      />

      <SafeAreaView
        style={styles.SafeAreaStyle}>
        <View
          style={styles.view1}>

          <Text
            style={styles.text}>
            Heartlink
          </Text>
        </View>

        <View  style={styles.view2}>

    <TouchableOpacity title="LOGIN" style={styles.button} onPress={() =>
        navigation.navigate('LOGIN')
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

        </View>

      </SafeAreaView>

    </>

  );

};




export default LandingScreen;
