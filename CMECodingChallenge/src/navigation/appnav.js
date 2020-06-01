import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FirstPage from '../screens/FirstPage';
import SecondPage from '../screens/SecondPage';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
        initialRouteName="FirstPage" 
        tabBarPosition='top'
        style={{height:500}}
    >
      <Tab.Screen name="First Page" component={FirstPage} />
      <Tab.Screen name="Second Page" component={SecondPage} />
    </Tab.Navigator>
  );
}
