import React from "react";
import {View, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import StyleGeral from "../../styles/styles";

export default function Title(props) {    
    return (
        <View style={styles.container}>
            <Text style={[StyleGeral.textLg, StyleGeral.textBold, styles.texto]}>{props.titulo}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        height: '10%',
        alignItems: 'center', 
        justifyContent: 'flex-end',
        marginBottom: 40,
    },
    texto:{
        color: '#111226'
    }
})