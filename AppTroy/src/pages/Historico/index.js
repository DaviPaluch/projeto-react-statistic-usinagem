import React, { useState } from 'react';
import { View, StyleSheet, Button, ScrollView, Text } from 'react-native';
import { IconButton, Chip } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomSheet } from 'react-native-btr';


import Title from '../../components/Title/title';
import FlatHitorico from '../../components/Flatlist/flatHistorico';

import BotShtHistorico from './bottomSheet';
import BtnPadrao from '../../components/Buttons/btnPadrao';

export default function Historico() {
    const [selectedValue, setSelectedValue] = useState("Hoje");

    const [visible, setVisible] = useState(false);

    const toggleBottomNavigationView = () => {
        //Toggling the visibility state of the bottom sheet
        setVisible(!visible);
    };


    return (

        <View style={styles.divContainer}>
            <Title titulo="Histórico"></Title>
            <View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={{ borderBottomWidth: 0.5 }}>
                            <Picker
                                selectedValue={selectedValue}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Hoje" value="1" />
                                <Picker.Item label="Últimos 15 dias" value="15" />
                                <Picker.Item label="Neste Mês" value="30" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={{ alignItems: 'flex-end' }}>
                            <IconButton
                                icon="filter-variant"
                                size={20}
                                style={styles.btnFilter}

                                onPress={toggleBottomNavigationView} />
                        </View>
                    </View>
                </View>
                <View style={[styles.row, styles.rowChip]}>
                    <Chip style={styles.chip}
                        icon={() => (<Icon name="close" size={16} color="#fff" />)}
                        selectedColor='#fff'>
                        Brocas
                    </Chip>
                    <Chip style={styles.chip}
                        icon={() => (<Icon name="close" size={16} color="#fff" />)}
                        selectedColor='#fff'>
                        Fixação
                    </Chip>

                </View>
            </View>
            <View style={styles.div}>
                <FlatHitorico></FlatHitorico>
            </View>


            <BottomSheet
                visible={visible}
                //setting the visibility state of the bottom shee
                onBackButtonPress={toggleBottomNavigationView}
                //Toggling the visibility state on the click of the back botton
                onBackdropPress={toggleBottomNavigationView}
            //Toggling the visibility state on the clicking out side of the sheet
            >
                {/*Bottom Sheet inner View*/}

                <BotShtHistorico />
            </BottomSheet>

        </View>

    )
}

const styles = StyleSheet.create({
    divContainer: {
        backgroundColor: '#fff',
        flex: 1
    },
    row: {
        flexDirection: 'row',
        width: '100%',
    },
    column: {
        width: '50%',
        paddingHorizontal: 20

    },
    rowChip: {
        paddingHorizontal: 20
    },
    chip: {
        marginTop: 20,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        backgroundColor: '#676998',
    },
    picker: {
        borderColor: '#fff'
    },
    btnFilter: {
        borderWidth: 1,
        borderRadius: 5,
    },
    div: {
        height: '75%',
        paddingBottom: 10
    },
})
