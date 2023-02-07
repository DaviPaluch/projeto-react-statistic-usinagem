import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import StyleGeral from '../../styles/styles';

const DATA = [
    {
        id: 1,
        title: 'Título1',
        date: '04-10-2022'
    },
    {
        id: 2,
        title: 'Título2',
        date: '05-10-2022'
    },
    {
        id: 3,
        title: 'Título3',
        date: '06-10-2022'
    },
    {
        id: 4,
        title: 'Título4',
        date: '07-10-2022'
    },
    {
        id: 5,
        title: 'Título5',
        date: '08-10-2022'
    },
    {
        id: 6,
        title: 'Título6',
        date: '08-10-2022'
    },
    {
        id: 7,
        title: 'Título7',
        date: '10-10-2022'
    },
    {
        id: 8,
        title: 'Título8',
        date: '11-10-2022'
    },
    {
        id: 9,
        title: 'Título9',
        date: '12-10-2022'
    },
    {
        id: 10,
        title: 'Título10',
        date: '13-10-2022'
    },
    {
        id: 11,
        title: 'Título11',
        date: '14-10-2022'
    },
    {
        id: 12,
        title: 'Título12',
        date: '15-10-2022'
    },
];

const Item = ({ title, date }) => (
    <View style={[styles.item, styles.shadowProp]}>
        <View style={styles.divTitle}>
            <Text style={StyleGeral.textMd}>{title}</Text>
        </View>
        <View>
            <View style={styles.div}>
                <Text style={[StyleGeral.textSm, StyleGeral.textEnd]}>{date}</Text>
            </View>
            <View><Text style={StyleGeral.textXs}>Ver mais detalhes</Text></View>
        </View>
    </View>
);

export default function FlatHitorico(props) {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA} /*alterar para a variável junto com setDados*/
                renderItem={({ item }) => (
                    <Item title={item.title} date={item.date} />
                )}
                keyExtractor={item => item.id}
                scrollEnabled={props.scrollEnabled}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:20
    },
    item: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    shadowProp: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    div: {
        padding: 5,
        paddingBottom: 10
    },
    divTitle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center"
    },
});