import React from 'react';
import {View, Text} from 'react-native';
import {ButtonsCalc} from '../components/ButtonsCalc';
import { useCalculator } from '../hooks/useCalculator';

import {styles} from '../theme/Apptheme';

export const Calculatorscreen = () => {


const {
    currentValue,
    clean,
    numeroAnterior,
    buildNumber,
    negativeAndPositive,
    btnBelete,
    cambiarNumeroPorAnterior,
    btnRestar,
    btnMultiplicar,
    btnSumar,
    btnDividir,
    calcular,

} = useCalculator()

  return (
    <View style={styles.calculateHorizontal}>
      {
        (
          numeroAnterior !== "0") && (
          <Text style={styles.resultTiny}>{numeroAnterior}</Text>
        )
      }

      <Text 
        style={styles.result}
        numberOfLines={ 1 }
        adjustsFontSizeToFit
      >
          {currentValue}
      </Text>

      <View style={styles.fila}>
        <ButtonsCalc text="C" color="#9b9b9b"  action={clean}/>
        <ButtonsCalc text="+/-" color="#9b9b9b" action={negativeAndPositive}/> 
        <ButtonsCalc text="del" color="#9b9b9b"  action={btnBelete}/>
        <ButtonsCalc text="/" color="#ff9427"  action={btnDividir}/>
      </View>

      <View style={styles.fila}>
        <ButtonsCalc text="7"  action={buildNumber}/>
        <ButtonsCalc text="8"  action={buildNumber}/>
        <ButtonsCalc text="9"  action={buildNumber}/>
        <ButtonsCalc text="X" color="#ff9427"  action={btnMultiplicar}/>
      </View>

      <View style={styles.fila}>
        <ButtonsCalc text="4"  action={buildNumber}/>
        <ButtonsCalc text="5"  action={buildNumber}/>
        <ButtonsCalc text="6"  action={buildNumber}/>
        <ButtonsCalc text="-" color="#ff9427"  action={btnRestar}/>
      </View>

      <View style={styles.fila}>
        <ButtonsCalc text="1"  action={buildNumber}/>
        <ButtonsCalc text="2"  action={buildNumber}/>
        <ButtonsCalc text="3"  action={buildNumber}/>
        <ButtonsCalc text="+" color="#ff9427"  action={btnSumar}/>
      </View>

      <View style={styles.fila}>
        <ButtonsCalc text="0"  action={buildNumber}/>
        <ButtonsCalc text="."  action={buildNumber}/>
        <ButtonsCalc text="=" color="#ff9427"  ancho action={calcular}/>
      </View>
    </View>
  );
};
