import React, {useEffect} from 'react';

import {StyleSheet, View} from 'react-native';

import {MenuButton, Header} from '../../components';
import LoaderScreen from '../Loader';

import {BACKGROUND_COLOR} from '../../assets/styles';

const MenuScreen = props => {
  const onPressMenuButton = where => {
    props.navigation.navigate(where);
  };

  const onPressInicio = where => {
    props.logoutUser();
    props.navigation.navigate(where);
  };

  useEffect(() => {
    if (!props.isGuest && !props.studentsLoaded) {
      props.fetchAllOwnStudents(props.userEmail);
    }
  }, []);

  return props.isFetching ? (
    <LoaderScreen />
  ) : (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Header title="PsychometricApp" />
      </View>
      <View style={styles.buttons}>
        {!props.isGuest && (
          <>
            <MenuButton            
              onPress={() => onPressMenuButton('RegisterStudent')}
              text="Register student"
              marginBottom={20}
            />
            <MenuButton
              onPress={() => onPressMenuButton('StudentsList')}
              text="Student list"
              marginBottom={20}
            />
          </>
        )}
        <MenuButton
          onPress={() => onPressMenuButton('GamesMenu')}
          text="Eval student"
          marginBottom={20}
        />
        <MenuButton
          onPress={() => onPressInicio('Login2')}
          text="Exit              "
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

export default MenuScreen;
