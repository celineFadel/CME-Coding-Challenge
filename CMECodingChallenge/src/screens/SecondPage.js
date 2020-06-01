import React from 'react';
import { AsyncStorage, Image, ScrollView, StyleSheet, View } from 'react-native';
import { createStore } from 'redux';
import Square from '../library/square';
import Circle from '../library/circle';

export default class FirstPage extends React.Component {
  state = {
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          <Square sign={"-"} />
          <Circle />
          <Square sign={"+"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
      height: '100%',
      width: '100%',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  mainContainer: {
    marginTop: '40%',
    height: 150,
    width:'100%'
  }
});