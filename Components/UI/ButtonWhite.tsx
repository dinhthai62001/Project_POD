import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import COLOR from '../../constants/COLOR';

const Button = props => {
  return (
    <View style={{...styles.button, ...props.style}}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    width: 385,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    borderColor:COLOR.blue_5,
    borderWidth:1
  },
});

export default Button;
