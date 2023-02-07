import React from "react";
import { StyleSheet, Styles, View, ScrollView } from "react-native";
import Title from "../components/Title/title";
import Form from "../components/Forms/form";
import FormTroy from "../components/Forms/formTroy";
import MiniTitle from "../components/Title/miniTitle";
import BtnPadrao from "../components/Buttons/btnPadrao";

export default function Option() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Title titulo='Tipo de Corte'></Title>
        </View>
        <View>
          <BtnPadrao nome="Torneamento"></BtnPadrao>
        </View>
        <View>
          <BtnPadrao nome="Furação"></BtnPadrao>
        </View>
        <View>
          <BtnPadrao nome="Fresamento"></BtnPadrao>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    display: 'flex',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  container2: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  }
}
)