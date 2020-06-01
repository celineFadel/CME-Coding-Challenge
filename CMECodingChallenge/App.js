// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/appnav';
import NavigationBar from 'react-native-navbar';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationBar />
      <AppNavigator />
    </NavigationContainer>
  );
}