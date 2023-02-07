import React from "react";
import { StyleSheet, Styles, View, ScrollView,TextInput, Text, _Text, Button } from "react-native";
import { useState, useEffect } from "react";
import Title from "../../components/Title/title";
import Form from "../../components/Forms/form";
import FormTroy from "../../components/Forms/formTroy";
import MiniTitle from "../../components/Title/miniTitle";
import BtnPadrao from "../../components/Buttons/btnPadrao";
import ProgressBar from "../Resumo/progressbar";

export default function CardTroy(props){
    
    const compareTempC = 7
    const compararAvanco = 0.5
    const compararVC = 600
    const compararAvancoLinear = 570
    const compararRot = 2700
    const pi = 3.14
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
        
        <View>
            <View style = {[style.container]} >
                <Text style={[style.title]}>{'Ferramentas Troy'}</Text>
                <View style={[style.datadiv]}>
                    <Text style={[style.text]}>{'Velocidade de corte'}</Text>
                    <ProgressBar width={widthVC}/>
                </View>
                <View style={[style.datadiv]}>
                    <Text style={[style.text]}>{'Avanço'}</Text>
                    <ProgressBar width={widthAvanco}/>
                </View>
                <View style={[style.datadiv]}>
                    <Text style={[style.text]}>{'Tempo de corte'}</Text>
                    <ProgressBar width={widthTempCorte}/>
                </View>
                <View style={[style.datadiv]}>
                    <Text style={[style.text]}>{'Rotações RPM'}</Text>
                    <ProgressBar width={widthRot}/>
                </View>
                <View style={[style.datadiv]}>
                    <Text style={[style.text]}>{'Avanco Linear'}</Text>
                    <ProgressBar width={widthAvancoLinear}/>
                </View>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        height:307,
        width:352,
        backgroundColor:'#111226',
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
        justifyContent:"space-between"
        
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