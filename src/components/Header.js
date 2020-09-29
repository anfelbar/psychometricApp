import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {MULI_REGULAR, MULI_BLACK, WHITE_COLOR} from '../assets/styles';

export const Header = ({title, subtitle}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: WHITE_COLOR,
    fontSize: 72,
    fontFamily: MULI_BLACK,
  },
  subtitle: {
    color: WHITE_COLOR,
    fontSize: 36,
    fontFamily: MULI_REGULAR,
  },
});

export default Header;
