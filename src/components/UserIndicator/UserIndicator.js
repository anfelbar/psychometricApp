import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {MULI_REGULAR, WHITE_COLOR, LIGHT_BLUE_COLOR} from '../../assets/styles';

export const UserIndicator = props => {
  return (
    <View style={styles.container}>
      <View style={styles.image} />
      <Text style={styles.userName}>{props.userEmail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  image: {
    width: 32,
    height: 32,
    backgroundColor: LIGHT_BLUE_COLOR,
    borderRadius: 5,
  },
  userName: {
    marginLeft: 12,
    fontSize: 18,
    fontFamily: MULI_REGULAR,
    color: WHITE_COLOR,
  },
});

export default UserIndicator;
