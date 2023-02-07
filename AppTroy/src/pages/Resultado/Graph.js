import React from 'react'
import { StyleSheet, Styles, View,Text, ScrollView } from "react-native";
import { ProgressCircle } from 'react-native-svg-charts'

export default function Graph() {
    const data = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.4, 0.6, 0.8]
      };

return(
<View>
  <ProgressCircle style={{ height: 200, width: 200 }} progress={0.7} strokeWidth={20} progressColor={'rgba(255, 145, 20, 100)'}/>
  <Text style={{transform:[{translateX:72},{translateY:-130}], fontSize:50}}>80</Text>
</View>
);
}