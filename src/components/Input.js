import React from 'react';

import {TextInput, View, StyleSheet} from 'react-native';
import {WHITE_COLOR, LIGHT_BLUE_COLOR, MULI_REGULAR} from '../assets/styles';
import {Label} from './';

export const Input = ({
  labelText,
  keyboardType,
  onChange,
  value,
  placeholder,
  marginBottom,
  secureTextEntry,
}) => {
  return (
    <View
      style={{
        marginBottom: marginBottom ? marginBottom : 0,
      }}>
      <Label text={labelText} />
      <TextInput
        placeholderTextColor={WHITE_COLOR}
        autoCorrect={secureTextEntry ? false : true}
        autoCapitalize={
          secureTextEntry || keyboardType === 'email-address'
            ? 'none'
            : 'sentences'
        }
        keyboardType={keyboardType ? keyboardType : 'default'}
        style={styles.input}
        onChange={text => {
          onChange(text.nativeEvent.text);
        }}
        secureTextEntry={secureTextEntry ? true : false}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: LIGHT_BLUE_COLOR,
    fontFamily: MULI_REGULAR,
    fontSize: 18,
    color: WHITE_COLOR,
    paddingHorizontal: 30,
    paddingVertical: 17,
    height: 58,
    width: 350,
  },
});

export default Input;
