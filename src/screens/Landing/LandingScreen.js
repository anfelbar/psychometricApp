import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Button} from '../../components';
import {
  BACKGROUND_COLOR,
  WHITE_COLOR,
  DARK_FONT_COLOR,
  LIGHT_GREEN_COLOR,
  LIGHT_BLUE_COLOR,
} from '../../assets/styles';

const LandingScreen = props => {
  const onPressGuestSessionButton = () => {
    props.startGuestSession();
    // props.navigation.navigate('Menu');
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Header title="" subtitle="PsychometricApp" />
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={onPressGuestSessionButton}
          text="Login as guest"
          icon="users"
          iconPosition="left"
          backgroundColor={LIGHT_BLUE_COLOR}
          fontColor={WHITE_COLOR}
          marginBottom={23}
          marginForText={20}
        />
        <Button
          onPress={() => props.navigation.navigate('Login')}
          text="Login as user"
          icon="arrow-right"
          iconPosition="right"
          backgroundColor={LIGHT_GREEN_COLOR}
          fontColor={DARK_FONT_COLOR}
          marginForText={15}
        />
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
    height: '20%',
  },
  buttons: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LandingScreen;
