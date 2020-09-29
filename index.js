import {AppRegistry, StatusBar} from 'react-native';
import React from 'react';

import './src/config/ReactotronConfig';
import {name as appName} from './app.json';

/* Redux */
import {Provider} from 'react-redux';
import configureStore from './src/redux';

import Navigator from './src/navigator';

const store = configureStore();

const myAppWithStore = () => (
  <Provider store={store}>
    <StatusBar hidden={true} />
    <Navigator />
  </Provider>
);

AppRegistry.registerComponent(appName, () => myAppWithStore);

console.disableYellowBox = true;
