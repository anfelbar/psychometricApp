import React, {useState} from 'react';

import {StyleSheet, View} from 'react-native';

import {
  Button,
  DateInput,
  Input,
  NavigationHeader,
  ErrorModal,
} from '../../components';

import {
  BACKGROUND_COLOR,
  LIGHT_YELLOW_COLOR,
  DARK_FONT_COLOR,
} from '../../assets/styles';

const RegisterStudentScreen = props => {
  // Form inputs
  const [names, onChangeNames] = React.useState('');
  const [lastNames, onChangeLastNames] = React.useState('');
  const [code, onChangeCode] = React.useState('');
  const [date, onChangeDate] = React.useState('');
  const [institute, onChangeInstitute] = React.useState('');
  const [country, onChangeCountry] = React.useState('');
  const [city, onChangeCity] = React.useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const checkForm = () => {
    const generateSentence = field =>
      `Debes ingresar ${
        field === 'Fecha de nacimiento' ||
        field === 'Ciudad' ||
        field === 'Institución'
          ? 'la'
          : 'el'
      } ${field} del estudiante.`;

    if (!names.length) {
      setModalMessage(generateSentence('Nombre'));
      setModalVisible(true);
      return false;
    }
    if (!lastNames.length) {
      setModalMessage(generateSentence('Apellido'));
      setModalVisible(true);
      return false;
    }
    if (!code.length) {
      setModalMessage(generateSentence('Código'));
      setModalVisible(true);
      return false;
    }
    if (isNaN(code)) {
      setModalMessage('El código del estudiante debe ser númerico.');
      setModalVisible(true);
      return false;
    }
    if (!date.length) {
      setModalMessage(generateSentence('Fecha de nacimiento'));
      setModalVisible(true);
      return false;
    }
    if (!institute.length) {
      setModalMessage(generateSentence('Institución'));
      setModalVisible(true);
      return false;
    }
    if (!country.length) {
      setModalMessage(generateSentence('País'));
      setModalVisible(true);
      return false;
    }
    if (!city.length) {
      setModalMessage(generateSentence('Ciudad'));
      setModalVisible(true);
      return false;
    }
    return true;
  };

  const onPressButton = () => {
    if (checkForm()) {
      props.createStudent(
        names,
        lastNames,
        code,
        date,
        institute,
        country,
        city,
        props.user,
      );
      props.navigation.goBack();
    }
  };

  return (
    <View style={styles.screenContainer}>
      <ErrorModal
        state={modalVisible}
        message={modalMessage}
        onDismiss={setModalVisible}
      />
      <View style={styles.header}>
        <NavigationHeader
          title="Registro de estudiante"
          navigation={props.navigation}
        />
      </View>
      <View style={styles.form}>
        <Input
          labelText="Nombres"
          onChange={onChangeNames}
          value={names}
          placeholder="Primer y/o segundo nombre"
          marginBottom={15}
        />
        <Input
          labelText="Apellidos"
          onChange={onChangeLastNames}
          value={lastNames}
          placeholder="Primer y segundo apellido"
        />
        <DateInput
          labelText="Fecha de nacimiento"
          placeholder="Seleccionar fecha"
          date={date}
          onDateChange={onChangeDate}
        />
        <Input
          labelText="País"
          onChange={onChangeCountry}
          value={country}
          placeholder="Seleccionar País"
          marginBottom={15}
        />
        <Input
          labelText="Ciudad"
          onChange={onChangeCity}
          value={city}
          placeholder="Ingresar Ciudad"
        />
        <Input
          labelText="Institución"
          onChange={onChangeInstitute}
          value={institute}
          placeholder="Ingresar Institución"
          marginBottom={15}
        />
        <Input
          labelText="Código estudiante"
          keyboardType="numeric"
          onChange={onChangeCode}
          value={code}
          placeholder="Ingresar código"
        />
      </View>

      <Button
        onPress={onPressButton}
        text="Registrar estudiante"
        icon="arrow-right"
        iconPosition="right"
        backgroundColor={LIGHT_YELLOW_COLOR}
        fontColor={DARK_FONT_COLOR}
        marginForText={65}
      />
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
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '20%',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    marginBottom: 71,
  },
  formColumn: {
    height: '100%',
    justifyContent: 'space-between',
  },
  formWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default RegisterStudentScreen;
