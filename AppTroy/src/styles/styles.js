import React from "react";
import { StyleSheet } from "react-native";

const StyleGeral = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0D0D0D',
        paddingHorizontal:20,
    },
    div: {
        height: 80,
        marginHorizontal:12,       
        padding: 10, 
        flexDirection:'row',
        justifyContent:'space-between',           
    },
    textXs:{
        fontSize:12,
        //color:'#000'
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
        color: "#2d3168",
    },
    textSm:{
        fontSize:15,
        //color:'#000'
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
        color: "#2d3168",
    },
    textMd:{
        fontSize:18,
        //color: '#000',
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
        color: "#2d3168",
    },
    textLg:{
        fontSize:24,
        //color: '#000',
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
        color: "#2d3168",
    },
    textXl:{
        fontSize:35,
        //color: '#fff'
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
        color: "#2d3168",
    },
    textBold:{
        //fontWeight:'bold',
        fontFamily: "MontserratBold",
        fontWeight: "normal",
        color: "#2d3168",
    },
    textCenter:{
        textAlign:'center'
    },
    textEnd:{
        textAlign:'right'
    },
    textUpper:{
        textTransform:'uppercase'
    },
    mVert10:{
        marginVertical:10
    },
    mHori20:{
        marginHorizontal:20
    }
});

export default StyleGeral;