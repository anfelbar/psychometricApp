import React from 'react';
import {StyleSheet, Modal, View, TouchableHighlight, Text} from 'react-native';
import {
  BACKGROUND_COLOR,
  LIGHT_YELLOW_COLOR,
  DARK_FONT_COLOR,
  MULI_BOLD,
  MULI_REGULAR,
  WHITE_COLOR,
} from '../assets/styles';

export const ErrorModal = ({state, message, onDismiss}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={state}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={modalStyles.centeredView}>
        <View style={modalStyles.modalView}>
          <Text style={modalStyles.modalText}>{message}</Text>
          <TouchableHighlight
            style={modalStyles.closeButton}
            onPress={() => {
              onDismiss(!state);
            }}>
            <Text style={modalStyles.textStyle}>Entendido</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: LIGHT_YELLOW_COLOR,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: DARK_FONT_COLOR,
    fontFamily: MULI_BOLD,
    textAlign: 'center',
  },
  modalText: {
    fontFamily: MULI_REGULAR,
    fontSize: 18,
    color: WHITE_COLOR,
    marginBottom: 15,
    textAlign: 'center',
  },
});
