import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-paper';

import Title from '../../components/Title/title';
import TextoUpper from '../../components/Texto/upper';
import BtnPadrao from '../../components/Buttons/btnPadrao';

import StyleGeral from '../../styles/styles';
import Input from '../../components/Forms/input';

export default function BotShtHistorico({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("Hoje");

    return (
        <View style={styles.bottomNavigationView}>
            <View style={{ flex: 1, width: '100%', flexDirection: 'column' }}>
                <Title titulo='Filtrar'></Title>

                <View style={styles.groupBottomSheet}>
                    <View style={styles.pickerBottomSheet}>
                        <View style={{ borderBottomWidth: 0.5 }}>
                            <Picker
                                selectedValue={selectedValue}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Hoje" value="1" />
                                <Picker.Item label="Últimos 15 dias" value="15" />
                                <Picker.Item label="Neste Mês" value="30" />
                            </Picker>
                        </View>
                    </View>

                    {/*Ferramenta*/}
                    <View style={[styles.row, StyleGeral.mVert10]}>
                        <TextoUpper texto="Tipo de ferramenta"></TextoUpper>
                    </View>
                    <View style={[styles.pickerCardBottomSheet, styles.shadowProp]} >
                        <View>
                            <Picker
                                selectedValue={selectedValue}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="BROCAS" value="1" />
                                <Picker.Item label="Tipo 2" value="15" />
                                <Picker.Item label="Tipo 3" value="30" />
                            </Picker>
                        </View>
                    </View>

                    {/*Fixação*/}
                    <View style={[styles.row, StyleGeral.mVert10]}>
                        <TextoUpper texto="Tipo de fixação"></TextoUpper>
                    </View>
                    <View style={[styles.pickerCardBottomSheet, styles.shadowProp]} >
                        <View>
                            <Picker
                                selectedValue={selectedValue}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="FIXAÇÃO" value="1" />
                                <Picker.Item label="Fixação 2" value="15" />
                                <Picker.Item label="Fixação 3" value="30" />
                            </Picker>
                        </View>
                    </View>

                    {/*empresa*/}

                    <View style={[styles.formGroup, StyleGeral.mVert10]}>
                        <Input placeholder="Nome da Empresa" cor="#FFF" hasIcon={false} campo="Empresa"></Input>
                    </View>

                    <View style={styles.div}>
                        <BtnPadrao nome="Filtrar"/>
                    </View>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        width: '100%',
    },
    bottomNavigationView: {
        width: '100%',
        height: '75%',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#fff',
    },
    groupBottomSheet: {
        paddingHorizontal: 30,
        alignItems: 'center'
    },
    pickerBottomSheet: {
        width: '50%',
        marginBottom: 20
    },
    pickerCardBottomSheet: {
        width: '100%',
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 16,
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
        justifyContent: 'center',
    },
    formGroup: {
        width: '100%',
    },
})
