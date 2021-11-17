import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

const Button = props => {
  return (
    <View style={{...styles.button, ...props.style}}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    width: 385,
    backgroundColor: '#2190CD',
    borderRadius: 25,
  },
});

export default Button;
