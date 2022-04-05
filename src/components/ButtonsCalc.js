import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from '../theme/Apptheme';

export const ButtonsCalc = ({
  action,
  text,
  color = '#2D2D2D',
  ancho = false,
}) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.Btncolor,
            color: color === '#9b9b9b' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
