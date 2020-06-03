import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from '../navigation/Routes';

class reactTutorialApp extends Component {
   render() {
      return (
         <Routes navigation={this.props.navigation} />
      )
   }
}
export default reactTutorialApp
AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)