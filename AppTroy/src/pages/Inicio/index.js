import React from "react";
import { Image, StyleSheet, View, ScrollView, Pressable } from 'react-native';
import Text_font from '../../components/Fonts/Fonts';
import emma from '../../../assets/emma.png';
import logo_T from '../../../assets/logo_T.png';
import FlatHitorico from "../../components/Flatlist/flatHistorico";
import { Button } from 'react-native-paper';
import StyleGeral from '../../styles/styles';

export default function Inicio({ route, navigation }) {

    return (
        <View style={styles.estilo_view}>
            <View style={styles.ordenar_texto_img}>
                <Image source={emma} style={styles.avatar_emma} />
                <Text_font style={styles.titulo}>Olá, {route.params.usuario}</Text_font>
                <Text_font style={styles.sub_titulo}>Ver perfil</Text_font>
            </View>

            <View style={styles.botoes}>
                <View showsHorizontalScrollIndicator={false} horizontal={true} style={styles.scrollView}>
                    <Pressable onPress={() => navigation.push('Comparar')}>
                        <View style={styles.botao_compara}>
                            <Image source={logo_T} style={styles.logo_T} />
                            <Text_font style={styles.compara}>Comparar Ferramentas</Text_font>
                        </View>
                    </Pressable>
                </View>
            </View>

            <View>
                <Text_font style={styles.titulo_historico}>Histórico</Text_font>
                <View style={styles.botao_historico}>
                    <View style={styles.histDiv}>
                        <FlatHitorico scrollEnabled={false}></FlatHitorico>
                    </View>
                </View>
                <View>
                    <Text_font style={styles.histRegistro}>Mostrando últimos registros</Text_font>
                    <Button style={StyleGeral.mVert10} onPress={() => navigation.push('Historico')}>
                        <Text_font style={styles.histCompleto}>Acessar histórico completo</Text_font>
                    </Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    estilo_view: {
        backgroundColor: '#fff',
        flex: 1
    },
    avatar_emma: {
        width: 60,
        height: 60,
        margin: 20,
        marginTop: 60,
        borderRadius: 50,
    },
    style_view: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontFamily: "montserrat"
    },
    ordenar_texto_img: {
        flexDirection: "row",
        textAlign: "left",
    },
    titulo: {
        fontSize: 18,
        fontWeight: "bold",
        lineHeight: 60,
        marginTop: 50,
        marginLeft: -10,
    },
    sub_titulo: {
        fontSize: 13,
        lineHeight: 15,
        marginTop: 95,
        marginLeft: -120,
    },
    botoes: {
        flexDirection: "row",
        justifyContent:'center'
    },
    botao_compara: {
        fontSize: 13,
        marginTop: 30,
        marginRight: 10,
        marginBottom: 20,
        marginLeft: 20,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 15,
    },
    logo_T: {
        width: 80,
        height: 80,
        margin: 20,
        marginTop: 20,
        borderRadius: 3,
        alignSelf: "center",
    },
    compara: {
        fontSize: 15,
        paddingVertical: 5,
        borderRadius: 10,
        marginBottom: 5,
        marginLeft: 40,
        marginRight: 40,
    },
    scrollView: {
        display: 'flex',
        flexDirection: 'row',
    },
    titulo_historico: {
        fontSize: 18,
        marginTop: 20,
        marginLeft: 25,
    },
    histDiv: {
        height: 370,
    },
    separador: {
        marginVertical: 10,
        borderBottomColor: "#2d3168",
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginLeft: 20,
        marginRight: 20,
    },
    histRegistro: {
        fontSize: 10,
        alignSelf: "flex-start",
        marginTop: 5,
        marginLeft: 20,
    },
    histCompleto: {
        alignSelf: "center",
        marginRight: 20,
        marginTop: 40,
        fontWeight: "bold",
        textDecorationLine: 'underline',
    },
});