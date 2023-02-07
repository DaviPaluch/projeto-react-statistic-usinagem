import React from "react";
import { Text, StyleSheet } from 'react-native';

export default function Text_font({ children, style }) {
    let estilo = estilos.text_font;

    if (style?.fontWeight === "bold") {
        estilo = estilos.text_font_negrito;
    }

    return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    text_font: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
        color: "#2d3168",
    },
    text_font_negrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
        color: "#2d3168",
    }
})