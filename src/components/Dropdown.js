import React from 'react';
import {StyleSheet, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Label} from './';

import {WHITE_COLOR, LIGHT_BLUE_COLOR, MULI_REGULAR} from '../assets/styles';

export const Dropdown = ({
  labelText,
  onValueChange,
  placeholder,
  items,
  value,
  marginBottom,
}) => {
  const dropdownPlaceholder = {
    label: placeholder,
    value: null,
    color: 'black',
  };
  return (
    <View
      style={{
        marginBottom: marginBottom ? marginBottom : 0,
      }}>
      {labelText && <Label text={labelText} />}
      <RNPickerSelect
        placeholder={dropdownPlaceholder}
        items={items}
        onValueChange={newValue => {
          onValueChange(newValue);
        }}
        style={pickerSelectStyles}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: LIGHT_BLUE_COLOR,
    fontFamily: MULI_REGULAR,
    fontSize: 18,
    color: WHITE_COLOR,
    paddingHorizontal: 30,
    paddingVertical: 17,
    // paddingRight: 30, // to ensure the text is never behind the icon
    height: 58,
    width: 350,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {...styles.dropdown},
  inputAndroid: {...styles.dropdown},
});
