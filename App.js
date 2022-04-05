import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Calculatorscreen } from './src/Screens/CalculatorScreen';


import { styles } from './src/theme/Apptheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar 
        backgroundColor="black"
        barStyle='light-content'

      />
      <Calculatorscreen/>
    </SafeAreaView>
  )
}

export default App;