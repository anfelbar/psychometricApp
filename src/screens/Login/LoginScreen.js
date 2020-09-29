import React, {useState} from 'react';

import {StyleSheet, View, Platform, KeyboardAvoidingView} from 'react-native';

import {Header, Button, Input, ErrorModal} from '../../components';

import {
  BACKGROUND_COLOR,
  DARK_FONT_COLOR,
  LIGHT_YELLOW_COLOR,
} from '../../assets/styles';

const LoginScreen = props => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const onPressLoginButton = () => {
    if (checkForm()) props.checkUser(email, password);
  };

  const checkForm = () => {
    const generateSentence = field => `Input ${field}.`;

    if (!email.length) {
      setModalMessage(generateSentence('Email'));
      setModalVisible(true);
      return false;
    }
    if (!password.length) {
      setModalMessage(generateSentence('Password'));
      setModalVisible(true);
      return false;
    }

    return true;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <ErrorModal
        state={modalVisible}
        message={modalMessage}
        onDismiss={setModalVisible}
      />
      <View style={styles.screenContainer}>
        <View style={styles.header}>
          <Header title="Bienvenido" subtitle=" " />
        </View>
        <View style={styles.form}>
          <Input
            keyboardType="email-address"
            onChange={onChangeEmail}
            value={email}
            placeholder="Email"
            marginBottom={32}
          />
          <Input
            secureTextEntry={true}
            onChange={onChangePassword}
            value={password}
            placeholder="Password"
            marginBottom={52}
          />
          <Button
            onPress={onPressLoginButton}
            text="Login"
            icon="arrow-right"
            iconPosition="right"
            backgroundColor={LIGHT_YELLOW_COLOR}
            fontColor={DARK_FONT_COLOR}
            marginBottom={23}
            marginForText={132}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
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
  form: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default LoginScreen;
