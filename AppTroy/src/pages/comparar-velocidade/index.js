import React from "react";
import { StyleSheet, Styles, View, ScrollView, Text, Button } from "react-native";
import { useState, useEffect } from "react";
import Title from "../../components/Title/title";
import CardTroy from "../../components/Resumo/cardtroy";
import CardConcorrente from "../../components/Resumo/cardconcorrente";
import MiniTitle from '../../components/Title/miniTitle';



export default function CompararVelocidade({ route }, props) {

    const pi = 3.14      //pi

    

    const dadosTroy = {
        fixacao: route.params.dadosTroy.fixacao,
        codigo: route.params.dadosTroy.codigo,
        angPosicao: route.params.dadosTroy.angPosicao,
        codInserto: route.params.dadosTroy.codInserto,
        classe: route.params.dadosTroy.classe,
        qtdAresta: route.params.dadosTroy.qtdAresta,
        diamPeca: route.params.dadosTroy.diamPeca,
        diamUsinado: route.params.dadosTroy.diamUsinado,
        refrigeracao: route.params.dadosTroy.refrigeracao,
        presRefri: route.params.dadosTroy.presRefri,
        rotacoes: route.params.dadosTroy.rotacoes,
        profCorte: route.params.dadosTroy.profCorte,
        compCorte: route.params.dadosTroy.compCorte,
        compPeca: route.params.dadosTroy.compPeca,
        numPassadas: route.params.dadosTroy.numPassadas,
        rendPcsArestas: route.params.dadosTroy.rendPcsArestas,
        tmpAtvCorAresta: route.params.dadosTroy.tmpAtvCorAresta,
        roteixopricipal: route.params.dadosTroy.roteixopricipal,
        compusimin: route.params.dadosTroy.compusimin
    }

    const dadosFabri = {
        nome: route.params.dadosFab.nome,
        fixacao: route.params.dadosFab.fixacao,
        codigo: route.params.dadosFab.codigo,
        angPosicao: route.params.dadosFab.angPosicao,
        codInserto: route.params.dadosFab.codInserto,
        classe: route.params.dadosFab.classe,
        qtdAresta: route.params.dadosFab.qtdAresta,
        diamPeca: route.params.dadosFab.diamPeca,
        diamUsinado: route.params.dadosFab.diamUsinado,
        refrigeracao: route.params.dadosFab.refrigeracao,
        presRefri: route.params.dadosFab.presRefri,
        rotacoes: route.params.dadosFab.rotacoes,
        profCorte: route.params.dadosFab.profCorte,
        compCorte: route.params.dadosFab.compCorte,
        compPeca: route.params.dadosFab.compPeca,
        numPassadas: route.params.dadosFab.numPassadas,
        rendPcsArestas: route.params.dadosFab.rendPcsArestas,
        tmpAtvCorAresta: route.params.dadosFab.tmpAtvCorAresta,
        roteixopricipal: route.params.dadosFab.roteixopricipal,
        compusimin: route.params.dadosFab.compusimin
    }


        /*PEGAR DADOS DA TROY DA OUTRA TELA*/
        const [compeca, setComPeca] = useState(dadosTroy.compPeca)  //Comprimento da peça
        const [dm, setDm] = useState(dadosTroy.diamPeca)  //Diâmetro da peça
        const [n, setN] = useState(dadosTroy.roteixopricipal)  //Rotação do eixo principal
        const [i, setI] = useState(dadosTroy.compusimin) //comprimento usinado por min
        const [diamUsiTroy, setDiamUsiTroy] = useState(parseFloat(dadosTroy.diamUsinado));
        
        
        /*PEGAR DADOS DA OUTRA MARCA da outra tela*/
        const [compecaO, setComPecaO] = useState(parseFloat(dadosFabri.compPeca))  //Comprimento da peça
        const [dmO, setDmO] = useState((dadosFabri.diamPeca))  //Diâmetro da peça
        const [nO, setNO] = useState((dadosFabri.roteixopricipal))   //Rotação do eixo principal
        const [iO, setIO] = useState((dadosFabri.compusimin)) //comprimento usinado por min
        const [diamUsiFab, setDiamUsiFab] = useState((dadosFabri.diamUsinado));





        /*DATA for COMPONENT TROY*/
        const [vc, setVc] = useState((parseInt((pi * dm * n) / 1000)))      //*Velocidade de corte
        const [rotTroy, setRotTroy] = useState(((vc*1000)/(pi*diamUsiTroy)).toFixed(2));

        const [avanco, setAvanco] = useState((i / n).toFixed(4))
        const [avancoLinearTroy, setAvancoLinearTroy] = useState((avanco*rotTroy).toFixed(2));
        const [tempcorte, setTempCorte] = useState((compeca / i).toFixed(2))
        
    
        /*DATA for COMPONENT OUTRA MARCA*/
        const [vcCONCORRENTE, setVcCONCORRENTE] = useState((parseInt((pi * dmO * nO) / 1000)))      //*Velocidade de corte
        const [rotFab, setRotFab] = useState(((vcCONCORRENTE*1000)/(pi*diamUsiFab)).toFixed(2));
        const [avancoCONCORRENTE, setAvancoCONCORRENTE] = useState((iO / nO).toFixed(4))
        const [avancoLinearFab, setAvancoLinearFab] = useState((avancoCONCORRENTE*rotFab).toFixed(2));
        const [tempcorteCONCORRENTE, setTempCorteCONCORRENTE] = useState((compecaO / iO).toFixed(2))
        


    return (
        <View style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Title titulo='Resultado'></Title>
                <View style={{ height: 800 }}>
                    <View style={{ marginTop: 10 }}>
                        <View style={[{ display: "flex" }]}>
                            <CardTroy vc={vc} tempcorte={tempcorte} avanco={avanco} avancolinear={avancoLinearTroy} rotacoes={rotTroy}/>
                        </View>
                        <View style={[style.mgTop30]}>
                            <CardConcorrente vc={vcCONCORRENTE} tempcorte={tempcorteCONCORRENTE} avanco={avancoCONCORRENTE} avancolinear={avancoLinearFab} rotacoes={rotFab}/>
                            
                        </View> 
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}



const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    mgTop30: {
        marginTop: 30
    }
})













