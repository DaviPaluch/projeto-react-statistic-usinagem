import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StyleGeral from "../../styles/styles";

function BtnPadrao(props) {
    return (
        <View style={{marginVertical:35}}>
            <View style={styles.btn}>
                <Text style={[StyleGeral.textBold, StyleGeral.textMd, styles.textBtn]} onPress={props.onPress}>{props.nome}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btn:{
        display:"flex",
        justifyContent:"center",
        textAlign:'center',
        paddingVertical: 12,
        minWidth: 300,
        borderRadius:30,
        backgroundColor:'#676998'        
    },
    textBtn:{
        textAlign:'center',
        color: "#fff",
    },
});

export default BtnPadrao;