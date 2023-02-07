import React from "react";
import { StyleSheet, Styles, View, ScrollView,TextInput, Text, _Text, Button } from "react-native";
import { useState, useEffect } from "react";
import Title from "../../components/Title/title";
import Form from "../../components/Forms/form";
import FormTroy from "../../components/Forms/formTroy";
import MiniTitle from "../../components/Title/miniTitle";
import BtnPadrao from "../../components/Buttons/btnPadrao";
import ProgressBarConcorrente from "./progressbarconcorrente";

export default function CardConcorrente(props){
    
    const compareTempC = 7
    const compararAvancoLinear = 570
    const compararRot = 2700
    const compararAvanco = 0.5
    const compararVC = 600
    /*DATA FOR TORNEAMENTO TYPE*/
    const [vc, setVc] = useState(props.vc)
    
    const [widthVC,setWidthVC] = useState((parseInt((vc*100)/compararVC)).toFixed(1))
    const [rotacoes, setrotacoes] = useState(props.rotacoes);
    const [widthRot, setwidthRot] = useState(((rotacoes*100)/compararRot).toFixed(1));
    
    const [avanco, setAvanco] = useState(props.avanco)
    const [widthAvanco,setWidthAvanco] = useState(((avanco*100)/compararAvanco).toFixed(1))
    const [avancolinear, setavancolinear] = useState(parseFloat(props.avancolinear));
    const [widthAvancoLinear, setwidthAvancoLinear] = useState(((avancolinear*100)/compararAvancoLinear).toFixed(1));

    const [tempcorte,setTempCorte] = useState(props.tempcorte)
    
    const [widthTempCorte,setWidthTempCorte] = useState(((tempcorte*100)/compareTempC).toFixed(1))
    
    
    
    
    return(
        
        <>
            <View style = {[style.container]} >
                <Text style={[style.title]}>{'Outro Frabricante'}</Text>
                <View style={[style.datadiv]}>
                    <Text style={[style.text]}>{'Velocidade de corte'}</Text>
                    <ProgressBarConcorrente width={widthVC}/>
                </View>
                <View style={[style.datadiv]}>
                    <Text style={[style.text]}>{'Avanço'}</Text>
                    <ProgressBarConcorrente width={widthAvanco}/>
                </View>
                <View style={[style.datadiv]}>
                    <Text style={[style.text]}>{'Tempo de corte'}</Text>
                    <ProgressBarConcorrente width={widthTempCorte}/>
                </View>
                <View style={[style.datadiv]}>
                    <Text style={[style.text]}>{'Rotações RPM'}</Text>
                    <ProgressBarConcorrente width={widthRot}/>
                </View>
                <View style={[style.datadiv]}>
                    <Text style={[style.text]}>{'Avanco Linear'}</Text>
                    <ProgressBarConcorrente width={widthAvancoLinear}/>
                </View>
            </View>
        </>
    )
}


const style = StyleSheet.create({
    container: {
        height:307,
        width:352,
        backgroundColor:'#3A1111',
        borderRadius: 15,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"flex-start"

    },
    datadiv:{
        marginTop:7,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
        
    },
    text:{
        color:'#ffffff',
        fontSize:14,
        display:"flex",
        marginBottom:2
    },
    title:{
        marginTop:15,
        fontSize:17,
        color:'#ffffff',
        width:'100%',
        textAlign:"center",
        fontWeight:"bold"
    }
})