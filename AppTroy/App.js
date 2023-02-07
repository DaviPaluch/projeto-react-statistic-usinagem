//App zerado
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Comparar from './src/pages/Comparar/compare'
import Resultado from './src/pages/Resultado/Graph'
import Historico from './src/pages/Historico';
import Login from './src/pages/Login';
import Inicio from './src/pages/Inicio';
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';
import CompararVelocidade from './src/pages/comparar-velocidade';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fonteCarregada] = useFonts ({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <View>
      <Text style={styles.carregando}>Carregando...</Text>
    </View>
}
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Comparar">
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Historico" component={Historico} options={{headerShown:false}}/>
        <Stack.Screen name="Comparar" component={Comparar} options={{headerShown:false}}/>
        <Stack.Screen name="Inicio" component={Inicio} options={{headerShown:false}}/>
        <Stack.Screen name="CompVelocidade" component={CompararVelocidade} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  carregando: {
    lineHeight: 80,
    margin: 150,
    marginTop: 350,
  }
});
  