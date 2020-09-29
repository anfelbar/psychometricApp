import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Button} from '../../components';
import {
  BACKGROUND_COLOR,
  WHITE_COLOR,
  LIGHT_YELLOW_COLOR,
  DARK_FONT_COLOR,
  MULI_BLACK,
} from '../../assets/styles';

// import {navigate} from '../../utils/RootNavigation';

const SessionFinishedScreen = props => {
  const atras = function atras() {
    props.navigation.navigate('GamesMenu');
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>¡Muy bien!{'\n'}Juego terminado</Text>
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={atras}
          text="Regresar al menú de juegos"
          icon="arrow-left"
          iconPosition="left"
          backgroundColor={LIGHT_YELLOW_COLOR}
          fontColor={DARK_FONT_COLOR}
          marginForText={34}
        />
        {/* <Button
          onPress={() => navigate('GameOne')}
          text="Intentar nuevamente"
          icon="repeat"
          iconPosition="left"
          backgroundColor={LIGHT_YELLOW_COLOR}
          fontColor={DARK_FONT_COLOR}
          marginForText={26}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: BACKGROUND_COLOR,
    width: '100%',
    height: '100%',
    paddingHorizontal: 79,
    paddingVertical: 80,
  },
  header: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    color: WHITE_COLOR,
    fontFamily: MULI_BLACK,
    fontSize: 48,
  },
  buttons: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default SessionFinishedScreen;
