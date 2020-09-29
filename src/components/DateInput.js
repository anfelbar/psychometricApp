import React from 'react';
import {StyleSheet, View} from 'react-native';

import DatePicker from 'react-native-datepicker';

import {WHITE_COLOR, LIGHT_BLUE_COLOR, MULI_REGULAR} from '../assets/styles';
import {Label} from './';

export const DateInput = ({
  labelText,
  onDateChange,
  date,
  placeholder,
  marginBottom,
}) => {
  return (
    <View
      style={{
        marginBottom: marginBottom ? marginBottom : 0,
      }}>
      <Label text={labelText} />
      <DatePicker
        style={{
          width: styles.dateInput.width,
          marginTop: 11,
        }}
        date={date}
        mode="date"
        placeholder={placeholder}
        format="YYYY-MM-DD"
        minDate="2000-01-01"
        maxDate="2020-01-01"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        customStyles={{
          dateIcon: {
            display: 'none',
          },
          dateInput: styles.dateInput,
          dateText: styles.dateInputText,
          placeholderText: styles.dateInputText,
        }}
        onDateChange={onDateChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dateInput: {
    marginLeft: 0,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: LIGHT_BLUE_COLOR,
    height: 58,
    paddingHorizontal: 30,
    paddingVertical: 17,
    width: 350,
    alignItems: 'flex-start',
  },
  dateInputText: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontFamily: MULI_REGULAR,
  },
});

export default DateInput;
