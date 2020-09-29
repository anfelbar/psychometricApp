import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-feather1s';

import {MULI_BOLD} from '../assets/styles';
const ICONS_SIZE = 20;

export const Button = ({
  onPress,
  text,
  icon,
  iconPosition,
  backgroundColor,
  fontColor,
  marginBottom,
  marginForText,
}) => {
  const calculateMarginRight = position => {
    if (position === 'left') {
      return {marginLeft: marginForText};
    } else {
      return {marginRight: marginForText};
    }
  };
  return (
    <TouchableOpacity
      style={{
        ...styles.buttonContainer,
        backgroundColor,
        marginBottom: marginBottom ? marginBottom : 0,
      }}
      onPress={onPress}>
      {iconPosition === 'left' && (
        <Icon name={icon} size={ICONS_SIZE} color={fontColor} thin={false} />
      )}
      <Text
        style={{
          ...styles.buttonText,
          color: fontColor,
          ...calculateMarginRight(iconPosition),
        }}>
        {text}
      </Text>
      {iconPosition === 'right' && (
        <Icon name={icon} size={ICONS_SIZE} color={fontColor} thin={false} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 350,
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: MULI_BOLD,
  },
});

export default Button;
