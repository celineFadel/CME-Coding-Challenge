import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FirstPage from '../screens/FirstPage';
import Details from '../screens/Details';

const Routes = () => (
   <Router showNavigationBar={false}>
      <Scene key = "root" >
         <Scene key = "FirstPage" component = {FirstPage} initial = {true} hideNavBar = {true} />
         <Scene key = "Details" component = {Details} />
      </Scene>
   </Router>
);
export default Routes;
