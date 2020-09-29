import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

import {MULI_BOLD, WHITE_COLOR, MULI_REGULAR} from '../assets/styles';
import {Label} from './';
import Game1Image from '../assets/images/Rick.png';

export const GameCard = ({title, image, description, marginBottom}) => {
  let imgUrl = null;
  if (image === 1){
    imgUrl = Game1Image;
  } else {
    imgUrl = Game1Image;
  }

  return (
    <View
      style={{
        ...styles.container,
        marginBottom: marginBottom ? marginBottom : 0,
        justifyContent: 'center',
      }}>
      <Image source={imgUrl} />
      <Label text={title} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontFamily: MULI_BOLD,
    marginBottom: 11,
  },
  image: {
    height: 251,
    width: '100%',
    borderRadius: 20,
    marginBottom: 28,
  },
  description: {
    width: '100%',
    fontFamily: MULI_REGULAR,
    fontSize: 18,
    lineHeight: 23,
    color: WHITE_COLOR,
  },
});
