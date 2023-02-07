import React from 'react';
import { View ,Text } from 'react-native';
import StyleGeral from '../../styles/styles';

// import { Container } from './styles';

export default function TextoUpper(props){
  return  <Text style={[StyleGeral.textMd, StyleGeral.textUpper]}>{props.texto}</Text>;
}
