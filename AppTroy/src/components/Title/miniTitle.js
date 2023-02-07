import React from "react";
import {View, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import StyleGeral from "../../styles/styles";

export default function MiniTitle(props) {    
    return (
        <View style={styles.container}>
            <Text style={[StyleGeral.textLg2, styles.texto]}>{props.titulo}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'flex-end',
    },
    texto:{
        color: '#111226'
    }
})