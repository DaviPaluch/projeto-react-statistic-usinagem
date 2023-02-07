import React from "react";
import { StyleSheet, Styles, View, ScrollView, Text } from "react-native";
import { useState } from "react";
import Title from "../Title/title";
import Form from "../Forms/form";
import FormTroy from "../Forms/formTroy";
import MiniTitle from "../Title/miniTitle";
import BtnPadrao from "../Buttons/btnPadrao";


export default function ProgressBarConcorrente(props){
    
    const [width,setWidth] = useState(props.width)

    return(
        <>
            <View style={[style.barprincipal]}>
                <View style={[style.barinside,{width:`${width}%`}]}></View>
            
                
            </View>
            <View>
                <Text style={[style.text]}>{`${width}%`}</Text>
            </View>
        </>

    )
}

const style = StyleSheet.create({
    barprincipal:{
        width:300,
        height:10,
        backgroundColor:'#D9D9D9',
        borderRadius:15
    },
    barinside:{

        height:10,
        backgroundColor:'#B91010',
        borderRadius:15
    },
    text:{
        color:'#ffffff',
        fontSize:10
    }
})