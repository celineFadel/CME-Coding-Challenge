// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/appnav';
import NavigationBar from 'react-native-navbar';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './src/reducers';

const store = createStore(reducers);

console.disableYellowBox = true;

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationBar />
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
