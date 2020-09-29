import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {MULI_BOLD, WHITE_COLOR} from '../assets/styles';

export const Label = ({text}) => {
  return <Text style={styles.label}>{text}</Text>;
};

const styles = StyleSheet.create({
  label: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontFamily: MULI_BOLD,
    marginBottom: 11,
  },
});
