import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {Button} from '../../components';
import {
  BACKGROUND_COLOR,
  WHITE_COLOR,
  LIGHT_YELLOW_COLOR,
  DARK_FONT_COLOR,
  MULI_BLACK,
  MULI_REGULAR,
} from '../../assets/styles';

import RedFlower from '../../assets/images/Rick.png';
import GreenFlower from '../../assets/images/Rick2.png';

import {navigate} from '../../utils/RootNavigation';

const GameOneInstructions = ({onNextStageHandler, stage}) => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Instructions</Text>
      </View>
      <View style={styles.instructionWrapper}>
        <View style={styles.indicationWrapper('45%')}>
          <Text style={styles.indicationText}>
            {`When you ${
              stage === 'prueba invertida' ? 'do not ' : ''
            }see${'\n'}this image`}
          </Text>
          <Image source={RedFlower} />
        </View>
        <View style={styles.indicationWrapper('35%')}>
          <Text style={styles.indicationText}> touch the screen</Text>
          {/* <Button
            onPress={() => null}
            text="Botón"
            backgroundColor={BACKGROUND_COLOR}
            fontColor={WHITE_COLOR}
          /> */}
        </View>
      </View>
      <Button
        onPress={onNextStageHandler}
        text={'start'}
        icon="arrow-right"
        iconPosition="right"
        backgroundColor={LIGHT_YELLOW_COLOR}
        fontColor={DARK_FONT_COLOR}
        marginForText={65}
      />
      <View style={styles.buttons} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: WHITE_COLOR,
    width: '100%',
    height: '100%',
    paddingHorizontal: 79,
    paddingVertical: 80,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerText: {
    color: BACKGROUND_COLOR,
    fontFamily: MULI_BLACK,
    fontSize: 48,
  },
  instructionWrapper: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 71,
  },
  indicationWrapper: width => ({
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  indicationText: {
    fontFamily: MULI_REGULAR,
    fontSize: 18,
  },
});

export default GameOneInstructions;
