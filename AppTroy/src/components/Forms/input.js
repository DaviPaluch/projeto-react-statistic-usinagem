import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

// import { Container } from './styles';
export default function Input(props) {
  const [sec, setSec] = useState(props.secureTextEntry)

    return (
        <View>
            <Text style={styles.formText}>{props.campo}</Text>

            <View style={styles.formInput}>
                <TextInput style={{backgroundColor:props.cor}}
                    right={<TextInput.Icon icon={props.icon} disabled={!props.hasIcon} onPress={() => setSec(!sec)} />}
                    {...props}
                    secureTextEntry={sec}
                />             
            </View>
        </View>
    )
}

  const styles = StyleSheet.create({
      formText: {
          marginVertical: 5
      },
      formInput: {
          marginBottom: 30
      },
  });

