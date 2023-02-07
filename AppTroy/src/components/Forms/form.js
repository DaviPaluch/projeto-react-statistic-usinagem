import React from "react";
import { StyleSheet, View, TextInput } from "react-native";


export default function Form(props) {
  return (
    <View>
      <View style={styles.container}>
        <TextInput placeholderTextColor={'#000'} placeholder={props.place} {...props}></TextInput>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {   
    width: 180,
    height: 50,
    padding: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#000000',
    borderRadius: 10,
    marginBottom: 15,
  },
})

