import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Title from "../../components/Title/title";
import BtnPadrao from "../../components/Buttons/btnPadrao";
import FlatComparar from '../../components/Flatlist/flatComparar';
import { Picker } from '@react-native-picker/picker';
import MiniTitle from '../../components/Title/miniTitle';
import Form from '../../components/Forms/form';
import FormTroy from '../../components/Forms/formTroy';

export default function Comparar({ navigation }) {


  const [selectedValue, setSelectedValue] = useState("Hoje");

  /*Troca de dados entre tela*/
  const [nomeFab, setNomeFab] = useState('');
  const [fixacaoFab, setFixacaoFab] = useState('');
  const [fixacaoTroy, setFixacaoTroy] = useState('');
  const [codFab, setCodFab] = useState('');
  const [codTroy, setCodTroy] = useState('');
  const [angPosiFab, setAngPosiFab] = useState('');
  const [angPosiTroy, setAngPosiTroy] = useState('');
  const [codInsFab, setCodInsFab] = useState('');
  const [codInsTroy, setCodInsTroy] = useState('');
  const [classeFab, setClasseFab] = useState('');
  const [classeTroy, setClasseTroy] = useState('');
  const [qtdAresFab, setQtdAresFab] = useState('');
  const [qtdAresTroy, setQtdAresTroy] = useState('');
  const [refriFab, setRefriFab] = useState('');
  const [refriTroy, setRefriTroy] = useState('');
  const [diaPecaFab, setDiaPecaFab] = useState('');
  const [diaPecaTroy, setDiaPecaTroy] = useState('');
  const [diaUsinaFab, setDiaUsiFab] = useState('');
  const [diaUsinaTroy, setDiaUsiTroy] = useState('');
  const [presRefriFab, setPresRefriFab] = useState('');
  const [presRefriTroy, setPresRefriTroy] = useState('');
  const [rotFab, setRotFab] = useState('');
  const [rotTroy, setRotTroy] = useState('');
  const [profCorteFab, setProfCorteFab] = useState('');
  const [profCorteTroy, setProfCorteTroy] = useState('');
  const [compCorteFab, setCompCorteFab] = useState('');
  const [compCorteTroy, setCompCorteTroy] = useState('');
  const [compPecaFab, setCompPecaFab] = useState('');
  const [compPecaTroy, setCompPecaTroy] = useState('');
  const [numPassadasFab, setNumPassadasFab] = useState('');
  const [numPassadasTroy, setNumPassadasTroy] = useState('');
  const [rendPcsAresFab, setRendPcsAresFab] = useState('');
  const [rendPcsAresTroy, setRendPcsAresTroy] = useState('');
  const [tmpAtvCorAresFab, setTmpAtvCorAresFab] = useState('');
  const [tmpAtvCorAresTroy, setTmpAtvCorAresTroy] = useState('');
  const [rotEixoprincipalTroy, setRotEixoprincipalTroy] = useState();
  const [rotEixoprincipalFab, setRotEixoprincipalFab] = useState();
  const [compUsiminTroy, setcompUsiminTroy] = useState('');
  const [compUsiminFab, setcompUsiminFab] = useState('');
  const dadosTroy = {
    fixacao: fixacaoTroy,
    codigo: codTroy,
    angPosicao: angPosiTroy,
    codInserto: codInsTroy,
    classe: classeTroy,
    qtdAresta: qtdAresTroy,
    diamPeca: diaPecaTroy,
    diamUsinado: diaUsinaTroy,
    refrigeracao: refriTroy,
    presRefri: presRefriTroy,
    rotacoes: rotTroy,
    profCorte: profCorteTroy,
    compCorte: compCorteTroy,
    compPeca: compPecaTroy,
    numPassadas: numPassadasTroy,
    rendPcsArestas: rendPcsAresTroy,
    tmpAtvCorAresta: tmpAtvCorAresTroy,
    roteixopricipal: rotEixoprincipalTroy,
    compusimin: compUsiminTroy
  }

  const dadosFabricante = {
    nome: nomeFab,
    fixacao: fixacaoFab,
    codigo: codFab,
    angPosicao: angPosiFab,
    codInserto: codInsFab,
    classe: classeFab,
    qtdAresta: qtdAresFab,
    diamPeca: diaPecaFab,
    diamUsinado: diaUsinaFab,
    refrigeracao: refriFab,
    presRefri: presRefriFab,
    rotacoes: rotFab,
    profCorte: profCorteFab,
    compCorte: compCorteFab,
    compPeca: compPecaFab,
    numPassadas: numPassadasFab,
    rendPcsArestas: rendPcsAresFab,
    tmpAtvCorAresta: tmpAtvCorAresFab,
    roteixopricipal: rotEixoprincipalFab,
    compusimin: compUsiminFab
  }

  return (
    <View style={styles.container}>
      <Title titulo='Comparar'></Title>
      <View style={styles.div}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginBottom: 40 }}>
            <View style={{ borderBottomWidth: 0.5 }}>
              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Nome da peça1" value="1" />
                <Picker.Item label="Nome da peça2" value="2" />
                <Picker.Item label="Nome da peça3" value="3" />
              </Picker>
            </View>
          </View>

          {/*NOME FABRICANTE*/}
          <View>
            <MiniTitle titulo='Nome do fabricante'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={nomeFab => setNomeFab(nomeFab)}></Form>
            <FormTroy value='Ferramentas Troy'></FormTroy>
          </View>
          {/*FIXAÇÃO*/}
          <View>
            <MiniTitle titulo='Fixação'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={fixFab => setFixacaoFab(fixFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={fixTroy => setFixacaoTroy(fixTroy)}></FormTroy>
          </View>
          {/*COMPRIMENTO DA PECA*/}
          <View>
            <MiniTitle titulo='Comprimento da peça*'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={compPecaFab => setCompPecaFab(compPecaFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={compPecaTroy => setCompPecaTroy(compPecaTroy)}></FormTroy>
          </View>
          {/*ROTAÇAO DO EIXO PRINCIPAL*/}
          <View>
            <MiniTitle titulo='Rotação do Eixo Principal*'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={rotEixoprincipalFab => setRotEixoprincipalFab(rotEixoprincipalFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={rotEixoprincipalTroy => setRotEixoprincipalTroy(rotEixoprincipalTroy)}></FormTroy>
          </View>
          {/*COMPRIMENTO USINADO POR MINUTO*/}
          <View>
            <MiniTitle titulo='Comprimento Usinado por Minuto*'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={compUsiminFab => setcompUsiminFab(compUsiminFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={compUsiminTroy => setcompUsiminTroy(compUsiminTroy)}></FormTroy>
          </View>
          {/*DIÂMETRO DA PEÇA*/}
          <View>
            <MiniTitle titulo='Diâmetro da Peça*'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={diaPecaFab => setDiaPecaFab(diaPecaFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={diaPecaTroy => setDiaPecaTroy(diaPecaTroy)}></FormTroy>
          </View>
          {/*DIÂMETRO USINADO*/}
          <View>
            <MiniTitle titulo='Diâmetro Unsinado*'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={diaUsiFab => setDiaUsiFab(diaUsiFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={diaUsiTroy => setDiaUsiTroy(diaUsiTroy)}></FormTroy>
          </View>
          {/*COMPRIMENTO DE CORTE*/}
          <View>
            <MiniTitle titulo='Comprimento de corte'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={compCorteFab => setCompCorteFab(compCorteFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={compCorteTroy => setCompCorteTroy(compCorteTroy)}></FormTroy>
          </View>
          {/*CÓDIGO DA FERRAMENTA*/}
          <View>
            <MiniTitle titulo='Código da ferramenta'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={codFab => setCodFab(codFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={codTroy => setCodTroy(codTroy)}></FormTroy>
          </View>
          {/*ANGULO DE POSIÇÃO*/}
          <View>
            <MiniTitle titulo='Angulo de posição'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={angPosiFab => setAngPosiFab(angPosiFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={angPosiTroy => setAngPosiTroy(angPosiTroy)}></FormTroy>
          </View>
          {/*CÓDIGO DE INSERTO*/}
          <View>
            <MiniTitle titulo='Código de inserto'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={codInsFab => setCodInsFab(codInsFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={codInsTroy => setCodInsTroy(codInsTroy)}></FormTroy>
          </View>
          {/*CLASSE*/}
          <View>
            <MiniTitle titulo='Classe'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={classeFab => setClasseFab(classeFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={classeTroy => setClasseTroy(classeTroy)}></FormTroy>
          </View>
          {/*QUANTIDADE DE ARESTAS*/}
          <View>
            <MiniTitle titulo='Quantidade de arestas'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={qtdAresFab => setQtdAresFab(qtdAresFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={qtdAresTroy => setQtdAresTroy(qtdAresTroy)}></FormTroy>
          </View>
          {/*REFRIGERAÇÃO*/}
          <View>
            <MiniTitle titulo='Refrigeração'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={refriFab => setRefriFab(refriFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={refriTroy => setRefriTroy(refriTroy)}></FormTroy>
          </View>
          {/*PRESSÃO DA REFRIGERAÇÃO*/}
          <View>
            <MiniTitle titulo='Pressão da Refrigeração'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={presRefriFab => setPresRefriFab(presRefriFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={presRefriTroy => setPresRefriTroy(presRefriTroy)}></FormTroy>
          </View>
          {/*ROTAÇÕES*/}
          <View>
            <MiniTitle titulo='Rotações'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={rotFab => setRotFab(rotFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={rotTroy => setRotTroy(rotTroy)}></FormTroy>
          </View>
          {/*PROFUNDIDADE DE CORTE*/}
          <View>
            <MiniTitle titulo='Profundidade de corte'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={profCorteFab => setProfCorteFab(profCorteFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={profCorteTroy => setProfCorteTroy(profCorteTroy)}></FormTroy>
          </View>
          {/*NÚMERO DE PASSADAS*/}
          <View>
            <MiniTitle titulo='Número de passadas'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={numPassadasFab => setNumPassadasFab(numPassadasFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={numPassadasTroy => setNumPassadasTroy(numPassadasTroy)}></FormTroy>
          </View>
          {/*RENDIMENTO EM PEÇAS POR ARESTAS*/}
          <View>
            <MiniTitle titulo='Rendimento em peças por arestas'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={rendPcsArestasFab => setRendPcsAresFab(rendPcsArestasFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={rendPcsArestasTroy => setRendPcsAresTroy(rendPcsArestasTroy)}></FormTroy>
          </View>
          {/*TEMPO ATIVO DE CORTE POR ARESTA*/}
          <View>
            <MiniTitle titulo='Tempo ativo em corte por aresta'></MiniTitle>
          </View>
          <View style={styles.container2}>
            <Form place='Fabricante' onChangeText={tmpAtvCorAresFab => setTmpAtvCorAresFab(tmpAtvCorAresFab)}></Form>
            <FormTroy place='Ferramentas Troy' onChangeText={tmpAtvCorAresTroy => setTmpAtvCorAresTroy(tmpAtvCorAresTroy)}></FormTroy>
          </View>


          <View style={{ marginBottom: 30 }}>
            <BtnPadrao nome="Comparar agora" onPress={() => navigation.push('CompVelocidade', { dadosFab: dadosFabricante, dadosTroy: dadosTroy })}></BtnPadrao>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1
  },
  container2: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  div: {
    height: '90%',
  }
})

