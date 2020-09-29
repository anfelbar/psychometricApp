import React from 'react';

import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {WHITE_COLOR, DARK_FONT_COLOR, MULI_BOLD} from '../assets/styles';

export const MenuButton = ({image, onPress, text, marginBottom}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.buttonContainer,
        marginBottom: marginBottom ? marginBottom : 0,
      }}
      onPress={onPress}>
      <Image style={styles.buttonImage} source={image} />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    borderRadius: 17,
    height: 128,
    width: 450,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    paddingVertical: 13,
    paddingHorizontal: 6,
  },
  buttonImage: {
    height: 103,
    width: 189,
    marginRight: 22,
  },
  buttonText: {
    color: DARK_FONT_COLOR,
    fontFamily: MULI_BOLD,
    fontSize: 20,
  },
});

export default MenuButton;
