import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStore } from 'redux';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
        return state + 1
    case 'DECREMENT':
        return state - 1
    default:
        return state
    }
};
const store = createStore(counter);

export default class FirstPage extends React.Component {
  state = {
    counter: 0
  };
  
  render() {
    onPressMinus = () => {
      let currentCount = store.getState();
      if(currentCount<=0) {
        currentCount = 0;
      }
      else {
        store.dispatch({ type: 'DECREMENT' });
        store.subscribe(() => this.setState(counter));
      }
    };

    onPressPlus = () => {
      store.dispatch({ type: 'INCREMENT' });
      store.subscribe(() => this.setState(counter));
    };

    return (
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>

          {/* The decrement button */}
          <TouchableOpacity style={styles.square} onPress={onPressMinus}>
            <Text>-</Text>
          </TouchableOpacity>

          {/* The current number */}
          <View style={styles.circle}>
            <Text>{store.getState()}</Text>
          </View>

          {/* The increment button */}
          <TouchableOpacity style={styles.square} onPress={onPressPlus}>
            <Text>+</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  };
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
  },
  square: {
    height: 75,
    width: 75,
    borderColor: 'black',
    borderWidth: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2%'
  },
  circle: {
    height: 125,
    width: 125,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 125/2,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2%'
  }
});