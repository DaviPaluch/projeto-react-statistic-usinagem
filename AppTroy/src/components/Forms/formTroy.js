import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

  export default function FormTroy(props) {    
    return (
        <View style={styles.container}>
            <TextInput placeholderTextColor={'#fff'} style={{color:'#fff'}} placeholder={props.place} {...props}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        textDecorationColor: '#ffffff',
        width: 180,
        height: 50,
        paddingTop: 10,
        backgroundColor: '#676998',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#000000',
        borderRadius: 10,
        marginBottom: 15,
        marginLeft: 20,
      },
    }
)

