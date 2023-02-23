import {View, Text, TextInput, StyleSheet} from 'react-native';

import React from 'react';




const Input = ({
  label,
  width,
  height,
  placeholder
}) => {


const styles = StyleSheet.create({
  view: {
    width: width * 0.8,
    borderRadius: 20
  },
  text: {
    fontSize: 18,
      marginBottom: 4,
    fontWeight: 'bold',
    color: 'rgba(255,105,105,1)',
  },
  textInput: {
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

    <View
      style={styles.view}>

      <Text
        style={styles.text}>

        {label}

      </Text>

      <TextInput
        style={styles.textInput}

        placeholder={placeholder}

      />

    </View>

  );

};




export default Input;
