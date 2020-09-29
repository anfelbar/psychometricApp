import * as React from 'react';
import {StackActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function paila(name) {
  navigationRef.current?.navigate('Menu', null);
}

export function push(...args) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}

export function goBack() {
  console.log('Navigation ref is ', JSON.stringify(navigationRef));
  navigationRef.current?.goBack();
}

// add other navigation functions that you need and export them
