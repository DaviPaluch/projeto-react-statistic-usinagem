import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
import Input from '../../components/Forms/input';
import Title from "../../components/Title/title";
import StyleGeral from '../../styles/styles';

import { Checkbox } from 'react-native-paper';
import BtnPadrao from '../../components/Buttons/btnPadrao';

export default function Login({ navigation }) {
  const [checked, setChecked] = React.useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [text, setTexto] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Title titulo="Olá!"></Title>
      <Text style={[StyleGeral.textMd, styles.subtitle]}>Bem-vindo de volta, você fez falta!</Text>
      <View style={styles.formGroup}>

        <Input placeholder="Nome/Email" cor="#EAEAEA" hasIcon={false} campo="Nome de usuário ou Email" onChangeText={text => setUsuario(text)}></Input>
        <Input placeholder="Senha" cor="#EAEAEA" campo="Senha" secureTextEntry hasIcon={true} icon="eye" onChangeText={text => setSenha(text)}></Input>

        <Text>{text}</Text>
        <View style={styles.row}>
          <View style={styles.formChk}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => { setChecked(!checked); }}
              color='#676998'
            ></Checkbox>
            <Text>Lembrar credenciais</Text>
          </View>
          <View>
            <Text>Esqueceu sua senha?</Text>
          </View>
        </View>
        <View>
          <BtnPadrao nome='Entrar' onPress={() => {            
            if (usuario == 'Amanda' && senha == '1234' ) {
              navigation.push('Inicio', { usuario: usuario, passUsuario: senha });
            } else {
              setTexto('Usuário ou senha incorretos');
            }
          }}></BtnPadrao>
        </View>
      </View>
      <View>
        <Image source={require('../../../assets/iconTroy.png')} />
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 80,
    backgroundColor: '#fff',
    flex: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subtitle: {
    width: 180,
    textAlign: 'center'
  },
  formGroup: {
    marginVertical: 50,
    width: '85%',
    marginBottom: 100
  },
  formChk: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})