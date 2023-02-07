import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import StyleGeral from '../../styles/styles';
import BtnPadrao from '../Buttons/btnPadrao';
import Form from '../Forms/form';
import FormTroy from '../Forms/formTroy';
import MiniTitle from '../Title/miniTitle';

const DATA = [
    {
        id: 1,
        title: 'Nome do fabricante',
    },
    {
        id: 2,
        title: 'Fixação',
    },
    {
        id: 3,
        title: 'Código da ferramenta',
    },
    {
        id: 4,
        title: 'Tipo de Corte',
    },
    {
        id: 5,
        title: 'Código de inserto',
    },
    {
        id: 6,
        title: 'Classe',
    },
    {
        id: 7,
        title: 'Quantidade de arestas',
    },
    {
        id: 8,
        title: 'Refrigeração',
    },
    {
        id: 9,
        title: 'Título9',
    },
    {
        id: 10,
        title: 'Título10',
    },
    {
        id: 11,
        title: 'Título11',
    },
    {
        id: 12,
        title: 'Título12',
    },
];

const Item = ({ title }) => (
    <View style={[styles.item]}>
        <View style={styles.divTitle}>
            <MiniTitle titulo={title}></MiniTitle>
        </View>
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.div}>
                <Form place='Fabricante'></Form>
            </View>
            <View style={styles.div}>
                <FormTroy place='Ferramentas Troy'></FormTroy>
            </View>
        </View>
    </View>
);

export default function FlatComparar(props) {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA} /*alterar para a variável junto com setDados*/
                renderItem={({ item }) => (
                    <Item title={item.title} />
                )}
                keyExtractor={item => item.id}
                scrollEnabled={props.scrollEnabled}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '100%',
        height:'100%'
    },
    item: {
        paddingVertical: 5,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    div: {
        padding: 5,
        marginTop: 10,
    },
    divTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center"
    },
});